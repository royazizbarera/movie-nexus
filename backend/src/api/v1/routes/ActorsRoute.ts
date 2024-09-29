import express from "express";
import actorController from "../controllers/ActorController";

const router = express.Router();

router.get("/", actorController.getActors);

router.get("/:id", actorController.getActorById);

export default router;