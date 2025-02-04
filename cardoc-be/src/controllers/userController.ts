import { Request, Response, RequestHandler } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
} from "../services/userService";

// Get all users
export const getAllUsersController: RequestHandler = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users); // ✅ No `return` needed
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a user by ID
export const getUserController: RequestHandler = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a user by Email
export const getUserByEmailController: RequestHandler = async (req, res) => {
  try {
    const user = await getUserByEmail(req.params.email);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Create a new user
export const createUserController: RequestHandler = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Update a user by ID
export const updateUserController: RequestHandler = async (req, res) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

// Delete a user by ID
export const deleteUserController: RequestHandler = async (req, res) => {
  try {
    const result = await deleteUserById(req.params.id);
    if (!result.deletedCount) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
