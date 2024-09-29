import genreService from "../services/GenreService";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import { Response, Request } from "express";
class GenreController {
  async getGenres(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || undefined;
      const pageSize = parseInt(req.query.pageSize as string) || undefined;
      // Ambil parameter query dari request
      const {sortBy, sortOrder, filters } =
        req.query;
      // Jika genres adalah string, ubah menjadi array dengan split. Jika tidak, atur sebagai array kosong.

      const genres = await genreService.getGenres({
        page: page,
        pageSize: pageSize,
        params: {
          sortBy: sortBy as string, // pastikan bahwa sortBy adalah string
          sortOrder: sortOrder as "asc" | "desc", // pastikan bahwa sortOrder adalah string
          filters: filters as any[],
        },
      });
      const totalItems = await genreService.countGenres();
      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Genres fetched successfully",
          data: genres,
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

  async getGenreById(id: number) {
    try {
      return await genreService.getGenreById(id);
    } catch (error) {
      throw error;
    }
  }
}

const genreController = new GenreController();
export default genreController;
