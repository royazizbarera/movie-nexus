// MovieService.ts
import { join } from "path";
import prisma from "../config/client";

class MovieService {
  // Join table
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
  // Metode untuk mendapatkan semua movie
  async getMovies() {
    try {
      // Mengambil semua data film dari database
      const movies = await prisma.movie.findMany(this.joinTable);
      return movies;
    } catch (error) {
      console.error("Error fetching movies: ", error);
      throw new Error("Could not fetch movies");
    }
  }

  // Metode untuk mendapatkan satu movie berdasarkan ID
  async getMovieById(id: number) {
    try {
      // Mengambil movie berdasarkan ID
      const movie = await prisma.movie.findUnique({
        where: {
          id: id,
        },
        ...this.joinTable,
      });

      // Jika movie tidak ditemukan, lempar error
      if (!movie) {
        throw new Error(`Movie with ID ${id} not found`);
      }

      return movie;
    } catch (error) {
      console.error(`Error fetching movie by ID ${id}: `, error);
      throw new Error(`Could not fetch movie with ID ${id}`);
    }
  }
}

const movieService = new MovieService();
export default movieService;
