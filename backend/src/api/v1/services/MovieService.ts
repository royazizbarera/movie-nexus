import { title } from "process";
import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";
import { PaginationProps } from "../config/ResponseApi";

class MovieService {
  // Join table untuk digunakan di berbagai metode
  joinTable = {
    include: {
      country: true,
      director: true,
      genres: {
        select: {
          genre: true,
        },
      },
      actors: {
        select: {
          actor: {
            include: {
              country: true,
            },
          },
        },
      },
      awards: {
        select: {
          award: true,
        },
      },
      reviews: true,
    },
  };

  // Fungsi refactor untuk movie
  refactorMovies(movies: any[]) {
    return movies
      .map((movie) => ({
        ...movie,
        genres: movie.genres
          .map((g: any) => g.genre)
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id), // Mengubah genre menjadi array string
        actors: movie.actors
          .map((a: any) => a.actor)
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id), // Mengubah actors menjadi array aktor langsung
        awards: movie.awards
          .map((a: any) => a.award)
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id), // Mengubah awards menjadi array awards langsung
      }))
      .sort((a, b) => a.id - b.id);
  }

  async countMovies() {
    try {
      return await prisma.movie.count();
    } catch (error) {
      throw new Error(" Could not count movies");
    }
  }

  // Metode untuk mendapatkan semua movie
  async getMovies({ page = 0, pageSize = 10 }: PaginationProps) {
    // Hitung nilai skip berdasarkan halaman dan limit
    const skip = (page - 1) * pageSize;

    try {
      const movies = await prisma.movie.findMany({
        ...this.joinTable,
        skip: skip,
        take: pageSize,
      });
      const refactorMovies = this.refactorMovies(movies);
      return refactorMovies;
    } catch (error) {
      // console.error("Error fetching movies: ", error);
      throw new Error("Could not fetch movies");
    }
  }

  // Metode untuk mendapatkan satu movie berdasarkan ID
  async getMovieById(id: number) {
    try {
      const movie = await prisma.movie.findUnique({
        where: {
          id: id,
        },
        ...this.joinTable,
      });

      if (!movie) {
        throw new Error(`Movie with ID ${id} not found`);
      }

      const refactorMovie = this.refactorMovies([movie])[0];
      return refactorMovie;
    } catch (error) {
      console.error(`Error fetching movie by ID ${id}: `, error);
      throw new Error(`Could not fetch movie with ID ${id}`);
    }
  }

  // Metode untuk mengupdate data movie
  async updateMovieById(id: number, updatedData: any) {
    try {
      // Update data di tabel movie
      const updatedMovie = await prisma.movie.update({
        where: {
          id: id,
        },
        data: {
          title: updatedData.title,
          synopsis: updatedData.synopsis,
          posterUrl: updatedData.posterUrl,
          releaseDate: updatedData.releaseDate,
          approvalStatus: updatedData.approvalStatus,
          rating: updatedData.rating,
          country: {
            connect: { code: updatedData.countryCode }, // Update country dengan relasi
          },
          director: {
            connect: { id: updatedData.directorId }, // Update director dengan relasi
          },
          genres: {
            deleteMany: {}, // Hapus genre lama
            create: updatedData.genres.map((genre: { id: number }) => ({
              genre: { connect: { id: genre.id } }, // Tambah genre baru dengan id saja
            })),
          },
          actors: {
            deleteMany: {}, // Hapus actors lama
            create: updatedData.actors.map((actor: { id: number }) => ({
              actor: { connect: { id: actor.id } }, // Tambah actors baru dengan id saja
            })),
          },
          awards: {
            deleteMany: {}, // Hapus awards lama
            create: updatedData.awards.map((award: { id: number }) => ({
              award: { connect: { id: award.id } }, // Tambah awards baru dengan id saja
            })),
          },
        },
        ...this.joinTable, // Mengambil data yang telah di-update beserta join tabel
      });

      // Refactor hasilnya sebelum dikirimkan ke client
      const refactorMovie = this.refactorMovies([updatedMovie])[0];
      return refactorMovie;
    } catch (error) {
      console.error(`Error updating movie with ID ${id}: `, error);
      throw new Error(`Could not update movie with ID ${id}`);
    }
  }

  // Metode untuk menghapus movie berdasarkan ID
  async deleteMovieById(id: number) {
    try {
      // Transaksi untuk memastikan operasi atomik
      const deletedMovie = await prisma.$transaction(async (prisma) => {
        // Hapus relasi dari tabel perantara
        await prisma.movieActors.deleteMany({
          where: { movieId: id },
        });

        await prisma.movieGenres.deleteMany({
          where: { movieId: id },
        });

        await prisma.movieAwards.deleteMany({
          where: { movieId: id },
        });

        // Hapus movie setelah semua relasi dihapus
        const movie = await prisma.movie.delete({
          where: {
            id: id,
          },
        });

        return movie;
      });

      return {
        message: `Movie with ID ${id} deleted successfully`,
        deletedMovie,
      };
    } catch (error) {
      console.error(`Error deleting movie with ID ${id}: `, error);
      throw new Error(`Could not delete movie with ID ${id}`);
    }
  }

  async searchMovies(params: SearchParams) {
    const { searchTerm, genres, country, sortBy, sortOrder } = params;
    const whereClause: any = {
      AND: [],
    };

    // Kondisi untuk searchTerm (pencarian di title atau synopsis)
    if (searchTerm) {
      whereClause.AND.push({
        OR: [
          { title: { contains: searchTerm, mode: "insensitive" } }, // Pencarian di title
          { synopsis: { contains: searchTerm, mode: "insensitive" } }, // Pencarian di synopsis
        ],
      });
    }

    // Kondisi untuk genres filter (lebih dari satu genre)
    if (genres && genres.length > 0) {
      whereClause.AND.push({
        genres: {
          some: {
            genre: {
              name: {
                in: genres, // Filter berdasarkan genre
              },
            },
          },
        },
      });
    }

    // Kondisi untuk filter berdasarkan country
    if (country) {
      whereClause.AND.push({
        country: {
          label: {
            contains: country,
            mode: "insensitive", // Insensitive case untuk nama negara
          },
        },
      });
    }

    // Jika tidak ada kondisi yang ditambahkan, hapus AND agar query tidak error
    if (whereClause.AND.length === 0) {
      delete whereClause.AND;
    }

    // Membuat query prisma untuk pencarian
    const movies = await prisma.movie.findMany({
      where: whereClause,
      orderBy: sortBy
        ? {
            [sortBy]: sortOrder || "asc", // Sorting berdasarkan field
          }
        : undefined,
      include: {
        genres: true, // Menyertakan genre
        country: true, // Menyertakan negara
      },
    });

    return movies;
  }
}

const movieService = new MovieService();
export default movieService;
