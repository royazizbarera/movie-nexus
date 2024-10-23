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
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;

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

  // TODO: Implement the sign up method
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

  // TODO: Implement the verify email method
  verifyEmail: async (verificationCode: string) => {
    set({ isLoading: true });
    try {
      const user = await authController.verifyEmail(verificationCode);
      set({ user: user, isAuthenticated: true, isLoading: false });
    } catch (error: any) {
      const errorThrow = error.message || "Verify email is failed.";
      set({ error: errorThrow, isLoading: false });
      throw errorThrow;
    }
  },

  // TODO: Implement the sign in method
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

  // TODO: Implement the check auth method
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const user = await authController.checkAuth();
      set({ user: user, isAuthenticated: true, isCheckingAuth: false });
    } catch (error: any) {
      set({ user: null, isAuthenticated: false, isCheckingAuth: false });
    }
  },

  // TODO: Implement the logout method
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
