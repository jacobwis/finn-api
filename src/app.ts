import * as express from "express";
import { Request, Response } from "express";
import * as gb from "./lib/GoogleBooks";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  // res.send({
  //   message: "Hello from Typescript",
  //   env: process.env.NODE_ENV
  // });
  const book = await gb.findByID("RJxWIQOvoZUC");
  res.send(book.data);
});

export = app;
