const currentUser = (obj: any, args: any, context: any) => {
  return context.currentUser;
};

export default {
  Query: {
    currentUser
  }
};
