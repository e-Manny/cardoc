import mongoose, { Schema, Document } from "mongoose";

// Define User Interface
export interface IUser extends Document {
  email: string;
  password: string;
  vehicles: mongoose.Types.ObjectId[]; // References Vehicle model
}

// Create User Schema
const userSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }], // Reference Vehicles
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
