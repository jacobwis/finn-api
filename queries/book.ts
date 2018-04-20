import axios from "axios";
import Book from "../models/book";
import User from "../models/user";
import * as nyt from "../lib/nyt";
import * as gb from "../utils/googleBooks";
import { SearchOptions } from "../utils/googleBooks";

const bestSellers = async () => {
  const nytResults = await nyt.getBestSellerList();
  let volumes = [];
  for (const result of nytResults.results) {
    const volume = await gb.getVolumeByTitle(result.book_details[0].title);
    if (volume) {
      volumes.push(volume);
    }
  }
  return volumes.map(volume => Book.fromVolume(volume));
};

interface BookByIDArgs {
  id: string;
}

const getBookByID = async (obj: any, args: BookByIDArgs) => {
  const b = await Book.findByID(args.id);
  return b;
};

interface SearchArgs {
  query: string;
  options: SearchOptions;
}

const search = async (obj: any, args: SearchArgs) => {
  const books = await Book.search(args.query, args.options);
  return books;
};

const isOnList = async (
  obj: Book,
  args: any,
  context: { currentUser: User }
) => {
  if (context.currentUser) {
    return await context.currentUser.hasBookOnList(obj.id);
  }
};

// const covers = async (obj: Book) => {
//   const cp = Object.keys(obj._covers).map((key: string) => {
//     // @ts-ignore
//     const coverURL = obj._covers[key];
//     return getCoverDetails(key, coverURL);
//   });

//   const details = await Promise.all(cp);
//   return details.reduce((o, val) => {
//     return {
//       ...o,
//       [val.name]: val.details
//     };
//   }, {});
// };

const getCoverDetails = async (name: string, coverURL: string) => {
  const res = await axios.get("http://localhost:3002/info", {
    params: {
      q: coverURL
    }
  });
  return {
    name,
    details: {
      ...res.data,
      url: coverURL
    }
  };
};

export default {
  Query: {
    bestSellers,
    getBookByID,
    search
  },
  Book: {
    isOnList,
    covers: (obj: any) => obj
  }
};
