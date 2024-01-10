const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config()
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    // Remove 'function' keyword and fix the parameters
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('serializeUser:', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser:', user);
  done(null, user);
});

// module.exports = passport
