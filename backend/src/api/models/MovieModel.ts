
export default interface Movie {
  // Main fields
  id: number;
  title: string;
  description?: string;
  year: number;
  
  directorId: number;
  genresId: number[];
  actorsId: number[];
  
  posterUrl: string;
  trailerUrl: string;
  
  // Additional fields
  writers?: number[];
  
  reviewsId?: number[];
  votes?: number;
  duration?: number;
  rating?: number;
}