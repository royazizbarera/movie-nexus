import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class UserService {
  /**
   * Counts the number of users based on the provided where clause and optional user IDs.
   * @param {object} whereClause - The conditions to filter the users.
   * @param {any} [userIds] - Optional array of user IDs to filter.
   * @returns {Promise<number>} The count of users.
   * @throws {Error} If there is an issue counting the users.
   */
  async countUsers(whereClause: object, userIds?: any): Promise<number> {
    try {
      if (userIds) {
        return prisma.user.count({
          where: {
            id: { in: userIds },
            ...whereClause,
          },
        });
      }
      return prisma.user.count({ where: whereClause });
    } catch (error) {
      throw new Error("Could not count users");
    }
  }

  /**
   * Retrieves a list of users based on pagination, search parameters, and filters.
   * @param {object} options - The options for retrieving users.
   * @param {number} [options.page=1] - The page number for pagination.
   * @param {number} [options.pageSize=24] - The number of items per page.
   * @param {SearchParams} options.params - The search parameters and filters.
   * @returns {Promise<any[]>} A promise that resolves to an array containing the users and total items count.
   * @throws {Error} If there is an issue fetching the users.
   */
  async getUsers({
    page = 1,
    pageSize = 24,
    params,
  }: {
    page: number | undefined;
    pageSize: number | undefined;
    params: SearchParams;
  }): Promise<any[]> {
    const skip = (page - 1) * pageSize;
    const { searchTerm, sortBy, sortOrder } = params;
    const whereClause: any = { AND: [] };

    if (whereClause.AND.length === 0) {
      delete whereClause.AND;
    }

    try {
      let users;
      let totalItems;

      if (searchTerm) {
        const searchQuery = `
                SELECT id
                FROM "User"
                WHERE SIMILARITY("name", $1) > 0.01
                ORDER BY SIMILARITY("name", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
        const searchResults = (await prisma.$queryRawUnsafe(
          searchQuery,
          searchTerm,
          pageSize,
          skip
        )) as any[];

        const userIds = searchResults.map((user) => user.id);
        users = await prisma.user.findMany({
          select: {
            id: true,
            username: true,
            photoProfile: true,
            email: true,
            role: true,
            isVerified: true,
          },
          where: {
            id: { in: userIds },
            ...whereClause,
          },
          skip,
          take: pageSize,
        });
        totalItems = await this.countUsers(whereClause, userIds);
      } else {
        users = await prisma.user.findMany({
          select: {
            id: true,
            username: true,
            photoProfile: true,
            email: true,
            role: true,
            isVerified: true,
            isSuspended: true,
          },
          where: whereClause,
          orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
          skip,
          take: pageSize,
        });
        totalItems = await this.countUsers(whereClause);
      }

      return [users, totalItems];
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }

  /**
   * Suspends a user by setting their isSuspended flag to true.
   * @param {number} userId - The ID of the user to suspend.
   * @returns {Promise<void>} A promise that resolves when the user is suspended.
   * @throws {Error} If there is an issue suspending the user.
   */
  async suspendUser(userId: number): Promise<void> {
    try {
      const user = await prisma.user.findFirst({
        where: { id: userId },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.role === "admin") {
        throw new Error("Cannot suspend an admin");
      }

      await prisma.user.update({
        where: { id: userId },
        data: { isSuspended: true },
      });
    } catch (error) {
      throw new Error("Error suspending user:" + error);
    }
  }

  /**
   * Unsuspends a user by setting their isSuspended flag to false.
   * @param {number} userId - The ID of the user to unsuspend.
   * @returns {Promise<void>} A promise that resolves when the user is unsuspended.
   * @throws {Error} If there is an issue unsuspending the user.
   */
  async unsuspendUser(userId: number): Promise<void> {
    try {
      await prisma.user.update({
        where: { id: userId },
        data: { isSuspended: false },
      });
    } catch (error) {
      throw new Error("Error unsuspending user:" + error);
    }
  }

  /**
   * Deletes a user based on the provided user ID.
   * @param {number} userId - The ID of the user to delete.
   * @returns {Promise<void>} A promise that resolves when the user is deleted.
   * @throws {Error} If there is an issue deleting the user.
   */
  async deleteUser(userId: number): Promise<void> {
    try {
      await prisma.user.delete({
        where: { id: userId },
      });
    } catch (error) {
      throw new Error("Error deleting user:" + error);
    }
  }

  /**
   * Updates a user based on the provided user ID and data.
   * @param {number} userId - The ID of the user to update.
   * @param {object} data - The data to update the user with.
   * @returns {Promise<void>} A promise that resolves when the user is updated.
   * @throws {Error} If there is an issue updating the user.
   */
  async updateUser(userId: number, data: object): Promise<void> {
    try {
      await prisma.user.update({
        where: { id: userId },
        data,
      });
    } catch (error) {
      throw new Error("Error updating user:" + error);
    }
  }

  // total users
  async totalUsers(): Promise<number> {
    try {
      return prisma.user.count();
    } catch (error) {
      throw new Error("Could not count users");
    }
  }

  
}

const userService = new UserService();
export default userService;
