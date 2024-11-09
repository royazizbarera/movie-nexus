


import { BaseController } from './BaseController';
import { DirectorModel, DirectorParamsModel } from '../models/DirectorModel';
import { useAuthStore } from '../contexts/authStore'; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from '../configs/constants';

class DirectorController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/directors`); // Sesuaikan base URL API untuk directors
  }

  // Mendapatkan daftar film dengan pagination
  public async getDirectors(directorParamsModel?: DirectorParamsModel | undefined) {
    const params = { ...directorParamsModel};
    return this.get<DirectorModel[]>('/', params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getDirectorById(id: number) {
    return this.get<DirectorModel>(`/${id}`);
  }

  // Menambah film baru
  public async addDirector(director: DirectorModel) {
    return this.post<DirectorModel>('/', director);
  }

  // Mengubah data film, hanya untuk admin
  public async updateDirector(id: number, director: DirectorModel) {
    const { user } = useAuthStore.getState();
    return this.put<DirectorModel>(`/${id}`, director, user!.role!.toString());
  }
  
  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteDirector(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }

  // Mendapatkan total directors
  public async totalDirectors() {
    return this.get<number>('/total');
  }
}

const directorController = new DirectorController();
export default directorController;
