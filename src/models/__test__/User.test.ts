import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { setupTestDB } from "../../lib/testSetup";
import * as db from "../../db";
import { User } from "../User";

beforeAll(() => {
  db.init();
});

afterAll(async () => {
  await db.end();
});

describe("User.create()", () => {
  beforeEach(async () => {
    await setupTestDB();
  });

  it("should insert a user into the database", async () => {
    const user = await User.create({
      name: "John Doe",
      username: "jdoe26",
      emailAddress: "jdoe26@example.com",
      password: "Pass123"
    });

    const res = await db.query("SELECT * FROM users WHERE id = $1 LIMIT 1", [
      user.id
    ]);

    expect(res.rows[0]).toEqual(user);
  });

  it("should return an instance of User", async () => {
    const user = await User.create({
      name: "John Doe",
      username: "jdoe26",
      emailAddress: "jdoe26@example.com",
      password: "Pass123"
    });

    expect(user).toBeInstanceOf(User);
  });

  it("should encrypt the users password", async () => {
    const user = await User.create({
      name: "John Doe",
      username: "jdoe26",
      emailAddress: "jdoe26@example.com",
      password: "Pass123"
    });

    await expect(bcrypt.compare("Pass123", user.password)).resolves.toEqual(
      true
    );
  });
});

describe("User.findByEmailAddress()", () => {
  beforeEach(async () => {
    await setupTestDB();
  });

  it("should return a user matching the email address provided", async () => {
    await expect(
      User.findByEmailAddress("pberceros0@va.gov")
    ).resolves.toHaveProperty("emailAddress", "pberceros0@va.gov");
  });

  it("should return null if no user with that email address if found", async () => {
    await expect(
      User.findByEmailAddress("nonexistantemail@gmail.com")
    ).resolves.toBeNull();
  });

  it("should return an instance of User", async () => {
    await expect(
      User.findByEmailAddress("pberceros0@va.gov")
    ).resolves.toBeInstanceOf(User);
  });
});

describe("new User()", () => {
  it("should properly assign properties", () => {
    const data = {
      id: 1,
      name: "John Doe",
      username: "jdoe26",
      emailAddress: "jdoe26@example.com",
      password: "Pass123"
    };

    const user = new User(data);

    expect(user).toEqual({
      id: 1,
      name: "John Doe",
      username: "jdoe26",
      emailAddress: "jdoe26@example.com",
      password: "Pass123"
    });
  });
});

describe("user.authenticate()", () => {
  beforeEach(async () => {
    await setupTestDB();
  });

  it("should return true if the password is correct", async () => {
    const user = await User.findByEmailAddress("pberceros0@va.gov");

    await expect(user.authenticate("dbnGtkg")).resolves.toEqual(true);
  });

  it("should return false if the password is incorrect", async () => {
    const user = await User.findByEmailAddress("pberceros0@va.gov");

    await expect(user.authenticate("wrong")).resolves.toEqual(false);
  });
});

describe("user.token()", () => {
  it("should return a JWT token containing the users ID", async () => {
    const user = new User({ id: 5 });
    const token = user.token();
    expect(jwt.verify(token, process.env.SECRET)).toHaveProperty("userID", 5);
  });
});
