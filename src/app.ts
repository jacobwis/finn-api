import * as express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Hello from Typescript",
    env: process.env.NODE_ENV
  });
});

export = app;
