import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { router } from "./routes";
const app = express();

app.use(bodyParser.json());
app.use(router);

export = app;
