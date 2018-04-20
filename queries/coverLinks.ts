import axios from "axios";
import * as cache from "../lib/cache";
import Book from "../models/book";

const getCoverDetails = async (coverURL: string) => {
  const CACHE_KEY = `INFO:${coverURL}`;
  const existing = await cache.get(CACHE_KEY);

  if (existing) {
    return existing;
  }

  const res = await axios.get(`${process.env.IMG_URL}/info`, {
    params: { q: coverURL }
  });

  const coverDetails = {
    ...res.data,
    url: coverURL
  };

  cache.set(CACHE_KEY, coverDetails);

  return coverDetails;
};

const thumbnail = async (obj: Book) => {
  return (
    obj._covers.thumbnail && (await getCoverDetails(obj._covers.thumbnail))
  );
};

const small = async (obj: Book) => {
  return obj._covers.small && (await getCoverDetails(obj._covers.small));
};

const medium = async (obj: Book) => {
  return obj._covers.medium && (await getCoverDetails(obj._covers.medium));
};

const large = async (obj: Book) => {
  return obj._covers.large && (await getCoverDetails(obj._covers.large));
};

const smallThumbnail = async (obj: Book) => {
  return (
    obj._covers.smallThumbnail &&
    (await getCoverDetails(obj._covers.smallThumbnail))
  );
};

const extraLarge = async (obj: Book) => {
  return (
    obj._covers.extraLarge && (await getCoverDetails(obj._covers.extraLarge))
  );
};

export default {
  CoverLinks: {
    smallThumbnail,
    thumbnail,
    small,
    medium,
    large,
    extraLarge
  }
};
