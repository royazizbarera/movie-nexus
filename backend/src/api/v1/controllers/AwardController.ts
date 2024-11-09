import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import awardService from "../services/AwardService";
import { Response, Request } from "express";

class AwardController {
    /**
     * Retrieves a list of awards based on pagination, search parameters, and filters.
     *
     * @param {Request} req - The Express request object containing query parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the awards data and pagination info.
     * @throws {Error} If there is an issue fetching the awards, an error message will be returned.
     */
    async getAwards(req: Request, res: Response): Promise<Response> {
        try {
            const {
                page = "1",
                pageSize = "24",
                searchTerm = '',
                year = '',
                country = '',
                sortBy = '',
                sortOrder = 'asc',
            } = req.query;

            const parsedPage = parseInt(page as string, 10) || 1;
            const parsedPageSize = parseInt(pageSize as string, 10) || 24;

            const [awards, totalItems] = await awardService.getAwards({
                page: parsedPage,
                pageSize: parsedPageSize,
                params: {
                    searchTerm: searchTerm as string,
                    country: country as string,
                    year: parseInt(year as string) || undefined,
                    sortBy: sortBy as string,
                    sortOrder: sortOrder as "asc" | "desc",
                },
            });

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Awards fetched successfully",
                    data: awards,
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
                    message: "Failed to fetch awards",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Retrieves a single award by its ID.
     *
     * @param {Request} req - The Express request object containing the award ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the award's data.
     * @throws {Error} If the award cannot be found or there is an issue retrieving the award, an error will be thrown.
     */
    async getAwardById(req: Request, res: Response): Promise<Response> {
        try {
            const awardId = parseInt(req.params.id, 10);

            if (isNaN(awardId)) {
                return res.status(HttpStatus.BAD_REQUEST).json(
                    ResponseApi({
                        code: HttpStatus.BAD_REQUEST,
                        message: "Invalid award ID",
                        version: 1.0,
                    })
                );
            }

            const award = await awardService.getAwardById(awardId);

            if (!award) {
                return res.status(HttpStatus.NOT_FOUND).json(
                    ResponseApi({
                        code: HttpStatus.NOT_FOUND,
                        message: "Award not found",
                        version: 1.0,
                    })
                );
            }

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Award fetched successfully",
                    data: award,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch award",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Creates a new award.
     *
     * @param {Request} req - The Express request object containing the award data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the newly created award's data.
     * @throws {Error} If there is an issue creating the award, an error message will be returned.
     */
    async createAward(req: Request, res: Response): Promise<Response> {
        try {
            const awardData = req.body;

            const newAward = await awardService.createAward(awardData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.CREATED,
                    message: "Award created successfully",
                    data: newAward,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to create award",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Updates an existing award by its ID.
     *
     * @param {Request} req - The Express request object containing the award ID in the route parameters and updated data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the updated award's data.
     * @throws {Error} If there is an issue updating the award, an error message will be returned.
     */
    async updateAwardById(req: Request, res: Response): Promise<Response> {
        const awardId = parseInt(req.params.id, 10);
        const awardData = req.body;

        try {
            const updatedAward = await awardService.updateAwardById(awardId, awardData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Award updated successfully",
                    data: updatedAward,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to update award",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Deletes an award by its ID.
     *
     * @param {Request} req - The Express request object containing the award ID in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the result of the delete operation.
     * @throws {Error} If there is an issue deleting the award, an error message will be returned.
     */
    async deleteAwardById(req: Request, res: Response): Promise<Response> {
        const awardId = parseInt(req.params.id, 10);

        try {
            const deletedAward = await awardService.deleteAwardById(awardId);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Award deleted successfully",
                    data: deletedAward,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to delete award",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Retrieves a list of award categories.
     *
     * @param {Request} req - The Express request object.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the award categories.
     * @throws {Error} If there is an issue fetching the award categories, an error message will be returned.
     */
    async totalAwards(req: Request, res: Response): Promise<Response> {
        try {
            const awardCategories = await awardService.totalAwards();

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Award categories fetched successfully",
                    data: awardCategories,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch award categories",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }
}

const awardController = new AwardController();
export default awardController;