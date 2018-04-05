import { Pool, PoolClient } from "pg";
import * as db from "../db";

beforeAll(() => {
  db.init();
});

afterAll(async () => {
  await db.end();
});

describe("db.one()", () => {
  beforeEach(async () => {
    await db.query("CREATE TABLE test_table(name varchar, score integer);");
    await db.query("INSERT INTO test_table VALUES($1, $2)", ["John", 10]);
    await db.query("INSERT INTO test_table VALUES($1, $2)", ["Jacob", 5]);
  });

  afterEach(async () => {
    await db.query("DROP TABLE test_table");
  });

  it("should return a single result", async () => {
    const res = await db.one("SELECT * FROM test_table LIMIT 1");

    expect(res).toEqual({
      name: "John",
      score: 10
    });
  });

  it("should return an error if multiple results are returned", async () => {
    await expect(db.one("SELECT * FROM test_TABLE")).rejects.toThrowError(
      "Expected one row to be returned, however the query returned multiple"
    );
  });

  it("should return an error if no results are returned", async () => {
    await expect(
      db.one("SELECT * FROM test_table WHERE name = $1", ["Jane"])
    ).rejects.toThrowError(
      "Expected one row to be returned, however the query returned no results"
    );
  });
});

describe("db.oneOrNone()", () => {
  beforeEach(async () => {
    await db.query("CREATE TABLE test_table(name varchar, score integer);");
    await db.query("INSERT INTO test_table VALUES($1, $2)", ["John", 10]);
    await db.query("INSERT INTO test_table VALUES($1, $2)", ["Jacob", 5]);
  });

  afterEach(async () => {
    await db.query("DROP TABLE test_table");
  });

  it("should return a single result", async () => {
    const res = await db.oneOrNone("SELECT * FROM test_table LIMIT 1");

    expect(res).toEqual({
      name: "John",
      score: 10
    });
  });

  it("should return an error if multiple results are returned", async () => {
    await expect(db.oneOrNone("SELECT * FROM test_TABLE")).rejects.toThrowError(
      "Expected one row to be returned, however the query returned multiple"
    );
  });

  it("should return an error if no results are returned", async () => {
    await expect(
      db.oneOrNone("SELECT * FROM test_table WHERE name = $1", ["Jane"])
    ).resolves.toEqual(null);
  });
});
