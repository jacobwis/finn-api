import { Book } from "../../models";

interface FindBookByIDArgs {
  id: string;
}

export const findBookByID = async (obj: any, args: FindBookByIDArgs) => {
  console.log(args);
  return await Book.findByID(args.id);
};
