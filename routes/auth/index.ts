import { Router } from "express";
import facebookAuthRoutes from "./facebook";
import googleAuthRoutes from "./google";
import logoutRoutes from "./logout";
import twitterAuthRoutes from "./twitter";

const router = Router();

router.use("/twitter", twitterAuthRoutes);
router.use("/google", googleAuthRoutes);
router.use("/facebook", facebookAuthRoutes);
router.use("/logout", logoutRoutes);

export default router;
