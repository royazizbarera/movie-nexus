import actorService from "../services/ActorService";

class ActorController {
  async getActors() {
    try {
      return await actorService.getActors();
    } catch (error) {
      throw error;
    }
  }

  async getActorById(id: number) {
    try {
      return await actorService.getActorById(id);
    } catch (error) {
      throw error;
    }
  }
}

const actorController = new ActorController();
export default actorController;
