export default interface UserModel {
  id: number;
  username: string;
  email: string;
  password: string;
  photoProfile?: string;
  provider: string;
}
