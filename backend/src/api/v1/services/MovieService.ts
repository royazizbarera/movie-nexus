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

  // add a new route to create a movie
  async createMovie(movieData: any) {
    try {
      // Transaction to ensure atomic operations
      const newMovie = await prisma.$transaction(async (prisma) => {
        // Create a new movie with associated relations in a transaction

        var newMovieId;
        await prisma.movie
          .create({
            data: {
              title: movieData.title,
              synopsis: movieData.synopsis,
              posterUrl: movieData.posterUrl,
              releaseDate: new Date(movieData.releaseDate),
              approvalStatus: movieData.approvalStatus,
              rating: movieData.rating,
              country: {
                connect: { code: movieData.countryCode }, // Connect to the related country
              },
              director: {
                connect: { id: movieData.directorId }, // Connect to the related director
              },
              genres: {
                create: movieData.genres.map((genreId: number) => ({
                  genre: { connect: { id: genreId } }, // Connect each genre by ID
                })),
              },
              actors: {
                create: movieData.actors.map((actorId: number) => ({
                  actor: { connect: { id: actorId } }, // Connect each actor by ID
                })),
              },
              awards: {
                create: movieData.awards.map((awardId: number) => ({
                  award: { connect: { id: awardId } }, // Connect each award by ID
                })),
              },
            },
          })
          .then((movie) => {
            newMovieId = movie.id;
          });

        // Fetch the newly created movie with all its relations
        const movieWithRelations = await prisma.movie.findUnique({
          where: {
            id: newMovieId,
          },
          ...this.joinTable, // Fetch the full movie data with relations
        });

        return movieWithRelations;
      });

      // Refactor the movie result before returning
      const refactorMovie = this.refactorMovies([newMovie])[0];
      return refactorMovie;
    } catch (error) {
      console.error(error); // Log the error for debugging
      throw new Error("Could not create movie");
    }
  }

  // Metode untuk mendapatkan semua movie
  // async getMovies({ page = undefined, pageSize = undefined }: PaginationProps) {
  //   // Hitung nilai skip berdasarkan halaman dan limit
  //   var skip = undefined;
  //   if (page && pageSize) {
  //     skip = (page - 1) * pageSize;
  //   }
  //   try {
  //     const movies = await prisma.movie.findMany({
  //       ...this.joinTable,
  //       skip: skip,
  //       take: pageSize,
  //     });
  //     const refactorMovies = this.refactorMovies(movies);
  //     return refactorMovies;
  //   } catch (error) {
  //     throw new Error("Could not fetch movies");
  //   }
  // }

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
      throw new Error(`Could not delete movie with ID ${id}`);
    }
  }

  async getMovies({
    page = undefined,
    pageSize = undefined,
    params,
  }: {
    page: number | undefined;
    pageSize: number | undefined;
    params: SearchParams;
  }) {
    // Hitung nilai skip berdasarkan halaman dan limit
    var skip = undefined;
    if (page && pageSize) {
      skip = (page - 1) * pageSize;
    }

    // Destructure parameter pencarian
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
      include: this.joinTable.include,
      skip: skip,
      take: pageSize,
    });
    console.log(movies);
    return this.refactorMovies(movies);
  }

  async getMovies2({
    page = undefined,
    pageSize = undefined,
    params,
  }: {
    page: number | undefined;
    pageSize: number | undefined;
    params: SearchParams;
  }) {
    var skip = undefined;
    if (page && pageSize) {
      skip = (page - 1) * pageSize;
    }

    const { filters, searchTerm, sortBy, sortOrder } = params;

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

    // Loop through the dynamic filters and apply conditions
    if (filters && filters.length > 0) {
      filters.forEach((filter: any) => {
        const { columnKey, operator, value } = filter;
        console.info(columnKey);
        switch (operator) {
          case "eq":
            whereClause.AND.push({ [columnKey]: { equals: value } });
            break;
          case "neq":
            whereClause.AND.push({ [columnKey]: { not: value } });
            break;
          case "gt":
            whereClause.AND.push({ [columnKey]: { gt: parseFloat(value) } });
            break;
          case "lt":
            whereClause.AND.push({ [columnKey]: { lt: parseFloat(value) } });
            break;
          case "gte":
            whereClause.AND.push({ [columnKey]: { gte: parseFloat(value) } });
            break;
          case "lte":
            whereClause.AND.push({ [columnKey]: { lte: parseFloat(value) } });
            break;
          case "contains":
            whereClause.AND.push({
              [columnKey]: { contains: value, mode: "insensitive" },
            });
            break;
          case "startsWith":
            whereClause.AND.push({
              [columnKey]: { startsWith: value, mode: "insensitive" },
            });
            break;
          case "endsWith":
            whereClause.AND.push({
              [columnKey]: { endsWith: value, mode: "insensitive" },
            });
            break;
          default:
            break;
        }
      });
      // console.info(whereClause.AND);
    }

    // If no filters applied, delete AND to prevent Prisma from erroring
    if (whereClause.AND.length === 0) {
      delete whereClause.AND;
    }

    const movies = await prisma.movie.findMany({
      where: whereClause,
      orderBy: sortBy
        ? {
            [sortBy]: sortOrder || "asc",
          }
        : undefined,
      include: this.joinTable.include,
      skip: skip,
      take: pageSize,
    });

    return this.refactorMovies(movies);
  }
}

const movieService = new MovieService();
export default movieService;
