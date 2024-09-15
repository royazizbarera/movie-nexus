// AwardService.ts
import prisma from "../config/client";

class AwardService {
  // Metode untuk mendapatkan semua award
  async getAwards() {
    try {
      // Mengambil semua data film dari database
      const awards = await prisma.award.findMany();
      return awards;
    } catch (error) {
      throw new Error("Could not fetch awards");
    }
  }

  // Metode untuk mendapatkan satu award berdasarkan ID
  async getAwardById(id: number) {
    try {
      // Mengambil award berdasarkan ID
      const award = await prisma.award.findUnique({
        where: {
          id: id,
        },
      });

      // Jika award tidak ditemukan, lempar error
      if (!award) {
        throw new Error(`Award with ID ${id} not found`);
      }

      return award;
    } catch (error) {
      throw new Error(`Could not fetch award with ID ${id}`);
    }
  }
}

const awardService = new AwardService();
export default awardService;
