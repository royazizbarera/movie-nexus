import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import directorService from "../services/DirectorService";
import { Response, Request } from "express";

class DirectorController {
    /**
     * Retrieves a list of directors based on pagination, search parameters, and filters.
     *
     * @param {Request} req - The Express request object containing query parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the directors data and pagination info.
     * @throws {Error} If there is an issue fetching the directors, an error message will be returned.
     */
    async getDirectors(req: Request, res: Response): Promise<Response> {
        try {
            const {
                page = "1",
                pageSize = "24",
                searchTerm = '',
                country = '',
                sortBy = '',
                sortOrder = 'asc',
            } = req.query;

            const parsedPage = parseInt(page as string, 10) || 1;
            const parsedPageSize = parseInt(pageSize as string, 10) || 24;

            const [directors, totalItems] = await directorService.getDirectors({
                page: parsedPage,
                pageSize: parsedPageSize,
                params: {
                    searchTerm: searchTerm as string,
                    country: country as string,
                    sortBy: sortBy as string,
                    sortOrder: sortOrder as "asc" | "desc",
                },
            });

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Directors fetched successfully",
                    data: directors,
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
                    message: "Failed to fetch directors",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Retrieves a single director by their ID.
     *
     * @param {Request} req - The Express request object containing the director ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the director's data.
     * @throws {Error} If the director cannot be found or there is an issue retrieving the director, an error will be thrown.
     */
    async getDirectorById(req: Request, res: Response): Promise<Response> {
        try {
            const directorId = parseInt(req.params.id, 10);

            if (isNaN(directorId)) {
                return res.status(HttpStatus.BAD_REQUEST).json(
                    ResponseApi({
                        code: HttpStatus.BAD_REQUEST,
                        message: "Invalid director ID",
                        version: 1.0,
                    })
                );
            }

            const director = await directorService.getDirectorById(directorId);

            if (!director) {
                return res.status(HttpStatus.NOT_FOUND).json(
                    ResponseApi({
                        code: HttpStatus.NOT_FOUND,
                        message: "Director not found",
                        version: 1.0,
                    })
                );
            }

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Director fetched successfully",
                    data: director,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch director",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Creates a new director.
     *
     * @param {Request} req - The Express request object containing the director data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the newly created director's data.
     * @throws {Error} If there is an issue creating the director, an error message will be returned.
     */
    async createDirector(req: Request, res: Response): Promise<Response> {
        try {
            const directorData = req.body;

            const newDirector = await directorService.createDirector(directorData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.CREATED,
                    message: "Director created successfully",
                    data: newDirector,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to create director",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Updates an existing director by their ID.
     *
     * @param {Request} req - The Express request object containing the director ID in the route parameters and updated data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the updated director's data.
     * @throws {Error} If there is an issue updating the director, an error message will be returned.
     */
    async updateDirectorById(req: Request, res: Response): Promise<Response> {
        const directorId = parseInt(req.params.id, 10);
        const directorData = req.body;

        try {
            const updatedDirector = await directorService.updateDirectorById(directorId, directorData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Director updated successfully",
                    data: updatedDirector,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to update director",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Deletes a director by their ID.
     *
     * @param {Request} req - The Express request object containing the director ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the result of the delete operation.
     * @throws {Error} If there is an issue deleting the director, an error message will be returned.
     */
    async deleteDirectorById(req: Request, res: Response): Promise<Response> {
        const directorId = parseInt(req.params.id, 10);

        try {
            const deletedDirector = await directorService.deleteDirectorById(directorId);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Director deleted successfully",
                    data: deletedDirector,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to delete director",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }
}

const directorController = new DirectorController();
export default directorController;