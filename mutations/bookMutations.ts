import User from "../models/user";

interface AddBookToReadingListArgs {
  bookID: string;
}

const addBookToReadingList = async (
  obj: any,
  args: AddBookToReadingListArgs,
  context: any
) => {
  return await context.currentUser.addBookToList(args.bookID);
};

const removeBookFromReadingList = async (
  obj: any,
  args: { bookID: string },
  context: { currentUser: User }
) => {
  return await context.currentUser.removeBookFromList(args.bookID);
};

export default {
  Mutation: {
    addBookToReadingList,
    removeBookFromReadingList
  }
};
