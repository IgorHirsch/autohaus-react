import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import Home from "../Pages/Home";
import FahrzeugbestandList from "../Pages/Fahrzeugbestand/FahrzeugbestandList";
import FahrzeugdetailsPage from "../Pages/Fahrzeugbestand/FahrzeugdetailsPage";
import UeberUns from "../Pages/Unternehmen/UeberUns";
import Karriere from "../Pages/Unternehmen/Karriere";
import Ansprechpartner from "../Pages/Unternehmen/Ansprechpartner";
import Presse from "../Pages/Unternehmen/Presse";
import Nachhaltigkeit from "../Pages/Unternehmen/Nachhaltigkeit";
import Standorte from "../Pages/Unternehmen/Standorte";
import Reifenservice from "../Pages/Werkstatt/Reifenservice";
import Wartung from "../Pages/Werkstatt/Wartung";
import Tuv from "../Pages/Werkstatt/Tuv";
import KlimaelEktro from "../Pages/Werkstatt/KlimaElektro";
import UnfallKarosserie from "../Components/Page/UnfallKarosserie";
import HolundBring from "../Pages/Werkstatt/HolundBring";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fahrzeugbestand" element={<FahrzeugbestandList />} />
          <Route
            path="/fahrzeugbestand/:id"
            element={<FahrzeugdetailsPage />}
          />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route
            path="/unternehmen/ansprechpartner"
            element={<Ansprechpartner />}
          />
          <Route path="/unternehmen/presse" element={<Presse />} />
          <Route
            path="/unternehmen/nachhaltigkeit"
            element={<Nachhaltigkeit />}
          />
          <Route path="/unternehmen/standorte" element={<Standorte />} />

          <Route path="/werkstatt/wartung" element={<Wartung />} />
          <Route path="/werkstatt/reifenservice" element={<Reifenservice />} />
          <Route path="/werkstatt/tuev" element={<Tuv />} />
          <Route path="/werkstatt/klimaelektro" element={<KlimaelEktro />} />
          <Route path="/werkstatt/unfallkarosserie" element={<UnfallKarosserie />} />
          <Route path="/werkstatt/holundbring" element={<HolundBring />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
