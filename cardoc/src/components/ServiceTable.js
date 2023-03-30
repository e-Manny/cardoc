import React from "react";
import ServiceRow from "./ServiceRow";

function ServiceTable({ services }) {
  return (
    <>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Due at Mileage</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <ServiceRow service={service} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ServiceTable;
