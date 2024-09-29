export default interface MovieModel {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  approvalStatus: boolean;
  countryCode: string;
  directorId: number;
  rating: number;
}