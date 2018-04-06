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

export const search = async (q: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${q}`;

  const fromCache = await cache.get<VolumeSearch>(url);

  if (fromCache) {
    return fromCache;
  }

  const res = await axios.get<VolumeSearch>(url);

  cache.set(url, res.data);

  return res.data;
};
