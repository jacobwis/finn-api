import { Router } from "express";
import createAuthRoutes from "./createAuthRoutes";

const { main, callbacks } = createAuthRoutes("google", {
  scope: ["https://www.googleapis.com/auth/userinfo.profile"]
});

const router = Router();

router.get("/", main);
router.get("/callback", ...callbacks);

export default router;
