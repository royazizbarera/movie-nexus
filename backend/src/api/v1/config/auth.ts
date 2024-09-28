import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Setup Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: "/api/v1/auth/google/redirect",
}, (accessToken, refreshToken, profile, done) => {
  // You can save the user profile in the database here
  return done(null, profile);
}));


passport.serializeUser((user, done) => {
  done(null, user); // Menyimpan user di session
});

passport.deserializeUser((user: any, done) => {
  done(null, user); // Mengambil user dari session
});
