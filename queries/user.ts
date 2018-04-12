import User from "../models/user";

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

interface Context {
  currentUser: User;
}

const currentUser = (obj: any, args: any, context: Context) => {
  return context.currentUser;
};

const readingList = async (obj: any, args: any, context: Context) => {
  if (context.currentUser) {
    return await context.currentUser.readingList();
  }
};

export default {
  Query: {
    currentUser,
    readingList
  }
};
