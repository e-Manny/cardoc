// Import Dependencies.
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Establish the MongoDB connection
const connectDB = async (): Promise<void> => {
  try {
    // Connect based on the .env file parameters.
    const mongoURI = process.env.MONGODB_CONNECT_STRING;
    if (!mongoURI) {
      throw new Error(
        "MONGODB_CONNECT_STRING is not defined in the .env file."
      );
    }
    await mongoose.connect(mongoURI);
    console.log("✅ Success: Database connection successful.");
  } catch (error) {
    console.error("❌ Error: Unable to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};

// Export connection function
export default connectDB;
