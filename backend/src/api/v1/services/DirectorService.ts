import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";
import { addCountryFilter } from "../helpers/fieldFilter";

class DirectorService {
    joinTable = {
        include: {
            country: true,
        },
    };

    /**
     * Counts the number of directors based on the provided where clause and optional director IDs.
     * @param {object} whereClause - The conditions to filter the directors.
     * @param {any} [directorIds] - Optional array of director IDs to filter.
     * @returns {Promise<number>} The count of directors.
     * @throws {Error} If there is an issue counting the directors.
     */
    async countDirectors(whereClause: object, directorIds?: any): Promise<number> {
        try {
            if (directorIds) {
                return prisma.director.count({
                    where: {
                        id: { in: directorIds },
                        ...whereClause,
                    },
                });
            }
            return prisma.director.count({ where: whereClause });
        } catch (error) {
            throw new Error("Could not count directors");
        }
    }

    /**
     * Retrieves a list of directors based on pagination, search parameters, and filters.
     * @param {object} options - The options for retrieving directors.
     * @param {number} [options.page=1] - The page number for pagination.
     * @param {number} [options.pageSize=24] - The number of items per page.
     * @param {SearchParams} options.params - The search parameters and filters.
     * @returns {Promise<any[]>} A promise that resolves to an array containing the directors and total items count.
     * @throws {Error} If there is an issue fetching the directors.
     */
    async getDirectors({
                        page = 1,
                        pageSize = 24,
                        params,
                    }: {
        page: number | undefined;
        pageSize: number | undefined;
        params: SearchParams;
    }): Promise<any[]> {
        const skip = (page - 1) * pageSize;
        const { searchTerm, country, sortBy, sortOrder } = params;
        const whereClause: any = { AND: [] };

        if (country) addCountryFilter(whereClause, country);

        if (whereClause.AND.length === 0) {
            delete whereClause.AND;
        }

        try {
            let directors;
            let totalItems;

            if (searchTerm) {
                const searchQuery = `
                SELECT id
                FROM "Director"
                WHERE SIMILARITY("name", $1) > 0.01
                ORDER BY SIMILARITY("name", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
                const searchResults = await prisma.$queryRawUnsafe(searchQuery, searchTerm, pageSize, skip) as any[];

                const directorIds = searchResults.map(director => director.id);
                directors = await prisma.director.findMany({
                    where: {
                        id: { in: directorIds },
                        ...whereClause,
                    },
                    include: this.joinTable.include,
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countDirectors(whereClause, directorIds);
            } else {
                directors = await prisma.director.findMany({
                    where: whereClause,
                    orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
                    include: this.joinTable.include,
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countDirectors(whereClause);
            }

            return [directors, totalItems];
        } catch (error) {
            throw new Error("Error fetching directors");
        }
    }

    /**
     * Retrieves a director by its ID.
     * @param {number} id - The ID of the director.
     * @returns {Promise<any>} The director data.
     * @throws {Error} If there is an issue fetching the director.
     */
    async getDirectorById(id: number): Promise<any> {
        try {
            return await prisma.director.findUnique({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            throw new Error(`Could not fetch director with ID ${id}`);
        }
    }

    /**
     * Creates a new director.
     * @param {any} directorData - The data of the director to be created.
     * @returns {Promise<any>} The newly created director data.
     * @throws {Error} If there is an issue creating the director.
     */
    async createDirector(directorData: any): Promise<any> {
        try {
            const {
                name,
                countryCode,
                birthDate,
                photoUrl
            } = directorData;

            return await prisma.$transaction(async (prisma) => {
                const director = await prisma.director.create({
                    data: {
                        name,
                        birthDate: new Date(birthDate),
                        photoUrl,
                        country: { connect: { code: countryCode } }
                    },
                });

                return prisma.director.findUnique({
                    where: { id: director.id },
                    ...this.joinTable,
                });
            });
        } catch (error) {
            throw new Error("Could not create director");
        }
    }

    /**
     * Updates a director by its ID.
     * @param {number} id - The ID of the director to be updated.
     * @param {any} updatedData - The updated data of the director.
     * @returns {Promise<any>} The updated director data.
     * @throws {Error} If there is an issue updating the director.
     */
    async updateDirectorById(id: number, updatedData: any): Promise<any> {
        try {
            const dataToUpdate: any = {
                ...(updatedData.name ? { name: updatedData.name } : {}),
                ...(updatedData.photoUrl ? { photoUrl: updatedData.photoUrl } : {}),
                ...(updatedData.birthDate ? { birthDate: new Date(updatedData.birthDate) } : {}),
                ...(updatedData.countryCode ? { country: { connect: { code: updatedData.countryCode } } } : {})
            };

            return await prisma.director.update({
                where: { id },
                data: dataToUpdate,
                ...this.joinTable,
            });
        } catch (error) {
            throw new Error(`Could not update director with ID ${id}`);
        }
    }

    /**
     * Deletes a director by its ID.
     * @param {number} id - The ID of the director to be deleted.
     * @returns {Promise<{ message: string, deletedDirector: any }>} The result of the delete operation.
     * @throws {Error} If there is an issue deleting the director.
     */
    async deleteDirectorById(id: number): Promise<{ message: string, deletedDirector: any }> {
        try {
            const deletedDirector = await prisma.$transaction(async (prisma) => {
                await prisma.movie.updateMany({
                    where: { directorId: id },
                    data: { directorId: null },
                });
                return prisma.director.delete({ where: { id } });
            });

            return {
                message: `Director with ID ${id} deleted successfully`,
                deletedDirector,
            };
        } catch (error) {
            throw new Error(`Could not delete director with ID ${id}`);
        }
    }

    /**
     * Retrieves the total number of directors.
     * @returns {Promise<number>} The total number of directors.
     * @throws {Error} If there is an issue counting the directors.
     */
    async totalDirectors(): Promise<number> {
        try {
            return prisma.director.count();
        } catch (error) {
            throw new Error("Could not count directors");
        }
    }
}

const directorService = new DirectorService();
export default directorService;