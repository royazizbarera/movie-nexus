import express from "express";

const routers = express.Router();

// Import routes
import actorsRouter from "./ActorsRoute";
import awardsRouter from "./AwardsRoute";
import countriesRouter from "./CountriesRoute";
import genresRouter from "./GenresRoute";
import moviesRouter from "./MoviesRoute";
import authRouter from "./AuthRoute";

// Use router
routers.use("/actors", actorsRouter);
routers.use("/awards", awardsRouter);
routers.use("/countries", countriesRouter);
routers.use("/genres", genresRouter);
routers.use("/movies", moviesRouter);
routers.use("/auth", authRouter);

export default routers;
