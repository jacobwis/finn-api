import * as Joon from "joon";

export const setupTestDB = async () => {
  const joon = await Joon.createInstance("test", true);
  await joon.reset();
  await joon.up();
  await joon.end();
};
