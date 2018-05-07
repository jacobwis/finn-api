import { Router } from "express";
import createAuthRoutes from "./createAuthRoutes";

const { main, callbacks } = createAuthRoutes("facebook", {
  scope: ["email"]
});

const router = Router();

router.get("/", main);
router.get("/callback", ...callbacks);

export default router;
