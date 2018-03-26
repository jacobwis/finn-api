export const logIfNotProduction = (msg: string) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(msg);
  }
};
