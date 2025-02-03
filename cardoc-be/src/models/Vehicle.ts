import mongoose, { Schema, Document } from "mongoose";

// Define Vehicle Interface
export interface IVehicle extends Document {
  carMake: string;
  carModel: string;
  year: number;
  user: mongoose.Types.ObjectId; // Reference to User
  recalls: mongoose.Types.ObjectId[]; // References Recall model
  maintenance: mongoose.Types.ObjectId[]; // References Maintenance model
}

// Create Vehicle Schema
const vehicleSchema: Schema<IVehicle> = new Schema(
  {
    carMake: { type: String, required: true },
    carModel: { type: String, required: true },
    year: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Reference User
    recalls: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recall" }], // ✅ Reference Recalls
    maintenance: [{ type: mongoose.Schema.Types.ObjectId, ref: "Maintenance" }], // ✅ Reference Maintenance
  },
  { timestamps: true }
);

const Vehicle = mongoose.model<IVehicle>("Vehicle", vehicleSchema);
export default Vehicle;
