import React, { useState, useEffect } from "react";
import ServiceTable from "../components/ServiceTable";
import Car from "../images/car.jpg";
import { useParams } from "react-router-dom";

function VehicleView() {
  const { year, make, model, miles } = useParams();
  const vehicleId = year + model + miles;
  const [maintenance, setMaintenance] = useState([]);
  const [recalls, setRecalls] = useState([]);

  // RETRIEVE the list of maintenance
  const loadMaintenanceRecalls = async () => {
    const response = await fetch(
      `https://ember-messy-paw.glitch.me/maintenance/${vehicleId}`
    );
    const services = await response.json();
    setMaintenance(services[0].data);
    const response2 = await fetch(
      `https://ember-messy-paw.glitch.me/recalls/${vehicleId}`
    );
    const recalls = await response2.json();
    setRecalls(recalls[0].data);
  };

  // LOAD the maintenance
  useEffect(() => {
    loadMaintenanceRecalls();
  }, []);

  console.log(maintenance);
  console.log(recalls);

  return (
    <>
      <div class="align-items-center pb-3 mb-5 border-bottom text-center">
        <img
          src={Car}
          class="mx-auto img-fluid d-block"
          alt="..."
          style={{ maxWidth: 400 }}
        />
        <h1>
          {year} {make} {model} - {miles} Miles
        </h1>
      </div>
      <ServiceTable services={maintenance} recalls={recalls}></ServiceTable>
    </>
  );
}

export default VehicleView;
