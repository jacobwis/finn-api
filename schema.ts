import { makeExecutableSchema } from "graphql-tools";
import * as path from "path";
import * as fs from "fs-extra";
import { merge } from "lodash";
import userQueries from "./queries/user";
import bookQueries from "./queries/book";
import coverQueries from "./queries/coverLinks";
import bookMutations from "./mutations/bookMutations";

let schema = "";
const schemaDir = path.resolve(__dirname, "types");
const files = fs.readdirSync(schemaDir);

for (const file of files) {
  const data = fs.readFileSync(`${schemaDir}/${file}`, "utf8");
  schema += data;
}

const resolvers = merge({}, userQueries, bookQueries, bookMutations);

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
