import express from "express";
import * as movieController from "../controllers/MovieController";
import HttpStatus from "../../../config/constants/HttpStatus";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    movieController.getAllMovies(req, res);
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: "Failed to fetch movies" });
  }
});

export default router;