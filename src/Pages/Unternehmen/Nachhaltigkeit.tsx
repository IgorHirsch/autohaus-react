import React, { useState } from "react";
import "../../Styles/pages/unternehmen/_nachhaltigkeit.scss";

const sustainabilityInitiatives = [
  {
    id: "elektromobilitaet",
    title: "Elektromobilität",
    subtitle: "100% klimaneutrale Fahrzeuge bis 2030",
    description:
      "Unser Engagement für eine elektrische Zukunft zeigt sich in unserem wachsenden Angebot an Elektro- und Hybridfahrzeugen. Mit über 20 verschiedenen E-Modellen von SEAT, CUPRA und NISSAN fördern wir aktiv den Übergang zur nachhaltigen Mobilität.",
    features: [
      "20+ Elektro- und Hybridmodelle im Angebot",
      "Eigene Schnellladesäulen auf dem Gelände",
      "Beratung zu Fördermöglichkeiten",
      "Partnerschaften mit grünen Energieanbietern",
    ],
    image: "/images/sustainability/electric-mobility.jpg",
    color: "#20B2AA",
  },
  {
    id: "energieeffizienz",
    title: "Energieeffizienz",
    subtitle: "CO2-neutrale Betriebsstätte seit 2023",
    description:
      "Durch den Einsatz erneuerbarer Energien, LED-Beleuchtung und intelligenter Gebäudetechnik konnten wir unseren Energieverbrauch um 40% reduzieren. Unsere Photovoltaikanlage erzeugt mehr Strom, als wir verbrauchen.",
    features: [
      "100% Ökostrom aus eigener PV-Anlage",
      "LED-Beleuchtung im gesamten Betrieb",
      "Intelligente Heizungs- und Kühlsysteme",
      "Zertifiziert nach ISO 14001",
    ],
    image: "/images/sustainability/solar-panels.jpg",
    color: "#48CAE4",
  },
  {
    id: "recycling",
    title: "Kreislaufwirtschaft",
    subtitle: "Verantwortungsvoller Umgang mit Ressourcen",
    description:
      "Wir setzen auf Wiederverwertung und Recycling in allen Betriebsbereichen. Von der fachgerechten Entsorgung von Altteilen bis zur Wiederaufbereitung von Fahrzeugkomponenten – Nachhaltigkeit steht im Mittelpunkt.",
    features: [
      "98% Recyclingquote bei Altfahrzeugen",
      "Wiederaufbereitung von Ersatzteilen",
      "Umweltfreundliche Reinigungsmittel",
      "Digitale Prozesse zur Papierreduktion",
    ],
    image: "/images/sustainability/recycling.jpg",
    color: "#0077BE",
  },
];

const environmentalProjects = [
  {
    id: 1,
    title: "Baumpflanzaktion 2025",
    date: "März 2025",
    type: "Lokales Engagement",
    description:
      "Gemeinsam mit der Stadt Offenbach haben wir 500 neue Bäume gepflanzt, um aktiv zum Klimaschutz beizutragen.",
    impact: "500 Bäume = 12.5 Tonnen CO₂ pro Jahr",
    status: "Abgeschlossen",
    image: "/images/projects/tree-planting.jpg",
  },
  {
    id: 2,
    title: "E-Ladepark Erweiterung",
    date: "April 2025",
    type: "Infrastruktur",
    description:
      "Ausbau unseres Ladeparks auf 12 Schnellladesäulen mit 100% Ökostrom für Kunden und Mitarbeiter.",
    impact: "50+ täglich geladene Fahrzeuge",
    status: "In Betrieb",
    image: "/images/projects/charging-stations.jpg",
  },
  {
    id: 3,
    title: "Nachhaltigkeitspartnerschaft",
    date: "Juni 2025",
    type: "Kooperation",
    description:
      "Strategische Allianz mit regionalen Umweltorganisationen zur Förderung nachhaltiger Mobilität.",
    impact: "10.000 beratene Kunden",
    status: "Laufend",
    image: "/images/projects/partnership.jpg",
  },
  {
    id: 4,
    title: "Green Office Initiative",
    date: "August 2025",
    type: "Betriebsökologie",
    description:
      "Komplette Umstellung auf papierlose Prozesse und umweltfreundliche Büromaterialien.",
    impact: "80% weniger Papierverbrauch",
    status: "Umgesetzt",
    image: "/images/projects/green-office.jpg",
  },
];

const sustainabilityStats = [
  { label: "CO₂ Reduktion", value: "65%", description: "seit 2020" },
  { label: "Ökostrom", value: "100%", description: "aus eigener PV" },
  { label: "E-Fahrzeuge", value: "20+", description: "im Angebot" },
  { label: "Recyclingquote", value: "98%", description: "bei Altfahrzeugen" },
];

