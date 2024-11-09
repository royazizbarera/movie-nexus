const NODE_ENV: string = process.env.NODE_ENV || "production";

export const FRONTEND_URL: string =
  NODE_ENV === "production"
    ? "https://movie-nexus-jtk.vercel.app"
    : "http://localhost:3002";