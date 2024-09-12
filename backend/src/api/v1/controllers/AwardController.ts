import awardService from "../services/AwardService";

class AwardController {
  async getAwards() {
    try {
      return await awardService.getAwards();
    } catch (error) {
      throw error;
    }
  }

  async getAwardById(id: number) {
    try {
      return await awardService.getAwardById(id);
    } catch (error) {
      throw error;
    }
  }
}

const awardController = new AwardController();
export default awardController;
