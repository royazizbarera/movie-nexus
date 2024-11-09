import countryService from "../services/CountryService";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import { Response, Request } from "express";

class CountryController {
    /**
     * Retrieves a list of countries based on pagination, search parameters, and filters.
     *
     * @param {Request} req - The Express request object containing query parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the countries data and pagination info.
     * @throws {Error} If there is an issue fetching the countries, an error message will be returned.
     */
    async getCountries(req: Request, res: Response): Promise<Response> {
        try {
            const parsedPage = parseInt(req.query.page as string) || 1;
            const parsedPageSize = parseInt(req.query.pageSize as string) || undefined;

            const {
                searchTerm = '',
                sortBy = '',
                sortOrder = 'asc',
            } = req.query;

            const [countries, totalItems] = await countryService.getCountries({
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
                    message: "Countries fetched successfully",
                    data: countries,
                    version: 1.0,
                    pagination: {
                        page: parsedPage || 1,
                        pageSize: parsedPageSize || 1,
                        totalItems: totalItems,
                        totalPages: Math.ceil(totalItems / (parsedPageSize || 1)),
                    },
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch countries",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Retrieves a single country by its code.
     *
     * @param {Request} req - The Express request object containing the country code in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the country's data.
     * @throws {Error} If the country cannot be found or there is an issue retrieving the country, an error will be thrown.
     */
    async getCountryByCode(req: Request, res: Response): Promise<Response> {
        try {
            const countryCode = req.params.code;

            if (!countryCode) {
                return res.status(HttpStatus.BAD_REQUEST).json(
                    ResponseApi({
                        code: HttpStatus.BAD_REQUEST,
                        message: "Invalid country Code",
                        version: 1.0,
                    })
                );
            }

            const country = await countryService.getCountryByCode(countryCode);

            if (!country) {
                return res.status(HttpStatus.NOT_FOUND).json(
                    ResponseApi({
                        code: HttpStatus.NOT_FOUND,
                        message: "Country not found",
                        version: 1.0,
                    })
                );
            }

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Country fetched successfully",
                    data: country,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch country",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Creates a new country.
     *
     * @param {Request} req - The Express request object containing the country data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the newly created country's data.
     * @throws {Error} If there is an issue creating the country, an error message will be returned.
     */
    async createCountry(req: Request, res: Response): Promise<Response> {
        try {
            const countryData = req.body;

            const newCountry = await countryService.createCountry(countryData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.CREATED,
                    message: "Country created successfully",
                    data: newCountry,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to create country",
                    errors: error instanceof Error ? error.message : String(error),
                    version: 1.0,
                })
            );
        }
    }

    /**
     * Updates an existing country by its code.
     *
     * @param {Request} req - The Express request object containing the country code in the route parameters and updated data in the body.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the updated country's data.
     * @throws {Error} If there is an issue updating the country, an error message will be returned.
     */
    async updateCountryByCode(req: Request, res: Response): Promise<Response> {
        const countryCode = req.params.code;
        const countryData = req.body;

        try {
            const updatedCountry = await countryService.updateCountryByCode(countryCode, countryData);

            return res.json(ResponseApi({
                code: HttpStatus.OK,
                message: "Country updated successfully",
                data: updatedCountry,
                version: 1.0,
            }));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ResponseApi({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Failed to update country",
                errors: errorMessage,
                version: 1.0,
            }));
        }
    }

    /**
     * Deletes a country by its code.
     *
     * @param {Request} req - The Express request object containing the country code in the route parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the result of the delete operation.
     * @throws {Error} If there is an issue deleting the country, an error message will be returned.
     */
    async deleteCountryByCode(req: Request, res: Response): Promise<Response> {
        const countryCode = req.params.code;

        try {
            const deletedCountry = await countryService.deleteCountryByCode(countryCode);

            return res.json(ResponseApi({
                code: HttpStatus.OK,
                message: "Country deleted successfully",
                data: deletedCountry,
                version: 1.0,
            }));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ResponseApi({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Failed to delete country",
                errors: errorMessage,
                version: 1.0,
            }));
        }
    }

    /**
     * Retrieves the total number of countries.
     *
     * @param {Request} req - The Express request object.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the total number of countries.
     * @throws {Error} If there is an issue fetching the total number of countries, an error message will be returned.
     */
    async totalCountries(req: Request, res: Response): Promise<Response> {
        try {
            const totalCountries = await countryService.totalCountries();

            return res.json(ResponseApi({
                code: HttpStatus.OK,
                message: "Total countries fetched successfully",
                data: totalCountries,
                version: 1.0,
            }));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ResponseApi({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Failed to fetch total countries",
                errors: errorMessage,
                version: 1.0,
            }));
        }
    }
}

const countryController = new CountryController();
export default countryController;