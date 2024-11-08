import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";
import { addRatingFilter, addUserIdFilter } from "../helpers/fieldFilter";

class ReviewService {
  /**
   * Counts the number of reviews based on the provided where clause and optional review IDs.
   * @param {object} whereClause - The conditions to filter the reviews.
   * @param {any} [reviewIds] - Optional array of review IDs to filter.
   * @returns {Promise<number>} The count of reviews.
   * @throws {Error} If there is an issue counting the reviews.
   */
  async countReviews(whereClause: object, reviewIds?: any): Promise<number> {
    try {
      if (reviewIds) {
        return prisma.review.count({
          where: {
            id: { in: reviewIds },
            ...whereClause,
          },
        });
      }
      return prisma.review.count({ where: whereClause });
    } catch (error) {
      throw new Error("Could not count reviews");
    }
  }

  /**
   * Retrieves a list of reviews based on pagination, search parameters, and filters.
   * @param {object} options - The options for retrieving reviews.
   * @param {number} [options.page=1] - The page number for pagination.
   * @param {number} [options.pageSize=10] - The number of items per page.
   * @param {SearchParams} options.params - The search parameters and filters.
   * @returns {Promise<any[]>} A promise that resolves to an array containing the reviews and total items count.
   * @throws {Error} If there is an issue fetching the reviews.
   */
  async getReviews({
    page = 1,
    pageSize = 10,
    params,
  }: {
    page: number | undefined;
    pageSize: number | undefined;
    params: SearchParams;
  }): Promise<any[]> {
    const skip = (page - 1) * pageSize;
    const {
      searchTerm,
      rating,
      userId,
      sortBy,
      sortOrder,
      approvalStatus,
      movieId,
    } = params;
    const whereClause: any = { AND: [] };

    if (rating) addRatingFilter(whereClause, rating);
    if (userId) addUserIdFilter(whereClause, userId);
    // TODO: Refactor this
    if (movieId) {
      whereClause.AND.push({
        movieId,
      });
    }

    if (approvalStatus !== undefined) {
      whereClause.AND.push({
        approvalStatus,
      });
    } else {
      whereClause.AND.push({
        approvalStatus: true,
      });
    }

    if (whereClause.AND.length === 0) {
      delete whereClause.AND;
    }

    try {
      let reviews;
      let totalItems;

      if (searchTerm) {
        const searchQuery = `
                SELECT id
                FROM "Review"
                WHERE SIMILARITY("content", $1) > 0.2
                ORDER BY SIMILARITY("content", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
        const searchResults = (await prisma.$queryRawUnsafe(
          searchQuery,
          searchTerm,
          pageSize,
          skip
        )) as any[];

        const reviewIds = searchResults.map((review) => review.id);
        reviews = await prisma.review.findMany({
          where: {
            id: { in: reviewIds },
            ...whereClause,
          },
          skip,
          take: pageSize,
        });
        totalItems = await this.countReviews(whereClause, reviewIds);
      } else {
        reviews = await prisma.review.findMany({
          where: whereClause,
          orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
          skip,
          take: pageSize,
        });
        totalItems = await this.countReviews(whereClause);
      }

      return [reviews, totalItems];
    } catch (error) {
      throw new Error("Error fetching reviews");
    }
  }

  /**
   * Retrieves a review by its ID.
   * @param {number} id - The ID of the review.
   * @returns {Promise<any>} The review data.
   * @throws {Error} If there is an issue fetching the review.
   */
  async getReviewById(id: number): Promise<any> {
    try {
      return await prisma.review.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(`Could not fetch review with ID ${id}`);
    }
  }

  /**
   * Creates a new review.
   * @param {any} reviewData - The data of the review to be created.
   * @returns {Promise<any>} The newly created review data.
   * @throws {Error} If there is an issue creating the review.
   */
  async createReview(reviewData: any): Promise<any> {
    try {
      const { content, rating, movieId, email } = reviewData;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new Error("User not found");
      }

      let approvalStatus: boolean;

      approvalStatus = user.role == "admin";

      return await prisma.$transaction(async (prisma) => {
        const review = await prisma.review.create({
          data: {
            content,
            rating,
            approvalStatus,
            movieId,
            userId: user.id,
          },
        });

        return prisma.review.findUnique({
          where: { id: review.id },
        });
      });
    } catch (error) {
      throw new Error("Could not create review");
    }
  }

  /**
   * Updates a review by its ID.
   * @param {number} id - The ID of the review to be updated.
   * @param {any} updatedData - The updated data of the review.
   * @returns {Promise<any>} The updated review data.
   * @throws {Error} If there is an issue updating the review.
   */
  async updateReviewById(id: number, updatedData: any): Promise<any> {
    try {
      const dataToUpdate: any = {
        ...(updatedData.content ? { content: updatedData.cotent } : {}),
        ...(updatedData.rating ? { rating: updatedData.rating } : {}),
        ...(updatedData.approvalStatus !== undefined
          ? { approvalStatus: updatedData.approvalStatus }
          : {}),
      };
      return await prisma.review.update({
        where: { id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new Error(`Could not update review with ID ${id}`);
    }
  }

  /**
   * Deletes a review by its ID.
   * @param {number} id - The ID of the review to be deleted.
   * @returns {Promise<any>} The deleted review data.
   * @throws {Error} If there is an issue deleting the review.
   */
  async deleteReviewById(id: number): Promise<any> {
    try {
      return await prisma.review.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Could not delete review with ID ${id}`);
    }
  }
}

const reviewService = new ReviewService();
export default reviewService;
