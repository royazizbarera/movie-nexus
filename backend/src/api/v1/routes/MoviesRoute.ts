import express from "express";
import movieController from "../controllers/MovieController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";
import movieService from "../services/MovieService";

const router = express.Router();

router.get("/search", movieController.searchMovies)

router.get("/", movieController.getMovies);

router.get("/:id", movieController.getMovieById);

router.put("/:id", movieController.updateMovieById);

router.delete("/:id", movieController.deleteMovieById);


export default router;
