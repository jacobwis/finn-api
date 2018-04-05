import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as Keygrip from "keygrip";
// @ts-ignore
import * as session from "cookie-session";
import { graphqlExpress } from "apollo-server-express";
import graphiql from "graphql-playground-middleware-express";
import * as db from "./models/db";
import { initPassport } from "./authentication";
import authRoutes from "./routes/auth";
import schema from "./schema";
const cookieKeygrip = new Keygrip(["cookie-secret"]);

db.init();

initPassport();

const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://finnreading.com", /finn-client-(\w|-)+\.now\.sh/g]
        : [/localhost/],
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
    signed: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.user);
  res.send({
    env: process.env.NODE_ENV
  });
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
