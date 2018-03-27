import * as bcrypt from "bcrypt";
import * as db from "../db";

export class User {
  public static async create(user: Partial<User>) {
    const hashedPassword = await bcrypt.hash(user.password, 8);

    const res = await db.one(
      `INSERT INTO users("name", "username", "emailAddress", "password") VALUES($1, $2, $3, $4) RETURNING *`,
      [user.name, user.username, user.emailAddress, hashedPassword]
    );
    return new User(res);
  }

  public id: number;
  public name: string;
  public username: string;
  public emailAddress: string;
  public password: string;

  public constructor(params: Partial<User>) {
    this.id = params.id;
    this.name = params.name;
    this.username = params.username;
    this.emailAddress = params.emailAddress;
    this.password = params.password;
  }
}
