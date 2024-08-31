import ActorModel from "./ActorModel";

export default interface MovieModel {
  title: string;
  description?: string;
  year: number;
  duration: string;
  rating: number;
  votes: number;
  trailerUrl: string;
  posterUrl: string;
  genres: string[];
  director: string;
  writers: string[];
  actors: ActorModel[];
  reviews: { user: string; date: string; rating: number; comment: string }[];
}