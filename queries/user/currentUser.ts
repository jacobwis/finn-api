import * as u from "../../models/user";

const currentUser = (obj: any, args: any, context: any) => {
  return context.currentUser;
};

export default currentUser;
