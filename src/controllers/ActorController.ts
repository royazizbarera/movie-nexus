import { BaseController } from './BaseController';
import { ActorModel } from '../models/ActorModel';
import { useAuthStore } from '../contexts/authStore'; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from '../configs/constants';

class ActorController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/actors`); // Sesuaikan base URL API untuk actors
  }

  // Mendapatkan daftar film dengan pagination
  public async getActors(page: number = 1, searchTerm?: string, actor?: string) {
    const params = { page, searchTerm, actor };
    return this.get<ActorModel[]>('/', params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getActorById(id: number) {
    return this.get<ActorModel>(`/${id}`);
  }

  // Menambah film baru
  public async addActor(actor: ActorModel) {
    return this.post<ActorModel>('/', actor);
  }

  // Mengubah data film, hanya untuk admin
  public async updateActor(id: number, actor: ActorModel) {
    const { user } = useAuthStore.getState();
    return this.put<ActorModel>(`/${id}`, actor, user!.role!.toString());
  }
  
  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteActor(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }
}

const actorController = new ActorController();
export default actorController;
