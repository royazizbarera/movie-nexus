import { CountryModel } from "./CountryModel";

export interface ActorModel {
  id: number;
  name: string;
  birthDate: Date;
  photoUrl: string;
  countryCode: string;
  country: CountryModel;
}
