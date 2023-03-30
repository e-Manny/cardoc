import React from "react";
import AddVehicle from "../components/AddVehicle";
import VehicleRow from "../components/VehicleRow";

function VehicleList({ vehicles }) {
  return (
    <>
      <div class="col-lg-8 mx-auto p-4 py-md-5">
        <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
          <h1>Your Vehicles</h1>
        </header>

        <main>
          <table class="table table-striped table-hover table-bordered ">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Make</th>
                <th scope="col">Model</th>
                <th scope="col">Mileage</th>
                <th scope="col">Vehicle Profile</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, i) => (
                <VehicleRow vehicle={vehicle} key={i} />
              ))}
            </tbody>
          </table>
          <div class="d-grid col-6 pt-4 mx-auto">
            <AddVehicle></AddVehicle>
          </div>
        </main>
      </div>
    </>
  );
}

export default VehicleList;
