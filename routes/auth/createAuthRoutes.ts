import { Request, Response } from "express";
import * as passport from "passport";

const IS_PROD = process.env.NODE_ENV === "production";
const FALLBACK_URL = IS_PROD
  ? "https://www.finnreading.com"
  : "http://localhost:3000";

const createSigninRoutes = (strategy: string, options?: any) => ({
  main: passport.authenticate(strategy, options),
  callbacks: [
    passport.authenticate(strategy, {
      failureRedirect: IS_PROD ? "/" : "http://localhost:3000/"
    }),
    (req: Request, res: Response) => {
      res.redirect(FALLBACK_URL);
    }
  ]
});

export default createSigninRoutes;
