import * as db from "./db";

interface User {
  id: number;
  name: string;
  username: string;
  photoURL: string;
  twitterID: string;
}

interface UserInput {
  name: string;
  username: string;
  photoURL: string;
  twitterID?: string;
}

export async function createOrFindUser(
  user: Partial<User>,
  providerMethod?: string
) {
  if (user.id) {
    let storedUser = await getUserByID(user.id);
    if (storedUser) {
      return storedUser;
    }
  }

  if (providerMethod === "twitter" && user.twitterID) {
    let storedUser = await db.oneOrNone(
      'SELECT * FROM users WHERE "twitterID" = $1',
      [user.twitterID]
    );
    if (storedUser) {
      return storedUser;
    }
  }

  const res = await db.one(
    'INSERT INTO users("name", "username", "photoURL", "twitterID") VALUES($1, $2, $3, $4) RETURNING *',
    [user.name, user.username, user.photoURL, user.twitterID]
  );
  return res;
}

export async function getUserByID(id: number) {
  return await db.oneOrNone("SELECT * FROM users WHERE id = $1", [id]);
}
