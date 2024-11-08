import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class CountryService {
    /**
     * Counts the number of countries based on the provided where clause and optional country codes.
     * @param {object} whereClause - The conditions to filter the countries.
     * @param {any} [countryCodes] - Optional array of country codes to filter.
     * @returns {Promise<number>} The count of countries.
     * @throws {Error} If there is an issue counting the countries.
     */
    async countCountries(whereClause: object, countryCodes?: any): Promise<number> {
        try {
            if (countryCodes) {
                return prisma.country.count({
                    where: {
                        code: { in: countryCodes },
                        ...whereClause,
                    },
                });
            }
            return prisma.country.count({ where: whereClause });
        } catch (error) {
            throw new Error("Could not count countries");
        }
    }

    /**
     * Retrieves a list of countries based on pagination, search parameters, and filters.
     * @param {object} options - The options for retrieving countries.
     * @param {number} [options.page=1] - The page number for pagination.
     * @param {number} [options.pageSize=24] - The number of items per page.
     * @param {SearchParams} options.params - The search parameters and filters.
     * @returns {Promise<any[]>} A promise that resolves to an array containing the countries and total items count.
     * @throws {Error} If there is an issue fetching the countries.
     */
    async getCountries({
                           page = 1,
                           pageSize = undefined,
                           params,
                       }: {
        page: number | undefined;
        pageSize: number | undefined;
        params: SearchParams;
    }): Promise<any[]> {
        const skip = (page - 1) * (pageSize || 0);
        const { searchTerm, sortBy, sortOrder } = params;
        const whereClause: any = { AND: [] };

        if (whereClause.AND.length === 0) {
            delete whereClause.AND;
        }

        try {
            let countries;
            let totalItems;

            if (searchTerm) {
                const searchQuery = `
                SELECT code
                FROM "Country"
                WHERE SIMILARITY("name", $1) > 0.1
                ORDER BY SIMILARITY("name", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
                const searchResults = await prisma.$queryRawUnsafe(searchQuery, searchTerm, pageSize, skip) as any[];

                const countryCodes = searchResults.map(country => country.code);
                countries = await prisma.country.findMany({
                    where: {
                        code: { in: countryCodes },
                        ...whereClause,
                    },
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countCountries(whereClause, countryCodes);
            } else {
                countries = await prisma.country.findMany({
                    where: whereClause,
                    orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countCountries(whereClause);
            }

            return [countries, totalItems];
        } catch (error) {
            throw new Error("Error fetching countries");
        }
    }

    /**
     * Retrieves a country by its code.
     * @param {string} code - The code of the country.
     * @returns {Promise<any>} The country data.
     * @throws {Error} If there is an issue fetching the country.
     */
    async getCountryByCode(code: string): Promise<any> {
        try {
            return await prisma.country.findUnique({
                where: {
                    code: code,
                },
            });
        } catch (error) {
            throw new Error(`Could not fetch country with Code ${code}`);
        }
    }

    /**
     * Creates a new country.
     * @param {any} countryData - The data of the country to be created.
     * @returns {Promise<any>} The newly created country data.
     * @throws {Error} If there is an issue creating the country.
     */
    async createCountry(countryData: any): Promise<any> {
        try {
            const { code, name } = countryData;

            if (!code || !name) {
                throw new Error("Country code and name are required");
            }

            return await prisma.$transaction(async (prisma) => {
                const country = await prisma.country.create({
                    data: {
                        code,
                        name,
                    },
                });

                return prisma.country.findUnique({
                    where: { code: country.code },
                });
            });
        } catch (error) {
            throw new Error("Could not create country");
        }
    }

    /**
     * Updates a country by its code.
     * @param {string} code - The code of the country to be updated.
     * @param {any} updatedData - The updated data of the country.
     * @returns {Promise<any>} The updated country data.
     * @throws {Error} If there is an issue updating the country.
     */
    async updateCountryByCode(code: string, updatedData: any): Promise<any> {
        try {
            const dataToUpdate: any = {
                ...(updatedData.name ? { name: updatedData.name } : {}),
            };

            return await prisma.country.update({
                where: { code },
                data: dataToUpdate,
            });
        } catch (error) {
            throw new Error(`Could not update country with Code ${code}`);
        }
    }

    /**
     * Deletes a country by its code.
     * @param {string} code - The code of the country to be deleted.
     * @returns {Promise<{ message: string, deletedCountry: any }>} The result of the delete operation.
     * @throws {Error} If there is an issue deleting the country.
     */
    async deleteCountryByCode(code: string): Promise<{ message: string, deletedCountry: any }> {
        try {
            const deletedCountry = await prisma.$transaction(async (prisma) => {
                return prisma.country.delete({ where: { code } });
            });

            return {
                message: `Country with Code ${code} deleted successfully`,
                deletedCountry,
            };
        } catch (error) {
            throw new Error(`Could not delete country with Code ${code}`);
        }
    }
}

const countryService = new CountryService();
export default countryService;
