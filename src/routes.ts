import { Router, Request, Response } from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { schema } from "./graphql";
import * as db from "./db";
export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const data = await db.query("SELECT * FROM users");
  res.send({
    message: "Hello from Typescript",
    env: process.env.NODE_ENV,
    users: data
  });
});

router.use("/graphql", graphqlExpress({ schema }));

router.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
