import mongoose, { Schema, Document } from "mongoose";

export interface IMaintenance extends Document {
  vehicle: mongoose.Types.ObjectId; // Reference to Vehicle
  dueMileage: number;
  difficulty: number;
  description: string;
  isOem: boolean;
  isComplete: boolean;
  notes?: string;
}

const maintenanceSchema: Schema<IMaintenance> = new Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  }, // Reference Vehicle
  dueMileage: { type: Number, required: true, unique: true },
  difficulty: { type: Number, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  isOem: { type: Boolean, required: true, unique: true },
  isComplete: { type: Boolean, required: true, unique: true },
  notes: { type: String },
});

const Maintenance = mongoose.model<IMaintenance>("Recall", maintenanceSchema);

export default Maintenance;
