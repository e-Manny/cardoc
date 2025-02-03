import User, { IUser } from "../models/User";

// Create a User
export const createUser = async (userData: IUser): Promise<IUser> => {
  return await new User(userData).save();
};

// Get All Users
export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

// Get a User by ID
export const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

// Get a User by Email
export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

// Update User by ID
export const updateUserById = async (
  id: string,
  updates: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, updates, { new: true });
};

// Delete User by ID
export const deleteUserById = async (
  id: string
): Promise<{ deletedCount?: number }> => {
  return await User.deleteOne({ _id: id });
};
