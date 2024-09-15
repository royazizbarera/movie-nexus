// ActorService.ts
import prisma from "../config/client";

class ActorService {
  // Metode untuk mendapatkan semua actor
  async getActors() {
    try {
      // Mengambil semua data film dari database
      const actors = await prisma.actor.findMany({});
      return actors;
    } catch (error) {
      throw new Error("Could not fetch actors");
    }
  }

  // Metode untuk mendapatkan satu actor berdasarkan ID
  async getActorById(id: number) {
    try {
      // Mengambil actor berdasarkan ID
      const actor = await prisma.actor.findUnique({
        where: {
          id: id,
        },
      });

      // Jika actor tidak ditemukan, lempar error
      if (!actor) {
        throw new Error(`Actor with ID ${id} not found`);
      }

      return actor;
    } catch (error) {
      throw new Error(`Could not fetch actor with ID ${id}`);
    }
  }
}

const actorService = new ActorService();
export default actorService;
