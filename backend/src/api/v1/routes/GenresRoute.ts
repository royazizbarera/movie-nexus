import express from "express";
import genreController from "../controllers/GenreController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const genres = await genreController.getGenres();
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Genres fetched successfully",
        data: genres,
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
  (req.params.id);
  try {
    const genre = await genreController.getGenreById(parseInt(req.params.id));
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Genre fetched successfully",
        data: genre,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch genre",
        errors: error,
        version: 1.0,
      })
    );
  }
});

export default router;