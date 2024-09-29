import countryService from "../services/CountryService";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import { Response, Request } from "express";

class CountryController {
  async getCountries(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || undefined;
      const pageSize = parseInt(req.query.pageSize as string) || undefined;
      // Ambil parameter query dari request
      const { genres, sortBy, sortOrder, filters } =
        req.query;
      // Jika genres adalah string, ubah menjadi array dengan split. Jika tidak, atur sebagai array kosong.

      const countries = await countryService.getCountries({
        page: page,
        pageSize: pageSize,
        params: {
          sortBy: sortBy as string, // pastikan bahwa sortBy adalah string
          sortOrder: sortOrder as "asc" | "desc", // pastikan bahwa sortOrder adalah string
          filters: filters as any[],
        },
      });
      const totalItems = await countryService.countCountries();
      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Countries fetched successfully",
          data: countries,
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

  async getCountryById(id: string) {
    try {
      return await countryService.getCountryById(id);
    } catch (error) {
      throw error;
    }
  }
}

const countryController = new CountryController();
export default countryController;
