import React, { useState, useEffect } from "react";

const Angebote: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "leasing" | "finanzierung" | "garantie"
  >("leasing");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 970);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const angeboteData = {
    leasing: [
      {
        icon: "🚗",
        title: "Privat-Leasing",
        description: "Flexibles Leasing für Privatpersonen",
        features: [
          "Keine Anzahlung",
          "Wartung inklusive",
          "Vollkasko-Versicherung",
        ],
        primaryValue: "ab 199 €/Monat",
        laufzeit: "24-48 Monate",
        secondaryValue: "10.000 km/Jahr",
      },
      {
        icon: "🏢",
        title: "Gewerbe-Leasing",
        description: "Steuervorteile für Unternehmen",
        features: [
          "100% steuerlich absetzbar",
          "Keine Bilanzierung",
          "Fuhrparkmanagement",
        ],
        primaryValue: "ab 249 €/Monat",
        laufzeit: "36-60 Monate",
        secondaryValue: "20.000 km/Jahr",
      },
      {
        icon: "⚡",
        title: "E-Mobilität Leasing",
        description: "Elektrofahrzeuge mit Förderung",
        features: ["BAFA-Förderung", "Wallbox inklusive", "Wartung & Service"],
        primaryValue: "ab 179 €/Monat",
        laufzeit: "24-36 Monate",
        secondaryValue: "15.000 km/Jahr",
      },
      {
        icon: "🔄",
        title: "Leasing-Rückläufer",
        description: "Gepflegte Rückläufer-Fahrzeuge",
        features: [
          "Geprüfte Qualität",
          "Garantie inklusive",
          "Sofort verfügbar",
        ],
        primaryValue: "ab 149 €/Monat",
        laufzeit: "12-24 Monate",
        secondaryValue: "8.000 km/Jahr",
      },
    ],
    finanzierung: [
      {
        icon: "💰",
        title: "Autokredit",
        description: "Günstige Finanzierung für Ihr Traumauto",
        features: ["Niedrige Zinsen", "Flexible Laufzeit", "Schnelle Zusage"],
        primaryValue: "ab 2,9% eff. Jahreszins",
        laufzeit: "12-84 Monate",
        secondaryValue: "Sondertilgung möglich",
      },
      {
        icon: "🎯",
        title: "Ballonfinanzierung",
        description: "Niedrige Raten mit Schlussrate",
        features: [
          "Geringe monatliche Rate",
          "Flexible Schlussrate",
          "3-Wege-Finanzierung",
        ],
        primaryValue: "ab 159 €/Monat",
        laufzeit: "24-60 Monate",
        secondaryValue: "Schlussrate ab 30%",
      },
      {
        icon: "📈",
        title: "0%-Finanzierung",
        description: "Zinsfrei finanzieren bei ausgewählten Modellen",
        features: ["0% Zinsen", "Keine versteckten Kosten", "Begrenzte Aktion"],
        primaryValue: "0% Zinsen",
        laufzeit: "12-36 Monate",
        secondaryValue: "Nur bei Neuwagen",
      },
      {
        icon: "🔒",
        title: "Restwert-Garantie",
        description: "Finanzierung mit Restwert-Absicherung",
        features: [
          "Garantierter Restwert",
          "Schutz vor Wertverlust",
          "Planbare Kosten",
        ],
        primaryValue: "ab 3,4% eff. Jahreszins",
        laufzeit: "24-48 Monate",
        secondaryValue: "Bis zu 60% Restwert",
      },
    ],
    garantie: [
      {
        icon: "🛡️",
        title: "Vollschutz-Garantie",
        description: "Umfassende Garantieverlängerung",
        features: ["Motor & Getriebe", "Elektronik", "Klimaanlage"],
        primaryValue: "ab 29 €/Monat",
        laufzeit: "bis zu 5 Jahre",
        secondaryValue: "Europaweit gültig",
      },
      {
        icon: "🔧",
        title: "Mobilitäts-Garantie",
        description: "Sicherheit und Mobilität garantiert",
        features: ["24h Pannenhilfe", "Ersatzfahrzeug", "Abschleppdienst"],
        primaryValue: "ab 19 €/Monat",
        laufzeit: "bis zu 7 Jahre",
        secondaryValue: "Auch im Ausland",
      },
      {
        icon: "💎",
        title: "Lack- & Innenraum-Schutz",
        description: "Werterhaltung für Ihr Fahrzeug",
        features: ["Lackversiegelung", "Polsterreinigung", "Steinschlagschutz"],
        primaryValue: "ab 15 €/Monat",
        laufzeit: "bis zu 3 Jahre",
        secondaryValue: "Professionelle Aufbereitung",
      },
      {
        icon: "⚙️",
        title: "Verschleiß-Garantie",
        description: "Schutz vor hohen Reparaturkosten",
        features: [
          "Bremsen & Kupplung",
          "Reifen & Batterie",
          "Verschleißteile",
        ],
        primaryValue: "ab 22 €/Monat",
        laufzeit: "bis zu 4 Jahre",
        secondaryValue: "Originalteile garantiert",
      },
    ],
  };

  const categoryLabels = {
    leasing: "Leasing",
    finanzierung: "Finanzierung",
    garantie: "Garantie & Service",
  };

  return (
    <>
      {/* Category Navigation */}
      <div className="angebote-stock-navigation">
        <div className="angebote-categories">
          <div className="angebote-nav">
            <div
              className={`angebote-item ${
                activeCategory === "leasing" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("leasing")}
            >
              <span className="nav-label">Leasing</span>
            </div>
            <div
              className={`angebote-item ${
                activeCategory === "finanzierung" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("finanzierung")}
            >
              <span className="nav-label">Finanzierung</span>
            </div>
            <div
              className={`angebote-item ${
                activeCategory === "garantie" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("garantie")}
            >
              <span className="nav-label">Garantie</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="angebote-grid">
          {isMobile ? (
            // Mobile Swiper Structure
            <div className="swiper-container-angebote">
              {angeboteData[activeCategory].map((angebot, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="angebot-card"
                >
                  <div className="angebot-card__wrapper">
                    <div className="angebot-card__header">
                      <div className="angebot-card__icon">{angebot.icon}</div>
                      <div className="angebot-card__title">{angebot.title}</div>
                    </div>
                    <div className="angebot-card__content">
                      <div className="angebot-card__description">
                        {angebot.description}
                      </div>
                      <div className="angebot-card__features">
                        {angebot.features.map((feature, featIndex) => (
                          <div key={featIndex} className="feature-item">
                            <span className="feature-check">✓</span>
                            <span className="feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="angebot-card__details">
                        <div className="detail-item">
                          <span className="detail-label">
                            {activeCategory === "garantie"
                              ? "Preis:"
                              : activeCategory === "finanzierung"
                              ? "Zinssatz:"
                              : "Rate:"}
                          </span>
                          <span className="detail-value">
                            {angebot.primaryValue}
                          </span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Laufzeit:</span>
                          <span className="detail-value">
                            {angebot.laufzeit}
                          </span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">
                            {activeCategory === "leasing"
                              ? "Kilometer:"
                              : activeCategory === "finanzierung"
                              ? "Besonderheit:"
                              : "Besonderheit:"}
                          </span>
                          <span className="detail-value">
                            {angebot.secondaryValue}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop Grid Structure
            angeboteData[activeCategory].map((angebot, index) => (
              <div key={`${activeCategory}-${index}`} className="angebot-card">
                <div className="angebot-card__wrapper">
                  <div className="angebot-card__header">
                    <div className="angebot-card__icon">{angebot.icon}</div>
                    <div className="angebot-card__title">{angebot.title}</div>
                  </div>
                  <div className="angebot-card__content">
                    <div className="angebot-card__description">
                      {angebot.description}
                    </div>
                    <div className="angebot-card__features">
                      {angebot.features.map((feature, featIndex) => (
                        <div key={featIndex} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="angebot-card__details">
                      <div className="detail-item">
                        <span className="detail-label">
                          {activeCategory === "garantie"
                            ? "Preis:"
                            : activeCategory === "finanzierung"
                            ? "Zinssatz:"
                            : "Rate:"}
                        </span>
                        <span className="detail-value">
                          {angebot.primaryValue}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Laufzeit:</span>
                        <span className="detail-value">{angebot.laufzeit}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">
                          {activeCategory === "leasing"
                            ? "Kilometer:"
                            : activeCategory === "finanzierung"
                            ? "Besonderheit:"
                            : "Besonderheit:"}
                        </span>
                        <span className="detail-value">
                          {angebot.secondaryValue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Angebote;
