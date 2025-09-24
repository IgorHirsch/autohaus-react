import React from "react";
import { HeroSection, Offers, Team, Services, Wilkommen } from "../Components/Home";

function Home() {
  return (
    <>
      <HeroSection />
      <Wilkommen/>
      <Offers/>
      <Services/>
      <Team/>
    </>
  );
}

export default Home;
