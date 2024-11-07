export default interface UserModel {
    id: number;
    email: string;
    username: string;
    password: string;
    photoProfile: string | null;
    provider: string | null;
    role: string | null;
    isVerified: boolean;
    verificationCode: string | null;
    verificationRequestDate: Date | null;
    verificationResetPasswordCode?: string | null;
    verificationResetPasswordCodeExpired?: Date | null;
    verificationResetPasswordRequestDate?: Date | null;
}
