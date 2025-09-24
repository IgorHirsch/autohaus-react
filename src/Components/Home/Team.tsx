import React from "react";

function Team() {
  return (
    <section className="home-team glass-team">
      <div className="home-team__container">
        <div className="home-team__text-subline">
          <span className="home-team__text-subline-item">Erfahren</span>
          <span className="home-team__text-subline-item">Kompetent</span>
          <span className="home-team__text-subline-item">Zuverlässig</span>
        </div>
        <h3 className="home-team__text-heading">Unser Team</h3>
        <div className="home-team__grid">
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
      </div>
    </section>
  );
}

export default Team;
