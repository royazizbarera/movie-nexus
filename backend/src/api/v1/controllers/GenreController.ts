import genreService from "../services/GenreService";

class GenreController {
  async getGenres() {
    try {
      return await genreService.getGenres();
    } catch (error) {
      throw error;
    }
  }

  async getGenreById(id: number) {
    try {
      return await genreService.getGenreById(id);
    } catch (error) {
      throw error;
    }
  }
}

const genreController = new GenreController();
export default genreController;
