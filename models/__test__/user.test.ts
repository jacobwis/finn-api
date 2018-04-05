import setupTestDB, { mockUsers } from "../../utils/setupTestDB";
import * as db from "../db";
import * as User from "../user";

beforeAll(() => {
  db.init();
});

afterAll(async () => {
  await db.end();
});

describe("createOrFindUser()", () => {
  beforeEach(async () => {
    await setupTestDB();
  });

  it("should create a new user", async () => {
    const user = await User.createOrFindUser({
      name: "John Doe",
      username: "jd209",
      photoURL: "http://www.example.com"
    });

    const res = await db.one("SELECT * FROM users WHERE id = $1", [user.id]);

    expect(user).toEqual(res);
  });

  it("should find an existing user by id if possible", async () => {
    const user = await User.createOrFindUser({
      id: 1,
      ...mockUsers[0]
    });

    expect(user.id).toEqual(1);
  });

  it("should find an existing user by their twitter ID if possible", async () => {
    const user = await User.createOrFindUser(mockUsers[0], "twitter");

    expect(user.id).toEqual(1);
  });
});

describe("getUserByID", () => {
  beforeEach(async () => {
    await setupTestDB();
  });

  it("should return a user from the database if one exists", async () => {
    const user = await User.getUserByID(1);

    expect(user.id).toEqual(1);
  });

  it("should return null if the user does not exist", async () => {
    await expect(User.getUserByID(10000)).resolves.toBeNull();
  });
});
