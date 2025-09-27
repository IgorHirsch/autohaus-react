import React from 'react';
import { Link } from 'react-router-dom';

// Chevron Right Icon Component
const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Phone Icon Component  
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Truck Icon Component
const TruckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

// Calendar Icon Component
const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Clock Icon Component
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Map Pin Icon Component
const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Shield Check Icon Component
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const HolundBring: React.FC = () => {
  return (
    <section className="holundbring-section">
      {/* Background Effects */}
      <div className="holundbring-section__background">
        <div className="holundbring-section__glow holundbring-section__glow--left"></div>
        <div className="holundbring-section__glow holundbring-section__glow--right"></div>
      </div>

      <div className="holundbring-section__container">
        {/* Breadcrumb Navigation */}
        <nav
          className="holundbring-section__breadcrumb"
          aria-label="Breadcrumb"
        >
          <ul className="holundbring-section__breadcrumb-list">
            <li className="holundbring-section__breadcrumb-item">
              <Link to="/" className="holundbring-section__breadcrumb-link">
                Home
              </Link>
            </li>
            <li className="holundbring-section__breadcrumb-item">
              <span className="holundbring-section__breadcrumb-separator">
                <ChevronRightIcon />
              </span>
            </li>
            <li className="holundbring-section__breadcrumb-item">
              <Link
                to="/werkstatt"
                className="holundbring-section__breadcrumb-link"
              >
                Werkstatt
              </Link>
            </li>
            <li className="holundbring-section__breadcrumb-item">
              <span className="holundbring-section__breadcrumb-separator">
                <ChevronRightIcon />
              </span>
            </li>
            <li className="holundbring-section__breadcrumb-item">
              <span className="holundbring-section__breadcrumb-current">
                Hol- & Bringservice
              </span>
            </li>
          </ul>
        </nav>

        {/* Main Content Grid */}
        <div className="holundbring-section__content">
          {/* Intro Column */}
          <div className="holundbring-section__intro">
            <div className="holundbring-section__badge">
              <span className="holundbring-section__badge-dot"></span>
              Hol- & Bringservice
            </div>

            <h1 className="holundbring-section__title">
              Bequemer Hol- & Bringservice für Ihr Fahrzeug
            </h1>

            <p className="holundbring-section__lead">
              Keine Zeit für den Werkstattbesuch? Wir holen Ihr Fahrzeug bei
              Ihnen ab und bringen es nach dem Service wieder zurück. Entspannt
              und bequem.
            </p>

            <p className="holundbring-section__description">
              Unser professioneller Hol- und Bringservice erspart Ihnen Zeit und
              Aufwand. Egal ob Wartung, Reparatur oder Inspektion – wir kümmern
              uns um den Transport Ihres Fahrzeugs und Sie können sich auf Ihre
              wichtigen Termine konzentrieren.
            </p>

            <div className="holundbring-section__actions">
              <Link to="/kontakt" className="holundbring-section__cta">
                <PhoneIcon className="holundbring-section__cta-icon" />
                Service buchen
              </Link>
            </div>
          </div>

          {/* Media Column */}
          <div className="holundbring-section__media">
            <figure className="holundbring-section__media-frame">
              <img
                src="https://www.identica.at/sites/default/files/styles/mediaslide_1920x1080_/public/2021-07/ID_Service_Hol_und_Bringservice.jpg?itok=vckuCLe1"
                alt="Professioneller Hol- und Bringservice für Fahrzeuge"
                className="holundbring-section__media-image"
              />
              <figcaption className="holundbring-section__media-caption">
                Zuverlässiger Transport zu Ihrer Adresse
              </figcaption>
            </figure>

            <div className="holundbring-section__card">
              <div className="holundbring-section__card-icon">
                <ShieldCheckIcon />
              </div>
              <div className="holundbring-section__card-copy">
                <h3 className="holundbring-section__card-kicker">
                  Versicherung
                </h3>
                <h4 className="holundbring-section__card-title">
                  Vollversichert
                </h4>
                <p className="holundbring-section__card-text">
                  Ihr Fahrzeug ist während des Transports vollumfänglich
                  versichert.
                </p>
                <Link
                  to="/versicherung"
                  className="holundbring-section__card-link"
                >
                  Mehr erfahren <ChevronRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Pricing Section */}
        <div className="holundbring-section__pricing">
          <header className="holundbring-section__pricing-header">
            <h2 className="holundbring-section__pricing-title">
              Unsere Preise für Hol- & Bringservice
            </h2>
            <p className="holundbring-section__pricing-subtitle">
              Transparente Preise für unseren bequemen Hol- und Bringservice.
              Alle Preise verstehen sich inkl. MwSt. und Fahrzeugversicherung.
            </p>
          </header>

          <div className="holundbring-section__pricing-grid">
            {/* Standard Hol- & Bringservice */}
            <div className="holundbring-section__pricing-category">
              <h3 className="holundbring-section__category-title">
                <TruckIcon className="holundbring-section__cta-icon" />
                Standard Hol- & Bringservice
              </h3>
              <div className="holundbring-section__price-list">
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Innerorts (bis 10 km)
                  </span>
                  <span className="holundbring-section__price">ab 35€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Umkreis (10-25 km)
                  </span>
                  <span className="holundbring-section__price">ab 55€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Erweitert (25-50 km)
                  </span>
                  <span className="holundbring-section__price">ab 85€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Nur Abholung (einfache Fahrt)
                  </span>
                  <span className="holundbring-section__price">ab 25€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Nur Zustellung (einfache Fahrt)
                  </span>
                  <span className="holundbring-section__price">ab 25€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Wartezeit pro angefangene 15 Min
                  </span>
                  <span className="holundbring-section__price">15€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Zusätzliche Kilometer (ab 51 km)
                  </span>
                  <span className="holundbring-section__price">1,50€/km</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Express-Service (gleicher Tag)
                  </span>
                  <span className="holundbring-section__price">+25€</span>
                </div>
              </div>
            </div>

            {/* Zeitfenster & Termine */}
            <div className="holundbring-section__pricing-category">
              <h3 className="holundbring-section__category-title">
                <ClockIcon className="holundbring-section__cta-icon" />
                Zeitfenster & Termine
              </h3>
              <div className="holundbring-section__price-list">
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Standardtermin (8-17 Uhr)
                  </span>
                  <span className="holundbring-section__price">kostenlos</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Wunschtermin (2h Zeitfenster)
                  </span>
                  <span className="holundbring-section__price">+15€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Frühservice (6-8 Uhr)
                  </span>
                  <span className="holundbring-section__price">+20€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Abendservice (17-20 Uhr)
                  </span>
                  <span className="holundbring-section__price">+20€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Samstags (9-16 Uhr)
                  </span>
                  <span className="holundbring-section__price">+30€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Terminverschiebung (kurzfristig)
                  </span>
                  <span className="holundbring-section__price">15€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Schlüsselübergabe ohne Anwesenheit
                  </span>
                  <span className="holundbring-section__price">kostenlos</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    SMS/WhatsApp Statusupdates
                  </span>
                  <span className="holundbring-section__price">kostenlos</span>
                </div>
              </div>
            </div>

            {/* Spezialservices & Extras */}
            <div className="holundbring-section__pricing-category">
              <h3 className="holundbring-section__category-title">
                <MapPinIcon className="holundbring-section__cta-icon" />
                Spezialservices & Extras
              </h3>
              <div className="holundbring-section__price-list">
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Pannenhilfe vor Ort (Diagnose)
                  </span>
                  <span className="holundbring-section__price">ab 75€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Abschleppdienst
                  </span>
                  <span className="holundbring-section__price">ab 120€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Ersatzfahrzeug (pro Tag)
                  </span>
                  <span className="holundbring-section__price">ab 35€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Fahrzeugreinigung innen
                  </span>
                  <span className="holundbring-section__price">ab 45€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Fahrzeugwäsche außen
                  </span>
                  <span className="holundbring-section__price">ab 25€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Tanken vor Rückgabe
                  </span>
                  <span className="holundbring-section__price">
                    Spritpreis + 5€
                  </span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Parkplatzsuche in Innenstädten
                  </span>
                  <span className="holundbring-section__price">+10€</span>
                </div>
                <div className="holundbring-section__price-item">
                  <span className="holundbring-section__service-name">
                    Fahrzeugübergabe mit Erklärung
                  </span>
                  <span className="holundbring-section__price">kostenlos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="holundbring-section__pricing-note">
            <p>
              <strong>Wichtige Hinweise zu unserem Hol- & Bringservice:</strong>
            </p>
            <p>
              Alle Preise verstehen sich inkl. MwSt. Die Entfernung wird ab
              unserem Standort berechnet. Bei Terminen außerhalb unserer
              regulären Öffnungszeiten fallen entsprechende Aufschläge an.
              Kostenlose Stornierung bis 24h vor dem vereinbarten Termin
              möglich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolundBring;
