import { ActorModel } from "./ActorModel";
import { AwardModel } from "./AwardModel";
import { CountryModel } from "./CountryModel";
import { DirectorModel } from "./DirectorModel";
import { GenreModel } from "./GenreModel";

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

  director: DirectorModel | null;
  directorId: number;

  genres: { genre: GenreModel }[];
  actors: { actor: ActorModel }[];
  awards: { award: AwardModel }[];
  reviews: { review: Review }[] | null;
}

export interface MovieModelTable {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  backdropUrl: string;
  videoUrl: string;
  releaseDate: string;
  approvalStatus: boolean;
  rating: number;
  country: string;
  director: string;
  genres: string[];
  actors: string[];
  awards: string[];
  reviews: string[];
}

export interface MovieParamsModel {
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  genre?: string;
  country?: string;
  actor?: string;
  year?: string;
  award?: string;
  director?: string;
  sortBy?: string;
  sortOrder?: string;
  // rating?: number;
  // releaseDate?: string;
  // limit?: number;
  // offset?: number;
}

export function convertMovieModelToTable(movie: MovieModel): MovieModelTable {
  return {
    id: movie.id,
    title: movie.title,
    synopsis: movie.synopsis,
    posterUrl: movie.posterUrl,
    backdropUrl: movie.backdropUrl,
    videoUrl: movie.videoUrl ?? "", // If videoUrl is null, return empty string
    releaseDate: movie.releaseDate, // Assuming releaseDate is already an ISO string
    approvalStatus: movie.approvalStatus, // Assuming true is "approved", false is "pending"
    rating: movie.rating ?? 0, // If rating is null, default to 0
    country: movie.country ? movie.country.name : "Unknown", // Default to "Unknown" if country is null
    director: movie.director ? movie.director.name : "Unknown", // Default to "Unknown" if director is null
    genres: movie.genres.map((g) => g.genre.name), // Extract genre names from genres array
    actors: movie.actors.map((a) => a.actor.name), // Extract actor names from actors array
    awards: movie.awards.map((a) => a.award.name), // Extract award names from awards array
    reviews: movie.reviews ? movie.reviews.map((r) => r.review.content) : [], // Extract review content from reviews array or empty array if reviews is null
  };
}