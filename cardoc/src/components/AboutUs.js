import React from "react";
import manny from "../images/Manny.jpg";
import alex from "../images/Alex.JPG";
import eric from "../images/Eric.PNG";
import mi from "../images/Mi.jpg";

function AboutUs() {
  return (
    <>
      <div class="container marketing text-center py-5 my-5">
        <div class="row">
          <div class="col-lg-6 pt-5">
            <img
              src={manny}
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              aria-label="Placeholder: 140x140"
            />
            <h2 class="fw-normal">Manny Espinoza</h2>
            <p>
              HI, I'm Manny! I am from the San Francisco Bay Area and a Junior
              at OSU. Originally tasked with building the front-end, I
              completely re-built this project using the MERN stack!
            </p>
            <p>
              <a
                class="btn btn-secondary"
                href="https://www.linkedin.com/in/manny-espinoza-143809115/"
              >
                LinkedIn »
              </a>
            </p>
          </div>
          <div class="col-lg-6 pt-5">
            <img
              src={alex}
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              aria-label="Placeholder: 140x140"
            />
            <h2 class="fw-normal">Alex Hollinghead</h2>
            <p>
              Alex Hollinghead was a first year postbacc student at OSU from
              Philadelphia, PA who helped on the first iteration of this
              project. His focus on this project was developing the Flask
              components in the original version.
            </p>
            <p>
              <a
                class="btn btn-secondary"
                href="https://www.linkedin.com/in/alexhollinghead/"
              >
                LinkedIn »
              </a>
            </p>
          </div>
          <div class="col-lg-6 pt-5">
            <img
              src={eric}
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              aria-label="Placeholder: 140x140"
            />
            <h2 class="fw-normal">Eric Kelly</h2>
            <p>
              Eric was a first year post-bacc student at OSU when this project
              was originally built.
            </p>
            <p>
              <a
                class="btn btn-secondary"
                href="https://www.linkedin.com/in/eric-kelly-9ab3b617a/"
              >
                LinkedIn »
              </a>
            </p>
          </div>
          <div class="col-lg-6 pt-5">
            <img
              src={mi}
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              aria-label="Placeholder: 140x140"
            />
            <h2 class="fw-normal">Mi Do</h2>
            <p>
              Mi Do was a first year post-bacc student at OSU when this project
              was originally built.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                LinkedIn »
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
