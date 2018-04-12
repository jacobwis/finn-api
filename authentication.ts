import * as passport from "passport";
import { Strategy as TwitterStrategy } from "passport-twitter";
import User from "./models/user";

const IS_PROD = process.env.NODE_ENV === "production" ? true : false;

const CALLBACK_URL = IS_PROD
  ? "https://finnreading.com/auth/twitter/callback"
  : "http://localhost:3000/auth/twitter/callback";

export const initPassport = () => {
  passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser<User, any>(async (id, done) => {
    const user = await User.findByID(id);
    if (user) {
      done(null, user);
    } else {
      // @ts-ignore
      done(null, false);
    }
  });

  const options = {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: CALLBACK_URL
  };

  passport.use(
    new TwitterStrategy(options, async (token, tokenSecret, profile, done) => {
      const user = await User.findOrCreate(
        {
          name: profile.displayName,
          username: profile.username,
          photoURL: profile.photos[0].value,
          twitterID: profile.id
        },
        "twitter"
      );

      done(null, user);
    })
  );
};
