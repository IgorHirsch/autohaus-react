import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import Home from "../Pages/Home";
import FahrzeugbestandList from "../Pages/FahrzeugbestandList";
import FahrzeugdetailsPage from "../Pages/FahrzeugdetailsPage";
import UeberUns from "../Pages/Unternehmen/UeberUns";

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
