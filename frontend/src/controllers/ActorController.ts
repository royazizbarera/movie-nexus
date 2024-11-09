import { BaseController } from "./BaseController";
import { ActorModel, ActorParamsModel } from "../models/ActorModel";
import { useAuthStore } from "../contexts/authStore"; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from "../configs/constants";

class ActorController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/actors`); // Sesuaikan base URL API untuk actors
  }

  // Mendapatkan daftar film dengan pagination
  public async getActors(actorParamsModel?: ActorParamsModel | undefined) {
    const params = { ...actorParamsModel };
    return this.get<ActorModel[]>("/", params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getActorById(id: number) {
    return this.get<ActorModel>(`/${id}`);
  }

  // Menambah film baru
  public async addActor(actor: ActorModel) {
    return this.post<ActorModel>("/", actor);
  }

  // Mengubah data film, hanya untuk admin
  public async updateActor(id: number, actor: ActorModel) {
    const { user } = useAuthStore.getState();
    return this.put<ActorModel>(
      `/${id}`,
      { ...actor, id: undefined },
      user!.role!.toString()
    );
  }

  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteActor(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }

  // Mendapatkan total actors
  public async totalActors() {
    return this.get<number>("/total");
  }
}

const actorController = new ActorController();
export default actorController;
