import React, { useEffect, useState } from "react";
// import "../../Styles/pages/geschäftskunden/_geschäftskunden.scss"; // Temporarily disabled due to path issueport React, { useEffect, useState } from "react";
import "../../Styles/pages/geschaeftskunden/_geschaeftskunden.scss";

type Subcategory = {
  name: string;
  items: string[];
  icon?: string;
  badge?: string;
  tags?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

type BusinessCategory = {
  id: string;
  name: string;
  description: string;
  summary?: string;
  icon?: string;
  subcategories: Subcategory[];
};

const businessCategories: BusinessCategory[] = [
  {
    id: "grosskunden",
    name: "Großkunden",
    description: "Flotten & Sonderkonditionen",
    summary: "Skalierbare Lösungen für Ihren gesamten Fuhrpark.",
    icon: "",
    subcategories: [
      {
        name: "Flottenlösungen",
        items: ["ab X Fahrzeugen", "Rahmenverträge", "Poolfahrzeuge"],
        badge: "Beliebt",
        tags: ["TCO", "Telematik", "Reporting"],
        ctaLabel: "Beratung anfragen",
        ctaHref: "/geschaeftskunden/beratung",
      },
      {
        name: "Konditionen",
        items: ["Sonderkonditionen", "Steuervorteile", "Versicherung"],
        badge: "Neu",
        tags: ["Rahmenvertrag", "Rabatte"],
        ctaLabel: "Konditionen erhalten",
        ctaHref: "/geschaeftskunden/konditionen",
      },
      {
        name: "Betreuung",
        items: ["Key Account", "Reporting", "Fuhrpark-Analyse"],
        tags: ["Key Account", "SLA"],
        ctaLabel: "Termin vereinbaren",
        ctaHref: "/geschaeftskunden/termin",
      },
    ],
  },
  {
    id: "firmenkunden",
    name: "Firmenkunden",
    description: "Dienstwagen & Finanzierung",
    summary: "Dienstwagenprogramme, Leasing und Servicepakete aus einer Hand.",
    icon: "",
    subcategories: [
      {
        name: "Dienstwagenprogramme",
        items: ["Mitarbeiter-Leasing", "Budgetmodelle", "Konfigurator-Hilfe"],
        tags: ["Benefit", "Richtlinien"],
        ctaLabel: "Programme ansehen",
        ctaHref: "/geschaeftskunden/dienstwagen",
      },
      {
        name: "Leasing & Finanzierung",
        items: ["Kilometer/Restwert", "Ballonfinanzierung", "Full-Service"],
        badge: "Top-Rate",
        tags: ["Kilometer", "Restwert", "Service"],
        ctaLabel: "Angebot erhalten",
        ctaHref: "/geschaeftskunden/leasing",
      },
      {
        name: "Servicepakete",
        items: ["Wartung & Verschleiß", "Reifenservice", "Hol- & Bringservice"],
        tags: ["Wartung", "Reifen", "Mobilität"],
        ctaLabel: "Paket wählen",
        ctaHref: "/geschaeftskunden/servicepakete",
      },
    ],
  },
  {
    id: "pflegedienste",
    name: "Pflegedienste",
    description: "Effizient & wirtschaftlich",
    summary:
      "Effiziente, wirtschaftliche Lösungen für den mobilen Pflegealltag.",
    icon: "",
    subcategories: [
      {
        name: "Fahrzeuge",
        items: ["Kompakt & sparsam", "Automatik", "Winterpakete"],
        tags: ["Kompakt", "Ökonomisch"],
        ctaLabel: "Modelle ansehen",
        ctaHref: "/geschaeftskunden/pflege-fahrzeuge",
      },
      {
        name: "Leasingangebote",
        items: ["Sonderraten", "Kurzlaufzeiten", "Kilometer flexibel"],
        tags: ["Kurzlaufzeit", "Flexibel"],
        ctaLabel: "Rate anfragen",
        ctaHref: "/geschaeftskunden/pflege-leasing",
      },
      {
        name: "Service",
        items: ["24h-Pannenhilfe", "Inspektion schnell", "Ersatzwagen"],
        tags: ["24/7", "Mobilität"],
        ctaLabel: "Service kontaktieren",
        ctaHref: "/geschaeftskunden/pflege-service",
      },
    ],
  },
  {
    id: "hebammen",
    name: "Hebammen",
    description: "Flexibel & zuverlässig",
    summary: "Flexible, zuverlässige Fahrzeuge und Konditionen für den Alltag.",
    icon: "",
    subcategories: [
      {
        name: "Fahrzeuge",
        items: ["Viel Stauraum", "Gute Übersicht", "Sitzkomfort"],
        tags: ["Stauraum", "Komfort"],
        ctaLabel: "Modelle ansehen",
        ctaHref: "/geschaeftskunden/hebammen-fahrzeuge",
      },
      {
        name: "Sonderleasing",
        items: ["Berufsgruppen-Rabatte", "Günstige Anzahlung", "All-Inclusive"],
        tags: ["Rabatt", "All-In"],
        ctaLabel: "Leasing prüfen",
        ctaHref: "/geschaeftskunden/hebammen-leasing",
      },
      {
        name: "Zubehör & Umbauten",
        items: ["Stauraumlösungen", "Gummimatten", "Trenngitter"],
        tags: ["Zubehör", "Umbau"],
        ctaLabel: "Optionen ansehen",
        ctaHref: "/geschaeftskunden/hebammen-zubehoer",
      },
    ],
  },
];

function Geschäftskunden() {
  const [activeCategory, setActiveCategory] = useState<string>(
    businessCategories[0].id
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 970);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const current = businessCategories.find((c) => c.id === activeCategory);

  const renderSubcategoryCard = (sub: Subcategory) => (
    <div key={sub.name} className="subcategory-section">
      <div className="subcategory-card">
        <div className="card-header">
          <div className="card-header-left">
            {sub.icon && <div className="card-icon">{sub.icon}</div>}
            <h4 className="subcategory-name">{sub.name}</h4>
          </div>
          {sub.badge && <span className="badge">{sub.badge}</span>}
        </div>
        <div className="feature-list">
          {sub.items.map((i) => (
            <div key={i} className="feature-item">
              <span className="feature-check">✓</span>
              <span className="feature-text">{i}</span>
            </div>
          ))}
        </div>
        {sub.tags && sub.tags.length > 0 && (
          <div className="tags">
            {sub.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
        {(sub.ctaLabel || sub.ctaHref) && (
          <div className="card-footer">
            <a
              className="btn-cta"
              href={sub.ctaHref || "#"}
              aria-label={`${sub.ctaLabel || "Mehr"} – ${sub.name}`}
            >
              {sub.ctaLabel || "Mehr erfahren"}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="geschaeftskunden-navigation">
        {isMobile ? (
          <div className="swiper-container-categories">
            {businessCategories.map((cat) => (
              <div
                key={cat.id}
                className={`category-item ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <h3>
                  {cat.icon} {cat.name}
                </h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        ) : (
          businessCategories.map((cat) => (
            <div
              key={cat.id}
              className={`category-item ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <h3>
                {cat.icon} {cat.name}
              </h3>
            </div>
          ))
        )}
      </div>

      {current && (
        <div className="business-grid-container">
          <h2 className="grid-title">
            {current?.summary ?? current?.description ?? current?.name}
          </h2>
          <div className="business-subcategories-grid">
            {isMobile ? (
              <div className="swiper-container-subcategories">
                {current?.subcategories?.map(renderSubcategoryCard)}
              </div>
            ) : (
              current?.subcategories?.map(renderSubcategoryCard)
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Geschäftskunden;
