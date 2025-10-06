import React from "react";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <section className="home-offers" aria-labelledby="home-offers-title">
      {/* --- Ambient layer trennt die Offers von der Hero-Section --- */}
      <div className="home-offers__background" aria-hidden="true">
        <span className="home-offers__glow home-offers__glow--left" />
        <span className="home-offers__glow home-offers__glow--right" />
      </div>

      {/* --- Hauptcontainer folgt dem Layout der Willkommen-Section --- */}
      <div className="home-offers__container">
        {/* --- Section-Kopf mit Titel und USP --- */}
        <div className="home-offers__badge-row">
          <span className="home-offers__badge">
            Aktuelle Angebote
            <span className="home-offers__badge-dot" aria-hidden="true" />
          </span>
        </div>
        <header className="home-offers__header">
          <div className="home-offers__header-shell">
            <div className="home-offers__copy">
              <h2 id="home-offers-title" className="home-offers__title">
                Entdecken Sie unsere aktuellen Fahrzeug-Highlights
              </h2>
              <p className="home-offers__lead">
                Täglich kuratierte Modelle, sofort verfügbar und mit
                persönlicher Beratung – damit die Suche nach Ihrem nächsten
                Fahrzeug inspirierend und einfach bleibt.
              </p>
            </div>
          </div>
        </header>

        {/* --- Grid behält bestehende Card-Klassen und reagiert flexibel --- */}
        <div className="home-offers__grid" role="list">
          <article className="offers__card home-offers__card" role="listitem">
            <div className="offers__image-container">
              <img
                className="offers__image"
                src="https://tse3.mm.bing.net/th/id/OIP.oWnpL5BbdSjo2-koCdVvlQHaEF?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Cupra Formentor VZ Extreme 2.0 TSI"
                loading="lazy"
              />
            </div>
            <div className="offers__content">
              <h3 className="offers__content-heading">Cupra Formentor</h3>
              <p className="offers__content-subheading">VZ Extreme 2.0 TSI</p>
              <div className="offers__content-info">
                <div className="offers__content-info-duration">
                  <span className="offers__content-info-duration-text">
                    <strong>333</strong> PS
                  </span>
                </div>
                <div className="offers__content-info-level">
                  <span className="offers__content-info-duration-text">
                    8,9 L/100 km
                  </span>
                </div>
              </div>
              <div className="offers__content-price-container">
                Monatsrate ab
                <strong className="offers__content-price">299 €</strong>
              </div>
            </div>
            <div className="offers__card-hover">
              <a
                href="/kontakt"
                className="home-offers__cta button contact-button button--slim"
                data-probefahrt-open="true"
              >
                Probefahrt anfragen
              </a>
            </div>
          </article>

          <article className="offers__card home-offers__card" role="listitem">
            <div className="offers__image-container">
              <img
                className="offers__image"
                src="https://th.bing.com/th/id/R.73741b681e2212bead9ffcfe1a4d96f6?rik=zl9OBvTxtCMo6w&pid=ImgRaw&r=0"
                alt="Nissan Ariya Evolve Pack Elektro"
                loading="lazy"
              />
            </div>
            <div className="offers__content">
              <h3 className="offers__content-heading">Nissan Ariya</h3>
              <p className="offers__content-subheading">
                Evolve Pack | Elektro
              </p>
              <div className="offers__content-info">
                <div className="offers__content-info-duration">
                  <span className="offers__content-info-duration-text">
                    <strong>160</strong> kW
                  </span>
                </div>
                <div className="offers__content-info-level">
                  <span className="offers__content-info-duration-text">
                    63 kWh Akku
                  </span>
                </div>
              </div>
              <div className="offers__content-price-container">
                Leasing ab
                <strong className="offers__content-price">249 €</strong>
              </div>
            </div>
            <div className="offers__card-hover">
              <a
                href="/kontakt"
                className="home-offers__cta button contact-button button--slim"
                data-probefahrt-open="true"
              >
                Beratung sichern
              </a>
            </div>
          </article>

          {/* <article
            className="werbecard home-offers__card home-offers__card--accent"
            role="listitem"
          >
            <div className="werbecard__image-container">
              <img
                className="werbecard__image"
                src="https://images.unsplash.com/photo-1692204621769-e77d24e25b12?q=75&w=1080&auto=format&fit=crop"
                alt="Cupra Tavascan Launch Edition"
                loading="lazy"
              />
            </div>
            <div className="werbecard__content">
              <h3 className="werbecard__content-heading">Cupra Tavascan</h3>
              <p className="werbecard__content-subheading">
                Launch Edition | Elektro
              </p>
              <div className="werbecard__content-info">
                <div className="werbecard__content-info-duration">
                  <span className="werbecard__content-info-duration-text">
                    <strong>250</strong> kW
                  </span>
                </div>
                <div className="werbecard__content-info-level">
                  <span className="werbecard__content-info-duration-text">
                    569 km Reichweite
                  </span>
                </div>
              </div>
              <div className="werbecard__content-price-container">
                Sonderleasing ab
                <strong className="werbecard__content-price">225 €</strong>
              </div>
            </div>
            <div className="werbecard__card-hover">
              <a
                href="/kontakt"
                className="button contact-button werbung-contact-button button--slim button--secondary"
                data-probefahrt-open="true"
              >
                Probefahrt sichern
              </a>
            </div>
          </article> */}

          <article className="offers__card home-offers__card" role="listitem">
            <div className="offers__image-container">
              <img
                className="offers__image"
                src="https://wallpaperaccess.com/full/9020911.jpg"
                alt="Nissan Ariya Evolve Pack Elektro"
                loading="lazy"
              />
            </div>
            <div className="offers__content">
              <h3 className="offers__content-heading">Nissan GT-R</h3>
              <p className="offers__content-subheading">
                Evolve Pack | Elektro
              </p>
              <div className="offers__content-info">
                <div className="offers__content-info-duration">
                  <span className="offers__content-info-duration-text">
                    <strong>160</strong> kW
                  </span>
                </div>
                <div className="offers__content-info-level">
                  <span className="offers__content-info-duration-text">
                    63 kWh Akku
                  </span>
                </div>
              </div>
              <div className="offers__content-price-container">
                Leasing ab
                <strong className="offers__content-price">249 €</strong>
              </div>
            </div>
            <div className="offers__card-hover">
              <a
                href="/kontakt"
                className="home-offers__cta button contact-button button--slim "
                data-probefahrt-open="true"
              >
                Beratung sichern
              </a>
            </div>
          </article>
        </div>

        {/* --- Optionaler CTA leitet zu weiteren Bestandsangeboten weiter --- */}
        <footer className="home-offers__footer">
          <Link to="/fahrzeugbestand" className="home-offers__cta">
            Alle Angebote entdecken
            <svg
              className="home-offers__cta-icon"
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
          </Link>

          {/* <a
            href="#/fahrzeugbestand.html"
            className="home-offers__cta"
            aria-label="Alle Fahrzeuge im Bestand ansehen"
          >
            Alle Angebote entdecken
            <svg
              className="home-offers__cta-icon"
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
          </a> */}
        </footer>
      </div>
    </section>
  );
}

export default Offers;
