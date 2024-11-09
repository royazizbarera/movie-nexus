import express from "express";
import directorController from "../controllers/DirectorController";
import {verifyAdmin} from "../middlewares/verifyAdmin";

const router = express.Router();

/**
 * @route GET /directors
 * @description Get a list of all directors
 * @access Public
 */
router.get("/", directorController.getDirectors);

// get total directors
router.get("/total", directorController.totalDirectors);

/**
 * @route GET /directors/:id
 * @description Get a single director by ID
 * @access Public
 */
router.get("/:id", directorController.getDirectorById);

/**
 * @route POST /directors
 * @description Create a new director
 * @access Private
 */
router.post("/", verifyAdmin, directorController.createDirector);

/**
 * @route PUT /directors/:id
 * @description Update a director by ID
 * @access Private
 */
router.put("/:id", verifyAdmin, directorController.updateDirectorById);

/**
 * @route DELETE /directors/:id
 * @description Delete a director by ID
 * @access Private
 */
router.delete("/:id", verifyAdmin, directorController.deleteDirectorById);

export default router;