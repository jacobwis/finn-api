import { Router } from "express";
import googleAuthRoutes from "./google";
import logoutRoutes from "./logout";
import twitterAuthRoutes from "./twitter";

const router = Router();

router.use("/twitter", twitterAuthRoutes);
router.use("/google", googleAuthRoutes);
router.use("/logout", logoutRoutes);

export default router;
