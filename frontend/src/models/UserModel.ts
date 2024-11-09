


export type RoleType = "admin" | "writer" | ["admin", "writer"];

export interface UserModel {
  id: number;
  username: string;
  email: string;
  password?: string;
  photoProfile?: string;
  provider?: string;
  role?: RoleType;
  isVerified: boolean;
  verificationCode?: string;
  verificationCodeExpired?: string;
  verificationRequestDate?: string;
  isSuspended: boolean;
};


export interface UserModelTable {
  id: number;
  username: string;
  email: string;
  password?: string;
  photoProfile?: string;
  provider?: string;
  role?: string;
  isVerified: boolean;
  verificationCode?: string;
  verificationCodeExpired?: string;
  verificationRequestDate?: string;
  isSuspended: boolean;
};


export interface UserParamsModel {
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  role?: string;
  isVerified?: boolean;
  country?: string;
  sortBy?: string;
  sortOrder?: string;
  isSuspended?: boolean;
}

export function convertUserModelToTable(user: UserModel): UserModelTable {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    photoProfile: user.photoProfile,
    provider: user.provider,
    role: user.role?.toString(),
    isVerified: user.isVerified,
    verificationCode: user.verificationCode,
    verificationCodeExpired: user.verificationCodeExpired,
    verificationRequestDate: user.verificationRequestDate,
    isSuspended: user.isSuspended,
  };
}