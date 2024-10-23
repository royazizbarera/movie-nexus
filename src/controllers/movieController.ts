import axios from "axios";

import { BASE_API_URL } from "../configs/constants";
import { useAuthStore } from "../contexts/authStore";

axios.defaults.withCredentials = true;

class MovieController {


  private isAdmin() {
    const { user } = useAuthStore.getState();
    return user?.role === "admin";
  }


  public async getMovies({
    searchTerm,
    page,
    genre,
  }: {
    searchTerm?: string;
    page?: number;
    genre?: string;
  }) {
    try {
      // Buat object params hanya dengan nilai-nilai yang ada
      const params = {
        ...(searchTerm && { searchTerm }), // Hanya tambahkan jika ada searchTerm
        ...(page && { page }), // Hanya tambahkan jika ada page
        ...(genre && { genre }), // Hanya tambahkan jika ada genre
      };

      const response = await axios.get(`${BASE_API_URL}/movies`, { params });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error; // Opsional, jika ingin meneruskan error ke luar fungsi
    }
  }

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
