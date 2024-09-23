// ActorService.ts
import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class ActorService {
  // join table
  joinTable = {
    include: {
      country: true,
    },
  };

  // count actors]
  async countActors() {
    try {
      const count = await prisma.actor.count();
      return count;
    } catch (error) {
      throw new Error("Could not count actors");
    }
  }
  // Metode untuk mendapatkan semua actor
  async getActors({
    page = undefined,
    pageSize = undefined,
    params,
  }: {
    page: number | undefined;
    pageSize: number | undefined;
    params: SearchParams;
  }) {
    var skip = undefined;
    if (page && pageSize) {
      skip = (page - 1) * pageSize;
    }

    const { filters, searchTerm, sortBy, sortOrder } = params;

    const whereClause: any = {
      AND: [],
    };

    if (filters && filters.length > 0) {
      filters.forEach((filter: any) => {
        const { columnKey, operator, value } = filter;
        console.info(columnKey);
        switch (operator) {
          case "eq":
            whereClause.AND.push({ [columnKey]: { equals: value } });
            break;
          case "neq":
            whereClause.AND.push({ [columnKey]: { not: value } });
            break;
          case "gt":
            whereClause.AND.push({ [columnKey]: { gt: parseFloat(value) } });
            break;
          case "lt":
            whereClause.AND.push({ [columnKey]: { lt: parseFloat(value) } });
            break;
          case "gte":
            whereClause.AND.push({ [columnKey]: { gte: parseFloat(value) } });
            break;
          case "lte":
            whereClause.AND.push({ [columnKey]: { lte: parseFloat(value) } });
            break;
          case "contains":
            whereClause.AND.push({
              [columnKey]: { contains: value, mode: "insensitive" },
            });
            break;
          case "startsWith":
            whereClause.AND.push({
              [columnKey]: { startsWith: value, mode: "insensitive" },
            });
            break;
          case "endsWith":
            whereClause.AND.push({
              [columnKey]: { endsWith: value, mode: "insensitive" },
            });
            break;
          default:
            break;
        }
      });
      // console.info(whereClause.AND);
    }

    // If no filters applied, delete AND to prevent Prisma from erroring
    if (whereClause.AND.length === 0) {
      delete whereClause.AND;
    }

    try {
      // Mengambil semua data film dari database
      const actors = await prisma.actor.findMany({
        where: whereClause,
        orderBy: sortBy
          ? {
              [sortBy]: sortOrder || "asc",
            }
          : undefined,
        include: this.joinTable.include,
        skip: skip,
        take: pageSize,
      });
      return actors;
    } catch (error) {
      throw new Error("Could not fetch actors");
    }
  }

  // Metode untuk mendapatkan satu actor berdasarkan ID
  async getActorById(id: number) {
    try {
      // Mengambil actor berdasarkan ID
      const actor = await prisma.actor.findUnique({
        where: {
          id: id,
        },
      });

      // Jika actor tidak ditemukan, lempar error
      if (!actor) {
        throw new Error(`Actor with ID ${id} not found`);
      }

      return actor;
    } catch (error) {
      throw new Error(`Could not fetch actor with ID ${id}`);
    }
  }
}

const actorService = new ActorService();
export default actorService;
