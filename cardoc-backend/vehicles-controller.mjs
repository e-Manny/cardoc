import "dotenv/config";
import express from "express";
import * as vehicles from "./vehicles-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// CREATE controller ******************************************
app.post("/vehicles", (req, res) => {
  vehicles
    .createVehicle(req.body.year, req.body.make, req.body.model, req.body.miles)
    .then((vehicle) => {
      res.status(201).json(vehicle);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Invalid request" });
    });
});

app.post("/maintenance", (req, res) => {
  vehicles
    .createMaintenance(req.body.vehicleID, req.body.data)
    .then((vehicle) => {
      res.status(201).json(vehicle);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Invalid request" });
    });
});

app.post("/recalls", (req, res) => {
  vehicles
    .createRecalls(req.body.vehicleID, req.body.data)
    .then((recalls) => {
      res.status(201).json(recalls);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Invalid request" });
    });
});

// RETRIEVE controller ****************************************************
// GET vehicles by ID
app.get("/vehicles/:_id", (req, res) => {
  const vehicleId = req.params._id;
  vehicles
    .findVehicleById(vehicleId)
    .then((vehicle) => {
      if (vehicle !== null) {
        res.status(200).json(vehicle);
      } else {
        res.status(404).json({ Error: "Document not found" });
      }
    })
    .catch((error) => {
      res.status(400).json({ Error: "Request to retrieve document failed" });
    });
});

// GET vehiles
app.get("/vehicles", (req, res) => {
  vehicles
    .findVehicle()
    .then((vehicle) => {
      res.status(200).json(vehicle);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Request to retrieve documents failed" });
    });
});

// GET maintenance by ID
app.get("/maintenance/:id", (req, res) => {
  const vehicleId = req.params.id;
  vehicles
    .findMaintenanceByVehicleId(vehicleId)
    .then((maintenance) => {
      if (maintenance !== null) {
        res.status(200).json(maintenance);
      } else {
        res.status(404).json({ Error: "Document not found" });
      }
    })
    .catch((error) => {
      res.status(400).json({ Error: "Request to retrieve document failed" });
    });
});

// GET recalls by ID
app.get("/recalls/:id", (req, res) => {
  const vehicleId = req.params.id;
  vehicles
    .findRecallsByVehicleId(vehicleId)
    .then((recalls) => {
      if (recalls !== null) {
        res.status(200).json(recalls);
      } else {
        res.status(404).json({ Error: "Document not found" });
      }
    })
    .catch((error) => {
      res.status(400).json({ Error: "Request to retrieve document failed" });
    });
});

// GET json test
app.get("/temp", (req, res) => {
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
