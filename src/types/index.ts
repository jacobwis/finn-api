import { Request } from "express";
import { User } from "../models";

export interface RequestWithUser extends Request {
  currentUser: User;
}

export interface Context {
  currentUser: User;
}
