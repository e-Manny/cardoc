import React from "react";
import { Link } from "react-router-dom";

function VehicleRow({ vehicle }) {
  const linkStyle = { textDecoration: "None" };
  const linkPath = `/vehicle-view/${vehicle._id}/${vehicle.year}/${vehicle.make}/${vehicle.model}/${vehicle.miles}`;
  return (
    <tr>
      <td>{vehicle.year}</td>
      <td>{vehicle.make}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.miles}</td>
      <td>
        <button class="btn btn-primary position-relative mx-auto">
          <Link style={linkStyle} class="text-light" to={linkPath}>
            View
          </Link>
        </button>
      </td>
    </tr>
  );
}

export default VehicleRow;
