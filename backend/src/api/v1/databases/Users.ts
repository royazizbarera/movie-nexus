import UserModel from "../models/UserModel";
import { users_ts } from "./datas_ts/users_ts";

export const users: UserModel[] = users_ts.map((user) => ({
    id: user.id,
    email: user.email,
    username: user.username,
    password: user.password,
    photoProfile: user.photoProfile,
    provider: user.provider,
    role: user.role,
    isVerified: user.isVerified,
    verificationCode: user.verificationCode,
    verificationRequestDate: new Date(),
    verificationCodeExpired: new Date(new Date().setDate(new Date().getDate() + 1)),
}));
