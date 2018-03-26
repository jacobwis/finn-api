import * as redis from "redis";
import { logIfNotProduction } from "./utils";

const ENV = process.env.NODE_ENV;

let client: redis.RedisClient;

export const init = () => {
  client = redis.createClient({
    url: process.env.REDIS_URL
  });

  client.on("ready", () => {
    console.log("connected to redis");
  });
};

export const enabled = () => {
  if (client) {
    return true;
  }

  logIfNotProduction(
    "You are not connected to a redis server and this command is being ignored"
  );

  return false;
};

export function get<V>(key: string): Promise<V> {
  return new Promise(async (resolve, reject) => {
    if (!enabled()) {
      return resolve(null);
    }

    client.get(key, (err, reply) => {
      if (err) {
        reject(err);
      }

      const parsed = JSON.parse(reply);
      resolve(parsed);
    });
  });
}

export function set<V>(key: string, value: V) {
  return new Promise((resolve, reject) => {
    if (!enabled()) {
      return resolve();
    }

    client.setex(key, 10800, JSON.stringify(value), err => {
      if (err) {
        reject(err);

        resolve();
      }
    });
  });
}
