import { BaseController } from './BaseController';
import { UserModel, UserParamsModel } from '../models/UserModel';
import { useAuthStore } from '../contexts/authStore'; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from '../configs/constants';

class UserController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/users`); // Sesuaikan base URL API untuk users
  }

  // Mendapatkan daftar film dengan pagination
  public async getUsers(userParamsModel?: UserParamsModel | undefined) {
    const params = { ...userParamsModel};
    return this.get<UserModel[]>('/', params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getUserById(id: number) {
    return this.get<UserModel>(`/${id}`);
  }

  // Menambah film baru
  public async addUser(user: UserModel) {
    return this.post<UserModel>('/', user);
  }

  // Mengubah data film, hanya untuk admin
  public async updateUser(id: number, newUser: UserModel) {
    const { user } = useAuthStore.getState();
    return this.put<UserModel>(`/${id}`, newUser, user!.role!.toString());
  }
  
  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteUser(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }

  // Menyuspend user berdasarkan ID, hanya untuk admin
  public async suspendUser(id: number) {
    const { user } = useAuthStore.getState();
    return this.put<void>(`/${id}/suspend`, null, user!.role!.toString());
  }

  // Membatalkan suspensi user berdasarkan ID, hanya untuk admin
  public async unsuspendUser(id: number) {
    const { user } = useAuthStore.getState();
    return this.put<void>(`/${id}/unsuspend`, null, user!.role!.toString());
  }

  // Mendapatkan total users
  public async totalUsers() {
    return this.get<number>('/total');
  }
}

const userController = new UserController();
export default userController;
