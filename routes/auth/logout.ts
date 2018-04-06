import { Router } from "express";

const IS_PROD = process.env.NODE_ENV === "production";
const HOME = IS_PROD ? "https://finnreading.com" : "http://localhost:3000";

const router = Router();

router.get("/", (req, res) => {
  req.session = null;
  res.redirect(HOME);
});

export default router;
