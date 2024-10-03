export default interface UserModel {
  id: number;
  username: string;
  email: string;
  password: string;
  photoProfile?: string;
  provider: string;
}

export type UserProfileToken = {
  username: string;
  email: string;
  token: string;
}

export interface UserProfile {
  username: string;
  email: string;
  role: 'admin' | 'writer' | 'user';
  photoProfile?: string;
}
