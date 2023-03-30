import React from "react";

function ServiceRow({ service }) {
  return (
    <>
      <tr>
        <td>{service.desc}</td>
        <td>{service.repair.repair_difficulty}</td>
        <td>{service.due_mileage}</td>
      </tr>
    </>
  );
}

export default ServiceRow;
