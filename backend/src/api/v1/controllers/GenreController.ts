import genreService from "../services/GenreService";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import { Response, Request } from "express";

class GenreController {
    /**
     * Retrieves a list of genres based on pagination, search parameters, and filters.
     *
     * @param {Request} req - The Express request object containing query parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the genres data and pagination info.
     * @throws {Error} If there is an issue fetching the genres, an error message will be returned.
     */
    async getGenres(req: Request, res: Response): Promise<Response> {
        try {
            const parsedPage = parseInt(req.query.page as string) || 1;
            const parsedPageSize = parseInt(req.query.pageSize as string) || 24;

            const { searchTerm = '', sortBy = '', sortOrder = 'asc' } = req.query;

            const [genres, totalItems] = await genreService.getGenres({
                page: parsedPage,
                pageSize: parsedPageSize,
                params: {
                    searchTerm: searchTerm as string,
                    sortBy: sortBy as string,
                    sortOrder: sortOrder as "asc" | "desc",
                },
            });

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Genres fetched successfully",
                    data: genres,
                    version: 1.0,
                    pagination: {
                        page: parsedPage,
                        pageSize: parsedPageSize,
                        totalItems,
                        totalPages: Math.ceil(totalItems / parsedPageSize),
                    },
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch genres",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Retrieves a single genre by its ID.
     *
     * @param {Request} req - The Express request object containing the genre ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the genre's data.
     * @throws {Error} If the genre cannot be found or there is an issue retrieving the genre, an error will be thrown.
     */
    async getGenreById(req: Request, res: Response): Promise<Response> {
        try {
            const genreId = parseInt(req.params.id);

            if (isNaN(genreId)) {
                return res.status(HttpStatus.BAD_REQUEST).json(
                    ResponseApi({
                        code: HttpStatus.BAD_REQUEST,
                        message: "Invalid genre ID",
                        version: 1.0,
                    })
                );
            }

            const genre = await genreService.getGenreById(genreId);

            if (!genre) {
                return res.status(HttpStatus.NOT_FOUND).json(
                    ResponseApi({
                        code: HttpStatus.NOT_FOUND,
                        message: "Genre not found",
                        version: 1.0,
                    })
                );
            }

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Genre fetched successfully",
                    data: genre,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch genre",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Creates a new genre.
     *
     * @param {Request} req - The Express request object containing the genre data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the newly created genre's data.
     * @throws {Error} If there is an issue creating the genre, an error message will be returned.
     */
    async createGenre(req: Request, res: Response): Promise<Response> {
        try {
            const genreData = req.body;

            const newGenre = await genreService.createGenre(genreData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.CREATED,
                    message: "Genre created successfully",
                    data: newGenre,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to create genre",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Updates an existing genre by its ID.
     *
     * @param {Request} req - The Express request object containing the genre ID in the route parameters and updated data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the updated genre's data.
     * @throws {Error} If there is an issue updating the genre, an error message will be returned.
     */
    async updateGenreById(req: Request, res: Response): Promise<Response> {
        const genreId = parseInt(req.params.id);
        const genreData = req.body;

        try {
            const updatedGenre = await genreService.updateGenreById(genreId, genreData);

            return res.json(ResponseApi({
                code: HttpStatus.OK,
                message: "Genre updated successfully",
                data: updatedGenre,
                version: 1.0,
            }));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ResponseApi({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Failed to update genre",
                errors: errorMessage,
                version: 1.0,
            }));
        }
    }

    /**
     * Deletes a genre by its ID.
     *
     * @param {Request} req - The Express request object containing the genre ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the result of the delete operation.
     * @throws {Error} If there is an issue deleting the genre, an error message will be returned.
     */
    async deleteGenreById(req: Request, res: Response): Promise<Response> {
        const genreId = parseInt(req.params.id);

        try {
            const deletedGenre = await genreService.deleteGenreById(genreId);

            return res.json(ResponseApi({
                code: HttpStatus.OK,
                message: "Genre deleted successfully",
                data: deletedGenre,
                version: 1.0,
            }));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ResponseApi({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Failed to delete genre",
                errors: errorMessage,
                version: 1.0,
            }));
        }
    }

    /**
     * Retrieves the total number of genres.
     *
     * @param {Request} req - The Express request object.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the total number of genres.
     * @throws {Error} If there is an issue fetching the total number of genres, an error message will be returned.
     */
    async totalGenres(req: Request, res: Response): Promise<Response> {
        try {
            const totalGenres = await genreService.totalGenres();

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Total genres fetched successfully",
                    data: totalGenres,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch total genres",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }
}

const genreController = new GenreController();
export default genreController;