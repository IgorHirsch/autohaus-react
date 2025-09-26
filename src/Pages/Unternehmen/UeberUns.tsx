import React, { useEffect } from "react";
import "../../Styles/pages/unternehmen/_ueberuns.scss";

const valueHighlights = [
  {
    id: "tradition",
    title: "Tradition",
    subtitle: "Verankert seit 2001 in Offenbach",
    description:
      "Mit Herzblut entstand aus einer Vision unser erstes Autohaus an der Sprendlinger Landstraße. Seitdem begleiten wir Kundinnen und Kunden über Generationen hinweg.",
  },
  {
    id: "kompetenz",
    title: "Kompetenz",
    subtitle: "Markenwissen & Technikleidenschaft",
    description:
      "SEAT, CUPRA und NISSAN treiben uns an. Unsere Spezialisierung reicht von City-Flotten bis High-Performance – immer mit geprüfter Qualität und klarer Beratung.",
  },
  {
    id: "service",
    title: "Service",
    subtitle: "Persönliche Betreuung, starke Lösungen",
    description:
      "Wir arbeiten so, wie wir es uns selbst wünschen würden: transparent, verbindlich und mit einem Team, das jedes Detail im Blick behält – vom Kaffee bis zur Schlüsselübergabe.",
  },
];

const timelineEvents = [
  {
    year: "2001",
    milestone: "Gründung in Offenbach",
    copy: "Aus einer Idee wurde mit viel Eigeninitiative ein familiäres Autohaus. Der Funke für südliches Temperament und Fahrspaß sprang sofort über.",
  },
  {
    year: "2016",
    milestone: "Neues Areal, neue Möglichkeiten",
    copy: "70 Hausnummern weiter erwarben wir 19.400 m² Raum für Wachstum. Mit mehr Fläche kamen neue Services, mehr Werkstattkapazität und zusätzliche Kompetenzen hinzu.",
  },
  {
    year: "ab 2016",
    milestone: "Portfolio-Erweiterung",
    copy: "Neben SEAT begrüßen wir NISSAN im Haus, erschließen Vorführ-, Nutz- und Elektromobilität und professionalisieren Flotten- sowie Business-Angebote.",
  },
  {
    year: "2018",
    milestone: "Performance & E-Mobilität",
    copy: "Als Nissan GT-R High Performance Center und CUPRA Specialist leben wir Fortschritt – von Highspeed bis Hightech, inklusive Ladeinfrastruktur und Beratungs-Know-how.",
  },
  {
    year: "Heute",
    milestone: "Familienunternehmen mit Zukunft",
    copy: "Wir bleiben nahbar, hören zu und entwickeln uns gemeinsam mit unseren Kundinnen und Kunden weiter – mit Ambition, Empathie und modernem Service-Verständnis.",
  },
];

const serviceFocus = [
  {
    title: "Menschen im Mittelpunkt",
    paragraphs: [
      "Als inhabergeführtes Familienunternehmen halten wir den direkten Draht. Viele unserer Stammkundinnen und Stammkunden begleiten wir seit Tag eins – ein Vertrauensbeweis, der uns antreibt.",
      "Wir möchten für andere so arbeiten, wie wir es für uns selbst erwarten. Darum steht jeder Besuch, jedes Fahrzeug und jeder Wunsch unter dem Versprechen, aufmerksam zuzuhören und individuell zu handeln.",
    ],
  },
  {
    title: "Team & Atmosphäre",
    paragraphs: [
      "Unser junges, dynamisches Team ist speziell geschult und bereit für jede Beanspruchung – ob Sportwagen-Enthusiast, Familienmobil oder Dienstwagenflotte.",
      "Ein Tässchen Kaffee, ein netter Plausch und ein Ambiente zum Wohlfühlen gehören für uns einfach dazu. Temperament und Professionalität schließen sich nicht aus – sie ergänzen sich.",
    ],
  },
  {
    title: "Service-Portfolio",
    paragraphs: [
      "Wir informieren über SEAT- und NISSAN-Highlights, beraten zu Finanzierung und Leasing und begleiten die Bedarfsermittlung Schritt für Schritt.",
      "Von A wie Achsvermessung bis Z wie Zulassung bieten wir einen vollumfänglichen Werkstatt-Service – für Seat, Nissan und Fahrzeuge des Volkswagen Konzerns.",
      "Besondere Anforderungen motivieren uns. Wir suchen und finden Lösungen, damit jedes Fahrzeug optimal betreut wird.",
    ],
  },
];

