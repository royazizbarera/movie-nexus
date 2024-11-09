import { BaseController } from './BaseController';
import { AwardModel, AwardParamsModel } from '../models/AwardModel';
import { useAuthStore } from '../contexts/authStore'; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from '../configs/constants';

class AwardController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/awards`); // Sesuaikan base URL API untuk awards
  }

  // Mendapatkan daftar film dengan pagination
  public async getAwards(awardParamsModel?: AwardParamsModel | undefined) {
    const params = { ...awardParamsModel};
    return this.get<AwardModel[]>('/', params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getAwardById(id: number) {
    return this.get<AwardModel>(`/${id}`);
  }

  // Menambah film baru
  public async addAward(award: AwardModel) {
    return this.post<AwardModel>('/', {...award, id: undefined});
  }

  // Mengubah data film, hanya untuk admin
  public async updateAward(id: number, award: AwardModel) {
    const { user } = useAuthStore.getState();
    return this.put<AwardModel>(`/${id}`, award, user!.role!.toString());
  }
  
  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteAward(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }

  // Mendapatkan total awards
  public async totalAwards() {
    return this.get<number>('/total');
  }
}

const awardController = new AwardController();
export default awardController;
