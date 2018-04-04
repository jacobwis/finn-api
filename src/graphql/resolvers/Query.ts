import { Book } from "../../models";
import * as gb from "../../lib/GoogleBooks";
import { Context } from "../../types";

export const currentUser = async (obj: any, args: any, context: Context) => {
  return context.currentUser;
};

interface FindBookByIDArgs {
  id: string;
}

export const findBookByID = async (obj: any, args: FindBookByIDArgs) => {
  return await Book.findByID(args.id);
};

interface SearchArgs {
  query: string;
  options: {
    maxResults: number;
    startIndex: number;
  };
}

export const readingList = async (obj: any, args: any, context: Context) => {
  if (context.currentUser) {
    return await context.currentUser.readingList();
  }
};

export const search = async (obj: any, args: SearchArgs) => {
  const defaultOptions = {
    maxResults: 40,
    startIndex: 0
  };

  const options = {
    ...defaultOptions,
    ...args.options
  };

  return await Book.search(args.query, options);
};
