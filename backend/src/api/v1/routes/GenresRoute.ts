import express from "express";
import genreController from "../controllers/GenreController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", genreController.getGenres);

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