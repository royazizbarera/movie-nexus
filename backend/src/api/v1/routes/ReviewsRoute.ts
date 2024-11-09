import express from "express";
import ReviewController from "../controllers/ReviewController";
import { verifyToken } from "../middlewares/verifyToken";
import { verifyAdmin } from "../middlewares/verifyAdmin";

const router = express.Router();

// TODO: Harus bisa memisahkan approved dan unapproved reviews ke writer/guest
/**
 * @route GET /reviews
 * @description Get a list of all reviews
 * @access Public
 */
router.get("/", ReviewController.getReviews);

// get total reviews
router.get("/total", ReviewController.totalReviews);

/**
 * @route GET /reviews/unapproved
 * @description Get a list of all unapproved reviews
 * @access Private
 */
router.get("/unapproved", verifyAdmin, ReviewController.getUnapprovedReviews);


router.get("/total-unapproved-reviews", ReviewController.totalUnapprovedReviews);

/**
 * @route GET /reviews/:id
 * @description Get a single review by ID
 * @access Public
 */
router.get("/:id", ReviewController.getReviewById);

/**
 * @route POST /reviews
 * @description Create a new review
 * @access Private
 */
router.post("/", verifyToken, ReviewController.createReview);

/**
 * @route PUT /reviews/:id
 * @description Update a review by ID
 * @access Private
 */
router.put("/:id", verifyAdmin, ReviewController.updateReviewById);

/**
 * @route DELETE /reviews/:id
 * @description Delete a review by ID
 * @access Private
 */
router.delete("/:id", verifyAdmin, ReviewController.deleteReviewById);

export default router;
