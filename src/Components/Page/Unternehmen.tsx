import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/pages/unternehmen/_unternehmen.scss";

function Unternehmen() {
  const companySections = [
    {
      id: "ueber-uns",
      title: "Über uns",
      icon: "🏢",
      description: "Wer wir sind, wofür wir stehen und was uns antreibt.",
      features: [
        "Familiengeführtes Autohaus",
        "Seit über 30 Jahren am Markt",
        "Kundenzufriedenheit im Fokus",
        "Gründung & Entwicklung",
        "Zukunftsvision",
      ],
      details: {
        info1Label: "Status:",
        info1: "Aktiv",
        info2Label: "Bereich:",
        info2: "Unternehmensprofil",
        info3Label: "Aktualisiert:",
        info3: "09/2025",
      },
      ctaHref: "/ueber-uns",
      ctaLabel: "Zur Story",
    },
    {
      id: "team-ansprechpartner",
      title: "Team & Ansprechpartner",
      icon: "👥",
      description: "Ihre direkten Kontakte für Verkauf, Service und Teile.",
      features: [
        "Verkauf PKW & Nutzfahrzeuge",
        "Service-Beratung",
        "Teile & Zubehör",
        "Flottenmanagement",
        "Geschäftsführung & Generationenwechsel",
      ],
      details: {
        info1Label: "Status:",
        info1: "Aktiv",
        info2Label: "Bereich:",
        info2: "Kontakt",
        info3Label: "Aktualisiert:",
        info3: "Wöchentlich",
      },
      ctaHref: "/unternehmen/ansprechpartner",
      ctaLabel: "Team kennenlernen",
    },
    {
      id: "karriere",
      title: "Karriere",
      icon: "💼",
      description: "Offene Stellen, Ausbildung und Entwicklungsmöglichkeiten.",
      features: [
        "Attraktive Benefits",
        "Ausbildung & Duales Studium",
        "Weiterbildung",
        "Modernes Arbeitsumfeld",
        "Teamkultur",
      ],
      details: {
        info1Label: "Status:",
        info1: "Bewerbungen willkommen",
        info2Label: "Bereich:",
        info2: "HR",
        info3Label: "Aktualisiert:",
        info3: "Laufend",
      },
      ctaHref: "/karriere",
      ctaLabel: "Jetzt bewerben",
    },
    {
      id: "news-presse",
      title: "News & Presse",
      icon: "🗞️",
      description: "Aktuelle Meldungen, Presseberichte und Events.",
      features: [
        "Pressemitteilungen",
        "Veranstaltungen",
        "Aktionen & Angebote",
        "Auszeichnungen",
        "Social Media",
      ],
      details: {
        info1Label: "Status:",
        info1: "Neuigkeiten",
        info2Label: "Bereich:",
        info2: "Kommunikation",
        info3Label: "Aktualisiert:",
        info3: "Monatlich",
      },
      ctaHref: "/unternehmen/presse",
      ctaLabel: "News lesen",
    },
    {
      id: "nachhaltigkeit",
      title: "Nachhaltigkeit & Umwelt",
      icon: "🌱",
      description: "Unser Engagement für Ressourcenschonung und CO₂-Reduktion.",
      features: [
        "E-Mobilität & Ladeinfrastruktur",
        "Energieeffiziente Prozesse",
        "Recycling & Entsorgung",
        "Regionale Projekte",
        "Transparente Ziele",
      ],
      details: {
        info1Label: "Status:",
        info1: "Im Fokus",
        info2Label: "Bereich:",
        info2: "ESG",
        info3Label: "Aktualisiert:",
        info3: "Quartalsweise",
      },
    },
    {
      id: "standorte-kontakt",
      title: "Standort(e) / Kontakt",
      icon: "📍",
      description: "Alle Standorte, Öffnungszeiten und Kontaktwege.",
      features: [
        "Filialen & Anfahrt",
        "Öffnungszeiten",
        "Kontaktformular",
        "Telefon & E-Mail",
        "Rückrufservice",
      ],
      details: {
        info1Label: "Status:",
        info1: "Erreichbar",
        info2Label: "Bereich:",
        info2: "Kontakt",
        info3Label: "Aktualisiert:",
        info3: "Täglich",
      },
    },
  ];

  return (
    <div className="unternehmen">
      <div className="unternehmen__header">
        <h2 className="unternehmen__title">Unternehmen</h2>
        <p className="unternehmen__subtitle"></p>
      </div>

      <div className="unternehmen__grid">
        {companySections.map((sec) => (
          <div key={sec.id} className="service-card">
            <div className="service-card__wrapper">
              <div className="service-card__header">
                <div className="service-card__icon">{sec.icon}</div>
                <h3 className="service-card__title">{sec.title}</h3>
              </div>

              <div className="service-card__content">
                <p className="service-card__description">{sec.description}</p>

                <div className="service-card__features">
                  {sec.features.map((f, i) => (
                    <div key={i} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card__details">
                  <div className="detail-item">
                    <span className="detail-label">
                      {sec.details.info1Label}
                    </span>
                    <span className="detail-value">{sec.details.info1}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">
                      {sec.details.info2Label}
                    </span>
                    <span className="detail-value">{sec.details.info2}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">
                      {sec.details.info3Label}
                    </span>
                    <span className="detail-value">{sec.details.info3}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-hover">
              {sec.ctaHref ? (
                <Link to={sec.ctaHref} className="service-card__button">
                  <span>{sec.ctaLabel ?? "Mehr erfahren"}</span>
                  <span>→</span>
                </Link>
              ) : (
                <button type="button" className="service-card__button">
                  <span>Mehr erfahren</span>
                  <span>→</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Unternehmen;
