// CountryService.ts
import prisma from "../config/client";

class CountryService {
  // Metode untuk mendapatkan semua country
  async getCountries() {
    try {
      // Mengambil semua data film dari database
      const countries = await prisma.country.findMany();
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
