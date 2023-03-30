import React from "react";
import { Link } from "react-router-dom";
import carBackground from "../images/car-bkgd.jpg";

function HomeHero() {
  return (
    <>
      <div
        class="px-4 py-5 mb-5 text-center my-5"
        id="hero"
        // style={{
        //   backgroundImage: `url(${carBackground})`,
        // }}
      >
        <h1 class="display-5 fw-bold">
          Track, Manage, and <br />
          Own your Vehicle Maintenance.
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Staying on top of your vehicle maintenace today can help you save
            money by avoiding costly and unecessary repairs in the future.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              <Link class="nav-link" to="/dashboard">
                View Your Vehicles
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
