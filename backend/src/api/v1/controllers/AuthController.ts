import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

class AuthController {
  // Gunakan arrow functions agar konteks `this` tetap terikat dengan benar
  passportAuth = (req: Request, res: Response, next: NextFunction) => {
    const redirectUrl = req.query.redirectUrl || "/";
    const session = req.session as any;
    session.redirectUrl = redirectUrl;
    
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account",
    })(req, res, next);
  };

  passportRedirect = passport.authenticate("google");

  // Gunakan arrow functions untuk memastikan `this` tetap terikat dengan benar
  passportCallback = (req: Request, res: Response) => {
    const session = req.session as any;
    const redirectUrl = session.redirectUrl || "http://localhost:3000"; // Default ke Home di client
    delete session.redirectUrl; // Hapus redirectUrl setelah digunakan
    res.redirect(redirectUrl); // Redirect ke URL yang tersimpan
  };

  // Protected route handler to check if user is authenticated
  protectedRoute = (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
      const user: any = req.user;
      res.json({ message: `Hello ${user?.displayName}!` });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}

export default new AuthController();
