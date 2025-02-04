import express from "express";
import {
  getAllUsersController,
  getUserController,
  getUserByEmailController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsersController); // GET /api/users - Get all users
router.get("/:id", getUserController); // GET /api/users/:id - Get user by ID
router.get("/email/:email", getUserByEmailController); // GET /api/users/email/:email - Get user by Email
router.post("/", createUserController); // POST /api/users - Create user
router.put("/:id", updateUserController); // PUT /api/users/:id - Update user
router.delete("/:id", deleteUserController); // DELETE /api/users/:id - Delete user

export default router;
