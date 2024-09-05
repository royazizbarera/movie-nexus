import express from "express";

const routers = express.Router();

// Import routes
import authRouter from "./auth";
import movieRouter from "./MoviesRoute";

// Use router
routers.use("/auth", authRouter);
routers.use("/movie", movieRouter);

export default routers;
