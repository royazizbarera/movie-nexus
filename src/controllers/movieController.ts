import axios from "axios";

import { BASE_API_URL } from "../configs/constants";

axios.defaults.withCredentials = true;

class MovieController {
  getMovies = async ({
    searchTerm = "",
    page = 1,
    genre = "",
  }: {
    searchTerm?: string;
    page?: number;
    genre?: string;
  }) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/movies`, {
        params: {
          searchTerm: searchTerm,
          page: page,
          genre: genre,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getMovieById = async (id: string) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/movies/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  // get genres
  getGenres = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/genres`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getActors = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/actors`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}

const movieController = new MovieController();
export default movieController;
