import React from "react";
import { Link } from "react-router-dom";

// Chevron Right Icon Component
const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// Phone Icon Component
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

// Wrench Icon Component
const WrenchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Calendar Icon Component
const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// Shield Check Icon Component
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

// Truck Icon Component
const TruckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
    />
  </svg>
);

const UnfallKarosserie: React.FC = () => {
  return (
    <section className="unfallkarosserie-section">
      {/* Background Effects */}
      <div className="unfallkarosserie-section__background">
        <div className="unfallkarosserie-section__glow unfallkarosserie-section__glow--left"></div>
        <div className="unfallkarosserie-section__glow unfallkarosserie-section__glow--right"></div>
      </div>

      <div className="unfallkarosserie-section__container">
        {/* Breadcrumb Navigation */}
        <nav
          className="unfallkarosserie-section__breadcrumb"
          aria-label="Breadcrumb"
        >
          <ul className="unfallkarosserie-section__breadcrumb-list">
            <li className="unfallkarosserie-section__breadcrumb-item">
              <Link
                to="/"
                className="unfallkarosserie-section__breadcrumb-link"
              >
                Home
              </Link>
            </li>
            <li className="unfallkarosserie-section__breadcrumb-item">
              <span className="unfallkarosserie-section__breadcrumb-separator">
                <ChevronRightIcon />
              </span>
            </li>
            <li className="unfallkarosserie-section__breadcrumb-item">
              <Link
                to="/werkstatt"
                className="unfallkarosserie-section__breadcrumb-link"
              >
                Werkstatt
              </Link>
            </li>
            <li className="unfallkarosserie-section__breadcrumb-item">
              <span className="unfallkarosserie-section__breadcrumb-separator">
                <ChevronRightIcon />
              </span>
            </li>
            <li className="unfallkarosserie-section__breadcrumb-item">
              <span className="unfallkarosserie-section__breadcrumb-current">
                Unfall & Karosserie
              </span>
            </li>
          </ul>
        </nav>

        {/* Main Content Grid */}
        <div className="unfallkarosserie-section__content">
          {/* Intro Column */}
          <div className="unfallkarosserie-section__intro">
            <div className="unfallkarosserie-section__badge">
              <span className="unfallkarosserie-section__badge-dot"></span>
              Unfall & Karosserie Service
            </div>

            <h1 className="unfallkarosserie-section__title">
              Professionelle Unfallreparatur & Karosseriearbeiten
            </h1>

            <p className="unfallkarosserie-section__lead">
              Nach einem Unfall sind Sie bei uns in den besten Händen. Unsere
              Experten kümmern sich um alle Karosseriearbeiten und bringen Ihr
              Fahrzeug wieder in den Originalzustand.
            </p>

            <p className="unfallkarosserie-section__description">
              Von der Schadensaufnahme bis zur finalen Lackierung – wir bieten
              Ihnen den kompletten Service aus einer Hand. Mit modernster
              Technik und jahrelanger Erfahrung sorgen wir dafür, dass Ihr
              Fahrzeug wieder wie neu aussieht und alle Sicherheitsstandards
              erfüllt.
            </p>

            <div className="unfallkarosserie-section__actions">
              <Link to="/kontakt" className="unfallkarosserie-section__cta">
                <PhoneIcon className="unfallkarosserie-section__cta-icon" />
                Termin vereinbaren
              </Link>
            </div>
          </div>

          {/* Media Column */}
          <div className="unfallkarosserie-section__media">
            <figure className="unfallkarosserie-section__media-frame">
              <img
                src="https://img.freepik.com/fotos-premium/auto-karosserie-spezialist-repariert-fleissig-geballte-auto-fenders-fuer-eine-fehlerlose-restaurierung-konzept-auto-karosserie-reparatur-geballte-fenders-restaurierung-fehlloses-finish-spezialistarbeit_864588-193070.jpg"
                alt="Professionelle Karosseriearbeiten in unserer Werkstatt"
                className="unfallkarosserie-section__media-image"
              />
              <figcaption className="unfallkarosserie-section__media-caption">
                Moderne Karosseriehalle mit neuester Technik
              </figcaption>
            </figure>

            <div className="unfallkarosserie-section__card">
              <div className="unfallkarosserie-section__card-icon">
                <ShieldCheckIcon />
              </div>
              <div className="unfallkarosserie-section__card-copy">
                <h3 className="unfallkarosserie-section__card-kicker">
                  Garantie
                </h3>
                <h4 className="unfallkarosserie-section__card-title">
                  5 Jahre Lackgarantie
                </h4>
                <p className="unfallkarosserie-section__card-text">
                  Wir stehen für Qualität ein und geben 5 Jahre Garantie auf
                  alle Lackierarbeiten.
                </p>
                <Link
                  to="/garantie"
                  className="unfallkarosserie-section__card-link"
                >
                  Mehr erfahren <ChevronRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Pricing Section */}
        <div className="unfallkarosserie-section__pricing">
          <header className="unfallkarosserie-section__pricing-header">
            <h2 className="unfallkarosserie-section__pricing-title">
              Unsere Preise für Unfall & Karosseriearbeiten
            </h2>
            <p className="unfallkarosserie-section__pricing-subtitle">
              Transparente Preise für professionelle Karosseriearbeiten und
              Unfallreparaturen. Alle Preise verstehen sich inklusive Material
              und Arbeitszeit.
            </p>
          </header>

          <div className="unfallkarosserie-section__pricing-grid">
            {/* Karosseriearbeiten & Lackierung */}
            <div className="unfallkarosserie-section__pricing-category">
              <h3 className="unfallkarosserie-section__category-title">
                <WrenchIcon className="unfallkarosserie-section__cta-icon" />
                Karosseriearbeiten & Lackierung
              </h3>
              <div className="unfallkarosserie-section__price-list">
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Delle ausbeulen (klein)
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 45€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Delle ausbeulen (groß)
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 85€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Kratzer entfernen (Spot-Repair)
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 125€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Bauteil teillackieren
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 180€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Bauteil komplett lackieren
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 280€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Stoßstange lackieren
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 350€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Motorhaube lackieren
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 420€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Komplettlackierung
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 2.500€
                  </span>
                </div>
              </div>
            </div>

            {/* Unfallreparatur & Austausch */}
            <div className="unfallkarosserie-section__pricing-category">
              <h3 className="unfallkarosserie-section__category-title">
                <TruckIcon className="unfallkarosserie-section__cta-icon" />
                Unfallreparatur & Austausch
              </h3>
              <div className="unfallkarosserie-section__price-list">
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Schadensgutachten
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 150€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Stoßstange ersetzen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 320€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Kotflügel ersetzen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 450€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Tür ersetzen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 550€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Scheinwerfer ersetzen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 280€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Windschutzscheibe ersetzen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 380€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Richtarbeiten Karosserie
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 200€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Schweißarbeiten
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 120€/h
                  </span>
                </div>
              </div>
            </div>

            {/* Service & Zusatzleistungen */}
            <div className="unfallkarosserie-section__pricing-category">
              <h3 className="unfallkarosserie-section__category-title">
                <CalendarIcon className="unfallkarosserie-section__cta-icon" />
                Service & Zusatzleistungen
              </h3>
              <div className="unfallkarosserie-section__price-list">
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Fahrzeugabholung
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 50€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Fahrzeugzustellung
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 50€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Ersatzfahrzeug pro Tag
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 35€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Kostenvoranschlag
                  </span>
                  <span className="unfallkarosserie-section__price">
                    kostenlos
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Versicherungsabwicklung
                  </span>
                  <span className="unfallkarosserie-section__price">
                    kostenlos
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Fahrzeugreinigung innen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 45€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Fahrzeugwäsche außen
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 25€
                  </span>
                </div>
                <div className="unfallkarosserie-section__price-item">
                  <span className="unfallkarosserie-section__service-name">
                    Fahrzeugaufbereitung komplett
                  </span>
                  <span className="unfallkarosserie-section__price">
                    ab 180€
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="unfallkarosserie-section__pricing-note">
            <p>
              <strong>Wichtige Hinweise zu unseren Preisen:</strong>
            </p>
            <p>
              Alle angegebenen Preise sind Richtpreise und können je nach
              Fahrzeugtyp, Schadensumfang und benötigten Materialien variieren.
              Gerne erstellen wir Ihnen einen individuellen Kostenvoranschlag.
              Bei Versicherungsschäden übernehmen wir die komplette Abwicklung
              für Sie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnfallKarosserie;
