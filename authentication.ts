import * as passport from "passport";
import { Strategy as TwitterStrategy } from "passport-twitter";
// import { createOrFindUser, getUserByID } from "./models/user";
import User from "./models/user";

export const initPassport = () => {
  passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser<User, any>(async (id, done) => {
    const user = await User.findByID(id);
    done(null, user);
  });

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: "/auth/twitter/callback"
      },
      async (token, tokenSecret, profile, done) => {
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
      }
    )
  );
};
