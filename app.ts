import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as Keygrip from "keygrip";
import * as cookieParser from "cookie-parser";
import * as jwt from "jsonwebtoken";
import { networkInterfaces } from "os";
// @ts-ignore
import * as session from "cookie-session";
import { graphqlExpress } from "apollo-server-express";
import graphiql from "graphql-playground-middleware-express";
import * as db from "./models/db";
import * as cache from "./lib/cache";
import { initPassport } from "./authentication";
import authRoutes from "./routes/auth";
import schema from "./schema";
import { cookieKeygrip } from "./utils/cookies";
import * as im from "imagemagick";

const getLocalExternalIP = () =>
  []
    .concat(...Object.values(networkInterfaces()))
    .filter(details => details.family === "IPv4" && !details.internal)
    .pop().address;

db.init();
cache.init();

initPassport();

const app = express();

app.set("trust proxy", true);

app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use((req, res, next) => {
  if (req.headers && !req.headers.cookie && req.headers.authorization) {
    const token = (req.headers.authorization as string).replace(
      /^\s*Bearer\s*/,
      ""
    );
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      // @ts-ignore
      if (decoded.cookie) req.headers.cookie = decoded.cookie;
    } catch (err) {}
  }
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true
  })
);

app.use(cookieParser());

// app.use(
//   // @ts-ignore
//   session({
//     name: "session",
//     keys: cookieKeygrip,
//     maxAge: 31556952000,
//     secure:,
//     signed: true
//   })
// );

import * as expressSession from "express-session";
import * as RedisConnect from "connect-redis";

const RedisStore = RedisConnect(expressSession);

app.use(
  expressSession({
    secret: "cookie-secret",
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ client: cache.client }),
    cookie: {
      domain:
        process.env.NODE_ENV === "production" ? ".finnreading.com" : undefined,
      secure: process.env.NODE_ENV === "production",
      maxAge: 31556952000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({
    env: process.env.NODE_ENV,
    user: req.user || "no user"
  });
});

app.get("/signout", (req: express.Request, res: express.Response) => {
  req.session = null;
  const REDIRECT_TO =
    process.env.NODE_ENV === "production"
      ? "https://finnreading.com"
      : "http://localhost:3000";
  res.redirect(REDIRECT_TO);
});

app.use(
  "/graphql",
  graphqlExpress(req => ({
    schema,
    context: {
      currentUser: req.user
    }
  }))
);

app.get("/graphiql", graphiql({ endpoint: "/graphql" }));

export = app;
