import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Request, Response } from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { router } from "./routes";
import * as cache from "./lib/cache";

cache.init();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

export = app;
