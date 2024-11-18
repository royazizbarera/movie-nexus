import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class GenreService {
  /**
   * Counts the number of genres based on the provided where clause and optional genre IDs.
   * @param {object} whereClause - The conditions to filter the genres.
   * @param {any} [genresIds] - Optional array of genre IDs to filter.
   * @returns {Promise<number>} The count of genres.
   * @throws {Error} If there is an issue counting the genres.
   */
  async countGenres(whereClause: object, genresIds?: any): Promise<number> {
    try {
      if (genresIds) {
        return prisma.genre.count({
          where: {
            id: { in: genresIds },
            ...whereClause,
          },
        });
      }
      return prisma.genre.count({ where: whereClause });
    } catch (error) {
      throw new Error("Could not count genres");
    }
  }

  /**
   * Retrieves a list of genres based on pagination, search parameters, and filters.
   * @param {object} options - The options for retrieving genres.
   * @param {number} [options.page=1] - The page number for pagination.
   * @param {number} [options.pageSize=24] - The number of items per page.
   * @param {SearchParams} options.params - The search parameters and filters.
   * @returns {Promise<any[]>} A promise that resolves to an array containing the genres and total items count.
   * @throws {Error} If there is an issue fetching the genres.
   */
  async getGenres({
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
      let genres;
      let totalItems;

      if (searchTerm) {
        const searchQuery = `
                SELECT id
                FROM "Genre"
                WHERE SIMILARITY("name", $1) > 0.1
                ORDER BY SIMILARITY("name", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
        const searchResults = (await prisma.$queryRawUnsafe(
          searchQuery,
          searchTerm,
          pageSize,
          skip
        )) as any[];

        const genresIds = searchResults.map((genre) => genre.id);
        genres = await prisma.genre.findMany({
          where: {
            id: { in: genresIds },
            ...whereClause,
          },
          skip,
          take: pageSize,
        });
        totalItems = await this.countGenres(whereClause, genresIds);
      } else {
        genres = await prisma.genre.findMany({
          where: whereClause,
          orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
          skip,
          take: pageSize,
        });

        totalItems = await this.countGenres(whereClause);
      }

      return [genres, totalItems];
    } catch (error) {
      throw new Error("Error fetching genres");
    }
  }

  /**
   * Retrieves a genre by its ID.
   * @param {number} id - The ID of the genre.
   * @returns {Promise<any>} The genre data.
   * @throws {Error} If there is an issue fetching the genre.
   */
  async getGenreById(id: number): Promise<any> {
    try {
      return await prisma.genre.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(`Could not fetch genre with ID ${id}`);
    }
  }

  /**
   * Creates a new genre.
   * @param {any} genreData - The data of the genre to be created.
   * @returns {Promise<any>} The newly created genre data.
   * @throws {Error} If there is an issue creating the genre.
   */
  async createGenre(genreData: any): Promise<any> {
    try {
      const { name } = genreData;

      // cek apakah genre sudah ada
      const existingGenre = await prisma.genre.findFirst({
        where: { name },
      });

      if (existingGenre) {
        throw new Error("Genre already exists");
      }

      return await prisma.$transaction(async (prisma) => {
        const genre = await prisma.genre.create({
          data: {
            name,
          },
        });

        return prisma.genre.findUnique({
          where: { id: genre.id },
        });
      });
    } catch (error) {
      throw String(error);
    }
  }

  /**
   * Updates a genre by its ID.
   * @param {number} id - The ID of the genre to be updated.
   * @param {any} updatedData - The updated data of the genre.
   * @returns {Promise<any>} The updated genre data.
   * @throws {Error} If there is an issue updating the genre.
   */
  async updateGenreById(id: number, updatedData: any): Promise<any> {
    try {
      const dataToUpdate: any = {
        ...(updatedData.name ? { name: updatedData.name } : {}),
      };

      return await prisma.genre.update({
        where: { id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new Error(`Could not update genre with ID ${id}`);
    }
  }

  /**
   * Deletes a genre by its ID.
   * @param {number} id - The ID of the genre to be deleted.
   * @returns {Promise<{ message: string, deletedGenre: any }>} The result of the delete operation.
   * @throws {Error} If there is an issue deleting the genre.
   */
  async deleteGenreById(
    id: number
  ): Promise<{ message: string; deletedGenre: any }> {
    try {
      const deletedGenre = await prisma.$transaction(async (prisma) => {
        await prisma.movieGenres.deleteMany({ where: { genreId: id } });
        return prisma.genre.delete({ where: { id } });
      });

      return {
        message: `Genre with ID ${id} deleted successfully`,
        deletedGenre,
      };
    } catch (error) {
      throw new Error(`Could not delete genre with ID ${id}`);
    }
  }

  /**
   * Retrieves the total number of genres.
   * @returns {Promise<number>} The total number of genres.
   * @throws {Error} If there is an issue counting the genres.
   */
  async totalGenres(): Promise<number> {
    try {
      return prisma.genre.count();
    } catch (error) {
      throw new Error("Could not count genres");
    }
  }
}

const genreService = new GenreService();
export default genreService;
