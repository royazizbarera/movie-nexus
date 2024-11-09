import express from "express";

const routers = express.Router();

import actorsRouter from "./ActorsRoute";
import awardsRouter from "./AwardsRoute";
import countriesRouter from "./CountriesRoute";
import genresRouter from "./GenresRoute";
import moviesRouter from "./MoviesRoute";
import authRouter from "./AuthRoute";
import usersRouter from "./UsersRoute";
import mailRouter from "./MailRoute";
import directorsRouter from "./DirectorsRoute";
import reviewsRouter from "./ReviewsRoute";
import InsertDummyDataRoute from "./InsertDummyDataRoute";

/**
 * @route /actors
 * @description Routes for actor-related operations
 */
routers.use("/actors", actorsRouter);

/**
 * @route /awards
 * @description Routes for award-related operations
 */
routers.use("/awards", awardsRouter);

/**
 * @route /countries
 * @description Routes for country-related operations
 */
routers.use("/countries", countriesRouter);

/**
 * @route /genres
 * @description Routes for genre-related operations
 */
routers.use("/genres", genresRouter);

/**
 * @route /movies
 * @description Routes for movie-related operations
 */
routers.use("/movies", moviesRouter);

/**
 * @route /auth
 * @description Routes for authentication-related operations
 */
routers.use("/auth", authRouter);

/**
 * @route /user
 * @description Routes for user-related operations
 */
routers.use("/users", usersRouter);

/**
 * @route /mail
 * @description Routes for mail-related operations
 */
routers.use("/mail", mailRouter);

/**
 * @route /directors
 * @description Routes for director-related operations
 */
routers.use("/directors", directorsRouter);

/**
 * @route /reviews
 * @description Routes for review-related operations
 */
routers.use("/reviews", reviewsRouter);


/**
 * @route /insertDummyData
 * @description Routes for inserting dummy data
 */
routers.use("/insertDummyData", InsertDummyDataRoute);
export default routers;