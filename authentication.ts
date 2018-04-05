import * as passport from "passport";
import { Strategy as TwitterStrategy } from "passport-twitter";
import { createOrFindUser, getUserByID } from "./models/user";

export const initPassport = () => {
  passport.serializeUser<any, any>((user, done) => {
    console.log("serialize");
    done(null, user.id);
  });

  passport.deserializeUser<number, any>(async (id, done) => {
    const user = await getUserByID(id);
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
        const user = await createOrFindUser(
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
