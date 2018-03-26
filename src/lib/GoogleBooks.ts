import axios from "axios";
import * as cache from "./cache";

export interface Volume {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  imageLinks: {
    [key: string]: string;
  };
}

export const search = (keyword: string) => {
  console.log(keyword);
};

export const findByID = async (id: string) => {
  const CACHE_KEY = `VOLUME:${id}`;

  const fromCache = await cache.get<Volume>(CACHE_KEY);

  if (fromCache) {
    return fromCache;
  }

  const res = await axios.get<Volume>(
    `https://www.googleapis.com/books/v1/volumes/${id}`
  );

  cache.set(CACHE_KEY, res.data);

  return res.data;
};
