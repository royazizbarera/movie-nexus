import express from "express";
import actorController from "../controllers/ActorController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actors = await actorController.getActors();
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Movies fetched successfully",
        data: actors,
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
  console.log(req.params.id);
  try {
    const actor = await actorController.getActorById(parseInt(req.params.id));
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Movie fetched successfully",
        data: actor,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch actor",
        errors: error,
        version: 1.0,
      })
    );
  }
});

export default router;