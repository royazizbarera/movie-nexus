// CountryService.ts
import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";

class CountryService {

  // count actors]
  async countCountries() {
    try {
      const count = await prisma.country.count();
      return count;
    } catch (error) {
      throw new Error("Could not count countries");
    }
  }
  // Metode untuk mendapatkan semua country
  async getCountries({
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
      const countries = await prisma.country.findMany({
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
      throw new Error("Could not fetch countries");
    }
  }

  // Metode untuk mendapatkan satu country berdasarkan ID
  async getCountryById(code: string) {
    try {
      // Mengambil country berdasarkan ID
      const country = await prisma.country.findUnique({
        where: {
          code: code,
        },
      });

      // Jika country tidak ditemukan, lempar error
      if (!country) {
        throw new Error(`Country with ID ${code} not found`);
      }

      return country;
    } catch (error) {
      throw new Error(`Could not fetch country with ID ${code}`);
    }
  }
}

const countryService = new CountryService();
export default countryService;
