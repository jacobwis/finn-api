import axios from "axios";
import * as cache from "../lib/cache";

interface Result {
  book_details: {
    title: string;
  }[];
  isbns: {
    isbn10: string;
    isbn13: string;
  }[];
}

interface ListResponse {
  results: Result[];
}

const NYT_KEY = process.env.NYT_KEY;

export const getBestSellerList = async () => {
  const fromCache = await cache.get<ListResponse>("NYT_BEST_SELLERS");

  if (fromCache) {
    return fromCache;
  }

  const res = await axios.get<ListResponse>(
    `http://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${NYT_KEY}`
  );

  cache.set("NYT_BEST_SELLERS", res.data);

  return res.data;
};
