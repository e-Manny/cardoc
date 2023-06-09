// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ error: "500:Connection to the server failed." });
  } else {
    console.log(
      "Successfully connected to MongoDB Vehicles collection using Mongoose."
    );
  }
});

// SCHEMA: Define the collection's schema.
const vehicleSchema = mongoose.Schema(
  {
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    miles: { type: Number, required: true },
  },
  { collection: "vehicles" }
);

const maintenanceSchema = mongoose.Schema(
  {
    vehicleId: { type: String, required: true },
    data: { type: Array, required: true },
  },
  { collection: "maintenance" }
);

const recallsSchema = mongoose.Schema(
  {
    vehicleId: { type: String, required: true },
    data: { type: Array, required: true },
  },
  { collection: "recalls" }
);

// Compile the model from the schema.
const Vehicle = mongoose.model("Vechile", vehicleSchema);
const Maintenance = mongoose.model("Maintenance", maintenanceSchema);
const Recalls = mongoose.model("Recalls", recallsSchema);

// CREATE model *****************************************
const createVehicle = async (year, make, model, miles) => {
  const vehicle = new Vehicle({
    year: year,
    make: make,
    model: model,
    miles: miles,
  });
  return vehicle.save();
};

const createMaintenance = async (vehicleId, data) => {
  const maintenance = new Maintenance({
    vehicleId: vehicleId,
    data: data,
  });
  return maintenance.save();
};

const createRecalls = async (vehicleId, data) => {
  const recalls = new Recalls({
    vehicleId: vehicleId,
    data: data,
  });
  return recalls.save();
};

// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const findVehicle = async () => {
  const query = Vehicle.find();
  return query.exec();
};

// Retrieve based on the ID and return a promise.
const findVehicleById = async (_id) => {
  const query = Vehicle.findById(_id);
  return query.exec();
};

const findMaintenanceByVehicleId = async (Id) => {
  const query = Maintenance.find({ vehicleId: Id });
  return query.exec();
};

const findRecallsByVehicleId = async (Id) => {
  const query = Recalls.find({ vehicleId: Id });
  return query.exec();
};

// Export our variables for use in the controller file.
export {
  createVehicle,
  createRecalls,
  findVehicle,
  findVehicleById,
  createMaintenance,
  findMaintenanceByVehicleId,
  findRecallsByVehicleId,
};
