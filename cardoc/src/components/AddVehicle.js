import React, { useState } from "react";

export const AddVehicle = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [miles, setMiles] = useState("");

  const addVehicle = async () => {
    const newVehicle = { year, make, model, miles };
    const response = await fetch("https://ember-messy-paw.glitch.me/vehicles", {
      method: "post",
      body: JSON.stringify(newVehicle),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      console.log("Successfully added the vehicle!");
    } else {
      alert(`Failed to add vehicle, status code = ${response.status}`);
    }
    window.location.reload();
  };

  const fetchMaintenance = async () => {
    // const response = await fetch("https://ember-messy-paw.glitch.me/maint");
    const response = await fetch(
      `http://api.carmd.com/v3.0/maint?year=${year}&make=${make}&model=${model}&mileage=${miles}`,
      {
        headers: {
          "content-type": "application/json",
          authorization:
            "Basic YThiMzNkYTYtMzY3ZS00Y2VlLWExM2ItN2JmZTljMTQ3ZTlm",
          "partner-token": "66c5671f6d874084aa63022a54bb9e22",
        },
      }
    );
    if (response.status !== 200) {
      alert(
        `Failed to fetch vehicle maintenance, status code = ${response.status}`
      );
    } else {
      const services = await response.json();
      const vehicleID = year + model + miles;
      const data = services.data;
      if (data === null) {
        alert(
          " You entered an invalid vehicle. Please check your spelling and try again. "
        );
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
          alert(
            `Failed to add vehicle maintenance, status code = ${response2.status}`
          );
        } else {
          console.log("Successfully added the vehicle maintenance!");
          fetchRecalls();
        }
      }
    }
  };

  const fetchRecalls = async () => {
    // const response = await fetch("https://ember-messy-paw.glitch.me/recall");
    const response = await fetch(
      `http://api.carmd.com/v3.0/recall?year=${year}&make=${make}&model=${model}`,
      {
        headers: {
          "content-type": "application/json",
          authorization:
            "Basic YThiMzNkYTYtMzY3ZS00Y2VlLWExM2ItN2JmZTljMTQ3ZTlm",
          "partner-token": "66c5671f6d874084aa63022a54bb9e22",
        },
      }
    );
    if (response.status !== 200) {
      alert(
        `Failed to fetch vehicle recalls, status code = ${response.status}`
      );
    } else {
      console.log("Successfully fetched the vehicle recalls!");
      const recalls = await response.json();
      const vehicleID = year + model + miles;
      const data = recalls.data;
      console.log(data);
      const newRecalls = { vehicleID, data };
      const response2 = await fetch(
        "https://ember-messy-paw.glitch.me/recalls",
        {
          method: "post",
          body: JSON.stringify(newRecalls),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response2.status === 201) {
        console.log("Successfully added the vehicle recalls!");
        addVehicle();
      } else {
        alert(
          `Failed to add vehicle recalls, status code = ${response2.status}`
        );
      }
    }
  };

  // const masterCall = async () => {
  //   await addVehicle().then(fetchMaintenance()).then(fetchRecalls());
  // };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Vehicle
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Vehicle
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <section class="form-info-sec pt-3">
              {/* Modal Body Start */}
              <div class="modal-body p-5 pt-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      placeholder="Year"
                      class="form-control rounded-3"
                      id="year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                    <label for="year">Year</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      placeholder="Make"
                      class="form-control rounded-3"
                      id="make"
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                    />
                    <label for="make">Make</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      placeholder="Model"
                      class="form-control rounded-3"
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                    <label for="model">Model</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      placeholder="Miles"
                      class="form-control rounded-3"
                      id="miles"
                      value={miles}
                      onChange={(e) => setMiles(e.target.value)}
                    />
                    <label for="miles">miles</label>
                  </div>
                </form>
              </div>
              {/* Modal Body Finish */}
            </section>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={fetchMaintenance}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVehicle;
