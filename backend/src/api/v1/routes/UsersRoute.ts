import express from "express";
import UserController from "../controllers/UserController";
import {verifyAdmin} from "../middlewares/verifyAdmin";

const router = express.Router();

/**
 * @route GET /users
 * @description Get a list of all users
 * @access Private
 */
router.get("/", verifyAdmin, UserController.getUsers);

// TODO: Delete account and refactor if needed
router.delete("/:userId", verifyAdmin, UserController.deleteUser);


// TODO: Update account

/**
 * @route PUT /users
 * @description Suspends a user
 * @access Private
 */
router.put("/:userId/suspend", verifyAdmin, UserController.suspendUser);

/**
 * @route PUT /users/unsuspend
 * @description Unsuspends a user
 * @access Private
 */
router.put("/:userId/unsuspend", verifyAdmin, UserController.unsuspendUser);

export default router;
