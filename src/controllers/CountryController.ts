import { BaseController } from "./BaseController";
import { CountryModel } from "../models/CountryModel";
import { useAuthStore } from "../contexts/authStore"; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from "../configs/constants";

class CountryController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/countries`); // Sesuaikan base URL API untuk countrys
  }

  // Mendapatkan daftar film dengan pagination
  public async getCountries(
    page: number | undefined,
    pageSize: number | undefined,
    searchTerm?: string,
    country?: string
  ) {
    const params = { page, searchTerm, country, pageSize };
    return this.get<CountryModel[]>("/", params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getCountryByCode(code: string) {
    return this.get<CountryModel>(`/${code}`);
  }

  // Menambah film baru
  public async addCountry(country: CountryModel) {
    return this.post<CountryModel>("/", country);
  }

  // Mengubah data film, hanya untuk admin
  public async updateCountry(code: string, country: CountryModel) {
    const { user } = useAuthStore.getState();
    return this.put<CountryModel>(`/${code}`, country, user!.role!.toString());
  }

  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteCountry(code: string) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${code}`, user!.role!.toString());
  }
}

const countryController = new CountryController();
export default countryController;
