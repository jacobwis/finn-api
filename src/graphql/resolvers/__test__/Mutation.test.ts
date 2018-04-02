import { graphql } from "graphql";
import { setupTestDB } from "../../../lib/testSetup";
import * as db from "../../../db";
import { schema } from "../../index";

beforeAll(() => {
  db.init();
});

afterAll(async () => {
  await db.end();
});

describe("Mutation.authenticateUser", () => {
  beforeEach(async () => {
    await setupTestDB();
  });

  it("should return a users token", async () => {
    const QUERY = `#graphql
      mutation AuthenticateUser {
        authenticateUser(emailAddress: "pberceros0@va.gov", password: "dbnGtkg")
      }
    `;

    const res = await graphql(schema, QUERY);
    if (res.errors) {
      console.log(res.errors);
    }

    expect(res.data.authenticateUser).not.toBeNull();
  });
});
