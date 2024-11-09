import express from "express";
import countryController from "../controllers/CountryController";
import {verifyAdmin} from "../middlewares/verifyAdmin";

const router = express.Router();

/**
 * @route GET /countries
 * @description Get a list of all countries
 * @access Public
 */
router.get("/", countryController.getCountries);

// get total countries

router.get("/total", countryController.totalCountries);

/**
 * @route GET /countries/:code
 * @description Get a single country by its code
 * @access Public
 */
router.get("/:code", countryController.getCountryByCode);

/**
 * @route POST /countries
 * @description Create a new country
 * @access Private
 */
router.post("/", verifyAdmin, countryController.createCountry);

/**
 * @route PUT /countries/:code
 * @description Update a country by its code
 * @access Private
 */
router.put("/:code", verifyAdmin, countryController.updateCountryByCode);

/**
 * @route DELETE /countries/:code
 * @description Delete a country by its code
 * @access Private
 */
router.delete("/:code", verifyAdmin, countryController.deleteCountryByCode);

export default router;
