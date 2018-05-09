import * as fs from "fs-extra";
import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import * as path from "path";
import bookMutations from "./mutations/bookMutations";
import bookQueries from "./queries/book";
import categoryQuerys from "./queries/category";
import userQueries from "./queries/user";

let schema = "";
const schemaDir = path.resolve(__dirname, "types");
const files = fs.readdirSync(schemaDir);

for (const file of files) {
  const data = fs.readFileSync(`${schemaDir}/${file}`, "utf8");
  schema += data;
}

const resolvers = merge(
  {},
  userQueries,
  bookQueries,
  bookMutations,
  categoryQuerys
);

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
});
