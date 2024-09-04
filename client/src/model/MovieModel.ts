import ActorModel from "./ActorModel";

export default interface MovieModel {
  id?: string;
  title: string;
  description?: string;
  year: number;
  duration?: string;
  trailerUrl: string;
  posterUrl: string;
  genres: string[];
  director: string;
  writers: string[];
  actors: ActorModel[];
  
  // Input user
  rating?: number;
  votes?: number;
  reviews?: { user: string; date: string; rating: number; comment: string }[];
}