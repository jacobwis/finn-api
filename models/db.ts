import { Pool } from "pg";

export let pool: Pool;

export function init() {
  if (!pool) {
    const ENV = process.env.NODE_ENV || "development";

    const connectionString =
      ENV === "test" ? process.env.TEST_DB : process.env.DB_URL;

    pool = new Pool({
      connectionString,
      ssl: ENV === "production" ? true : false
    });
  }
}

export async function end() {
  await pool.end();
  pool = undefined;
}

export async function query(queryText: string, values: any[] = []) {
  return await pool.query(queryText, values);
}

export async function one(queryText: string, values: any[] = []) {
  const res = await query(queryText, values);

  if (res.rowCount > 1) {
    throw new Error(
      "Expected one row to be returned, however the query returned multiple"
    );
  }

  if (res.rowCount === 0) {
    throw new Error(
      "Expected one row to be returned, however the query returned no results"
    );
  }

  return res.rows[0];
}

export async function oneOrNone(queryText: string, values: any[] = []) {
  const res = await query(queryText, values);

  if (res.rowCount > 1) {
    throw new Error(
      "Expected one row to be returned, however the query returned multiple"
    );
  }

  if (res.rowCount === 0) {
    return null;
  }

  return res.rows[0];
}

export async function any(queryText: string, values: any[] = []) {
  const res = await query(queryText, values);

  return res.rows;
}
