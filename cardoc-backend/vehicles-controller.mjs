import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

import * as vehicles from "./vehicles-model.mjs";

const PORT = process.env.PORT;
const PACKAGE = process.env.CARMD_API_PACKAGE;
const TOKEN = process.env.CARMD_API_TOKEN;

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

// Third-party API call
app.get("/api/:year/:make/:model/:miles", async (req, res) => {
  const { year, make, model, miles } = req.params;
  const apiCall = `http://api.carmd.com/v3.0/maint?year=${year}&make=${make}&model=${model}&mileage=${miles}`;
  // Make the API call using fetch
  const response = await fetch(apiCall, {
    headers: {
      "content-type": "application/json",
      authorization: PACKAGE,
      "partner-token": TOKEN,
    },
  });
  if (response.status !== 200) {
    console.log(
      `Failed to fetch vehicle maintenance, status code = ${response.status}`
    );
    res.send(response.status);
  } else {
    const maint = await response.json();
    const vehicleID = year + model + miles;
    const data = maint.data;
    if (data === null) {
      res.status(403).json({
        Error:
          "You entered an invalid vehicle. Please check your spelling and try again.",
      });
    } else {
      console.log("Successfully fetched the vehicle maintenance!");
      console.log(data);
      const newMaintenance = { vehicleID, data };
      const response2 = await fetch(
        "https://ember-messy-paw.glitch.me/maintenance",
        {
          method: "post",
          body: JSON.stringify(newMaintenance),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response2.status !== 201) {
        res.status(response2.status).json({
          Error: "Failed to add vehicle maintenance",
        });
      } else {
        console.log("Successfully added the vehicle maintenance!");
        // fetchRecalls ************************
        const response3 = await fetch(
          `http://api.carmd.com/v3.0/recall?year=${year}&make=${make}&model=${model}`,
          {
            headers: {
              "content-type": "application/json",
              authorization: PACKAGE,
              "partner-token": TOKEN,
            },
          }
        );
        if (response3.status !== 200) {
          res.status(response3.status).json({
            Error: "Failed to fetch vehicle recalls",
          });
        } else {
          console.log("Successfully fetched the vehicle recalls!");
          const recalls = await response3.json();
          const vehicleID = year + model + miles;
          const data = recalls.data;
          console.log(data);
          const newRecalls = { vehicleID, data };
          const response4 = await fetch(
            "https://ember-messy-paw.glitch.me/recalls",
            {
              method: "post",
              body: JSON.stringify(newRecalls),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response4.status === 201) {
            console.log("Successfully added the vehicle recalls!");
            // addVehicle ***************************
            const newVehicle = { year, make, model, miles };
            const response5 = await fetch(
              "https://ember-messy-paw.glitch.me/vehicles",
              {
                method: "post",
                body: JSON.stringify(newVehicle),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (response5.status === 201) {
              console.log("Successfully added the vehicle!");
              res.status(200);
            } else {
              res.status(response5.status).json({
                Error: "Failed to add vehicle",
              });
            }
          } else {
            res.status(response4.status).json({
              Error: "Failed to add vehicle recalls",
            });
          }
        }
      }
    }
    console.log(`Successfully fetched the vehicle recalls: ${data}`);
  }
});

// GET json test2
app.get("/maint", (req, res) => {
  res.send(response2);
});

// GET json test
app.get("/recall", (req, res) => {
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
