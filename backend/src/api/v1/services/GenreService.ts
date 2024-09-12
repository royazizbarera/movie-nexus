// GenreService.ts
import prisma from "../config/client";

class GenreService {
  // Metode untuk mendapatkan semua genre
  async getGenres() {
    try {
      // Mengambil semua data film dari database
      const genres = await prisma.genre.findMany();
      return genres;
    } catch (error) {
      console.error("Error fetching genres: ", error);
      throw new Error("Could not fetch genres");
    }
  }

  // Metode untuk mendapatkan satu genre berdasarkan ID
  async getGenreById(id: number) {
    try {
      // Mengambil genre berdasarkan ID
      const genre = await prisma.genre.findUnique({
        where: {
          id: id,
        },
      });

      // Jika genre tidak ditemukan, lempar error
      if (!genre) {
        throw new Error(`Genre with ID ${id} not found`);
      }

      return genre;
    } catch (error) {
      console.error(`Error fetching genre by ID ${id}: `, error);
      throw new Error(`Could not fetch genre with ID ${id}`);
    }
  }
}

const genreService = new GenreService();
export default genreService;
