import { Router, Request, Response } from "express";
import { graphqlExpress } from "apollo-server-express";
import graphiql from "graphql-playground-middleware-express";
import { RequestWithUser } from "./types";
import { schema } from "./graphql";
import { authMiddleware } from "./lib/middlewares";
export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send({
    message: "Hello",
    env: process.env.NODE_ENV
  });
});

router.use(
  "/graphql",
  authMiddleware,
  graphqlExpress((req: RequestWithUser) => ({
    schema,
    context: {
      currentUser: req.currentUser
    }
  }))
);

router.get("/graphiql", graphiql({ endpoint: "/graphql" }));
