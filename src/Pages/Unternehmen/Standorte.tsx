import React, { useEffect } from "react";
import "../../Styles/pages/unternehmen/_standorte.scss";

const locationHighlights = [
  {
    id: "hauptstandort",
    title: "Hauptstandort",
    subtitle: "Sprendlinger Landstraße, Offenbach",
    description:
      "Unser modernes Areal mit 19.400 m² bietet großzügige Showrooms, modernste Werkstattausstattung und ausreichend Parkplätze für einen entspannten Besuch.",
  },
  {
    id: "erreichbarkeit",
    title: "Erreichbarkeit",
    subtitle: "Zentral & verkehrsgünstig gelegen",
    description:
      "Optimal erreichbar über A661 und A3, nur wenige Minuten von Frankfurt entfernt. Öffentliche Verkehrsmittel und ausreichend kostenfreie Parkplätze vor Ort.",
  },
  {
    id: "ausstattung",
    title: "Ausstattung",
    subtitle: "Moderne Infrastruktur für optimalen Service",
    description:
      "Klimatisierte Showrooms, Kundenlounge mit WLAN, Kinderspielbereich und direkter Werkstattblick. E-Ladestationen für umweltbewusste Mobilität.",
  },
];

const contactInfo = [
  {
    department: "Verkauf & Beratung",
    phone: "+49 (0) 69 123 456 78",
    email: "verkauf@autoemotion.de",
    hours: "Mo-Fr: 09:00-19:00 Uhr, Sa: 09:00-16:00 Uhr",
  },
  {
    department: "Service & Werkstatt",
    phone: "+49 (0) 69 123 456 79",
    email: "service@autoemotion.de",
    hours: "Mo-Fr: 07:30-18:00 Uhr, Sa: 08:00-13:00 Uhr",
  },
  {
    department: "Teile & Zubehör",
    phone: "+49 (0) 69 123 456 80",
    email: "teile@autoemotion.de",
    hours: "Mo-Fr: 08:00-17:00 Uhr, Sa: 08:00-12:00 Uhr",
  },
];

const services = [
  {
    title: "Persönlicher Service vor Ort",
    paragraphs: [
      "In unserem modernen Showroom präsentieren wir die neuesten SEAT-, CUPRA- und NISSAN-Modelle in entspannter Atmosphäre. Nehmen Sie Platz in unserer Lounge und lassen Sie sich ausführlich beraten.",
      "Unser erfahrenes Verkaufsteam nimmt sich die Zeit, die Sie brauchen. Von der ersten Beratung bis zur Schlüsselübergabe begleiten wir Sie persönlich durch den gesamten Prozess.",
    ],
  },
  {
    title: "Werkstatt & Technischer Service",
    paragraphs: [
      "Unsere hochmoderne Werkstatt ist mit neuester Diagnosetechnik ausgestattet. Als Nissan GT-R High Performance Center und CUPRA Specialist bieten wir spezialisierte Services für alle Marken.",
      "Von der Inspektion bis zur individuellen Fahrzeugveredelung – unser Technikerteam arbeitet nach Herstellervorgaben und mit Originalteilen für maximale Sicherheit und Werterhalt.",
    ],
  },
  {
    title: "Digitale Services & Online-Termine",
    paragraphs: [
      "Nutzen Sie unsere digitalen Services für mehr Flexibilität: Online-Terminbuchung, Kostenvoranschläge per E-Mail und digitale Fahrzeugübergabe auf Wunsch.",
      "Unsere Website bietet Ihnen 24/7 Zugang zu aktuellen Fahrzeugangeboten, Serviceterminen und allen wichtigen Informationen rund um Ihr Fahrzeug.",
    ],
  },
];

