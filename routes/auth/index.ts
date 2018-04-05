import { Router } from "express";
import twitterAuthRoutes from "./twitter";

const router = Router();

router.use("/twitter", twitterAuthRoutes);

export default router;
