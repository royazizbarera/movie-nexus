// GenreService.ts
import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class GenreService {
  // count
  async countGenres() {
    try {
      const count = await prisma.genre.count();
      return count;
    } catch (error) {
      throw new Error("Could not count genres");
    } 
  }

  // Metode untuk mendapatkan semua genre
async getGenres({
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

    const { filters, sortBy, sortOrder } = params;

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
      const countries = await prisma.genre.findMany({
        where: whereClause,
        orderBy: sortBy
          ? {
              [sortBy]: sortOrder || "asc",
            }
          : undefined,
        skip: skip,
        take: pageSize,
      });
      return countries;
    } catch (error) {
      throw new Error("Could not fetch Genres");
    }
  }

  // Metode untuk mendapatkan satu genre berdasarkan ID
  async getGenreById(id: number) {
    try {
      // Mengambil genre berdasarkan ID
      const genre = await prisma.genre.findUnique({
        where: {
          id: id,
        },
      });

      // Jika genre tidak ditemukan, lempar error
      if (!genre) {
        throw new Error(`Genre with ID ${id} not found`);
      }

      return genre;
    } catch (error) {
      throw new Error(`Could not fetch genre with ID ${id}`);
    }
  }
}

const genreService = new GenreService();
export default genreService;
