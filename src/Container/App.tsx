import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import Home from "../Pages/Home";
import FahrzeugbestandList from "../Pages/FahrzeugbestandList";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fahrzeugbestand" element={<FahrzeugbestandList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
