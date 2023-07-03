import React, { useState } from "react";

export const AddVehicle = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [miles, setMiles] = useState("");

  const fetchVehicleData = async () => {
    const response = await fetch(
      `https://ember-messy-paw.glitch.me/api/${year}/${make}/${model}/${miles}`
    );
    if (response.ok) {
      console.log("Successfully added the vehicle!");
    } else {
      try {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.Error;
        alert(`Failed to add vehicle: ${errorMessage}`);
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while adding the vehicle.");
      }
    }
    window.location.reload();
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
                onClick={fetchVehicleData}
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
