import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import awardService from "../services/AwardService";
import { Response, Request } from "express";

class AwardController {
  async getAwards(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || undefined;
      const pageSize = parseInt(req.query.pageSize as string) || undefined;
      // Ambil parameter query dari request
      const { country, sortBy, sortOrder, filters } =
        req.query;
    try {
      const awards = await awardService.getAwards({
        page: page,
        pageSize: pageSize,
        params: {
          country: country as string, // pastikan bahwa country adalah string
          sortBy: sortBy as string, // pastikan bahwa sortBy adalah string
          sortOrder: sortOrder as "asc" | "desc", // pastikan bahwa sortOrder adalah string
          filters: filters as any[],
        },
      });
      const totalItems = await awardService.countAwards();
      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Actors fetched successfully",
          data: awards,
          version: 1.0,
          pagination: {
            page: page || 1,
            pageSize: pageSize || 1,
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / (pageSize || 1)),
          },
        })
      );
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
