import { URL } from "url";
import { Request, Response } from "express";
import * as passport from "passport";

const IS_PROD = process.env.NODE_ENV === "production";
const FALLBACK_URL = IS_PROD
  ? "https://finnreading.com"
  : "http://localhost:3000";

const createSigninRoutes = (strategy: string, options?: any) => ({
  main: (req: Request, ...rest: any[]) => {
    const url = typeof req.query.r === "string" ? req.query.r : FALLBACK_URL;

    req.session.redirectURL = url;

    return passport.authenticate(strategy, options)(req, ...rest);
  },
  callbacks: [
    passport.authenticate(strategy, {
      failureRedirect: IS_PROD ? "/" : "http://localhost:3000/"
    }),
    (req: Request, res: Response) => {
      const redirectURL = new URL(req.session.redirectURL);

      req.session.redirectURL = undefined;

      res.redirect(redirectURL.href);
    }
  ]
});

export default createSigninRoutes;
