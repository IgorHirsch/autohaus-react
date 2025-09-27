import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const WerkstattService: React.FC = () => {
  const { service } = useParams<{ service: string }>();

  useEffect(() => {
    document.title = `${
      service ? service.charAt(0).toUpperCase() + service.slice(1) : "Service"
    } | Auto Emotion Werkstatt`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [service]);

  const serviceNames: { [key: string]: string } = {
    wartung: "Wartung & Reparatur",
    reifen: "Reifenservice",
    tuev: "TÜV & HU-Service",
    klima: "Klima- & Elektronikservice",
    unfall: "Unfall & Karosserie",
    holbring: "Hol- & Bringservice",
  };

  const serviceName = service ? serviceNames[service] || service : "Service";

  return (
    <div
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        background: "#16161d",
        color: "white",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {serviceName}
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        Dieser Service ist in Vorbereitung. Kontaktieren Sie uns gerne
        telefonisch für weitere Informationen oder zur Terminvereinbarung.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="tel:+4969123456789"
          style={{
            background: "#4a90e2",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          📞 Termin vereinbaren
        </a>
        <Link
          to="/unternehmen/standorte"
          style={{
            background: "transparent",
            color: "#4a90e2",
            border: "2px solid #4a90e2",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          📍 Standort & Kontakt
        </Link>
      </div>
    </div>
  );
};

export default WerkstattService;
