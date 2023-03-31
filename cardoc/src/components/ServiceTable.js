import React from "react";
import ServiceRow from "./ServiceRow";

function ServiceTable({ services }) {
  return (
    <>
      <div
        class="accordion px-5 container"
        id="accordionExample"
        style={{ maxWidth: 1000 }}
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Maintenance
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="table-responsive px-5">
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
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Recalls
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceTable;
