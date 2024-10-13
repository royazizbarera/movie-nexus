import movieService from "../services/MovieService";
import ResponseApi from "../config/ResponseApi";
import HttpStatus from "../config/constants/HttpStatus";
import {Response, Request} from "express";

class MovieController {
    async createMovie(req: Request, res: Response) {
        try {
            const movieData = req.body;
            const newMovie = await movieService.createMovie(movieData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.CREATED,
                    message: "Movie created successfully",
                    data: newMovie,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to create movie",
                    errors: error,
                    version: 1.0,
                })
            );
        }
    }

    async getMovies(req: Request, res: Response) {
        try {
            const page = Math.max(parseInt(req.query.page as string) || 1, 1);
            const pageSize = Math.min(parseInt(req.query.pageSize as string) || 20, 20); // Max 20 untuk pageSize

            const searchTerm = req.query.searchTerm as string || "";
            const genreArray = typeof req.query.genres === "string" ? req.query.genres.split(",") : [];
            const country = req.query.country as string || "";
            const sortBy = req.query.sortBy as string || "title";
            const sortOrder = (req.query.sortOrder as string)?.toLowerCase() === "desc" ? "desc" : "asc";
            const filters = Array.isArray(req.query.filters) ? req.query.filters : [];


            const [movies, totalItems] = await Promise.all([
                movieService.getMovies2({
                    page,
                    pageSize,
                    params: {
                        searchTerm,
                        genres: genreArray,
                        country,
                        sortBy,
                        sortOrder,
                        filters,
                    },
                }),
                movieService.countMovies(),
            ]);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Movies fetched successfully",
                    data: movies,
                    version: 1.0,
                    pagination: {
                        page,
                        pageSize,
                        totalItems,
                        totalPages: Math.ceil(totalItems / pageSize),
                    },
                })
            );
        } catch (error) {
            console.error("Error fetching movies:", error);
            return res.json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch movies",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }


    async getMovieById(req: Request, res: Response) {
        try {
            const movie = await movieService.getMovieById(parseInt(req.params.id));
            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Movie fetched successfully",
                    data: movie,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch movie",
                    errors: error,
                    version: 1.0,
                })
            );
        }
    }

    async updateMovieById(req: Request, res: Response) {
        try {
            const movieId = parseInt(req.params.id);
            const movieData = req.body;
            const updatedMovie = await movieService.updateMovieById(
                movieId,
                movieData
            );

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Movie updated successfully",
                    data: updatedMovie,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to update movie",
                    errors: error,
                    version: 1.0,
                })
            );
        }
    }

    async deleteMovieById(req: Request, res: Response) {
        try {
            const movieId = parseInt(req.params.id);
            const updatedMovie = await movieService.deleteMovieById(movieId);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Movie deleted successfully",
                    data: updatedMovie,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to delete movie",
                    errors: error,
                    version: 1.0,
                })
            );
        }
    }

    // async searchMovies(req: Request, res: Response) {
    //   try {
    //     // Ambil parameter query dari request
    //     const { searchTerm, genres, country, sortBy, sortOrder } = req.query;
    //     // Jika genres adalah string, ubah menjadi array dengan split. Jika tidak, atur sebagai array kosong.
    //     const genreArray = typeof genres === "string" ? genres.split(",") : [];

    //     // Memanggil controller method untuk melakukan pencarian
    //     const movies = await movieService.searchMovies({
    //       searchTerm: searchTerm as string, // pastikan bahwa search adalah string
    //       genres: genreArray, // gunakan array genres yang sudah diparsing
    //       country: country as string, // pastikan bahwa country adalah string
    //       sortBy: sortBy as string, // pastikan bahwa sortBy adalah string
    //       sortOrder: sortOrder as "asc" | "desc", // pastikan bahwa sortOrder adalah string
    //     });

    //     return res.json(
    //       ResponseApi({
    //         code: HttpStatus.OK,
    //         message: "Movie searched successfully",
    //         data: movies,
    //         version: 1.0,
    //       })
    //     );
    //   } catch (error) {
    //     // Tangani error dan kirim respons kesalahan
    //     return res.status(500).json(
    //       ResponseApi({
    //         code: HttpStatus.INTERNAL_SERVER_ERROR,
    //         message: "Failed to search movies",
    //         errors: error,
    //         version: 1.0,
    //       })
    //     );
    //   }
    // }
}

const movieController = new MovieController();
export default movieController;
