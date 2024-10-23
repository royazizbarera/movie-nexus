import { BaseController } from './BaseController';
import { GenreModel } from '../models/GenreModel';
import { useAuthStore } from '../contexts/authStore'; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from '../configs/constants';

class GenreController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/genres`); // Sesuaikan base URL API untuk genres
  }

  // Mendapatkan daftar film dengan pagination
  public async getGenres(page: number = 1, searchTerm?: string, genre?: string) {
    const params = { page, searchTerm, genre };
    return this.get<GenreModel[]>('/', params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getGenreById(id: number) {
    return this.get<GenreModel>(`/${id}`);
  }

  // Menambah film baru
  public async addGenre(genre: GenreModel) {
    return this.post<GenreModel>('/', genre);
  }

  // Mengubah data film, hanya untuk admin
  public async updateGenre(id: number, genre: GenreModel) {
    const { user } = useAuthStore.getState();
    return this.put<GenreModel>(`/${id}`, genre, user!.role!.toString());
  }
  
  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteGenre(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }
}

const genreController = new GenreController();
export default genreController;
