import { Router } from "express";
import twitterAuthRoutes from "./twitter";
import logoutRoutes from "./logout";

const router = Router();

router.use("/twitter", twitterAuthRoutes);
router.use("/logout", logoutRoutes);

export default router;
