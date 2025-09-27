import React from 'react';
import '../../Styles/pages/werkstatt/_reifenservice.scss';

const Reifenservice: React.FC = () => {
  return (
    <section
      className="reifenservice-section"
      aria-labelledby="reifenservice-heading"
    >
      {/* --- Decorative backdrop and spacing wrapper --- */}
      <div className="reifenservice-section__background" aria-hidden="true">
        <span className="reifenservice-section__glow reifenservice-section__glow--left" />
        <span className="reifenservice-section__glow reifenservice-section__glow--right" />
      </div>

      {/* --- Content container aligns with hero grid rhythm --- */}
      <div className="reifenservice-section__container">
        {/* --- Breadcrumb Navigation --- */}
        <nav
          className="reifenservice-section__breadcrumb"
          aria-label="Breadcrumb Navigation"
        >
          <ol className="reifenservice-section__breadcrumb-list">
            <li className="reifenservice-section__breadcrumb-item">
              <a
                href="/werkstatt"
                className="reifenservice-section__breadcrumb-link"
              >
                Werkstatt & Service
              </a>
            </li>
            <li
              className="reifenservice-section__breadcrumb-separator"
              aria-hidden="true"
            >
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
            <li className="reifenservice-section__breadcrumb-item reifenservice-section__breadcrumb-item--current">
              <span
                className="reifenservice-section__breadcrumb-current"
                aria-current="page"
              >
                Reifenservice
              </span>
            </li>
          </ol>
        </nav>

        <div className="reifenservice-section__content">
          {/* --- Intro copy: greeting, USP and CTA --- */}
          <div className="reifenservice-section__intro">
            <span className="reifenservice-section__badge">
              Reifenservice Kompetenz
              <span
                className="reifenservice-section__badge-dot"
                aria-hidden="true"
              />
            </span>
            <h1
              id="reifenservice-heading"
              className="reifenservice-section__title"
            >
              Reifenservice
            </h1>
            <p className="reifenservice-section__lead">
              Kompletter Reifenservice von Beratung bis Montage.
            </p>
            <p className="reifenservice-section__description">
              Professionelle Reifenmontage, Wuchtung und Lagerung mit modernster
              Technik. Von der kompetenten Beratung bis zur fachgerechten
              Montage - wir sind Ihr zuverlässiger Partner für alle
              Reifenangelegenheiten.
            </p>
            <div className="reifenservice-section__actions">
              <button
                type="button"
                className="reifenservice-section__cta"
                aria-label="Jetzt Termin vereinbaren"
              >
                Jetzt Termin vereinbaren
                <svg
                  className="reifenservice-section__cta-icon"
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

          {/* --- Media + service promise card --- */}
          <div className="reifenservice-section__media">
            <figure className="reifenservice-section__media-frame">
              <img
                className="reifenservice-section__media-image"
                src="https://schawe-shop.de/media/image/25/74/27/IMG_2646_1620.jpg"
                alt="Professionelle Reifenmontage in der Werkstatt"
                loading="lazy"
              />
              <figcaption className="reifenservice-section__media-caption">
                Moderne Reifenmontage mit Präzisionstechnik
              </figcaption>
            </figure>

            <aside
              className="reifenservice-section__card"
              aria-label="Reifenservice Garantie"
            >
              <div className="reifenservice-section__card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 7.5 10.75 16 6 11.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="reifenservice-section__card-copy">
                <p className="reifenservice-section__card-kicker">
                  Qualitätsgarantie
                </p>
                <p className="reifenservice-section__card-title">
                  Fachgerechte Montage &amp; kostenlose Einlagerung
                </p>
                <p className="reifenservice-section__card-text">
                  Alle Arbeiten werden von zertifizierten Reifenspezialisten
                  durchgeführt. Kostenlose Reifenlagerung und Garantie auf alle
                  Montagearbeiten.
                </p>
                <a
                  href="/werkstatt/reifenservice/garantie"
                  className="reifenservice-section__card-link"
                >
                  Garantiebedingungen
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 8h8m0 0-2.5-2.5M12 8l-2.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* --- Preisliste Section --- */}
        <div className="reifenservice-section__pricing">
          <div className="reifenservice-section__pricing-header">
            <h2 className="reifenservice-section__pricing-title">
              Preisliste Reifenservice
            </h2>
            <p className="reifenservice-section__pricing-subtitle">
              Transparente Preise für alle Reifendienstleistungen
            </p>
          </div>

          <div className="reifenservice-section__pricing-grid">
            {/* Montage & Demontage */}
            <div className="reifenservice-section__pricing-category">
              <h3 className="reifenservice-section__category-title">
                Montage & Demontage
              </h3>
              <div className="reifenservice-section__price-list">
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifenwechsel (4 Räder)
                  </span>
                  <span className="reifenservice-section__price">
                    ab 25,00 €
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifenmontage inkl. Wuchtung
                  </span>
                  <span className="reifenservice-section__price">
                    ab 15,00 € / Rad
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Ventil erneuern
                  </span>
                  <span className="reifenservice-section__price">
                    ab 5,00 € / Stück
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    RDKS-Programmierung
                  </span>
                  <span className="reifenservice-section__price">
                    ab 12,00 € / Sensor
                  </span>
                </div>
              </div>
            </div>

            {/* Reparatur & Service */}
            <div className="reifenservice-section__pricing-category">
              <h3 className="reifenservice-section__category-title">
                Reparatur & Service
              </h3>
              <div className="reifenservice-section__price-list">
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifenreparatur
                  </span>
                  <span className="reifenservice-section__price">
                    ab 20,00 €
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Nachfüllen Reifendruck
                  </span>
                  <span className="reifenservice-section__price">
                    kostenfrei
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifenprofil-Check
                  </span>
                  <span className="reifenservice-section__price">
                    kostenfrei
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Rad-Auswuchtung
                  </span>
                  <span className="reifenservice-section__price">
                    ab 8,00 € / Rad
                  </span>
                </div>
              </div>
            </div>

            {/* Lagerung & Zusatzleistungen */}
            <div className="reifenservice-section__pricing-category">
              <h3 className="reifenservice-section__category-title">
                Lagerung & Extras
              </h3>
              <div className="reifenservice-section__price-list">
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifenlagerung (6 Monate)
                  </span>
                  <span className="reifenservice-section__price">
                    kostenfrei*
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifenlagerung (12 Monate)
                  </span>
                  <span className="reifenservice-section__price">
                    ab 60,00 €
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Reifentransport & Entsorgung
                  </span>
                  <span className="reifenservice-section__price">
                    ab 15,00 €
                  </span>
                </div>
                <div className="reifenservice-section__price-item">
                  <span className="reifenservice-section__service-name">
                    Kompletter Rädersatz-Service
                  </span>
                  <span className="reifenservice-section__price">
                    ab 99,00 €
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="reifenservice-section__pricing-note">
            <p>
              * Bei Kauf der Reifen bei uns. Alle Preise inkl. MwSt. Änderungen
              vorbehalten.
            </p>
            <p>
              Gerne erstellen wir Ihnen ein individuelles Angebot für Ihre
              Anforderungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reifenservice;
