import { Router, Request, Response } from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { schema } from "./graphql";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Hello from Typescript",
    env: process.env.NODE_ENV
  });
});

router.post("/graphql", graphqlExpress({ schema }));

router.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
