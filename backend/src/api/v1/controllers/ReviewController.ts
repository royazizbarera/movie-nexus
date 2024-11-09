import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import reviewService from "../services/ReviewService";
import { Response, Request } from "express";

class ReviewController {
  /**
   * Retrieves a list of reviews based on pagination, search parameters, and filters.
   *
   * @param {Request} req - The Express request object containing query parameters.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response containing the reviews data and pagination info.
   * @throws {Error} If there is an issue fetching the reviews, an error message will be returned.
   */
  async getReviews(req: Request, res: Response): Promise<Response> {
    try {
      // TODO: Add filter by movieId
      const {
        page = "1",
        pageSize = "10",
        searchTerm = "",
        rating = "",
        userId = "",
        sortBy = "",
        sortOrder = "asc",
        movieId = "",
      } = req.query;

      const parsedPage = parseInt(page as string, 10) || 1;
      const parsedPageSize = parseInt(pageSize as string, 10) || 10;

      const [reviews, totalItems] = await reviewService.getReviews({
        page: parsedPage,
        pageSize: parsedPageSize,
        params: {
          searchTerm: searchTerm as string,
          rating: parseInt(rating as string, 10),
          userId: parseInt(userId as string, 10),
          sortBy: sortBy as string,
          sortOrder: sortOrder as "asc" | "desc",
          movieId: parseInt(movieId as string, 10),
        },
      });

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Reviews fetched successfully",
          data: reviews,
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
          message: "Failed to fetch reviews",
          errors: error instanceof Error ? error.message : String(error),
        })
      );
    }
  }

  /**
   * Retrieves unapproved reviews based on pagination, search parameters, and filters.
   *
   * @param {Request} req - The Express request object containing query parameters.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response containing the reviews data and pagination info.
   * @throws {Error} If there is an issue fetching the reviews, an error message will be returned.
   */
  async getUnapprovedReviews(req: Request, res: Response): Promise<Response> {
    try {
      const {
        page = "1",
        pageSize = "10",
        searchTerm = "",
        rating = "",
        userId = "",
        sortBy = "",
        sortOrder = "asc",
      } = req.query;

      const parsedPage = parseInt(page as string, 10) || 1;
      const parsedPageSize = parseInt(pageSize as string, 10) || 10;

      const [reviews, totalItems] = await reviewService.getReviews({
        page: parsedPage,
        pageSize: parsedPageSize,
        params: {
          searchTerm: searchTerm as string,
          rating: parseInt(rating as string, 10),
          userId: parseInt(userId as string, 10),
          sortBy: sortBy as string,
          sortOrder: sortOrder as "asc" | "desc",
          approvalStatus: false,
        },
      });

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Unapproved reviews fetched successfully",
          data: reviews,
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
          message: "Failed to fetch unapproved reviews",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }

  /**
   * Retrieves a single review by their ID.
   *
   * @param {Request} req - The Express request object containing the review ID in the route parameters.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response containing the review's data.
   * @throws {Error} If the review cannot be found or there is an issue retrieving the review, an error will be thrown.
   */
  async getReviewById(req: Request, res: Response): Promise<Response> {
    try {
      const reviewId = parseInt(req.params.id, 10);

      if (isNaN(reviewId)) {
        return res.status(HttpStatus.BAD_REQUEST).json(
          ResponseApi({
            code: HttpStatus.BAD_REQUEST,
            message: "Invalid review ID",
            version: 1.0,
          })
        );
      }

      const review = await reviewService.getReviewById(reviewId);

      if (!review) {
        return res.status(HttpStatus.NOT_FOUND).json(
          ResponseApi({
            code: HttpStatus.NOT_FOUND,
            message: "Review not found",
            version: 1.0,
          })
        );
      }

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Review fetched successfully",
          data: review,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Failed to fetch review",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }

  /**
   * Creates a new review.
   *
   * @param {Request} req - The Express request object containing the review data in the body.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response containing the newly created review's data.
   * @throws {Error} If there is an issue creating the review, an error message will be returned.
   */
  async createReview(req: Request, res: Response): Promise<Response> {
    try {
      const reviewData = req.body;

      const newReview = await reviewService.createReview(reviewData);

      return res.json(
        ResponseApi({
          code: HttpStatus.CREATED,
          message: "Review created successfully",
          data: newReview,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Failed to create review",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }

  /**
   * Updates an existing review by its ID.
   *
   * @param {Request} req - The Express request object containing the review ID in the route parameters and updated data in the body.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response containing the updated review's data.
   * @throws {Error} If there is an issue updating the review, an error message will be returned.
   */
  async updateReviewById(req: Request, res: Response): Promise<Response> {
    const reviewId = parseInt(req.params.id, 10);
    const reviewData = req.body;

    try {
      const updatedReview = await reviewService.updateReviewById(
        reviewId,
        reviewData
      );

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Review updated successfully",
          data: updatedReview,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Failed to update review",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }

  /**
   * Deletes a review by its ID.
   *
   * @param {Request} req - The Express request object containing the review ID in the route parameters.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response indicating the result of the delete operation.
   * @throws {Error} If there is an issue deleting the review, an error message will be returned.
   */
  async deleteReviewById(req: Request, res: Response): Promise<Response> {
    const reviewId = parseInt(req.params.id, 10);

    try {
      const deletedReview = await reviewService.deleteReviewById(reviewId);

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Review deleted successfully",
          data: deletedReview,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Failed to delete review",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }

  /**
   * Retrieves the total number of unapproved reviews.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object to send back the result.
   * @returns {Promise<Response>} A promise that resolves to a JSON response containing the total number of unapproved reviews.
   * @throws {Error} If there is an issue fetching the total number of unapproved reviews, an error message will be returned.
   */
  async totalUnapprovedReviews(req: Request, res: Response): Promise<Response> {
    try {
      const total = await reviewService.countReviews({
        AND: [{ approvalStatus: false }],
      });

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Unapproved reviews fetched successfully",
          data: total,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Failed to fetch unapproved reviews",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }

  // total reviews
  async totalReviews(req: Request, res: Response): Promise<Response> {
    try {
      const total = await reviewService.totalReviews();

      return res.json(
        ResponseApi({
          code: HttpStatus.OK,
          message: "Reviews fetched successfully",
          data: total,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
        ResponseApi({
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Failed to fetch reviews",
          errors: error instanceof Error ? error.message : String(error),
          version: 1.0,
        })
      );
    }
  }
}

const reviewController = new ReviewController();
export default reviewController;
