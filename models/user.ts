import Book from "./book";
import * as db from "./db";

class User {
  public static async create(user: Partial<User>) {
    const res = await db.one(
      `INSERT INTO users("name", "username", "photoURL", "twitterID", "googleID", "facebookID") VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        user.name,
        user.username,
        user.photoURL,
        user.twitterID,
        user.googleID,
        user.facebookID
      ]
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

    if (providerMethod === "google" && user.googleID) {
      let storedUser = await User.findByGoogleID(user.googleID);
      if (storedUser) {
        return storedUser;
      }
    }

    if (providerMethod === "facebook" && user.facebookID) {
      let storedUser = await User.findByFacebookID(user.facebookID);
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

  public static async findByGoogleID(googleID: string) {
    const res = await db.oneOrNone(
      `SELECT * FROM users WHERE "googleID" = $1`,
      [googleID]
    );
    if (res) {
      return new User(res);
    }
  }

  public static async findByFacebookID(facebookID: string) {
    const res = await db.oneOrNone(
      `SELECT * FROM users WHERE "facebookID" = $1`,
      [facebookID]
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
  public googleID: string;
  public facebookID: string;

  public constructor(params: Partial<User>) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.photoURL = params.photoURL;
    this.twitterID = params.twitterID;
    this.googleID = params.googleID;
    this.facebookID = params.facebookID;
  }

  public async addBookToList(bookID: string, hasRead: boolean = false) {
    const existing = await db.oneOrNone(
      `SELECT * FROM "reading_list_items" WHERE "userID" = $1 AND "bookID" = $2 LIMIT 1`,
      [this.id, bookID]
    );

    if (existing && hasRead !== existing.hasRead) {
      await db.oneOrNone(
        `UPDATE "reading_list_items" SET "hasRead" = $1 WHERE "id" = $2`,
        [hasRead, existing.id]
      );
    }

    if (!existing) {
      await db.one(
        `INSERT INTO "reading_list_items"("userID", "bookID", "hasRead") VALUES($1, $2, $3)`,
        [this.id, bookID, hasRead]
      );
    }
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

  public async hasReadBook(bookID: string) {
    const res = await db.oneOrNone(
      `SELECT FROM "reading_list_items" WHERE "userID" = $1 AND "bookID" = $2 AND "hasRead" = $3`,
      [this.id, bookID, true]
    );
    if (res) {
      return true;
    }

    return false;
  }

  public async readingList() {
    const readingListRows = await db.query(
      'SELECT * FROM "reading_list_items" WHERE "userID" = $1 ORDER BY "id" DESC',
      [this.id]
    );
    const books = await Promise.all(
      readingListRows.rows.map(row => Book.findByID(row.bookID))
    );
    return books;
  }
}

export default User;
