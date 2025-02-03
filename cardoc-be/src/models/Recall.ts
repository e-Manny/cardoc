import mongoose, { Schema, Document } from "mongoose";

export interface IRecall extends Document {
  recallDate: Date;
  campaignNumber: number;
  recallNumber: number;
  consequence: string;
  description: string;
  correctiveAction: string;
  isComplete: boolean;
  vehicle: mongoose.Types.ObjectId; // Reference to Vehicle
}

const recallSchema: Schema<IRecall> = new Schema({
  recallDate: { type: Date, required: true },
  campaignNumber: { type: Number, required: true },
  recallNumber: { type: Number, required: true },
  consequence: { type: String, required: true },
  description: { type: String, required: true },
  correctiveAction: { type: String, required: true },
  isComplete: { type: Boolean, required: true },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  }, // Reference Vehicle
});

const Recall = mongoose.model<IRecall>("Recall", recallSchema);

export default Recall;
