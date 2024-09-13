import express from "express";
import awardController from "../controllers/AwardController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const awards = await awardController.getAwards();
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Awards fetched successfully",
        data: awards,
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