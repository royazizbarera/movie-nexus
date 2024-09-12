import { movieService } from "../services/MovieService";


export const getAllMovies = async () => {
  try {
    return await movieService.getMovies();
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id: number) => {
  try {
    return await movieService.getMovieById(id);
  } catch (error) {
    throw error;
  }
};
