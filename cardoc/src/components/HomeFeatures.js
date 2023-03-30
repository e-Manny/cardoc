import React from "react";
import checkEngine from "../images/check_engine.png";
import mobileApp from "../images/mobile-app.png";
import service from "../images/service.png";

function HomeFeatures() {
  return (
    <>
      <section class="bg-light py-5">
        <div class="container col-xxl-8 px-4 ">
          <div class="row flex-lg align-items-center g-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={checkEngine}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="300"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h2 class="lh-1 mb-3">MASTERING MAINTENANCE</h2>
              <p class="lead">
                Preventative maintenance today keeps the check engine light
                away! With CarDoc's dynamic maintenance mananger, you can view
                new vehicle maintenance items as they becomes due when your
                car's mileage increases. You will also gain access to your
                vehicle's maintenance history to view all of the past services
                you have completed!
              </p>
            </div>
          </div>
        </div>
        <div class="container col-xxl-8 px-4">
          <div class="row flex-lg-row-reverse align-items-center g-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={service}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="300"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h2 class="lh-1 mb-3">WRANGLING RECALLS</h2>
              <p class="lead">
                Keeping track of important factory reacalls can be a hassle!
                Thankfully, CarDoc can do all of this for you! Once you create
                your vehicle profile, CarDoc will automatically display any
                outstanding reacalls for that vehicle so you can quickly see a
                description, corrective action, and consequence of each recall.
              </p>
            </div>
          </div>
        </div>
        <div class="container col-xxl-8 px-4">
          <div class="row flex-lg align-items-center g-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={mobileApp}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="300"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h2 class="lh-1 mb-3">ACCESSIBLE ANYWHERE</h2>
              <p class="lead">
                CarDoc is a web-based tool which gives you access to your
                vehicle's profile at the click of a button! Is your mechanica
                asking when the last time you had your transmission fluid
                changed? Just sign into your profile from the shop and show them
                your car's comprehensive medical records!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFeatures;
