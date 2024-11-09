import express from "express";
import genreController from "../controllers/GenreController";
import { insertActors, insertAwards, insertCountries, insertDirectors, insertGenres, insertMovieActors, insertMovieAwards, insertMovieGenres, insertMovies, insertUsers, resetSequenceIds } from "../helpers/insertDummyData";

const router = express.Router();

// insert users
router.get("/insertUsers", async (req, res) => {
  try {
    await insertUsers();
    res.status(200).json({ message: "Users inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert genres
router.get("/insertGenres", async (req, res) => {
  try {
    await insertGenres();
    res.status(200).json({ message: "Genres inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert countries
router.get("/insertCountries", async (req, res) => {
  try {
    await insertCountries();
    res.status(200).json({ message: "Countries inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert awards
router.get("/insertAwards", async (req, res) => {
  try {
    await insertAwards();
    res.status(200).json({ message: "Awards inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert actors
router.get("/insertActors", async (req, res) => {
  try {
    await insertActors();
    res.status(200).json({ message: "Actors inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert directors
router.get("/insertDirectors", async (req, res) => {
  try {
    await insertDirectors();
    res.status(200).json({ message: "Directors inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert movies
router.get("/insertMovies", async (req, res) => {
  try {
    await insertMovies();
    res.status(200).json({ message: "Movies inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert movie genres
router.get("/insertMovieGenres", async (req, res) => {
  try {
    await insertMovieGenres();
    res.status(200).json({ message: "Movie genres inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert movie actors
router.get("/insertMovieActors", async (req, res) => {
  try {
    await insertMovieActors();
    res.status(200).json({ message: "Movie actors inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

// insert movie awards
router.get("/insertMovieAwards", async (req, res) => {
  try {
    await insertMovieAwards();
    res.status(200).json({ message: "Movie awards inserted" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});


// reset sequence
router.get("/resetSequence", async (req, res) => {
  try {
    await resetSequenceIds();
    res.status(200).json({ message: "Sequence reset" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

export default router;