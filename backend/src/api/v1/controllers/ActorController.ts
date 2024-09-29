import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import actorService from "../services/ActorService";
import { Response, Request } from "express";

class ActorController {
  async getActors(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || undefined;
      const pageSize = parseInt(req.query.pageSize as string) || undefined;
      // Ambil parameter query dari request
      const { searchTerm, genres, country, sortBy, sortOrder, filters } =
        req.query;
      // Jika genres adalah string, ubah menjadi array dengan split. Jika tidak, atur sebagai array kosong.
      const genreArray = typeof genres === "string" ? genres.split(",") : [];

      const actors = await actorService.getActors({
        page: page,
        pageSize: pageSize,
        params: {
          searchTerm: searchTerm as string, // pastikan bahwa search adalah string
          genres: genreArray, // gunakan array genres yang sudah diparsing
          country: country as string, // pastikan bahwa country adalah string
          sortBy: sortBy as string, // pastikan bahwa sortBy adalah string
          sortOrder: sortOrder as "asc" | "desc", // pastikan bahwa sortOrder adalah string
          filters: filters as any[],
        },
      });
      const totalItems = await actorService.countActors();
      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Actors fetched successfully",
          data: actors,
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
      return res.json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: String(error),
          errors: error,
          version: 1.0,
        })
      );
    }
  }

  async getActorById(req: Request, res: Response) {
    try {
      return await actorService.getActorById(parseInt(req.params.id));
    } catch (error) {
      throw error;
    }
  }
}

const actorController = new ActorController();
export default actorController;
