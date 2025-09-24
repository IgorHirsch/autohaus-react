import React from "react";
import { Footer, Header } from "../Components/Layout";
import Home from "../Pages/Home"; // Passe den Pfad und Namen ggf. an

function App() {
  return (
    <div className="app-container">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
