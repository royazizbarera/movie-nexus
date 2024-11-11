import axios, { AxiosError } from "axios";
import {
  BASE_AUTH_URL,
  CUSTOM_STATUS_CODES,
  HEADERS,
} from "../configs/constants";
import { UserModel } from "../models/UserModel";
import { ApiResponse } from "./BaseController";

axios.defaults.withCredentials = true;

class AuthController {
  // apply singleton pattern
  private static instance: AuthController;

  // private constructor to prevent creating new instance
  private constructor() {}

  // static method to get the instance
  static getInstance(): AuthController {
    if (!AuthController.instance) {
      AuthController.instance = new AuthController();
    }

    return AuthController.instance;
  }

  public async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserModel | void> {
    try {
      await axios
        .post(
          `${BASE_AUTH_URL}/sign-in-email`,
          {
            email,
            password,
          },
          {
            headers: HEADERS,
          }
        )
        .then((response) => {
          const data = response.data;
          if (data.code === CUSTOM_STATUS_CODES.OK) {
            return data.data as UserModel;
          } else {
            throw new Error(data.message);
          }
        })
        .catch((error) => {
          const errorResponse = error.response;
          if (errorResponse) {
            throw new Error(errorResponse.data.message);
          } else {
            throw new Error(error.message);
          }
        });
    } catch (error: any) {
      console.log(error.message || "Sign in is failed.");
      throw error;
    }
  }

  public async signUpWithEmailAndPassword(
    username: string,
    email: string,
    password: string
  ) {
    try {
      await axios.post(
        `${BASE_AUTH_URL}/sign-up-email`,
        {
          username,
          email,
          password,
        },
        {
          headers: HEADERS,
        }
      ).then((response) => {
        const data = response.data;
        if (data.code === CUSTOM_STATUS_CODES.OK) {
          return data.data as UserModel;
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        const errorResponse = error.response;
        if (errorResponse) {
          throw new Error(errorResponse.data.message);
        } else {
          throw new Error(error.message);
        }
      });
    } catch (error) {
      throw error;
    }
  }

  public async isVerified(token: string) {
    try {
      const resposne = await axios.post(
        `${BASE_AUTH_URL}/is-verified`,
        {
          token,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  }

  // verify email
  public async verifyEmail(verificationCode: string) {
    try {
      const resposne = await axios.post(
        `${BASE_AUTH_URL}/verify-email`,
        {
          verificationCode,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  // forgot password
  public async forgotPassword(email: string) {
    try {
      const resposne = await axios.post(
        `${BASE_AUTH_URL}/forgot-password`,
        {
          email,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  // check auth
  public async checkAuth() {
    try {
      const resposne = await axios.post(`${BASE_AUTH_URL}/check-auth`, {
        headers: HEADERS,
      });

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  }

  // logout
  public async logout() {
    try {
      const resposne = await axios.post(`${BASE_AUTH_URL}/logout`, {
        headers: HEADERS,
      });

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  }

  // resend verification email
  public async resendVerificationEmail() {
    try {
      const resposne = await axios.post(
        `${BASE_AUTH_URL}/resend-verification-code`,
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  }

  // update password
  public async updatePassword({
    newPassword,
    email,
    verificationCode,
  }: {
    newPassword: string;
    email: string;
    verificationCode: string;
  }) {
    try {
      const resposne = await axios.put(
        `${BASE_AUTH_URL}/update-password`,
        {
          newPassword,
          email,
          verificationCode,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  // verificationResetPasswordCode
  public async verificationResetPasswordCode(code: string) {
    try {
      const resposne = await axios.post(
        `${BASE_AUTH_URL}/verification-reset-password-code`,
        {
          code,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.OK) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  // Metode umum untuk menangani error dari Axios
  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiResponse<any>>;

      if (axiosError.response && axiosError.response.data) {
        // Jika error memiliki data di response, gunakan pesan dari server
        throw new Error(
          axiosError.response.data.message || "An error occurred"
        );
      } else if (axiosError.request) {
        // Error saat mengirim permintaan, tetapi tidak ada respons
        throw new Error("No response received from server");
      } else {
        // Error saat membuat permintaan
        throw new Error(axiosError.message);
      }
    } else {
      // Jika error bukan dari Axios
      throw new Error("An unexpected error occurred");
    }
  }
}

const authController = AuthController.getInstance();
export default authController;
