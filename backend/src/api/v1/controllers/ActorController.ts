import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import actorService from "../services/ActorService";
import { Response, Request } from "express";

class ActorController {
    /**
     * Retrieves a list of actors based on pagination, search parameters, and filters.
     *
     * @param {Request} req - The Express request object containing query parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the actors data and pagination info.
     * @throws {Error} If there is an issue fetching the actors, an error message will be returned.
     */
    async getActors(req: Request, res: Response): Promise<Response> {
        try {
            const {
                page = "1",
                pageSize = undefined,
                searchTerm = '',
                country = '',
                sortBy = '',
                sortOrder = 'asc',
            } = req.query;

            const parsedPage = parseInt(page as string, 10) || 1;
            const parsedPageSize = parseInt(pageSize as string, 10) || undefined;

            const [actors, totalItems] = await actorService.getActors({
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
                    message: "Actors fetched successfully",
                    data: actors,
                    version: 1.0,
                    pagination: {
                        page: parsedPage,
                        pageSize: parsedPageSize,
                        totalItems,
                        totalPages: Math.ceil(totalItems / (parsedPageSize || 0)),
                    },
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch actors",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Retrieves a single actor by their ID.
     *
     * @param {Request} req - The Express request object containing the actor ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the actor's data.
     * @throws {Error} If the actor cannot be found or there is an issue retrieving the actor, an error will be thrown.
     */
    async getActorById(req: Request, res: Response): Promise<Response> {
        try {
            const actorId = parseInt(req.params.id, 10);

            if (isNaN(actorId)) {
                return res.status(HttpStatus.BAD_REQUEST).json(
                    ResponseApi({
                        code: HttpStatus.BAD_REQUEST,
                        message: "Invalid actor ID",
                        version: 1.0,
                    })
                );
            }

            const actor = await actorService.getActorById(actorId);

            if (!actor) {
                return res.status(HttpStatus.NOT_FOUND).json(
                    ResponseApi({
                        code: HttpStatus.NOT_FOUND,
                        message: "Actor not found",
                        version: 1.0,
                    })
                );
            }

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Actor fetched successfully",
                    data: actor,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch actor",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Creates a new actor.
     *
     * @param {Request} req - The Express request object containing the actor data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the newly created actor's data.
     * @throws {Error} If there is an issue creating the actor, an error message will be returned.
     */
    async createActor(req: Request, res: Response): Promise<Response> {
        try {
            const actorData = req.body;

            const newActor = await actorService.createActor(actorData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.CREATED,
                    message: "Actor created successfully",
                    data: newActor,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to create actor",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Updates an existing actor by their ID.
     *
     * @param {Request} req - The Express request object containing the actor ID in the route parameters and updated data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the updated actor's data.
     * @throws {Error} If there is an issue updating the actor, an error message will be returned.
     */
    async updateActorById(req: Request, res: Response): Promise<Response> {
        const actorId = parseInt(req.params.id, 10);
        const actorData = req.body;

        try {
            const updatedActor = await actorService.updateActorById(actorId, actorData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Actor updated successfully",
                    data: updatedActor,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to update actor",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Deletes an actor by their ID.
     *
     * @param {Request} req - The Express request object containing the actor ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the result of the delete operation.
     * @throws {Error} If there is an issue deleting the actor, an error message will be returned.
     */
    async deleteActorById(req: Request, res: Response): Promise<Response> {
        const actorId = parseInt(req.params.id, 10);

        try {
            const deletedActor = await actorService.deleteActorById(actorId);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Actor deleted successfully",
                    data: deletedActor,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to delete actor",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }
}

const actorController = new ActorController();
export default actorController;