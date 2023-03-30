import React from "react";
import VehicleList from "../components/VehicleList";
import { useState, useEffect } from "react";

function Dashboard() {
  // Use state to bring in the data
  const [vehicles, setVehicles] = useState([]);

  // RETRIEVE the list of vehicles
  const loadVehicles = async () => {
    const response = await fetch("https://ember-messy-paw.glitch.me/vehicles");
    const vehicles = await response.json();
    setVehicles(vehicles);
  };

  // LOAD the vehicles
  useEffect(() => {
    loadVehicles();
  }, []);

  console.log(vehicles);

  return (
    <>
      <VehicleList vehicles={vehicles}></VehicleList>
    </>
  );
}

export default Dashboard;
