


export type RoleType = "admin" | "writer" | ["admin", "writer"];

export type UserModel = {
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
};
