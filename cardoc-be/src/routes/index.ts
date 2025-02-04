import { Router } from "express";
import userRoute from "./userRoutes"; // Import other routes

const router = Router();

router.use("/user", userRoute); // user route

export default router;
