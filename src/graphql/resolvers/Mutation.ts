import { User } from "../../models";

interface CreateUserArgs {
  user: Partial<User>;
}

export const createUser = async (obj: any, args: CreateUserArgs) => {
  const user = await User.create(args.user);
  return user.token();
};
