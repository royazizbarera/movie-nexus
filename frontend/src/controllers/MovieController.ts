import { BaseController } from "./BaseController";
import { MovieParamsModel, MovieModel } from "../models/MovieModel";
import { useAuthStore } from "../contexts/authStore"; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from "../configs/constants";

class MovieController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/movies`); // Sesuaikan base URL API untuk movies
  }

  // Mendapatkan daftar film dengan pagination
  public async getMovies(
    movieFilterParamsModel?: MovieParamsModel | undefined
  ) {
    const params = { ...movieFilterParamsModel };
    return this.get<MovieModel[]>("/", params);
  }

  // get popular movies
  public async getPopularMovies() {
    return this.get<MovieModel[]>("/popular");
  }

  // get movie by username
  public async getMoviesByUser(username: string) {
    return this.get<MovieModel[]>(`/added-by/${username}`);
  }

  // get unapproved movies
  public async getUnapprovedMovies(
    movieFilterParamsModel?: MovieParamsModel | undefined
  ) {
    const params = { ...movieFilterParamsModel };
    return this.get<MovieModel[]>("/unapproved", params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getMovieById(id: number) {
    return this.get<MovieModel>(`/${id}`);
  }

  // Menambah film baru
  public async addMovie(movie: MovieModel) {
    return this.post<MovieModel>("/", {
      ...movie,
      id: undefined,
      rating: undefined,
    });
  }

  // Mengubah data film, hanya untuk admin
  public async updateMovie(id: number, movie: MovieModel) {
    const { user } = useAuthStore.getState();
    return this.put<MovieModel>(
      `/${id}`,
      { ...movie, id: undefined, addedBy: undefined },
      user!.role!.toString()
    );
  }

  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteMovie(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }

  // Menghitung total film yang belum disetujui
  public async totalUnapprovedMovies() {
    return this.get<number>("/total-unapproved-movies");
  }

  // totals
  public async totalMovies() {
    return this.get<number>("/total");
  }
}

const movieController = new MovieController();
export default movieController;
