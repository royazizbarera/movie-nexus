import { ActorModel } from "./ActorModel";
import { CountryModel } from "./CountryModel";
import { GenreModel } from "./GenreModel";





interface Director {
  id: number;
  name: string;
  birthDate: Date;
  photoUrl: string;
  countryCode: string;
}




interface Award {
  id: number;
  name: string;
  year: number;
  countryCode: string;
}

interface Review {
  id: number;
  content: string;
  rating: number;
  movieId: number;
  userId: number;
}

export interface MovieModel {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  backdropUrl: string;
  videoUrl: string | null;
  releaseDate: string;
  approvalStatus: boolean;
  rating: number | null;
  
  country: CountryModel | null;
  countryCode: string;

  director: Director | null;
  directorId: number;

  genres: { genre: GenreModel }[];
  actors: { actor: ActorModel }[];
  awards: { award: Award }[];
  reviews: { review: Review }[] | null;
}