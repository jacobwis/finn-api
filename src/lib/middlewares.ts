import { Response, NextFunction } from "express";
import { RequestWithUser } from "../types";
import { User } from "../models";

export const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-access-token"] as string;
  if (token) {
    const user = await User.fromToken(token);
    req.currentUser = user;
  }
  next();
};
