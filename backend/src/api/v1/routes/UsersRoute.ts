import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.post("/sign-up-email", UserController.signUpEmailAndPassword);
router.post("/sign-in-email", UserController.signInEmailAndPassword);

export default router;