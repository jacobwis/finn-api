import { User } from "../../models";

interface CreateUserArgs {
  user: Partial<User>;
}

export const createUser = async (obj: any, args: CreateUserArgs) => {
  return await User.create(args.user);
};