const UeberUns: React.FC = () => {
  useEffect(() => {
    document.title = "Über uns | Auto Emotion";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="ueberuns" aria-labelledby="ueberuns-title">
      <div className="ueberuns__background" aria-hidden="true">
        <span className="ueberuns__glow ueberuns__glow--left" />
        <span className="ueberuns__glow ueberuns__glow--right" />
      </div>

      <div className="ueberuns__container">
        <header className="ueberuns__hero">
          <div className="ueberuns__hero-content">
            <span className="ueberuns__kicker">
              Tradition · Kompetenz · Service
            </span>
            <h1 id="ueberuns-title" className="ueberuns__title">
              Über uns
            </h1>
            <p className="ueberuns__lead">
              Seit 2001 entwickeln wir in Offenbach ein Autohaus, das mehr als
              Verkauf ist. Auto Emotion steht für gelebte Markenliebe,
              verbindliche Beratung und Service, der den Alltag mobil hält.
            </p>
            <p className="ueberuns__description">
              Vom ersten Showroom an der Sprendlinger Landstraße bis zum
              modernen Areal mit 19.400 Quadratmetern – unser Weg ist geprägt
              von persönlichem Austausch, technischer Expertise und dem festen
              Willen, Erwartungen zu übertreffen.
            </p>
          </div>
          <aside
            className="ueberuns__hero-card"
            aria-label="Kurzprofil Auto Emotion"
          >
            <dl className="ueberuns__facts">
              <div className="ueberuns__fact">
                <dt>Standort</dt>
                <dd>Sprendlinger Landstraße, Offenbach</dd>
              </div>
              <div className="ueberuns__fact">
                <dt>Gründung</dt>
                <dd>2001 (Familiengeführt)</dd>
              </div>
              <div className="ueberuns__fact">
                <dt>Marken</dt>
                <dd>SEAT · CUPRA · NISSAN</dd>
              </div>
              <div className="ueberuns__fact">
                <dt>Schwerpunkte</dt>
                <dd>Neuwagen · Vorführwagen · Nutz- & Elektromobilität</dd>
              </div>
              <div className="ueberuns__fact">
                <dt>Leitmotiv</dt>
                <dd>Wir arbeiten so, wie wir es uns selbst wünschen.</dd>
              </div>
            </dl>
          </aside>
        </header>

        <section className="ueberuns__values" aria-label="Unsere Werte">
          <h2 className="ueberuns__section-title">Was uns prägt</h2>
          <p className="ueberuns__section-intro">
            Drei Säulen bestimmen unser Handeln: gewachsene Beziehungen,
            spezialisierte Beratung und ein Service-Erlebnis, das sich
            menschlich und hochwertig anfühlt.
          </p>
          <div className="ueberuns__values-grid">
            {valueHighlights.map((value) => (
              <article key={value.id} className="ueberuns__value-card">
                <h3 className="ueberuns__value-title">{value.title}</h3>
                <p className="ueberuns__value-subtitle">{value.subtitle}</p>
                <p className="ueberuns__value-text">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="ueberuns__timeline"
          aria-label="Meilensteine Auto Emotion"
        >
          <div className="ueberuns__timeline-header">
            <h2 className="ueberuns__section-title">Unser Weg</h2>
            <p className="ueberuns__section-intro">
              Jeder Schritt im Unternehmen erzählt eine Geschichte aus
              Engagement, Mut und dem Vertrauen unserer Kundschaft.
            </p>
          </div>
          <ol className="ueberuns__timeline-list">
            {timelineEvents.map((event) => (
              <li key={event.year} className="ueberuns__timeline-item">
                <span className="ueberuns__timeline-year">{event.year}</span>
                <div className="ueberuns__timeline-body">
                  <h3 className="ueberuns__timeline-title">
                    {event.milestone}
                  </h3>
                  <p className="ueberuns__timeline-text">{event.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="ueberuns__story" aria-label="Was uns antreibt">
          <div className="ueberuns__story-grid">
            {serviceFocus.map((block) => (
              <article key={block.title} className="ueberuns__story-card">
                <h3 className="ueberuns__story-title">{block.title}</h3>
                {block.paragraphs.map((paragraph, index) => (
                  <p key={index} className="ueberuns__story-text">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section
          className="ueberuns__service-spectrum"
          aria-label="Leistungen im Überblick"
        >
          <h2 className="ueberuns__section-title">
            Mobilität bedeutet Vielfalt
          </h2>
          <p className="ueberuns__section-intro">
            Ob Probefahrt, Finanzierungs-Check oder Großkundenberatung – wir
            verbinden Expertise mit Empathie. Unser Service reicht von der
            ersten Idee bis zur Zulassung.
          </p>
          <div className="ueberuns__service-grid">
            <div className="ueberuns__service-card">
              <h3>Beratung & Verkauf</h3>
              <ul>
                <li>Neuwagen, Vorführwagen & Jahreswagen</li>
                <li>Nutzfahrzeuge & Elektromobilität</li>
                <li>Individuelle Finanzierung & Leasing</li>
              </ul>
            </div>
            <div className="ueberuns__service-card">
              <h3>Werkstatt & Performance</h3>
              <ul>
                <li>Nissan GT-R High Performance Center</li>
                <li>CUPRA Specialist mit Leidenschaft</li>
                <li>Diagnose, Achsvermessung & individuelle Umbauten</li>
              </ul>
            </div>
            <div className="ueberuns__service-card">
              <h3>After-Sales & Betreuung</h3>
              <ul>
                <li>Hol- & Bring-Service, Ersatz- & Mietwagen</li>
                <li>Originalteile & Zubehörberatung</li>
                <li>Zulassungsservice und Versicherungspartner</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ueberuns__cta" aria-label="Kontakt aufnehmen">
          <div className="ueberuns__cta-content">
            <h2 className="ueberuns__cta-title">Lernen wir uns kennen</h2>
            <p className="ueberuns__cta-text">
              Unser Team freut sich auf den Austausch – ob bei einer Probefahrt,
              beim Kaffee im Showroom oder digital. Wir beraten mit Ruhe,
              Klarheit und Freude am Fahren.
            </p>
          </div>
          <div className="ueberuns__cta-actions">
            <a
              className="ueberuns__cta-button ueberuns__cta-button--primary"
              href="mailto:kontakt@autoemotion.de"
            >
              Kontakt per E-Mail
            </a>
            <a className="ueberuns__cta-button" href="/fahrzeugbestand">
              Fahrzeugbestand entdecken
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UeberUns;
