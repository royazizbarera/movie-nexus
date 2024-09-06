import { Dayjs } from "dayjs";


export default interface ActorModel {
  id: number;
  name: string;
  country?: string;
  birth?: Dayjs;
  profilePictureUrl?: string;
}