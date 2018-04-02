import { Book } from "../../models";
import * as gb from "../../lib/GoogleBooks";

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
