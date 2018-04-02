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

export interface VolumeSearch {
  kind: string;
  totalItems: number;
  items: Volume[];
}

export interface SearchOptions {
  maxResults: number;
  startIndex?: number;
}

export const search = async (
  keyword: string,
  options: SearchOptions = { maxResults: 40 }
) => {
  const params = {
    ...options,
    q: keyword
  };

  const CACHE_KEY = `VOLUME:SEARCH:${Buffer.from(
    JSON.stringify(params)
  ).toString("base64")}`;

  const fromCache = await cache.get<VolumeSearch>(CACHE_KEY);

  if (fromCache) {
    console.log("from cache");
    return fromCache;
  }

  const res = await axios.get<VolumeSearch>(
    `https://www.googleapis.com/books/v1/volumes`,
    {
      params: {
        ...options,
        q: keyword
      }
    }
  );
  cache.set<VolumeSearch>(CACHE_KEY, res.data);

  return res.data;
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
