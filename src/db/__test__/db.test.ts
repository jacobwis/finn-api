import { Pool } from "pg";
import * as db from "../index";

describe("db.init", () => {
  it("should initialize a Pool", async () => {
    expect(db.pool).toBeUndefined();
    db.init();
    expect(db.pool).toBeDefined();
    await db.end();
  });
});

describe("db.end", () => {
  it("should end a pools connection", async () => {
    db.init();
    expect(db.pool).toBeDefined();
    await db.end();
    expect(db.pool).toBeUndefined();
  });
});
