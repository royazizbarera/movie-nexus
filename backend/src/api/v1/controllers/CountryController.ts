import countryService from "../services/CountryService";

class CountryController {
  async getCountries() {
    try {
      return await countryService.getCountries();
    } catch (error) {
      throw error;
    }
  }

  async getCountryById(id: string) {
    try {
      return await countryService.getCountryById(id);
    } catch (error) {
      throw error;
    }
  }
}

const countryController = new CountryController();
export default countryController;
