import React from 'react';
import '../../Styles/pages/werkstatt/_klimaelektro.scss';

const KlimaElektro: React.FC = () => {
  return (
    <section className="klimaelektro-section" aria-labelledby="klimaelektro-heading">
      {/* Background effects */}
      <div className="klimaelektro-section__background" aria-hidden="true">
        <span className="klimaelektro-section__glow klimaelektro-section__glow--left" />
        <span className="klimaelektro-section__glow klimaelektro-section__glow--right" />
      </div>

      <div className="klimaelektro-section__container">
        {/* Breadcrumb Navigation */}
        <nav className="klimaelektro-section__breadcrumb" aria-label="Breadcrumb Navigation">
          <ol className="klimaelektro-section__breadcrumb-list">
            <li className="klimaelektro-section__breadcrumb-item">
              <a href="/werkstatt" className="klimaelektro-section__breadcrumb-link">
                Werkstatt & Service
              </a>
            </li>
            <li className="klimaelektro-section__breadcrumb-separator" aria-hidden="true">
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
            <li className="klimaelektro-section__breadcrumb-item klimaelektro-section__breadcrumb-item--current">
              <span
                className="klimaelektro-section__breadcrumb-current"
                aria-current="page"
              >
                Klima- & Elektronik
              </span>
            </li>
          </ol>
        </nav>

        <div className="klimaelektro-section__content">
          {/* --- Intro copy: greeting, USP and CTA --- */}
          <div className="klimaelektro-section__intro">
            <span className="klimaelektro-section__badge">
              Klima Kompetenz
              <span
                className="klimaelektro-section__badge-dot"
                aria-hidden="true"
              />
            </span>
            <h1
              id="klimaelektro-heading"
              className="klimaelektro-section__title"
            >
              Klima- & Elektronik
            </h1>
            <p className="klimaelektro-section__lead">
              Klimaanlagen-Service und Elektronik-Diagnose aus einer Hand.
            </p>
            <p className="klimaelektro-section__description">
              Moderne Fahrzeuge verfügen über komplexe Klimaanlagen und Elektronik-Systeme, die regelmäßige 
              Wartung benötigen. Unsere Spezialisten führen professionelle Klimaservice-Arbeiten durch und 
              diagnostizieren elektronische Probleme mit modernster Technik. Von der Klimaanlagen-Wartung 
              bis zur Elektronik-Reparatur – wir sorgen für optimale Funktionalität.
            </p>
            <div className="klimaelektro-section__actions">
              <button
                type="button"
                className="klimaelektro-section__cta"
                aria-label="Jetzt Service buchen"
              >
                Jetzt Service buchen
                <svg
                  className="klimaelektro-section__cta-icon"
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
          <div className="klimaelektro-section__features">
            <div className="klimaelektro-section__feature-card">
              <div className="klimaelektro-section__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="klimaelektro-section__feature-title">Klimaanlagen-Service</h3>
              <p className="klimaelektro-section__feature-text">
                Kompletter Service für Klimaanlagen inkl. Reinigung, Desinfektion und Kältemittel-Check
              </p>
            </div>

            <div className="klimaelektro-section__feature-card">
              <div className="klimaelektro-section__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="klimaelektro-section__feature-title">Elektronik-Diagnose</h3>
              <p className="klimaelektro-section__feature-text">
                Modernste Diagnosegeräte für alle elektronischen Fahrzeugsysteme
              </p>
            </div>

            <div className="klimaelektro-section__feature-card">
              <div className="klimaelektro-section__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="klimaelektro-section__feature-title">Zertifizierte Technik</h3>
              <p className="klimaelektro-section__feature-text">
                Alle Arbeiten werden mit herstellerzertifizierten Geräten durchgeführt
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="klimaelektro-section__pricing">
            <div className="klimaelektro-section__pricing-header">
              <h2 className="klimaelektro-section__pricing-title">Klima & Elektronik Preise</h2>
              <p className="klimaelektro-section__pricing-subtitle">
                Faire Preise für professionellen Service
              </p>
            </div>

            <div className="klimaelektro-section__pricing-grid">
              {/* Klimaanlagen-Service */}
              <div className="klimaelektro-section__pricing-card">
                <div className="klimaelektro-section__pricing-card-header">
                  <h3 className="klimaelektro-section__pricing-card-title">Klimaanlagen-Service</h3>
                  <p className="klimaelektro-section__pricing-card-subtitle">Wartung & Reparatur</p>
                </div>
                <div className="klimaelektro-section__pricing-card-content">
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Klimaanlagen-Inspektion</span>
                    <span className="klimaelektro-section__pricing-price">49,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Kältemittel auffüllen</span>
                    <span className="klimaelektro-section__pricing-price">89,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Klimaanlagen-Reinigung</span>
                    <span className="klimaelektro-section__pricing-price">119,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Desinfektion & Ozon</span>
                    <span className="klimaelektro-section__pricing-price">79,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Kompressor-Reparatur</span>
                    <span className="klimaelektro-section__pricing-price">ab 299,90 €</span>
                  </div>
                </div>
              </div>

              {/* Elektronik-Diagnose */}
              <div className="klimaelektro-section__pricing-card">
                <div className="klimaelektro-section__pricing-card-header">
                  <h3 className="klimaelektro-section__pricing-card-title">Elektronik-Diagnose</h3>
                  <p className="klimaelektro-section__pricing-card-subtitle">Fehlersuche & Analyse</p>
                </div>
                <div className="klimaelektro-section__pricing-card-content">
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Fahrzeug-Diagnose</span>
                    <span className="klimaelektro-section__pricing-price">69,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Motor-Steuergerät</span>
                    <span className="klimaelektro-section__pricing-price">89,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">ABS/ESP Diagnose</span>
                    <span className="klimaelektro-section__pricing-price">79,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Airbag-System</span>
                    <span className="klimaelektro-section__pricing-price">99,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Software-Update</span>
                    <span className="klimaelektro-section__pricing-price">149,90 €</span>
                  </div>
                </div>
              </div>

              {/* Service-Pakete */}
              <div className="klimaelektro-section__pricing-card klimaelektro-section__pricing-card--highlight">
                <div className="klimaelektro-section__pricing-card-header">
                  <div className="klimaelektro-section__pricing-card-badge">Empfohlen</div>
                  <h3 className="klimaelektro-section__pricing-card-title">Service-Pakete</h3>
                  <p className="klimaelektro-section__pricing-card-subtitle">Kombinierte Services</p>
                </div>
                <div className="klimaelektro-section__pricing-card-content">
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Klima-Komplett-Service</span>
                    <span className="klimaelektro-section__pricing-price">
                      <span className="klimaelektro-section__pricing-old">259,70 €</span>
                      199,90 €
                    </span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Elektronik-Check gesamt</span>
                    <span className="klimaelektro-section__pricing-price">
                      <span className="klimaelektro-section__pricing-old">339,60 €</span>
                      279,90 €
                    </span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Winter-Service-Paket</span>
                    <span className="klimaelektro-section__pricing-price">169,90 €</span>
                  </div>
                  <div className="klimaelektro-section__pricing-item">
                    <span className="klimaelektro-section__pricing-service">Express-Diagnose</span>
                    <span className="klimaelektro-section__pricing-price">+ 39,90 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="klimaelektro-section__additional">
              <h3 className="klimaelektro-section__additional-title">Weitere Services</h3>
              <div className="klimaelektro-section__additional-grid">
                <div className="klimaelektro-section__additional-item">
                  <span className="klimaelektro-section__additional-service">Batterie-Test & Wechsel</span>
                  <span className="klimaelektro-section__additional-price">ab 89,90 €</span>
                </div>
                <div className="klimaelektro-section__additional-item">
                  <span className="klimaelektro-section__additional-service">Lichtmaschinen-Prüfung</span>
                  <span className="klimaelektro-section__additional-price">49,90 €</span>
                </div>
                <div className="klimaelektro-section__additional-item">
                  <span className="klimaelektro-section__additional-service">Anlasser-Reparatur</span>
                  <span className="klimaelektro-section__additional-price">ab 199,90 €</span>
                </div>
                <div className="klimaelektro-section__additional-item">
                  <span className="klimaelektro-section__additional-service">Kabelbaum-Reparatur</span>
                  <span className="klimaelektro-section__additional-price">ab 149,90 €</span>
                </div>
                <div className="klimaelektro-section__additional-item">
                  <span className="klimaelektro-section__additional-service">Steuergerät-Codierung</span>
                  <span className="klimaelektro-section__additional-price">119,90 €</span>
                </div>
                <div className="klimaelektro-section__additional-item">
                  <span className="klimaelektro-section__additional-service">Infotainment-Update</span>
                  <span className="klimaelektro-section__additional-price">79,90 €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="klimaelektro-section__info">
            <div className="klimaelektro-section__info-content">
              <h4 className="klimaelektro-section__info-title">Service-Informationen</h4>
              <ul className="klimaelektro-section__info-list">
                <li>Alle Preise verstehen sich inkl. der gesetzlichen MwSt.</li>
                <li>Verwendung von Originalersatzteilen und zugelassenen Kältemitteln</li>
                <li>Herstellerzertifizierte Diagnosegeräte für alle Fahrzeugmarken</li>
                <li>Kostenlose Funktionsprüfung nach jeder Reparatur</li>
                <li>2 Jahre Garantie auf alle durchgeführten Arbeiten</li>
                <li>Umweltgerechte Entsorgung von Kältemitteln und Altteilen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlimaElektro;
