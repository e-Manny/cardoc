import { Router } from "express";
import exampleRoute from "./example.routes"; // Import other routes

const router = Router();

router.use("/example", exampleRoute); // Example route

export default router;
