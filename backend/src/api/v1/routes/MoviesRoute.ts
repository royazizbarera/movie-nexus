import express from "express";
import * as movieController from "../controllers/MovieController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Fetching movies");
    const movies = await movieController.getAllMovies();
    console.log(movies);
    return res.json(
      ResponseApi({
        code: 200,
        message: "Movies fetched successfully",
        data: movies,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch movies",
        errors: error,
        version: 1.0,
      })
    );
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const movie = await movieController.getMovieById(parseInt(req.params.id));
    return res.json(
      ResponseApi({
        code: 200,
        message: "Movie fetched successfully",
        data: movie,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch movie",
        errors: error,
        version: 1.0,
      })
    );
  }
});

export default router;