import React from "react";
import { HeroSection, Offers, Team, Services, Wilkommen } from "../Components/Home";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <Wilkommen/>
      <Offers/>
      <Services/>
      <Team/>
    </div>
  );
}

export default Home;
