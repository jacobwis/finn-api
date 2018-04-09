import * as db from "./db";

class User {
  public static async create(user: Partial<User>) {
    const res = await db.one(
      `INSERT INTO users("name", "username", "photoURL", "twitterID") VALUES($1, $2, $3, $4) RETURNING *`,
      [user.name, user.username, user.photoURL, user.twitterID]
    );
    if (res) {
      return new User(res);
    }
  }

  public static async findOrCreate(
    user: Partial<User>,
    providerMethod?: string
  ) {
    if (user.id) {
      let storedUser = await User.findByID(user.id);
      if (storedUser) {
        return storedUser;
      }
    }

    if (providerMethod === "twitter" && user.twitterID) {
      let storedUser = await User.findByTwitterID(user.twitterID);
      if (storedUser) {
        return storedUser;
      }
    }

    return await User.create(user);
  }

  public static async findByID(id: number) {
    const res = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [id]);
    if (res) {
      return new User(res);
    }
  }

  public static async findByTwitterID(twitterID: string) {
    const res = await db.oneOrNone(
      `SELECT * FROM users WHERE "twitterID" = $1`,
      [twitterID]
    );
    if (res) {
      return new User(res);
    }
  }

  public id: number;
  public name: string;
  public username: string;
  public photoURL: string;
  public twitterID: string;

  public constructor(params: Partial<User>) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.photoURL = params.photoURL;
    this.twitterID = params.twitterID;
  }

  public async addBookToList(bookID: string) {
    await db.one(
      `INSERT INTO "reading_list_items"("userID", "bookID") VALUES($1, $2)`,
      [this.id, bookID]
    );
    return true;
  }

  public async removeBookFromList(bookID: string) {
    await db.query(
      `DELETE FROM "reading_list_items" WHERE "userID" = $1 AND "bookID" = $2`,
      [this.id, bookID]
    );
    return true;
  }

  public async hasBookOnList(bookID: string) {
    const res = await db.oneOrNone(
      `SELECT FROM "reading_list_items" WHERE "userID" = $1 AND "bookID" = $2`,
      [this.id, bookID]
    );
    if (res) {
      return true;
    }

    return false;
  }
}

export default User;
