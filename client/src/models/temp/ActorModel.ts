import MovieModel from "./MovieModel";

export interface PersonalDetail {
  name: string;
  born?: string;
  bornAt?: string;
  bio?: string;
  height?: string;
  children?: string[];
  parents?: string[];
  otherWorks?: string;
}

export default interface ActorModel {
  personalDetail: PersonalDetail;
  role?: string[];
  photoProfileUrl?: string;
  photos?: string[];
  awards?: string[];
  movies?: MovieModel[];
}