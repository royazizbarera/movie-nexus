import prisma from "../config/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// import { hash } from 'bcryptjs';  // Menggunakan bcryptjs untuk hashing password

export interface SignUpEmailAndPasswordRequest {
  username: string;
  email: string;
  password: string;
}

class UserService {
  async signUpEmailAndPassword(request: SignUpEmailAndPasswordRequest) {
    const { username, email, password } = request;

    // 1. Validasi input: Pastikan semua data ada
    if (!username || !email || !password) {
      throw new Error("All fields must be provided");
    }

    // 2. Cek apakah pengguna dengan email atau username tersebut sudah ada
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      throw new Error("User with this email or username already exists");
    }

    // 3. Hashing password menggunakan bcrypt

    // 4. Simpan pengguna baru ke database
    const newUser = await prisma.user.create({
      data: {
        provider: "email",
        username,
        email,
        password,
      },
    });

    // 5. Kembalikan data pengguna tanpa mengembalikan password
    return {
      id: newUser.id,
      provider: newUser.provider,
      username: newUser.username,
      email: newUser.email,
      photoProfile: newUser.photoProfile,
    };
  }

  secret = process.env.JWT_SECRET as string;

  signInEmailAndPassword = async (email: string, password: string) => {
    try {
      // 1. Cari pengguna berdasarkan email
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      }) as any;

      if (!user) {
        throw Error("Invalid email or password");
      }

      
      // 2. Bandingkan password
      // const isPasswordValid = await bcrypt.compare(password, user.password);
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        throw Error("Invalid email or password");
      }

      // 3. Buat token JWT
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        this.secret,
        {
          expiresIn: "1h",
        }
      );

      // 4. Kirim token JWT ke frontend
      user.token = token;
      return user;
    } catch (error) {
      throw Error("Internal Server Error");
    }
  };
}

export default new UserService();
