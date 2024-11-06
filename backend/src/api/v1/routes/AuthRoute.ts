// TODO: solve the redirectUrl problem

// export default router;
import express from "express"; // Import express
import authController from "../controllers/AuthController";
import { verifyToken } from "../middlewares/verifyToken";
import passport from "passport";
import { generateToken } from "../helpers/handleToken";
import { setTokenCookies } from "../helpers/setTokenCookies";
import { User } from "@prisma/client";
import { FRONTEND_URL } from "../config/constants/url";

const router = express.Router();

// Initiate Google OAuth login
router.get("/google", authController.passportAuth);

// Callback route for Google OAuth
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${FRONTEND_URL}/sign-in`,
  }),
  (req, res) => {
    // Pada titik ini, req.user sudah diisi oleh Passport
    const user: User = req.user as User;
    if (!user) {
      console.log("User not found");
      return res.redirect(`${FRONTEND_URL}/sign-in`);
    }

    // Anda dapat mengakses user di sini
    console.log("User:", user);
    const token = generateToken(user.id, user.email);
    setTokenCookies(res, token);

    res.redirect(FRONTEND_URL);
  }
  // authController.passportRedirect,
  // authController.passportCallback
);

// Test
// Protected route to test if user is authenticated
router.get("/protected", authController.protectedRoute);

// sign up with email and password
router.post("/sign-up-email", authController.signUpWithEmailPassword);
router.post("/sign-in-email", authController.signInWithEmailAndPassword);
router.post("/verify-email", authController.verifyEmail);
router.post(
  "/resend-verification-code",
  verifyToken,
  authController.resendVerificationCode
);
router.delete("/delete-user", verifyToken, authController.deleteUser);
router.post("/logout", authController.logout);
router.post("/check-auth", verifyToken, authController.checkAuth);

export default router;
