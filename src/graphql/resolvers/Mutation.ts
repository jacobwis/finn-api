import { User } from "../../models";

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
};
