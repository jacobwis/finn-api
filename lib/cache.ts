import * as redis from "redis";

const ENV = process.env.NODE_ENV;

export let client: redis.RedisClient;

export const init = () => {
  client = redis.createClient({
    url: process.env.REDIS_URL
  });

  client.on("ready", () => {
    console.log("connected to redis");
  });
};

export function get<V>(key: string): Promise<V> {
  return new Promise((resolve, reject) => {
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
    client.setex(key, 10800, JSON.stringify(value), err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
}
