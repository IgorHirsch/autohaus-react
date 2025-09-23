import React from "react";
import "../../Styles/pages/werkstatt/_werkstatt.scss";

function Werkstatt() {
  const werkstattServices = [
    {
      id: "wartung-reparatur",
      title: "Wartung & Reparatur",
      icon: "🔧",
      description:
        "Professionelle Wartung und Reparatur für alle Fahrzeugtypen",
      features: [
        "Inspektion nach Herstellervorgaben",
        "Motor- und Getriebediagnose",
        "Bremsenservice",
        "Klimaanlagenservice",
        "Elektrik und Elektronik",
      ],
      details: {
        duration: "Je nach Umfang",
        price: "Ab 89€",
        availability: "Mo-Fr 7:30-18:00",
      },
    },
    {
      id: "reifenservice",
      title: "Reifenservice",
      icon: "🛞",
      description: "Kompletter Reifenservice von Beratung bis Montage",
      features: [
        "Reifenwechsel und Einlagerung",
        "Auswuchten und Montage",
        "Reifendruckkontrolle",
        "Profiltiefenmessung",
        "Reifenberatung aller Marken",
      ],
      details: {
        duration: "30-60 Min",
        price: "Ab 25€",
        availability: "Mo-Sa 8:00-17:00",
      },
    },
    {
      id: "hu-service",
      title: "HU-Service",
      icon: "📋",
      description: "Hauptuntersuchung und Abgasuntersuchung",
      features: [
        "TÜV-Hauptuntersuchung",
        "Abgasuntersuchung (AU)",
        "Sicherheitsprüfung",
        "Mängelbeseitigung",
        "Nachprüfung inklusive",
      ],
      details: {
        duration: "60-90 Min",
        price: "Ab 120€",
        availability: "Nach Terminvereinbarung",
      },
    },
    {
      id: "dialogannahme",
      title: "Dialogannahme",
      icon: "💬",
      description: "Persönliche Beratung und transparente Kostenvoranschläge",
      features: [
  "Ausführliche Fahrzeugdiagnose",
  "Transparente Kostenaufstellung",
  "Terminplanung nach Ihren Wünschen",
  "Regelmäßige Updates zum Fortschritt",
      ],
      details: {
        duration: "15-30 Min",
        price: "Kostenlos",
        availability: "Mo-Fr 7:30-18:00",
      },
    },
    {
      id: "werkstattleistungen",
      title: "Werkstattleistungen allgemein",
      icon: "⚙️",
      description: "Umfassende Fahrzeugservices für alle Bedürfnisse",
      features: [
        "Unfallreparaturen",
        "Lackierarbeiten",
        "Karosseriearbeiten",
        "Glasreparatur und -austausch",
        "Fahrzeugaufbereitung",
      ],
      details: {
        duration: "Nach Aufwand",
        price: "Individuelle Kalkulation",
        availability: "Mo-Fr 7:30-18:00",
      },
    },
    {
      id: "hol-bringservice",
      title: "Hol- & Bringservice",
      icon: "🚗",
      description: "Bequemer Service direkt zu Ihnen nach Hause oder ins Büro",
      features: [
        "Fahrzeugabholung vor Ort",
        "Kostenlose Anlieferung nach Service",
        "Ersatzfahrzeug auf Wunsch",
        "Flexible Terminabstimmung",
        "Umkreis bis 25km",
      ],
      details: {
        duration: "Nach Vereinbarung",
        price: "Ab 15€",
        availability: "Mo-Fr 8:00-17:00",
      },
    },
  ];

  return (
    <div className="werkstatt">
      <div className="werkstatt__header">
        <h2 className="werkstatt__title">Werkstatt & Service</h2>
        <p className="werkstatt__subtitle">
        </p>
      </div>

      <div className="werkstatt__grid">
        {werkstattServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card__wrapper">
              <div className="service-card__header">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
              </div>

              <div className="service-card__content">
                <p className="service-card__description">
                  {service.description}
                </p>

                <div className="service-card__features">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card__details">
                  <div className="detail-item">
                    <span className="detail-label">Dauer:</span>
                    <span className="detail-value">
                      {service.details.duration}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Preis:</span>
                    <span className="detail-value">
                      {service.details.price}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Verfügbarkeit:</span>
                    <span className="detail-value">
                      {service.details.availability}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-hover">
              <button className="service-card__button">
                <span>Termin vereinbaren</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="werkstatt__contact">
        <div className="contact-info">
          <h3>Kontakt für Werkstatt-Termine</h3>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+49 (0) 123 456 789</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>werkstatt@autohaus.de</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <span>Mo-Fr: 7:30-18:00, Sa: 8:00-13:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Werkstatt;
