// Singleton service to handle authentication logic

import prisma from "../config/client";

import bcrypt from "bcryptjs";
import { generateVerificationCode } from "../helpers/generateVerificationCode";

class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  public async signUpEmailAndPassword(
    username: string,
    email: string,
    password: string
  ) {
    // Jika ada yang kosong maka throw error
    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }

    // Jika password kurang dari 6 karakter maka throw error
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    try {
      // Cek apakah sudah ada pengguna dengan email tersebut throw error jika ada
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (existingUser) {
        throw new Error("User with this email already exists");
      }
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationCode = generateVerificationCode();

      // jika belum ada buat pengguna baru
      const newUser = await prisma.user.create({
        data: {
          provider: "email",
          username: username,
          email: email,
          password: hashedPassword,
          verificationCode: verificationCode,
          verificationCodeExpired: new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
          ), // 24 jam dari sekarang
        },
      });

      const userResponse = { ...newUser, password: undefined };
      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to create user");
    }
  }

  // TODO: Implement sign in with email and password service
  public async signInWithEmailAndPassword(email: string, password: string) {
    // Jika ada yang kosong maka throw error
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    try {
      // Cek apakah sudah ada pengguna dengan email tersebut throw error jika tidak ada
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (!user) {
        throw new Error("User with this email does not exist");
      }

      if (user.isSuspended) {
        throw new Error("User is suspended");
      }

      // bandingkan password
      const isPasswordMatch = await bcrypt.compare(password, user.password!);
      if (!isPasswordMatch) {
        throw new Error("Invalid password");
      }

      // hilangkan password
      const userResponse = { ...user, password: undefined };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to sign in user");
    }
  }

  // is verified
  public async isVerifiedUser(email: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (!user.isVerified) {
        return false;
      }

      return true;
    } catch (error: any) {
      throw new Error(error || "Failed to verify user");
    }
  }

  // TODO: Implement verify user service using verification code
  public async verifyUser(verificationCode: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          verificationCode,
          verificationCodeExpired: {
            gte: new Date(),
          },
        },
      });

      if (!user) {
        throw new Error("Invalid verification code.");
      }

      if (user.verificationCodeExpired! < new Date()) {
        throw new Error("Verification code expired");
      }

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          isVerified: true,
          verificationCode: null,
          verificationCodeExpired: null,
        },
      });

      // hilangkan password
      const userResponse = { ...updatedUser, password: undefined };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to verify user");
    }
  }

  // TODO: Implement resend verification code service
  public async resendVerificationCode(email: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.isVerified) {
        throw new Error("User already verified");
      }

      const verificationCode = generateVerificationCode();

      const newUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          verificationCode,
          verificationCodeExpired: new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
          ), // 24 jam dari sekarang
        },
      });

      // hilangkan password
      const userResponse = { ...newUser, password: undefined };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to send verification code");
    }
  }

  // TODO: Implement delete user service using email
  public async deleteUser(email: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      await prisma.user.delete({
        where: {
          id: user.id,
        },
      });

      return true;
    } catch (error: any) {
      throw new Error(error || "Failed to delete user");
    }
  }

  // TODO: Implement check auth service
  public async checkAuth(email: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      // hilangkan password
      const userResponse = { ...user, password: undefined };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to check auth");
    }
  }

  // TODO: Sign in with Google
  public async signInWithGoogle(email: string, username: string) {
    try {
      // Cek apakah sudah ada pengguna dengan email tersebut throw error jika tidak ada
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        // jika belum ada buat pengguna baru
        const newUser = await prisma.user.create({
          data: {
            provider: "google",
            username: username,
            email: email,
            isVerified: true,
          },
        });

        const userResponse = { ...newUser, password: undefined };

        return userResponse;
      }

      if (user.isSuspended) {
        throw new Error("User is suspended");
      }

      // hilangkan password
      const userResponse = { ...user, password: undefined };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to sign in with Google");
    }
  }

  public async forgotPassword(email: string) {
    try {
      if (!email) {
        throw String("Email is required");
      }
      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const verificationCode = generateVerificationCode();

      const newUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          verificationResetPasswordCode: verificationCode,
          verificationResetPasswordCodeExpired: new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
          ), // 24 jam dari sekarang
        },
      });

      // hilangkan password
      const userResponse = { ...newUser, password: undefined };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to send verification code");
    }
  }

  public async resetPassword(
    email: string,
    verificationCode: string,
    password: string
  ) {
    try {
      if (!email || !verificationCode || !password) {
        throw String("All fields are required");
      }

      const user = await prisma.user.findFirst({
        where: {
          email: email,
          verificationResetPasswordCode: verificationCode,
          verificationResetPasswordCodeExpired: {
            gte: new Date(),
          },
        },
      });

      if (!user) {
        throw new Error("Invalid verification code.");
      }

      if (user.verificationResetPasswordCodeExpired! < new Date()) {
        throw new Error("Verification code expired");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hashedPassword,
          verificationResetPasswordCode: null,
          verificationResetPasswordCodeExpired: null,
        },
      });

      // hilangkan password
      const userResponse = {
        ...updatedUser,
        password: undefined,
        verificationResetPasswordCode: undefined,
        verificationCode: undefined,
      };

      return userResponse;
    } catch (error: any) {
      throw new Error(error || "Failed to reset password");
    }
  }

  // verificationResetPasswordCode
  public async verificationResetPasswordCode(code: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          verificationResetPasswordCode: code,
          verificationResetPasswordCodeExpired: {
            gte: new Date(),
          },
        },
      });

      if (!user) {
        throw new Error("Invalid verification code.");
      }

      if (user.verificationResetPasswordCodeExpired! < new Date()) {
        throw new Error("Verification code expired");
      }

      return true;
    } catch (error: any) {
      throw new Error(error || "Failed to verify reset password code");
    }
  }
}

const authService = AuthService.getInstance();
export default authService;
