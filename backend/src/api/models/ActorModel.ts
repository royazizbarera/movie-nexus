import Movie from "./MovieModel";

export default interface Actor {
  id: number;
  name: string;
  birthdate: Date;
  movies: Movie[];
}