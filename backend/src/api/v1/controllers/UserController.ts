import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import userService from "../services/UserService";
import { Response, Request } from "express";

class UserController {
    /**
     * Retrieves a list of users based on pagination, search parameters, and filters.
     *
     * @param {Request} req - The Express request object containing query parameters.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response containing the users data and pagination info.
     * @throws {Error} If there is an issue fetching the users, an error message will be returned.
     */
    async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const {
                page = "1",
                pageSize = "24",
                searchTerm = '',
                sortBy = '',
                sortOrder = 'asc',
            } = req.query;

            const parsedPage = parseInt(page as string, 10) || 1;
            const parsedPageSize = parseInt(pageSize as string, 10) || 24;

            const [users, totalItems] = await userService.getUsers({
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
                    message: "Users fetched successfully",
                    data: users,
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
                    message: "Failed to fetch users",
                    errors: error instanceof Error ? error.message : String(error),
                })
            );
        }
    }

    /**
     * Suspends a user based on the provided user ID.
     * @param {Request} req - The Express request object containing the user ID.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the user was suspended.
     * @throws {Error} If there is an issue suspending the user, an error message will be returned.
     */
    async suspendUser(req: Request, res: Response): Promise<Response> {
        try {
            const {userId} = req.params;
            await userService.suspendUser(parseInt(userId, 10));

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "User suspended successfully",
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: String(error),
                    errors: String(error),
                })
            );
        }
    }

    /**
     * Unsuspends a user based on the provided user ID.
     * @param {Request} req - The Express request object containing the user ID.
     * @param {Response} res - The Express response object to send back the result.
     * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the user was unsuspended.
     * @throws {Error} If there is an issue unsuspending the user, an error message will be returned.
     */
    async unsuspendUser(req: Request, res: Response): Promise<Response> {
        try {
            const {userId} = req.params;
            await userService.unsuspendUser(parseInt(userId, 10));

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "User unsuspended successfully",
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to unsuspend user",
                    errors: error instanceof Error ? error.message : String(error),
                })
            );
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const {userId} = req.params;
            await userService.deleteUser(parseInt(userId, 10));

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "User deleted successfully",
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to delete user",
                    errors: error instanceof Error ? error.message : String(error),
                })
            );
        }
    }

    // update user
    async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const {userId} = req.params;
            const userData = req.body;
            await userService.updateUser(parseInt(userId, 10), userData);

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "User updated successfully",
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to update user",
                    errors: error instanceof Error ? error.message : String(error),
                })
            );
        }
    }

    // get total users
    async totalUsers(req: Request, res: Response): Promise<Response> {
        try {
            const totalUsers = await userService.totalUsers();

            return res.json(
                ResponseApi({
                    code: HttpStatus.OK,
                    message: "Total users fetched successfully",
                    data: totalUsers,
                    version: 1.0,
                })
            );
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
                ResponseApi({
                    code: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: "Failed to fetch total users",
                    errors: error instanceof Error ? error.message : String(error),
                })
            );
        }
    }
}

const userController = new UserController();
export default userController;