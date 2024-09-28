// TODO: solve the redirectUrl problem

// export default router;
import express from "express";
import AuthController from "../controllers/AuthController";

const router = express.Router();

// Initiate Google OAuth login
router.get("/google", AuthController.passportAuth);

// Callback route for Google OAuth
router.get(
  "/google/redirect",
  AuthController.passportRedirect,
  AuthController.passportCallback
);

// Test
// Protected route to test if user is authenticated
router.get("/protected", AuthController.protectedRoute);

export default router;
