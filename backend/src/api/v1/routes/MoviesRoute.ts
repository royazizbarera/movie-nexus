import express from "express";
import movieController from "../controllers/MovieController";
import { verifyToken } from "../middlewares/verifyToken";
import {verifyAdmin} from "../middlewares/verifyAdmin";

const router = express.Router();

/**
 * @route GET /movies
 * @description Get a list of all movies
 * @access Public
 */
router.get("/", movieController.getMovies);

// get popular movies list
router.get("/popular", movieController.getPopularMovies);

/**
 * @route GET /movies/unapproved
 * @description Get a list of all unapproved movies
 * @access Private
 */
router.get("/unapproved", verifyAdmin, movieController.getUnapprovedMovies);

// TODO: Refactor if needed
router.get("/total", movieController.totalMovies);

// TODO: Refactor if needed
router.get("/total-unapproved-movies", movieController.totalMoviesUnapproved);

// TODO: Refactor if needed
router.get("/added-by/:username", movieController.getMoviesByUser);

/**
 * @route GET /movies/:id
 * @description Get a single movie by ID
 * @access Public
 */
router.get("/:id", movieController.getMovieById);

/**
 * @route POST /movies
 * @description Create a new movie
 * @access Private
 */
router.post("/", verifyToken, movieController.createMovie);

/**
 * @route PUT /movies/:id
 * @description Update a movie by ID
 * @access Private
 */
router.put("/:id", verifyAdmin, movieController.updateMovieById);

/**
 * @route DELETE /movies/:id
 * @description Delete a movie by ID
 * @access Private
 */
router.delete("/:id", verifyAdmin, movieController.deleteMovieById);


export default router;
