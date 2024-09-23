import express from "express";
import awardController from "../controllers/AwardController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", awardController.getAwards);

router.get("/:id", async (req, res) => {
  try {
    const award = await awardController.getAwardById(parseInt(req.params.id));
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Award fetched successfully",
        data: award,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch award",
        errors: error,
        version: 1.0,
      })
    );
  }
});

export default router;