const Nachhaltigkeit: React.FC = () => {
  const [activeInitiative, setActiveInitiative] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof environmentalProjects)[0] | null
  >(null);

  return (
    <div className="nachhaltigkeit">
      {/* Background Effects */}
      <div className="nachhaltigkeit__background">
        <div className="nachhaltigkeit__glow nachhaltigkeit__glow--left"></div>
        <div className="nachhaltigkeit__glow nachhaltigkeit__glow--right"></div>
      </div>

      {/* Hero Section */}
      <section className="nachhaltigkeit__hero">
        <div className="nachhaltigkeit__hero-container">
          <div className="nachhaltigkeit__hero-content">
            <div className="nachhaltigkeit__badge">Nachhaltigkeit & Umwelt</div>
            <h1 className="nachhaltigkeit__hero-title">
              Verantwortung für eine grüne Zukunft
            </h1>
            <p className="nachhaltigkeit__hero-lead">
              Nachhaltigkeit ist nicht nur ein Trend – es ist unsere
              Verpflichtung für kommende Generationen.
            </p>
            <p className="nachhaltigkeit__hero-description">
              Von Elektromobilität über erneuerbare Energien bis hin zur
              Kreislaufwirtschaft: Wir setzen auf innovative Lösungen für eine
              umweltfreundliche Mobilität und einen verantwortungsvollen Umgang
              mit Ressourcen.
            </p>
          </div>
          <div className="nachhaltigkeit__hero-card">
            <h3>Unsere Ziele 2030</h3>
            <div className="nachhaltigkeit__stats">
              {sustainabilityStats.map((stat, index) => (
                <div key={index} className="nachhaltigkeit__stat">
                  <div className="nachhaltigkeit__stat-value">{stat.value}</div>
                  <div className="nachhaltigkeit__stat-label">{stat.label}</div>
                  <div className="nachhaltigkeit__stat-desc">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="nachhaltigkeit__initiatives">
        <div className="nachhaltigkeit__container">
          <h2 className="nachhaltigkeit__section-title">
            Unsere Nachhaltigkeitsinitiativen
          </h2>
          <div className="nachhaltigkeit__initiatives-grid">
            {sustainabilityInitiatives.map((initiative) => (
              <div
                key={initiative.id}
                className={`nachhaltigkeit__initiative-card ${
                  activeInitiative === initiative.id ? "active" : ""
                }`}
                style={
                  {
                    "--initiative-color": initiative.color,
                  } as React.CSSProperties
                }
                onClick={() =>
                  setActiveInitiative(
                    activeInitiative === initiative.id ? null : initiative.id
                  )
                }
              >
                <div className="nachhaltigkeit__initiative-image">
                  <div className="nachhaltigkeit__image-placeholder">
                    <i className="fas fa-leaf"></i>
                  </div>
                </div>
                <div className="nachhaltigkeit__initiative-content">
                  <h3 className="nachhaltigkeit__initiative-title">
                    {initiative.title}
                  </h3>
                  <p className="nachhaltigkeit__initiative-subtitle">
                    {initiative.subtitle}
                  </p>
                  <p className="nachhaltigkeit__initiative-description">
                    {initiative.description}
                  </p>

                  <div
                    className={`nachhaltigkeit__initiative-details ${
                      activeInitiative === initiative.id ? "expanded" : ""
                    }`}
                  >
                    <h4>Unsere Maßnahmen:</h4>
                    <ul className="nachhaltigkeit__features-list">
                      {initiative.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="nachhaltigkeit__expand-btn">
                    <span>
                      {activeInitiative === initiative.id
                        ? "Weniger zeigen"
                        : "Mehr erfahren"}
                    </span>
                    <i
                      className={`fas fa-chevron-${
                        activeInitiative === initiative.id ? "up" : "down"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Projects */}
      <section className="nachhaltigkeit__projects">
        <div className="nachhaltigkeit__container">
          <h2 className="nachhaltigkeit__section-title">
            Umweltprojekte & Engagement
          </h2>
          <div className="nachhaltigkeit__projects-grid">
            {environmentalProjects.map((project) => (
              <article
                key={project.id}
                className="nachhaltigkeit__project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="nachhaltigkeit__project-image">
                  <div className="nachhaltigkeit__image-placeholder">
                    <i className="fas fa-seedling"></i>
                  </div>
                  <div className="nachhaltigkeit__project-badge">
                    {project.type}
                  </div>
                  <div
                    className={`nachhaltigkeit__project-status ${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="nachhaltigkeit__project-content">
                  <div className="nachhaltigkeit__project-meta">
                    <span className="nachhaltigkeit__project-date">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="nachhaltigkeit__project-title">
                    {project.title}
                  </h3>
                  <p className="nachhaltigkeit__project-description">
                    {project.description}
                  </p>
                  <div className="nachhaltigkeit__project-impact">
                    <i className="fas fa-chart-line"></i>
                    <span>Impact: {project.impact}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="nachhaltigkeit__cta">
        <div className="nachhaltigkeit__cta-container">
          <h2>Werden Sie Teil unserer Mission</h2>
          <p>
            Gemeinsam können wir eine nachhaltige Zukunft gestalten. Entdecken
            Sie unsere umweltfreundlichen Fahrzeuge und erfahren Sie, wie Sie
            aktiv zum Klimaschutz beitragen können.
          </p>
          <div className="nachhaltigkeit__cta-buttons">
            <a
              href="/fahrzeugbestand?filter=electric"
              className="nachhaltigkeit__cta-button nachhaltigkeit__cta-button--primary"
            >
              E-Fahrzeuge entdecken
            </a>
            <a
              href="/kontakt"
              className="nachhaltigkeit__cta-button nachhaltigkeit__cta-button--secondary"
            >
              Beratung vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="nachhaltigkeit__modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="nachhaltigkeit__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="nachhaltigkeit__modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="nachhaltigkeit__modal-image">
              <div className="nachhaltigkeit__image-placeholder">
                <i className="fas fa-seedling"></i>
              </div>
            </div>
            <div className="nachhaltigkeit__modal-content">
              <div className="nachhaltigkeit__modal-meta">
                <span className="nachhaltigkeit__project-date">
                  {selectedProject.date}
                </span>
                <span className="nachhaltigkeit__project-type">
                  {selectedProject.type}
                </span>
              </div>
              <h1>{selectedProject.title}</h1>
              <p className="nachhaltigkeit__modal-text">
                {selectedProject.description}
              </p>
              <div className="nachhaltigkeit__modal-impact">
                <h3>Umwelt-Impact</h3>
                <p>{selectedProject.impact}</p>
              </div>
              <div
                className={`nachhaltigkeit__modal-status ${selectedProject.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                Status: {selectedProject.status}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nachhaltigkeit;
