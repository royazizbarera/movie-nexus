import { create } from "zustand";
import authController from "../controllers/authController";
import { UserModel } from "../models/UserModel";

interface AuthStore {
  user: UserModel | null;
  isAuthenticated: boolean;
  error: string | any;
  message: string | any;
  isLoading: boolean;
  resendLoading: boolean;
  isCheckingAuth: boolean;
  signUpWithEmailAndPassword: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;

  verifyEmail: (verificationCode: string) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;

  // TODO: Update password
  updatePassword: ({
    newPassword,
    email,
    verificationCode,
  }: {
    newPassword: string;
    email: string;
    verificationCode: string;
  }) => Promise<void>;

  // TODO: Forgot password
  forgotPassword: (email: string) => Promise<void>;

  // TODO: Verification reset password code
  verificationResetPasswordCode: (verificationCode: string) => Promise<void>;
  // check auth
  checkAuth: () => Promise<void>;

  logout: () => void;
  // other properties and methods
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  message: null,
  isLoading: false,
  resendLoading: false,
  isCheckingAuth: true,

  // TODO (DONE): Implement the sign up method
  signUpWithEmailAndPassword: async (
    username: string,
    email: string,
    password: string
  ) => {
    set({ isLoading: true });
    try {
      const user = await authController.signUpWithEmailAndPassword(
        username,
        email,
        password
      );
      console.log(user);
      set({ user: user, isAuthenticated: true, isLoading: false });
    } catch (error: any) {
      const errorThrow = error.message || "Sign up is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO (DONE): Implement the verify email method
  verifyEmail: async (verificationCode: string) => {
    set({ isLoading: true });
    try {
      const user = await authController.verifyEmail(verificationCode);
      set({ user: user, isAuthenticated: true, isLoading: false });
    } catch (error: any) {
      const errorThrow = error.message || error || "Verify email is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO (DONE): Implement the resend verification email method
  resendVerificationEmail: async () => {
    set({ resendLoading: true });
    try {
      await authController.resendVerificationEmail();
      set({
        message: "Verification email has been sent.",
        resendLoading: false,
      });
    } catch (error: any) {
      const errorThrow =
        error.message || error || "Resend verification email is failed.";
      set({ error: errorThrow, resendLoading: false });
      throw errorThrow;
    }
  },

  // TODO (DONE): Implement the sign in method
  signInWithEmailAndPassword: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const user = await authController.signInWithEmailAndPassword(
        email,
        password
      );
      set({ user: user!, isAuthenticated: true, isLoading: false });
    } catch (error: any) {
      const errorThrow = error.message || "Sign in is failed.";
      set({ error: errorThrow, isLoading: false });
      // set({ error: error, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO (DONE): Implement the update password method
  updatePassword: async ({
    newPassword,
    email,
    verificationCode,
  }: {
    newPassword: string;
    email: string;
    verificationCode: string;
  }) => {
    set({ isLoading: true });
    try {
      await authController.updatePassword({
        newPassword: newPassword,
        email: email,
        verificationCode: verificationCode,
      });
      set({
        message: "Password has been updated.",
        isLoading: false,
      });
    } catch (error: any) {
      const errorThrow = error || error.message || "Update password is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO: Implement the forgot password method
  forgotPassword: async (email: string) => {
    set({ isLoading: true });
    try {
      await authController.forgotPassword(email);
      set({
        message: "Password reset email has been sent.",
        isLoading: false,
      });
    } catch (error: any) {
      const errorThrow = error.message || error || "Forgot password is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO: Implement the verification reset password code method
  verificationResetPasswordCode: async (verificationCode: string) => {
    set({ isLoading: true });
    try {
      await authController.verificationResetPasswordCode(verificationCode);
      set({
        message: "Verification code is valid.",
        isLoading: false,
      });
    } catch (error: any) {
      const errorThrow =
        error.message || error || "Verification reset password code is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO (DONE): Implement the check auth method
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const user = await authController.checkAuth();
      set({ user: user, isAuthenticated: true, isCheckingAuth: false });
    } catch (error: any) {
      set({ user: null, isAuthenticated: false, isCheckingAuth: false });
    }
  },

  // TODO (DONE): Implement the logout method
  logout: async () => {
    set({ isLoading: true });
    try {
      await authController.logout();
      set({ user: null, isAuthenticated: false, isLoading: false });
    } catch (error: any) {
      const errorThrow = error.message || "Logout is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },
}));
