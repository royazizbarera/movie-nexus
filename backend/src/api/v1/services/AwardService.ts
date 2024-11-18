import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";
import { addAwardYearFilter, addCountryFilter } from "../helpers/fieldFilter";

class AwardService {
    joinTable = {
        include: {
            country: true,
        },
    };

    /**
     * Counts the number of awards based on the provided where clause and optional award IDs.
     * @param {object} whereClause - The conditions to filter the awards.
     * @param {any} [awardsIds] - Optional array of award IDs to filter.
     * @returns {Promise<number>} The count of awards.
     * @throws {Error} If there is an issue counting the awards.
     */
    async countAwards(whereClause: object, awardsIds?: any): Promise<number> {
        try {
            if (awardsIds) {
                return prisma.award.count({
                    where: {
                        id: { in: awardsIds },
                        ...whereClause,
                    },
                });
            }
            return prisma.award.count({ where: whereClause });
        } catch (error) {
            throw new Error("Could not count awards");
        }
    }

    /**
     * Retrieves a list of awards based on pagination, search parameters, and filters.
     * @param {object} options - The options for retrieving awards.
     * @param {number} [options.page=1] - The page number for pagination.
     * @param {number} [options.pageSize=24] - The number of items per page.
     * @param {SearchParams} options.params - The search parameters and filters.
     * @returns {Promise<any[]>} A promise that resolves to an array containing the awards and total items count.
     * @throws {Error} If there is an issue fetching the awards.
     */
    async getAwards({
                        page = 1,
                        pageSize = 24,
                        params,
                    }: {
        page: number | undefined;
        pageSize: number | undefined;
        params: SearchParams;
    }): Promise<any[]> {
        const skip = (page - 1) * pageSize;
        const { searchTerm, country, year, sortBy, sortOrder } = params;
        const whereClause: any = { AND: [] };

        if (country) addCountryFilter(whereClause, country);
        if (year) addAwardYearFilter(whereClause, year);

        if (whereClause.AND.length === 0) {
            delete whereClause.AND;
        }

        try {
            let awards;
            let totalItems;

            if (searchTerm) {
                const searchQuery = `
                SELECT id
                FROM "Award"
                WHERE SIMILARITY("name", $1) > 0.1
                ORDER BY SIMILARITY("name", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
                const searchResults = await prisma.$queryRawUnsafe(searchQuery, searchTerm, pageSize, skip) as any[];

                const awardsIds = searchResults.map(award => award.id);
                awards = await prisma.award.findMany({
                    where: {
                        id: { in: awardsIds },
                        ...whereClause,
                    },
                    include: this.joinTable.include,
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countAwards(whereClause, awardsIds);
            } else {
                awards = await prisma.award.findMany({
                    where: whereClause,
                    orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
                    include: this.joinTable.include,
                    skip,
                    take: pageSize,
                });

                totalItems = await this.countAwards(whereClause);
            }

            return [awards, totalItems];
        } catch (error) {
            throw new Error("Error fetching awards");
        }
    }

    /**
     * Retrieves an award by its ID.
     * @param {number} id - The ID of the award.
     * @returns {Promise<any>} The award data.
     * @throws {Error} If there is an issue fetching the award.
     */
    async getAwardById(id: number): Promise<any> {
        try {
            return await prisma.award.findUnique({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            throw new Error(`Could not fetch award with ID ${id}`);
        }
    }

    /**
     * Creates a new award.
     * @param {any} awardData - The data of the award to be created.
     * @returns {Promise<any>} The newly created award data.
     * @throws {Error} If there is an issue creating the award.
     */
    async createAward(awardData: any): Promise<any> {
        try {
            const {
                name,
                countryCode,
                year
            } = awardData;

            return await prisma.$transaction(async (prisma) => {
                const award = await prisma.award.create({
                    data: {
                        name,
                        year: new Date(year),
                        country: { connect: { code: countryCode } }
                    },
                });

                return prisma.award.findUnique({
                    where: { id: award.id },
                    ...this.joinTable,
                });
            });
        } catch (error) {
            throw new Error("Could not create award");
        }
    }

    /**
     * Updates an award by its ID.
     * @param {number} id - The ID of the award to be updated.
     * @param {any} updatedData - The updated data of the award.
     * @returns {Promise<any>} The updated award data.
     * @throws {Error} If there is an issue updating the award.
     */
    async updateAwardById(id: number, updatedData: any): Promise<any> {
        try {
            const dataToUpdate: any = {
                ...(updatedData.name ? { name: updatedData.name } : {}),
                ...(updatedData.countryCode ? { country: { connect: { code: updatedData.countryCode } } } : {}),
                ...(updatedData.year ? { year: new Date(updatedData.year) } : {}),
            };

            return await prisma.award.update({
                where: { id },
                data: dataToUpdate,
                ...this.joinTable,
            });
        } catch (error) {
            throw new Error(`Could not update award with ID ${id}`);
        }
    }

    /**
     * Deletes an award by its ID.
     * @param {number} id - The ID of the award to be deleted.
     * @returns {Promise<{ message: string, deletedAward: any }>} The result of the delete operation.
     * @throws {Error} If there is an issue deleting the award.
     */
    async deleteAwardById(id: number): Promise<{ message: string, deletedAward: any }> {
        try {
            const deletedAward = await prisma.$transaction(async (prisma) => {
                await prisma.movieAwards.deleteMany({ where: { awardId: id } });
                return prisma.award.delete({ where: { id } });
            });

            return {
                message: `Award with ID ${id} deleted successfully`,
                deletedAward,
            };
        } catch (error) {
            throw new Error(`Could not delete award with ID ${id}`);
        }
    }

    /**
     * Retrieves a list of countries.
     * @returns {Promise<any[]>} A promise that resolves to an array containing the countries.
     * @throws {Error} If there is an issue fetching the countries.
     */
    async totalAwards(): Promise<any> {
        try {
            return prisma.award.count();
        } catch (error) {
            throw new Error("Could not fetch countries");
        }
    }
}

const awardService = new AwardService();
export default awardService;
