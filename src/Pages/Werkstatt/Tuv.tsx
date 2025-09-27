import React from 'react';
import '../../Styles/pages/werkstatt/_tuv.scss';

const Tuv: React.FC = () => {
  return (
    <section className="tuv-section" aria-labelledby="tuv-heading">
      {/* Background effects */}
      <div className="tuv-section__background" aria-hidden="true">
        <span className="tuv-section__glow tuv-section__glow--left" />
        <span className="tuv-section__glow tuv-section__glow--right" />
      </div>

      <div className="tuv-section__container">
        {/* Breadcrumb Navigation */}
        <nav className="tuv-section__breadcrumb" aria-label="Breadcrumb Navigation">
          <ol className="tuv-section__breadcrumb-list">
            <li className="tuv-section__breadcrumb-item">
              <a href="/werkstatt" className="tuv-section__breadcrumb-link">
                Werkstatt & Service
              </a>
            </li>
            <li className="tuv-section__breadcrumb-separator" aria-hidden="true">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="tuv-section__breadcrumb-item tuv-section__breadcrumb-item--current">
              <span
                className="tuv-section__breadcrumb-current"
                aria-current="page"
              >
                TÜV & HU-Service
              </span>
            </li>
          </ol>
        </nav>

        <div className="tuv-section__content">
          {/* --- Intro copy: greeting, USP and CTA --- */}
          <div className="tuv-section__intro">
            <span className="tuv-section__badge">
              TÜV Kompetenz
              <span
                className="tuv-section__badge-dot"
                aria-hidden="true"
              />
            </span>
            <h1
              id="tuv-heading"
              className="tuv-section__title"
            >
              TÜV & HU-Service
            </h1>
            <p className="tuv-section__lead">
              Hauptuntersuchung und Abgasuntersuchung schnell und zuverlässig.
            </p>
            <p className="tuv-section__description">
              Als anerkannte Kfz-Prüfstelle bieten wir Ihnen den kompletten TÜV-Service aus einer Hand. 
              Unsere zertifizierten Prüfingenieure führen die Hauptuntersuchung (HU) und Abgasuntersuchung (AU) 
              professionell und termingerecht durch. Sollten Mängel festgestellt werden, kümmern wir uns 
              selbstverständlich auch um die fachgerechte Reparatur.
            </p>
            <div className="tuv-section__actions">
              <button
                type="button"
                className="tuv-section__cta"
                aria-label="Jetzt Termin vereinbaren"
              >
                Jetzt Termin vereinbaren
                <svg
                  className="tuv-section__cta-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 10h10m0 0-3.5-3.5M15 10l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Service Features */}
          <div className="tuv-section__features">
            <div className="tuv-section__feature-card">
              <div className="tuv-section__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="tuv-section__feature-title">Anerkannte Prüfstelle</h3>
              <p className="tuv-section__feature-text">
                Offiziell anerkannte Kfz-Prüfstelle mit zertifizierten Prüfingenieuren
              </p>
            </div>

            <div className="tuv-section__feature-card">
              <div className="tuv-section__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="tuv-section__feature-title">Schnelle Abwicklung</h3>
              <p className="tuv-section__feature-text">
                Termine meist noch am gleichen Tag, ohne lange Wartezeiten
              </p>
            </div>

            <div className="tuv-section__feature-card">
              <div className="tuv-section__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="tuv-section__feature-title">Reparatur inklusive</h3>
              <p className="tuv-section__feature-text">
                Bei Mängeln kümmern wir uns direkt um die fachgerechte Reparatur
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="tuv-section__pricing">
            <div className="tuv-section__pricing-header">
              <h2 className="tuv-section__pricing-title">TÜV & HU Preise</h2>
              <p className="tuv-section__pricing-subtitle">
                Transparente Preise ohne versteckte Kosten
              </p>
            </div>

            <div className="tuv-section__pricing-grid">
              {/* Hauptuntersuchung */}
              <div className="tuv-section__pricing-card">
                <div className="tuv-section__pricing-card-header">
                  <h3 className="tuv-section__pricing-card-title">Hauptuntersuchung</h3>
                  <p className="tuv-section__pricing-card-subtitle">HU nach §29 StVZO</p>
                </div>
                <div className="tuv-section__pricing-card-content">
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">PKW bis 3,5t</span>
                    <span className="tuv-section__pricing-price">89,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Motorrad</span>
                    <span className="tuv-section__pricing-price">65,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Anhänger bis 750kg</span>
                    <span className="tuv-section__pricing-price">45,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Anhänger über 750kg</span>
                    <span className="tuv-section__pricing-price">65,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Wohnmobil bis 7,5t</span>
                    <span className="tuv-section__pricing-price">125,90 €</span>
                  </div>
                </div>
              </div>

              {/* Abgasuntersuchung */}
              <div className="tuv-section__pricing-card">
                <div className="tuv-section__pricing-card-header">
                  <h3 className="tuv-section__pricing-card-title">Abgasuntersuchung</h3>
                  <p className="tuv-section__pricing-card-subtitle">AU nach §47a StVZO</p>
                </div>
                <div className="tuv-section__pricing-card-content">
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Benzinmotor (OBD)</span>
                    <span className="tuv-section__pricing-price">45,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Dieselmotor (OBD)</span>
                    <span className="tuv-section__pricing-price">55,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Benzin ohne OBD</span>
                    <span className="tuv-section__pricing-price">35,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Diesel ohne OBD</span>
                    <span className="tuv-section__pricing-price">42,90 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Motorrad</span>
                    <span className="tuv-section__pricing-price">28,90 €</span>
                  </div>
                </div>
              </div>

              {/* Kombi-Pakete */}
              <div className="tuv-section__pricing-card tuv-section__pricing-card--highlight">
                <div className="tuv-section__pricing-card-header">
                  <div className="tuv-section__pricing-card-badge">Empfohlen</div>
                  <h3 className="tuv-section__pricing-card-title">Kombi-Pakete</h3>
                  <p className="tuv-section__pricing-card-subtitle">HU + AU zusammen sparen</p>
                </div>
                <div className="tuv-section__pricing-card-content">
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">PKW HU + AU (OBD)</span>
                    <span className="tuv-section__pricing-price">
                      <span className="tuv-section__pricing-old">135,80 €</span>
                      119,90 €
                    </span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Motorrad HU + AU</span>
                    <span className="tuv-section__pricing-price">
                      <span className="tuv-section__pricing-old">94,80 €</span>
                      84,90 €
                    </span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Express-Service (same day)</span>
                    <span className="tuv-section__pricing-price">+ 25,00 €</span>
                  </div>
                  <div className="tuv-section__pricing-item">
                    <span className="tuv-section__pricing-service">Nachuntersuchung</span>
                    <span className="tuv-section__pricing-price">25,90 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="tuv-section__additional">
              <h3 className="tuv-section__additional-title">Zusätzliche Services</h3>
              <div className="tuv-section__additional-grid">
                <div className="tuv-section__additional-item">
                  <span className="tuv-section__additional-service">Änderungsabnahme</span>
                  <span className="tuv-section__additional-price">ab 89,90 €</span>
                </div>
                <div className="tuv-section__additional-item">
                  <span className="tuv-section__additional-service">Einzelabnahme</span>
                  <span className="tuv-section__additional-price">ab 125,90 €</span>
                </div>
                <div className="tuv-section__additional-item">
                  <span className="tuv-section__additional-service">Kfz-Brief Änderung</span>
                  <span className="tuv-section__additional-price">35,00 €</span>
                </div>
                <div className="tuv-section__additional-item">
                  <span className="tuv-section__additional-service">TÜV-Report</span>
                  <span className="tuv-section__additional-price">15,00 €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="tuv-section__info">
            <div className="tuv-section__info-content">
              <h4 className="tuv-section__info-title">Wichtige Hinweise</h4>
              <ul className="tuv-section__info-list">
                <li>Alle Preise verstehen sich inkl. der gesetzlichen MwSt.</li>
                <li>Bei Überziehung der TÜV-Frist können Zusatzkosten entstehen</li>
                <li>Termine erhalten Sie meist noch am gleichen Tag</li>
                <li>Mängelbeseitigung wird direkt in unserer Werkstatt durchgeführt</li>
                <li>Kostenvoranschlag für Reparaturen ist kostenlos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tuv;
