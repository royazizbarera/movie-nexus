import express from "express";
import countryController from "../controllers/CountryController";
import HttpStatus from "../config/constants/HttpStatus";
import ResponseApi from "../config/ResponseApi";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const countries = await countryController.getCountries();
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Countries fetched successfully",
        data: countries,
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
    const country = await countryController.getCountryById(req.params.id);
    return res.json(
      ResponseApi({
        code: HttpStatus.OK,
        message: "Country fetched successfully",
        data: country,
        version: 1.0,
      })
    );
  } catch (error) {
    return res.json(
      ResponseApi({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch country",
        errors: error,
        version: 1.0,
      })
    );
  }
});

export default router;