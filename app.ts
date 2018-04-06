import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as Keygrip from "keygrip";
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
const cookieKeygrip = new Keygrip(["cookie-secret"]);

const getLocalExternalIP = () =>
  []
    .concat(...Object.values(networkInterfaces()))
    .filter(details => details.family === "IPv4" && !details.internal)
    .pop().address;

db.init();
cache.init();

initPassport();

const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://finnreading.com", /finn-client-(\w|-)+\.now\.sh/g]
        : [/localhost/, `http://${getLocalExternalIP()}:3000`],
    credentials: true
  })
);
app.use(
  // @ts-ignore
  session({
    name: "session",
    keys: cookieKeygrip,
    maxAge: 31556952000,
    secure: false,
    signed: true,
    domain:
      process.env.NODE_ENV === "production" ? undefined : getLocalExternalIP()
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
