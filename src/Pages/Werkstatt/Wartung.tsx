import React from 'react';
import '../../Styles/pages/werkstatt/_wartung.scss';

const Wartung: React.FC = () => {
  return (
    <section className="wartung-section">
      {/* Background effects */}
      <div className="wartung-section__background">
        <div className="wartung-section__glow wartung-section__glow--left"></div>
        <div className="wartung-section__glow wartung-section__glow--right"></div>
      </div>

      <div className="wartung-section__container">
        <div className="wartung-section__content">
          <div className="wartung-section__intro">
            <div className="wartung-section__badge">
              <span className="wartung-section__badge-dot"></span>
              Werkstatt Service
            </div>

            <h1 className="wartung-section__title">Wartung & Reparatur</h1>

            <p className="wartung-section__lead">
              Professionelle Wartung und Reparatur für alle Fahrzeugtypen
            </p>

            <p className="wartung-section__description">
              Unsere erfahrenen Techniker sorgen dafür, dass Ihr Fahrzeug in
              bestem Zustand bleibt. Von der regelmäßigen Inspektion bis zur
              komplexen Reparatur – wir kümmern uns um alle Wartungsarbeiten mit
              modernster Technik und Originalteilen.
            </p>

            <div className="wartung-section__actions">
              <button className="wartung-section__cta">
                Jetzt Termin vereinbaren
                <svg
                  className="wartung-section__cta-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="wartung-section__media">
            <div className="wartung-section__media-frame">
              <img
                className="wartung-section__media-image"
                src="https://cdn.heimwerker.de/v2/sites/3/kfz-diagnosegeraet-mit-tablet.jpeg?d=1554x666&q=70"
                alt="Professionelle KFZ-Wartung"
              />
              <div className="wartung-section__media-caption">
                Modernste Diagnosetechnik für alle Fahrzeugmarken
              </div>
            </div>

            <div className="wartung-section__card">
              <div className="wartung-section__card-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="wartung-section__card-copy">
                <p className="wartung-section__card-kicker">
                  Qualitätsgarantie
                </p>
                <h3 className="wartung-section__card-title">
                  Zertifizierte Werkstatt
                </h3>
                <p className="wartung-section__card-text">
                  Alle Arbeiten werden nach Herstellervorgaben durchgeführt und
                  dokumentiert. Ihre Garantieansprüche bleiben vollständig
                  erhalten.
                </p>
                <a
                  href="/werkstatt/qualitaet"
                  className="wartung-section__card-link"
                >
                  Mehr erfahren
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wartung;
