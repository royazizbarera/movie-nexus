import { useNavigate } from "react-router-dom";
import { UserProfile } from "../models/UserModel";
import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../config/constants";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (username: string, email: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
  isAdmin: () => boolean;  // Tambahkan fungsi ini untuk mengecek role admin
  isWriter: () => boolean; // Tambahkan fungsi ini untuk mengecek role writer
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/user/sign-up-email`, {
        username,
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: any = response.data;
      if (data) {
        const userObj = {
          username: data.data.username,
          email: data.data.email,
          role: data.data.role, // Ambil role dari response API
        };
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(userObj));
        setUser(userObj);
        setToken(data.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/user/sign-in-email`, {
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: any = response.data;
      if (data) {
        const userObj = {
          username: data.data.username,
          email: data.data.email,
          role: data.data.role,
        };
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(userObj));
        setUser(userObj);
        setToken(data.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  // Fungsi untuk mengecek apakah user adalah admin
  const isAdmin = () => {
    return user?.role === "admin";
  };

  // Fungsi untuk mengecek apakah user adalah writer
  const isWriter = () => {
    return user?.role === "writer";
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, loginUser, logoutUser, isLoggedIn, isAdmin, isWriter }}
    >
      {isReady && children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
