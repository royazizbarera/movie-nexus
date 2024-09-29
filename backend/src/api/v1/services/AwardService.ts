// AwardService.ts
import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class AwardService {
  joinTable = {
    include: {
      country: true,
    },
  };

  // count awards
  async countAwards() {
    try {
      const count = await prisma.award.count();
      return count;
    } catch (error) {
      throw new Error("Could not count awards");
    }
  }
  // Metode untuk mendapatkan semua award
  async getAwards({
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
    }

    try {
      const awards = await prisma.award.findMany({
        where: whereClause,
        skip: skip,
        take: pageSize,
        orderBy: sortBy
          ? {
              [sortBy]: sortOrder || "asc",
            }
          : undefined,
        include: this.joinTable.include,
      });

      return awards;
    } catch (error) {
      throw new Error("Could not fetch awards from database");
    }
  }

  // Metode untuk mendapatkan satu award berdasarkan ID
  async getAwardById(id: number) {
    try {
      // Mengambil award berdasarkan ID
      const award = await prisma.award.findUnique({
        where: {
          id: id,
        },
      });

      // Jika award tidak ditemukan, lempar error
      if (!award) {
        throw new Error(`Award with ID ${id} not found`);
      }

      return award;
    } catch (error) {
      throw new Error(`Could not fetch award with ID ${id}`);
    }
  }
}

const awardService = new AwardService();
export default awardService;
