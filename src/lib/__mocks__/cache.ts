let store: { [key: string]: any } = {};

export function get<V>(key: string): Promise<V> {
  return new Promise((resolve, reject) => {
    const value = store[key];
    if (value) {
      resolve(value);
    } else {
      resolve(null);
    }
  });
}

export function set<V>(key: string, value: V) {
  return new Promise((resolve, reject) => {
    store[key] = value;
  });
}
