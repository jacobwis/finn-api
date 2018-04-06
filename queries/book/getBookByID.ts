import * as Book from "../../models/book";

interface Args {
  id: string;
}

const getBookByID = async (obj: any, args: Args) => {
  return await Book.getBookByID(args.id);
};

export default getBookByID;
