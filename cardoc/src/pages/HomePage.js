import React from "react";
import Navigation from "../components/Navigation";
import HomeHero from "../components/HomeHero";
import HomeFeatures from "../components/HomeFeatures";
import AboutUs from "../components/AboutUs";

function HomePage() {
  return (
    <>
      <HomeHero></HomeHero>
      <HomeFeatures></HomeFeatures>
      <AboutUs></AboutUs>
    </>
  );
}
export default HomePage;
