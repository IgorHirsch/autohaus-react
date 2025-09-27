import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/layout/header/megamenu/werkstatt/_werkstatt.scss";

function Werkstatt() {
  const werkstattServices = [
    {
      id: "wartung-reparatur",
      title: "Wartung & Reparatur",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4zM6.7 8.8c-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.7-.7 1.9-.7 2.6 0 .7.7.7 1.9 0 2.6z"
            fill="currentColor"
          />
        </svg>
      ),
      description:
        "Professionelle Wartung und Reparatur für alle Fahrzeugtypen.",
      ctaHref: "/werkstatt/wartung",
      ctaLabel: "Termin buchen",
    },
    {
      id: "reifenservice",
      title: "Reifenservice",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="6"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="18"
            x2="12"
            y2="22"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="22"
            y1="12"
            x2="18"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="6"
            y1="12"
            x2="2"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      description: "Kompletter Reifenservice von Beratung bis Montage.",
      ctaHref: "/werkstatt/reifenservice",
      ctaLabel: "Reifen-Check",
    },
    {
      id: "hu-service",
      title: "TÜV & HU-Service",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      description:
        "Hauptuntersuchung und Abgasuntersuchung schnell und zuverlässig.",
      ctaHref: "/werkstatt/tuev",
      ctaLabel: "TÜV-Termin",
    },
    {
      id: "klimaservice",
      title: "Klima- & Elektronik",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
          <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1" />
        </svg>
      ),
      description: "Klimaanlagen-Service und Elektronik-Diagnose.",
      ctaHref: "/werkstatt/klimaelektro",
      ctaLabel: "Service buchen",
    },
    {
      id: "unfall-reparatur",
      title: "Unfall & Karosserie",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
            fill="currentColor"
          />
        </svg>
      ),
      description: "Unfallreparaturen und Karosseriearbeiten.",
      ctaHref: "/werkstatt/unfall",
      ctaLabel: "Kostenvoranschlag",
    },
    {
      id: "hol-bringservice",
      title: "Hol- & Bringservice",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      ),
      description: "Bequemer Service direkt zu Ihnen nach Hause oder ins Büro.",
      ctaHref: "/werkstatt/holbring",
      ctaLabel: "Service anfragen",
    },
  ];

  return (
    <div className="werkstatt">
      <div className="werkstatt__header">
        <h2 className="werkstatt__title">Werkstatt & Service</h2>
        <p className="werkstatt__subtitle"></p>
      </div>

      <div className="werkstatt__grid">
        {werkstattServices.map((service) => (
          <div key={service.id} className="werkstatt-card">
            {service.ctaHref ? (
              <Link to={service.ctaHref} className="werkstatt-card__link">
                <div className="werkstatt-card__wrapper">
                  <div className="werkstatt-card__header">
                    <h3 className="werkstatt-card__title">{service.title}</h3>
                  </div>

                  <div className="werkstatt-card__content">
                    <div className="werkstatt-card__icon">{service.icon}</div>
                    <p className="werkstatt-card__description">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="werkstatt-card__wrapper">
                <div className="werkstatt-card__header">
                  <h3 className="werkstatt-card__title">{service.title}</h3>
                </div>

                <div className="werkstatt-card__content">
                  <div className="werkstatt-card__icon">{service.icon}</div>
                  <p className="werkstatt-card__description">
                    {service.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Werkstatt;
