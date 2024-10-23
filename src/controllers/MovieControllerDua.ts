import { BaseController } from './BaseController';
import { MovieModel } from '../models/MovieModel';
import { useAuthStore } from '../contexts/authStore'; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from '../configs/constants';

class MovieController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/movies`); // Sesuaikan base URL API untuk movies
  }

  // Mendapatkan daftar film dengan pagination
  public async getMovies(page: number = 1, searchTerm?: string, genre?: string) {
    const params = { page, searchTerm, genre };
    return this.get<MovieModel[]>('/', params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getMovieById(id: number) {
    return this.get<MovieModel>(`/${id}`);
  }

  // Menambah film baru
  public async addMovie(movie: MovieModel) {
    return this.post<MovieModel>('/', movie);
  }

  // Mengubah data film, hanya untuk admin
  public async updateMovie(id: number, movie: MovieModel) {
    const { user } = useAuthStore.getState();
    return this.put<MovieModel>(`/${id}`, movie, user!.role!.toString());
  }
  
  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteMovie(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }
}

const movieController = new MovieController();
export default movieController;
