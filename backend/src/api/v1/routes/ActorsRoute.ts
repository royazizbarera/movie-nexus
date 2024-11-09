import express from "express";
import actorController from "../controllers/ActorController";
import {verifyAdmin} from "../middlewares/verifyAdmin";

const router = express.Router();

/**
 * @route GET /actors
 * @description Get a list of all actors
 * @access Public
 */
router.get("/", actorController.getActors);

// TODO: Refactor if needed
router.get("/total", actorController.totalActors);

/**
 * @route GET /actors/:id
 * @description Get a single actor by ID
 * @access Public
 */
router.get("/:id", actorController.getActorById);

/**
 * @route POST /actors
 * @description Create a new actor
 * @access Private
 */
router.post("/", verifyAdmin, actorController.createActor);

/**
 * @route DELETE /actors/:id
 * @description Delete an actor by ID
 * @access Private
 */
router.delete("/:id", verifyAdmin, actorController.deleteActorById);

/**
 * @route PUT /actors/:id
 * @description Update an actor by ID
 * @access Private
 */
router.put("/:id", verifyAdmin, actorController.updateActorById);

export default router;
