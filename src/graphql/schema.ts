import * as path from "path";
import * as fs from "fs-extra";

export const loadSchema = () => {
  const schemaDir = path.resolve(__dirname, "..", "..", "schema");
  const files = fs.readdirSync(schemaDir);

  let schema = "";

  for (const file of files) {
    const data = fs.readFileSync(`${schemaDir}/${file}`, "utf8");
    schema += data;
  }
  return schema;
};