const Standorte: React.FC = () => {
  useEffect(() => {
    document.title = "Standort & Kontakt | Auto Emotion";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="standorte" aria-labelledby="standorte-title">
      <div className="standorte__background" aria-hidden="true">
        <span className="standorte__glow standorte__glow--left" />
        <span className="standorte__glow standorte__glow--right" />
      </div>

      <div className="standorte__container">
        <header className="standorte__hero">
          <div className="standorte__hero-content">
            <span className="standorte__kicker">
              Standort · Kontakt · Erreichbarkeit
            </span>
            <h1 id="standorte-title" className="standorte__title">
              Standort & Kontakt
            </h1>
            <p className="standorte__lead">
              Besuchen Sie uns in Offenbach an der Sprendlinger Landstraße.
              Unser modernes Autohaus mit großzügigen Showrooms und modernster
              Werkstatt ist Ihr Anlaufpunkt für SEAT, CUPRA und NISSAN.
            </p>
            <p className="standorte__description">
              Zentral gelegen, optimal erreichbar und mit allem ausgestattet,
              was Sie für einen entspannten Besuch benötigen. Wir freuen uns auf
              Ihren Besuch – mit oder ohne Termin.
            </p>
          </div>
          <aside
            className="standorte__hero-card"
            aria-label="Kontaktinformationen Auto Emotion"
          >
            <dl className="standorte__facts">
              <div className="standorte__fact">
                <dt>Adresse</dt>
                <dd>
                  Sprendlinger Landstraße 123
                  <br />
                  63069 Offenbach am Main
                </dd>
              </div>
              <div className="standorte__fact">
                <dt>Telefon</dt>
                <dd>+49 (0) 69 123 456 78</dd>
              </div>
              <div className="standorte__fact">
                <dt>E-Mail</dt>
                <dd>kontakt@autoemotion.de</dd>
              </div>
              <div className="standorte__fact">
                <dt>Öffnungszeiten</dt>
                <dd>
                  Mo-Fr: 09:00-19:00 Uhr
                  <br />
                  Sa: 09:00-16:00 Uhr
                </dd>
              </div>
              <div className="standorte__fact">
                <dt>Parken</dt>
                <dd>Kostenfreie Parkplätze direkt vor Ort</dd>
              </div>
            </dl>
          </aside>
        </header>

        <section className="standorte__values" aria-label="Unser Standort">
          <h2 className="standorte__section-title">Warum zu uns kommen?</h2>
          <p className="standorte__section-intro">
            Unser Standort vereint alle Vorteile: zentrale Lage, moderne
            Ausstattung und persönlicher Service in entspannter Atmosphäre.
          </p>
          <div className="standorte__values-grid">
            {locationHighlights.map((value) => (
              <article key={value.id} className="standorte__value-card">
                <h3 className="standorte__value-title">{value.title}</h3>
                <p className="standorte__value-subtitle">{value.subtitle}</p>
                <p className="standorte__value-text">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="standorte__contact"
          aria-label="Kontaktmöglichkeiten"
        >
          <div className="standorte__contact-header">
            <h2 className="standorte__section-title">Direkter Kontakt</h2>
            <p className="standorte__section-intro">
              Erreichen Sie uns per Telefon, E-Mail oder besuchen Sie uns direkt
              vor Ort. Unsere Fachbereiche sind speziell für Ihre Anliegen da.
            </p>
          </div>
          <div className="standorte__contact-grid">
            {contactInfo.map((contact) => (
              <article
                key={contact.department}
                className="standorte__contact-card"
              >
                <h3 className="standorte__contact-title">
                  {contact.department}
                </h3>
                <div className="standorte__contact-details">
                  <div className="standorte__contact-item">
                    <span className="standorte__contact-label">Telefon:</span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="standorte__contact-link"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div className="standorte__contact-item">
                    <span className="standorte__contact-label">E-Mail:</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="standorte__contact-link"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="standorte__contact-item">
                    <span className="standorte__contact-label">
                      Öffnungszeiten:
                    </span>
                    <span className="standorte__contact-hours">
                      {contact.hours}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="standorte__story" aria-label="Unsere Services">
          <div className="standorte__story-grid">
            {services.map((block) => (
              <article key={block.title} className="standorte__story-card">
                <h3 className="standorte__story-title">{block.title}</h3>
                {block.paragraphs.map((paragraph, index) => (
                  <p key={index} className="standorte__story-text">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="standorte__map" aria-label="Anfahrt & Lage">
          <h2 className="standorte__section-title">So finden Sie uns</h2>
          <p className="standorte__section-intro">
            Optimal erreichbar mit Auto und öffentlichen Verkehrsmitteln. Unser
            Standort liegt verkehrsgünstig zwischen Frankfurt und Offenbach mit
            direkter Autobahnanbindung.
          </p>
          <div className="standorte__map-container">
            <div className="standorte__map-placeholder">
              <h3>Anfahrt mit dem Auto</h3>
              <ul>
                <li>
                  <strong>A661:</strong> Ausfahrt Offenbach-Zentrum, Richtung
                  Sprendlinger Landstraße
                </li>
                <li>
                  <strong>A3:</strong> Ausfahrt Offenbach, über B448 zur
                  Sprendlinger Landstraße
                </li>
                <li>
                  <strong>Aus Frankfurt:</strong> Über Kaiserlei-Kreisel, B43
                  Richtung Offenbach
                </li>
              </ul>
              <h3>Öffentliche Verkehrsmittel</h3>
              <ul>
                <li>
                  <strong>S-Bahn:</strong> S1, S2, S8, S9 bis Offenbach Ost,
                  dann Bus 103
                </li>
                <li>
                  <strong>Bus:</strong> Linie 103 Haltestelle "Sprendlinger
                  Landstraße"
                </li>
                <li>
                  <strong>U-Bahn:</strong> U4 bis Sprendlingen, dann Bus oder 10
                  Min. Fußweg
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="standorte__cta" aria-label="Besuch vereinbaren">
          <div className="standorte__cta-content">
            <h2 className="standorte__cta-title">Besuchen Sie uns</h2>
            <p className="standorte__cta-text">
              Kommen Sie vorbei und überzeugen Sie sich selbst von unserem
              Service. Gerne vereinbaren wir auch einen persönlichen Termin für
              eine ausführliche Beratung.
            </p>
          </div>
          <div className="standorte__cta-actions">
            <a
              className="standorte__cta-button standorte__cta-button--primary"
              href="tel:+4969123456789"
            >
              Termin vereinbaren
            </a>
            <a className="standorte__cta-button" href="/kontakt">
              Kontaktformular
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Standorte;
