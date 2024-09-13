import express from "express";
import movieController from "../controllers/MovieController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await movieController.getMovies();
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Movies fetched successfully",
        data: movies,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: String(error),
        errors: error,
        version: 1.0,
      })
    );
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await movieController.getMovieById(parseInt(req.params.id));
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
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

router.put("/:id", async (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    
    // Get data from the request body for updating the movie
    const movieData = req.body;

    // Call the controller method to update the movie
    const updatedMovie = await movieController.updateMovie(movieId, movieData);

    // Send the response with the updated movie data
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Movie updated successfully",
        data: updatedMovie,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to update movie",
        errors: error,
        version: 1.0,
      })
    );
  }
});

export default router;
