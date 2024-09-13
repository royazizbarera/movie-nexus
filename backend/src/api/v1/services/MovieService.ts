import prisma from "../config/client";

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
    return movies.map(movie => ({
      ...movie,
      genres: movie.genres.map((g: any) => g.genre), // Mengubah genre menjadi array string
      actors: movie.actors.map((a: any) => a.actor), // Mengubah actors menjadi array aktor langsung
      awards: movie.awards.map((a: any) => a.award), // Mengubah awards menjadi array awards langsung
    })).sort((a,b) => a.id - b.id);
  }

  // Metode untuk mendapatkan semua movie
  async getMovies() {
    try {
      const movies = await prisma.movie.findMany(this.joinTable);
      const refactorMovies = this.refactorMovies(movies);
      return refactorMovies;
    } catch (error) {
      console.error("Error fetching movies: ", error);
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
  async updateMovie(id: number, updatedData: any) {
    console.error(updatedData)
    try {
      // Update data di tabel movie
      const updatedMovie = await prisma.movie.update({
        where: {
          id: id,
        },
        data: {
          title: updatedData.title,
          releaseDate: updatedData.releaseDate,
          rating: updatedData.rating,
          approvalStatus: updatedData.approvalStatus,
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
}

const movieService = new MovieService();
export default movieService;