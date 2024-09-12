import movieService from "../services/MovieService";

class MovieController {
  async getMovies() {
    try {
      return await movieService.getMovies();
    } catch (error) {
      throw error;
    }
  }

  async getMovieById(id: number) {
    try {
      return await movieService.getMovieById(id);
    } catch (error) {
      throw error;
    }
  }
}

const movieController = new MovieController();
export default movieController;
