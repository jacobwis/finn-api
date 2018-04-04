import { User } from "../../models";
import { Context } from "../../types";

interface AddBookArgs {
  bookID: string;
}

export const addBookToList = async (
  obj: any,
  args: AddBookArgs,
  context: Context
) => {
  await context.currentUser.addBookToList(args.bookID);
  return true;
};

interface CreateUserArgs {
  user: Partial<User>;
}

export const createUser = async (obj: any, args: CreateUserArgs) => {
  const user = await User.create(args.user);
  return user.token();
};

interface AuthenticateUserArgs {
  emailAddress: string;
  password: string;
}

export const authenticateUser = async (
  obj: any,
  args: AuthenticateUserArgs
) => {
  const user = await User.findByEmailAddress(args.emailAddress);
  if (user && (await user.authenticate(args.password))) {
    return user.token();
  }

  return new Error(
    "No User could be found using the email and password provided."
  );
};

export const removeBookFromList = async (
  obj: any,
  args: { bookID: string },
  context: Context
) => {
  return await context.currentUser.removeBookFromList(args.bookID);
};
