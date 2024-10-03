import { Request, Response } from "express";
import UserService from "../services/UserService";
import ResponseApi from "../config/ResponseApi";

class UserController {
  signUpEmailAndPassword = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const user = await UserService.signUpEmailAndPassword({
        username,
        email,
        password,
      });
      return res.status(201).json(
        ResponseApi({
          code: 201,
          message: "User created successfully",
          data: user,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.json(
        ResponseApi({
          code: 500,
          message: String(error),
          errors: error,
          version: 1.0,
        })
      );
    }
  };

  signInEmailAndPassword = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.signInEmailAndPassword(email, password);
      return res.status(200).json(
        ResponseApi({
          code: 200,
          message: "User signed in successfully",
          data: user,
          version: 1.0,
        })
      );
    } catch (error) {
      return res.json(
        ResponseApi({
          code: 500,
          message: String(error),
          errors: error,
          version: 1.0,
        })
      );
    }
  };
}

export default new UserController();
