export default interface MovieModel {
  id: number;
  title: string;
  year: number;
  rating: number;
  director: string;
  genre: string[];
  country: string;
}