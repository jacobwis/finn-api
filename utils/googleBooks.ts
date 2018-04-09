import { URL } from "url";
import axios from "axios";
import * as cache from "../lib/cache";

export interface Volume {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  description: string;
  imageLinks: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    smallThumbnail: string;
    extraLarge: string;
  };
  categories: string[];
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
}

interface VolumeSearch {
  items: Volume[];
}

export const getVolumeByID = async (id: string) => {
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

export const getVolumeByTitle = async (title: string) => {
  const searchResult = await search(`"${title}"`);
  const volume = searchResult.items.find(item => {
    return item.volumeInfo.title.toLowerCase() === title.toLowerCase();
  });
  return await getVolumeByID(volume.id);
};

export const getVolumeByISBNS = async (isbns: string[]) => {
  let volume = undefined;
  for (const isbn of isbns) {
    if (!volume) {
      const res = await search(isbn);
      volume = res.items.find(volume => {
        return volume.volumeInfo.industryIdentifiers.find(
          i => i.identifier === isbn
        )
          ? true
          : false;
      });
    }
  }

  if (volume) {
    return await getVolumeByID(volume.id);
  }
};

export interface SearchOptions {
  maxResults?: number;
  startIndex?: number;
}

const defaultOptions: SearchOptions = {
  maxResults: 40,
  startIndex: 0
};

export const search = async (q: string, options: SearchOptions = {}) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options
  };

  const searchURL = new URL("https://www.googleapis.com/books/v1/volumes");
  searchURL.searchParams.append("q", q);
  searchURL.searchParams.append("maxResults", `${mergedOptions.maxResults}`);
  searchURL.searchParams.append("startIndex", `${mergedOptions.startIndex}`);

  const fromCache = await cache.get<VolumeSearch>(searchURL.href);

  if (fromCache) {
    return fromCache;
  }

  const res = await axios.get<VolumeSearch>(searchURL.href);

  cache.set(searchURL.href, res.data);

  return res.data;
};
