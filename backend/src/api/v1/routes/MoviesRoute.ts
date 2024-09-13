import express from "express";
import movieController from "../controllers/MovieController";

const router = express.Router();

router.get("/search", movieController.searchMovies)

router.get("/", movieController.getMovies);

router.get("/:id", movieController.getMovieById);

router.put("/:id", movieController.updateMovieById);

router.delete("/:id", movieController.deleteMovieById);


export default router;
