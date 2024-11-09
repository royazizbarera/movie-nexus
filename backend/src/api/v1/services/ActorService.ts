import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";
import { addCountryFilter } from "../helpers/fieldFilter";

class ActorService {
    joinTable = {
        include: {
            country: true,
        },
    };

    /**
     * Counts the number of actors based on the provided where clause and optional actor IDs.
     * @param {object} whereClause - The conditions to filter the actors.
     * @param {any} [actorIds] - Optional array of actor IDs to filter.
     * @returns {Promise<number>} The count of actors.
     * @throws {Error} If there is an issue counting the actors.
     */
    async countActors(whereClause: object, actorIds?: any): Promise<number> {
        try {
            if (actorIds) {
                return prisma.actor.count({
                    where: {
                        id: { in: actorIds },
                        ...whereClause,
                    },
                });
            }
            return prisma.actor.count({ where: whereClause });
        } catch (error) {
            throw new Error("Could not count actors");
        }
    }

    /**
     * Retrieves a list of actors based on pagination, search parameters, and filters.
     * @param {object} options - The options for retrieving actors.
     * @param {number} [options.page=1] - The page number for pagination.
     * @param {number} [options.pageSize=24] - The number of items per page.
     * @param {SearchParams} options.params - The search parameters and filters.
     * @returns {Promise<any[]>} A promise that resolves to an array containing the actors and total items count.
     * @throws {Error} If there is an issue fetching the actors.
     */
    async getActors({
                        page = 1,
                        pageSize = undefined,
                        params,
                    }: {
        page: number | undefined;
        pageSize: number | undefined;
        params: SearchParams;
    }): Promise<any[]> {
        const skip = (page - 1) * (pageSize || 0);
        const { searchTerm, country, sortBy, sortOrder } = params;
        const whereClause: any = { AND: [] };

        if (country) addCountryFilter(whereClause, country);

        if (whereClause.AND.length === 0) {
            delete whereClause.AND;
        }

        try {
            let actors;
            let totalItems;

            if (searchTerm) {
                const searchQuery = `
                SELECT id
                FROM "Actor"
                WHERE SIMILARITY("name", $1) > 0.1
                ORDER BY SIMILARITY("name", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
                const searchResults = await prisma.$queryRawUnsafe(searchQuery, searchTerm, pageSize, skip) as any[];

                const actorIds = searchResults.map(actor => actor.id);
                actors = await prisma.actor.findMany({
                    where: {
                        id: { in: actorIds },
                        ...whereClause,
                    },
                    include: this.joinTable.include,
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countActors(whereClause, actorIds);
            } else {
                actors = await prisma.actor.findMany({
                    where: whereClause,
                    orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
                    include: this.joinTable.include,
                    skip,
                    take: pageSize,
                });
                totalItems = await this.countActors(whereClause);
            }

            return [actors, totalItems];
        } catch (error) {
            throw new Error("Error fetching actors");
        }
    }

    /**
     * Retrieves an actor by its ID.
     * @param {number} id - The ID of the actor.
     * @returns {Promise<any>} The actor data.
     * @throws {Error} If there is an issue fetching the actor.
     */
    async getActorById(id: number): Promise<any> {
        try {
            return await prisma.actor.findUnique({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            throw new Error(`Could not fetch actor with ID ${id}`);
        }
    }

    /**
     * Creates a new actor.
     * @param {any} actorData - The data of the actor to be created.
     * @returns {Promise<any>} The newly created actor data.
     * @throws {Error} If there is an issue creating the actor.
     */
    async createActor(actorData: any): Promise<any> {
        try {
            const {
                name,
                countryCode,
                birthDate,
                photoUrl
            } = actorData;

            return await prisma.$transaction(async (prisma) => {
                const actor = await prisma.actor.create({
                    data: {
                        name,
                        birthDate: new Date(birthDate),
                        photoUrl,
                        country: { connect: { code: countryCode } }
                    },
                });

                return prisma.actor.findUnique({
                    where: { id: actor.id },
                    ...this.joinTable,
                });
            });
        } catch (error) {
            throw new Error("Could not create actor");
        }
    }

    /**
     * Updates an actor by its ID.
     * @param {number} id - The ID of the actor to be updated.
     * @param {any} updatedData - The updated data of the actor.
     * @returns {Promise<any>} The updated actor data.
     * @throws {Error} If there is an issue updating the actor.
     */
    async updateActorById(id: number, updatedData: any): Promise<any> {
        try {
            const dataToUpdate: any = {
                ...(updatedData.name ? { name: updatedData.name } : {}),
                ...(updatedData.photoUrl ? { photoUrl: updatedData.photoUrl } : {}),
                ...(updatedData.birthDate ? { birthDate: new Date(updatedData.birthDate) } : {}),
                ...(updatedData.countryCode ? { country: { connect: { code: updatedData.countryCode } } } : {})
            };

            return await prisma.actor.update({
                where: { id },
                data: dataToUpdate,
                ...this.joinTable,
            });
        } catch (error) {
            throw new Error(`Could not update actor with ID ${id}`);
        }
    }

    /**
     * Deletes an actor by its ID.
     * @param {number} id - The ID of the actor to be deleted.
     * @returns {Promise<{ message: string, deletedActor: any }>} The result of the delete operation.
     * @throws {Error} If there is an issue deleting the actor.
     */
    async deleteActorById(id: number): Promise<{ message: string, deletedActor: any }> {
        try {
            const deletedActor = await prisma.$transaction(async (prisma) => {
                await prisma.movieActors.deleteMany({ where: { actorId: id } });
                return prisma.actor.delete({ where: { id } });
            });

            return {
                message: `Actor with ID ${id} deleted successfully`,
                deletedActor,
            };
        } catch (error) {
            throw new Error(`Could not delete actor with ID ${id}`);
        }
    }

    /**
     * Retrieves the total number of actors.
     * @returns {Promise<number>} The total number of actors.
     * @throws {Error} If there is an issue counting the actors.
     */
    async totalActors(): Promise<number> {
        try {
            return prisma.actor.count();
        } catch (error) {
            throw new Error("Could not count actors");
        }
    }
}

const actorService = new ActorService();
export default actorService;