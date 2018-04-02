import { Context } from "../../types";
import { Book } from "../../models";

export const isOnList = async (obj: Book, args: any, context: Context) => {
  const currentUser = context.currentUser;

  if (currentUser) {
    return await currentUser.hasBookOnList(obj.id);
  }
  // if (contex)
  return false;
};
