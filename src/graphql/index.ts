import { makeExecutableSchema } from "graphql-tools";
import { loadSchema } from "./schema";
import resolvers from "./resolvers";

// Put together a schema
export const schema = makeExecutableSchema({
  typeDefs: loadSchema(),
  resolvers
});
