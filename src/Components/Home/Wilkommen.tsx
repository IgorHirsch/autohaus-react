import React from "react";

function Wilkommen() {
  return (
    <section className="home-welcome" aria-labelledby="home-welcome-heading">
      {/* --- Decorative backdrop and spacing wrapper --- */}
      <div className="home-welcome__background" aria-hidden="true">
        <span className="home-welcome__glow home-welcome__glow--left" />
        <span className="home-welcome__glow home-welcome__glow--right" />
      </div>

      {/* --- Content container aligns with hero grid rhythm --- */}
      <div className="home-welcome__container">
        <div className="home-welcome__content">
          {/* --- Intro copy: greeting, USP and CTA --- */}
          <div className="home-welcome__intro">
            <span className="home-welcome__badge">
              Willkommen bei Auto Emotion
              <span className="home-welcome__badge-dot" aria-hidden="true" />
            </span>
            <h2 id="home-welcome-heading" className="home-welcome__title">
              Ankommen, durchatmen, Fahrgefühl neu entdecken.
            </h2>
            <p className="home-welcome__lead">
              Wir empfangen Sie mit offenen Türen, klaren Antworten und
              Fahrzeugen, die Performance, Komfort und Stil in Einklang bringen.
              Cupra Dynamik, SEAT Vielseitigkeit und Nissan Zuverlässigkeit –
              kuratiert für Ihren Alltag.
            </p>
            <p className="home-welcome__description">
              Von der ersten Inspiration bis zur Übergabe begleiten wir Sie
              persönlich und transparent. Probefahrten, digitale Services und
              unsere Meisterwerkstatt machen Ihren Besuch zum Erlebnis ohne
              Hektik.
            </p>
            <div className="home-welcome__actions">
              <button
                type="button"
                className="home-welcome__cta"
                aria-label="Showroom entdecken"
              >
                Showroom entdecken
                <svg
                  className="home-welcome__cta-icon"
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
          <div className="home-welcome__media">
            <figure className="home-welcome__media-frame">
              <img
                className="home-welcome__media-image"
                src="https://www.seat-mediacenter.de/content/dam/seat-media-center/Img/de/2022/06/20220610_fuenf-spannende-fakten-ueber-cupra/F%C3%BCnf%20Fakten_CUPRA_04.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
                alt="Showroom mit beleuchteten Cupra Fahrzeugen"
                loading="lazy"
              />
              <figcaption className="home-welcome__media-caption">
                Atmosphärischer Blick in unseren Cupra Showroom
              </figcaption>
            </figure>

            <aside
              className="home-welcome__card"
              aria-label="Auto Emotion Service Versprechen"
            >
              <div className="home-welcome__card-icon">
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
              <div className="home-welcome__card-copy">
                <p className="home-welcome__card-kicker">Premium Betreuung</p>
                <p className="home-welcome__card-title">
                  Beratung mit Weitsicht &amp; Service zum Durchatmen
                </p>
                <p className="home-welcome__card-text">
                  Persönliche Fahrzeug-Checks, flexible Terminplanung und
                  Updates in Echtzeit halten Sie mobil – ganz ohne Stress.
                </p>
              </div>
              <span className="home-welcome__card-link">
                Mehr erfahren
                <svg
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
              </span>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wilkommen;
