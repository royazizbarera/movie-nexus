import axios from "axios";
import { HEADERS } from "../configs/constants";

const options = (movie_id: string) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
    headers: HEADERS,
  };
};

const getTrailerMovie = async (movie_id: string) => {
  try {
    const response = await axios.request(options(movie_id));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getTrailerMovie;
