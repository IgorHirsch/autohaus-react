import React from "react";

function Team() {
  return (
    <section className="home-team" aria-labelledby="home-team-title">
      {/* --- Ambient backdrop creates a soft visual separation --- */}
      <div className="home-team__background" aria-hidden="true">
        <span className="home-team__glow home-team__glow--left" />
        <span className="home-team__glow home-team__glow--right" />
      </div>

      <div className="home-team__container">
        {/* --- Section intro mirrors Willkommen spacing and tone --- */}
        <header className="home-team__header">
          <span className="home-team__badge">
            Menschen bei Autohaus Hirsch
            <span className="home-team__badge-dot" aria-hidden="true" />
          </span>
          <div className="home-team__copy">
            <h2 id="home-team-title" className="home-team__title">
              Unser Team, Ihr persönlicher Vorsprung.
            </h2>
            <p className="home-team__lead">
              Lernen Sie die Menschen kennen, die jede Beratung, jedes Angebot
              und jede Probefahrt mit Expertise und echter Leidenschaft
              begleiten.
            </p>
          </div>
        </header>

        {/* --- Team grid keeps card markup intact while modernizing layout --- */}
        <div className="home-team__grid" role="list">
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Max Mustermann"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Max Mustermann</h4>
              <p className="home-team__role">Verkaufsleiter</p>
              <a className="home-team__contact" href="mailto:max@autohaus.de">
                max@autohaus.de
              </a>
            </div>
          </div>
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Julia Musterfrau"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Julia Musterfrau</h4>
              <p className="home-team__role">Serviceberaterin</p>
              <a className="home-team__contact" href="mailto:julia@autohaus.de">
                julia@autohaus.de
              </a>
            </div>
          </div>
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Ali Beispiel"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Ali Beispiel</h4>
              <p className="home-team__role">Werkstattmeister</p>
              <a className="home-team__contact" href="mailto:ali@autohaus.de">
                ali@autohaus.de
              </a>
            </div>
          </div>
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="Sophie Beispiel"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Sophie Beispiel</h4>
              <p className="home-team__role">Empfang</p>
              <a
                className="home-team__contact"
                href="mailto:sophie@autohaus.de"
              >
                sophie@autohaus.de
              </a>
            </div>
          </div>
          {/* Dummy-Mitarbeiter */}
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/men/5.jpg"
              alt="Lukas Beispiel"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Lukas Beispiel</h4>
              <p className="home-team__role">Kundendienst</p>
              <a className="home-team__contact" href="mailto:lukas@autohaus.de">
                lukas@autohaus.de
              </a>
            </div>
          </div>
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/women/6.jpg"
              alt="Anna Muster"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Anna Muster</h4>
              <p className="home-team__role">Disposition</p>
              <a className="home-team__contact" href="mailto:anna@autohaus.de">
                anna@autohaus.de
              </a>
            </div>
          </div>
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="Peter Platz"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Peter Platz</h4>
              <p className="home-team__role">Fahrzeugaufbereitung</p>
              <a className="home-team__contact" href="mailto:peter@autohaus.de">
                peter@autohaus.de
              </a>
            </div>
          </div>
          <div className="home-team__card">
            <img
              className="home-team__photo"
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="Sabine Stark"
            />
            <div className="home-team__info">
              <h4 className="home-team__name">Sabine Stark</h4>
              <p className="home-team__role">Buchhaltung</p>
              <a
                className="home-team__contact"
                href="mailto:sabine@autohaus.de"
              >
                sabine@autohaus.de
              </a>
            </div>
          </div>
        </div>

        {/* --- Optional call-to-action keeps engagement lightweight --- */}
        <div className="home-team__cta-wrapper">
          <a
            className="home-team__cta"
            href="/kontakt"
            aria-label="Team kontaktieren"
          >
            Team kennenlernen
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

export default Team;
