import axios from "axios";
import {
  BASE_AUTH_URL,
  CUSTOM_STATUS_CODES,
  HEADERS,
} from "../configs/constants";
import { UserModel } from "../models/UserModel";

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
      const resposne = await axios.post(
        `${BASE_AUTH_URL}/sign-up-email`,
        {
          username,
          email,
          password,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.CREATED) {
        const user = data.data;
        return user;
      } else {
        throw new Error(data.message);
      }
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
      throw error;
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
}

const authController = AuthController.getInstance();
export default authController;
