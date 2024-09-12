import express from "express";

const routers = express.Router();

// Import routes
import authRouter from "./auth";
import movieRouter from "./MoviesRoute";

// Use router
routers.use("/auth", authRouter);
routers.use("/movies", movieRouter);

export default routers;
