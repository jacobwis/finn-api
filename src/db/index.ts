import { Pool } from "pg";

export let pool: Pool;

export const init = () => {
  if (!pool) {
    const ENV = process.env.NODE_ENV || "development";
    let connectionString;
    if (ENV === "production") {
      connectionString = process.env.DB_URL;
    }

    if (ENV === "test") {
      connectionString = process.env.DB_TEST;
    }

    if (ENV === "development") {
      connectionString = process.env.DB_DEV;
    }

    pool = new Pool({
      connectionString
    });
  }
};

export const end = async () => {
  if (pool) {
    await pool.end();
    pool = undefined;
  }
};

export const query = async (queryText: string, values: any[] = []) => {
  return await pool.query(queryText, values);
};
