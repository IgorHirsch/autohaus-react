import React from "react";

function Services() {
  return (
    <section className="home-services" aria-labelledby="home-services-title">
      {/* --- Ambient background softly separates the section from darker areas --- */}
      <div className="home-services__background" aria-hidden="true">
        <span className="home-services__glow home-services__glow--left" />
        <span className="home-services__glow home-services__glow--right" />
      </div>

      {/* --- Layout container keeps spacing consistent with welcome section --- */}
      <div className="home-services__container">
        {/* --- Section header with badge, title and USP copy --- */}
        <header className="home-services__header">
          <span className="home-services__badge">
            Service mit Haltung
            <span className="home-services__badge-dot" aria-hidden="true" />
          </span>
          <div className="home-services__copy">
            <h2 id="home-services-title" className="home-services__title">
              Services, die bewegen und Vertrauen schaffen.
            </h2>
            <p className="home-services__lead">
              Von persönlicher Beratung bis zur flexiblen Mobilität begleiten
              wir Sie transparent, nahbar und immer mit Blick auf Ihr
              Fahrerlebnis von morgen.
            </p>
          </div>
        </header>

        {/* --- Grid keeps existing service cards and arranges them responsively --- */}
        <div className="home-services__grid services__cards" role="list">
          <div className="services__card" role="listitem">
            <img
              className="services__card-img"
              src="https://automieten.at/wp-content/uploads/2021/05/jahres-aktion-cover.jpg"
              alt="Neu und Gebrauchtwagenverkauf"
            />
            <div className="services__card-icon-background"></div>
            <div className="services__card-icon-container"></div>
            <div className="services__card-content">
              <h5 className="services__card-heading">
                Neu und Gebrauchtwagenverkauf
              </h5>
              <p className="services__card-location">
                <span className="services__card-location-icon"></span>
                <span className="services__card-location-text">
                  Offenbach am Main, DE
                </span>
              </p>
              <p className="services__card-desc">
                Entdecken Sie unsere exklusive Auswahl an Neu- und
                Gebrauchtwagen. Von modernsten Technologien bis hin zu bewährten
                Klassikern – hier finden Sie Ihr perfektes Fahrzeug für jeden
                Anspruch und jedes Budget.
              </p>
            </div>
          </div>
          <div className="services__card" role="listitem">
            <img
              className="services__card-img"
              src="https://t3.ftcdn.net/jpg/06/32/96/70/360_F_632967072_2w4fh1YJtZnKPljgQ96jt2fCgH9UXJIj.jpg"
              alt="Ersatzwagen / Mietwagen"
            />
            <div className="services__card-icon-background"></div>
            <div className="services__card-icon-container"></div>
            <div className="services__card-content">
              <h5 className="services__card-heading">
                Ersatzwagen / Mietwagen
              </h5>
              <p className="services__card-location">
                <span className="services__card-location-icon"></span>
                <span className="services__card-location-text">
                  Offenbach am Main, DE
                </span>
              </p>
              <p className="services__card-desc">
                Maximale Flexibilität für Ihren Alltag! Unser erstklassiger
                Ersatz- und Mietwagenservice sorgt dafür, dass Sie auch bei
                Werkstattaufenthalten oder Reparaturen immer mobil bleiben.
                Premium-Fahrzeuge zu fairen Konditionen – für jede Situation.
              </p>
            </div>
          </div>
          <div className="services__card" role="listitem">
            <img
              className="services__card-img"
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=75&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Werkstatt Leistungen"
            />
            <div className="services__card-icon-background"></div>
            <div className="services__card-icon-container"></div>
            <div className="services__card-content">
              <h5 className="services__card-heading">Werkstatt Leistungen</h5>
              <p className="services__card-location">
                <span className="services__card-location-icon"></span>
                <span className="services__card-location-text">
                  Offenbach am Main, DE
                </span>
              </p>
              <p className="services__card-desc">
                Meisterhafte Präzision trifft auf modernste Technologie. Unsere
                zertifizierten Experten bieten Ihnen erstklassigen
                Werkstattservice für alle Marken – von routinemäßigen
                Inspektionen bis hin zu komplexen Reparaturen. Ihr Vertrauen,
                unsere Leidenschaft.
              </p>
            </div>
          </div>
          <div className="services__card" role="listitem">
            <img
              className="services__card-img"
              src="https://auto-wiegmann.de/wp-content/uploads/2015/03/Schl%C3%BCssel%C3%BCbergabe.jpg"
              alt="Hol und Bringservice"
            />
            <div className="services__card-icon-background"></div>
            <div className="services__card-icon-container"></div>
            <div className="services__card-content">
              <h5 className="services__card-heading">Hol und Bringservice</h5>
              <p className="services__card-location">
                <span className="services__card-location-icon"></span>
                <span className="services__card-location-text">
                  Offenbach am Main, DE
                </span>
              </p>
              <p className="services__card-desc">
                Komfort neu definiert! Lehnen Sie sich zurück, während wir uns
                um alles kümmern. Unser exklusiver Hol- und Bringservice bringt
                den Premium-Service direkt zu Ihnen – ob zu Hause oder am
                Arbeitsplatz. Zeit ist wertvoll, wir respektieren das.
              </p>
            </div>
          </div>
          <div className="services__card" role="listitem">
            <img
              className="services__card-img"
              src="https://img.freepik.com/premium-photo/tiny-modern-sports-car-car-keys-table-generative-ai_893571-6270.jpg"
              alt="Leasingangebote"
            />
            <div className="services__card-icon-background"></div>
            <div className="services__card-icon-container"></div>
            <div className="services__card-content">
              <h5 className="services__card-heading">Leasingangebote</h5>
              <p className="services__card-location">
                <span className="services__card-location-icon"></span>
                <span className="services__card-location-text">
                  Offenbach am Main, DE
                </span>
              </p>
              <p className="services__card-desc">
                Die Zukunft des Autobesitzens! Erleben Sie maximale Flexibilität
                mit unseren maßgeschneiderten Leasingangeboten. Fahren Sie stets
                die neuesten Modelle mit modernster Ausstattung – ohne
                Langzeitbindung, mit voller Kostenkontrolle.
              </p>
            </div>
          </div>
          <div className="services__card" role="listitem">
            <img
              className="services__card-img"
              src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=75&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Zubehör"
            />
            <div className="services__card-icon-background"></div>
            <div className="services__card-icon-container"></div>
            <div className="services__card-content">
              <h5 className="services__card-heading">Zubehör</h5>
              <p className="services__card-location">
                <span className="services__card-location-icon"></span>
                <span className="services__card-location-text">
                  Offenbach am Main, DE
                </span>
              </p>
              <p className="services__card-desc">
                Individualisierung auf höchstem Niveau! Entdecken Sie unser
                exklusives Zubehörsortiment und verwandeln Sie Ihr Fahrzeug in
                ein Unikat. Von Performance-Upgrades bis hin zu
                Luxus-Ausstattung – wir machen Ihre Vision zur Realität.
              </p>
            </div>
          </div>
        </div>

        {/* --- Optional CTA encourages deeper engagement without overpowering --- */}
        <div className="home-services__cta-wrapper">
          <a
            className="home-services__cta"
            href="/kontakt"
            aria-label="Servicetermin vereinbaren"
          >
            Servicetermin anfragen
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
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
