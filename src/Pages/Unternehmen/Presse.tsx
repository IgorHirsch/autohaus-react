import React, { useState } from "react";
import "../../Styles/pages/unternehmen/_presse.scss";

const newsCategories = [
  { id: "all", label: "Alle News" },
  { id: "events", label: "Events" },
  { id: "awards", label: "Auszeichnungen" },
  { id: "partnerships", label: "Partnerschaften" },
  { id: "products", label: "Neue Modelle" },
];

const pressNews = [
  {
    id: 1,
    category: "events",
    title: "Auto Emotion eröffnet neues CUPRA High Performance Center",
    subtitle: "Erweiterte Kapazitäten für Hochleistungsfahrzeuge",
    date: "15. September 2025",
    author: "Auto Emotion Presseteam",
    image: "/images/news/cupra-center-opening.jpg",
    excerpt:
      "Mit dem neuen CUPRA High Performance Center erweitert Auto Emotion seine Kompetenz im Bereich sportlicher Fahrzeuge und bietet Kunden einen exklusiven Service.",
    content:
      "Nach monatelanger Planung und Umbauzeit präsentiert Auto Emotion stolz das neue CUPRA High Performance Center. Auf über 500 Quadratmetern können Kunden ab sofort die neuesten CUPRA Modelle erleben und von spezialisiertem Service profitieren.",
    tags: ["CUPRA", "Neueröffnung", "Service"],
    featured: true,
  },
  {
    id: 2,
    category: "awards",
    title: 'Auto Emotion als "Autohaus des Jahres 2025" ausgezeichnet',
    subtitle: "Bestnote in Kundenservice und Beratungsqualität",
    date: "28. August 2025",
    author: "Automotive Excellence Awards",
    image: "/images/news/award-ceremony.jpg",
    excerpt:
      "Die unabhängige Jury der Automotive Excellence Awards würdigt die herausragende Leistung von Auto Emotion in allen Servicebereichen.",
    content:
      "Bei der diesjährigen Verleihung der Automotive Excellence Awards konnte Auto Emotion mit überzeugenden Leistungen in den Kategorien Kundenservice, Beratungsqualität und Werkstattleistung punkten.",
    tags: ["Auszeichnung", "Kundenservice", "Qualität"],
    featured: true,
  },
  {
    id: 3,
    category: "products",
    title: "Neuer NISSAN Ariya: Elektromobilität der Zukunft",
    subtitle: "Jetzt bei Auto Emotion verfügbar",
    date: "10. August 2025",
    author: "NISSAN Produktteam",
    image: "/images/news/nissan-ariya-launch.jpg",
    excerpt:
      "Der neue NISSAN Ariya kombiniert innovative Elektrotechnik mit elegantem Design und ist ab sofort bei Auto Emotion erhältlich.",
    content:
      "Der NISSAN Ariya markiert einen Meilenstein in der Elektromobilität. Mit seiner beeindruckenden Reichweite von bis zu 500 Kilometern und modernster Technologie setzt er neue Maßstäbe.",
    tags: ["NISSAN", "Elektromobilität", "Innovation"],
    featured: false,
  },
  {
    id: 4,
    category: "partnerships",
    title: "Strategische Partnerschaft mit lokalen Energieanbietern",
    subtitle: "Ausbau der Ladeinfrastruktur für Elektrofahrzeuge",
    date: "22. Juli 2025",
    author: "Auto Emotion Geschäftsleitung",
    image: "/images/news/charging-infrastructure.jpg",
    excerpt:
      "Auto Emotion verstärkt sein Engagement für nachhaltige Mobilität durch neue Partnerschaften im Bereich der Ladeinfrastruktur.",
    content:
      "Durch die Kooperation mit regionalen Energieversorgern entstehen neue Schnellladestationen und ein flächendeckendes Netzwerk für Elektrofahrzeuge.",
    tags: ["Partnerschaft", "Elektromobilität", "Nachhaltigkeit"],
    featured: false,
  },
  {
    id: 5,
    category: "events",
    title: "SEAT Leon Cupra R Testfahrt-Event",
    subtitle: "Exklusives Fahrerlebnis auf der Rennstrecke",
    date: "5. Juli 2025",
    author: "SEAT Sport Team",
    image: "/images/news/cupra-r-event.jpg",
    excerpt:
      "Ausgewählte Kunden konnten die Performance des neuen SEAT Leon Cupra R auf der Rennstrecke hautnah erleben.",
    content:
      "Das exklusive Event bot 30 Kunden die Möglichkeit, den neuen Leon Cupra R unter professioneller Anleitung auf einer Rennstrecke zu testen.",
    tags: ["SEAT", "Event", "Performance"],
    featured: false,
  },
  {
    id: 6,
    category: "events",
    title: "Tag der offenen Tür: 25 Jahre Auto Emotion",
    subtitle: "Jubiläumsfeier mit Sonderaktionen",
    date: "18. Juni 2025",
    author: "Auto Emotion Team",
    image: "/images/news/anniversary-celebration.jpg",
    excerpt:
      "Hunderte Besucher feierten mit Auto Emotion das 25-jährige Bestehen des Unternehmens.",
    content:
      "Mit Werksführungen, Probefahrten und einem großen Familienprogramm wurde das Jubiläum gebührend gefeiert. Sonderkonditionen und Gewinnspiele rundeten den Tag ab.",
    tags: ["Jubiläum", "Event", "Familientag"],
    featured: false,
  },
];

const Presse: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedNews, setSelectedNews] = useState<
    (typeof pressNews)[0] | null
  >(null);

  const filteredNews =
    activeCategory === "all"
      ? pressNews
      : pressNews.filter((news) => news.category === activeCategory);

  const featuredNews = pressNews.filter((news) => news.featured);
  const regularNews = filteredNews.filter((news) => !news.featured);

  return (
    <div className="presse">
      {/* Background Effects */}
      <div className="presse__background">
        <div className="presse__glow presse__glow--left"></div>
        <div className="presse__glow presse__glow--right"></div>
      </div>

      {/* Hero Section */}
      <section className="presse__hero">
        <div className="presse__hero-container">
          <div className="presse__hero-content">
            <div className="presse__badge">News & Presse</div>
            <h1 className="presse__hero-title">Aktuelles von Auto Emotion</h1>
            <p className="presse__hero-lead">
              Bleiben Sie auf dem Laufenden über Neuigkeiten, Events und
              Entwicklungen.
            </p>
            <p className="presse__hero-description">
              Von Produktneuheiten über Auszeichnungen bis hin zu besonderen
              Events – hier finden Sie alle wichtigen Informationen rund um Auto
              Emotion und unsere Marken SEAT, CUPRA und NISSAN.
            </p>
          </div>
          <div className="presse__hero-card">
            <h3 style={{ margin: 0, color: "#e86838", fontSize: "1.1rem" }}>
              Pressekontakt
            </h3>
            <p
              style={{
                margin: "0.5rem 0",
                fontSize: "0.9rem",
                lineHeight: 1.5,
                opacity: 0.8,
              }}
            >
              Für Presseanfragen und weitere Informationen stehen wir Ihnen
              gerne zur Verfügung.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "1rem",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              <div>
                <strong style={{ color: "#4ecdc4" }}>E-Mail:</strong>
                <br />
                presse@autohaus-emotion.de
              </div>
              <div>
                <strong style={{ color: "#45b7d1" }}>Telefon:</strong>
                <br />
                +49 69 123456-50
              </div>
              <div>
                <strong style={{ color: "#96ceb4" }}>Ansprechpartner:</strong>
                <br />
                Andrea Schmidt
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Filter */}
      <section className="presse__filter">
        <div className="presse__container">
          <div className="presse__filter-tabs">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                className={`presse__filter-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {activeCategory === "all" && featuredNews.length > 0 && (
        <section className="presse__featured">
          <div className="presse__container">
            <h2 className="presse__section-title">Aktuelle Highlights</h2>
            <div className="presse__featured-grid">
              {featuredNews.map((news) => (
                <article
                  key={news.id}
                  className="presse__featured-card"
                  onClick={() => setSelectedNews(news)}
                >
                  <div className="presse__news-image">
                    <div className="presse__image-placeholder">
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <div className="presse__news-badge">
                      {
                        newsCategories.find((cat) => cat.id === news.category)
                          ?.label
                      }
                    </div>
                  </div>
                  <div className="presse__news-content">
                    <div className="presse__news-meta">
                      <span className="presse__news-date">{news.date}</span>
                      <span className="presse__news-author">
                        von {news.author}
                      </span>
                    </div>
                    <h3 className="presse__news-title">{news.title}</h3>
                    <p className="presse__news-subtitle">{news.subtitle}</p>
                    <p className="presse__news-excerpt">{news.excerpt}</p>
                    <div className="presse__news-tags">
                      {news.tags.map((tag, index) => (
                        <span key={index} className="presse__news-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="presse__news">
        <div className="presse__container">
          <h2 className="presse__section-title">
            {activeCategory === "all"
              ? "Weitere Nachrichten"
              : newsCategories.find((cat) => cat.id === activeCategory)?.label}
          </h2>
          <div className="presse__news-grid">
            {regularNews.map((news) => (
              <article
                key={news.id}
                className="presse__news-card"
                onClick={() => setSelectedNews(news)}
              >
                <div className="presse__news-image">
                  <div className="presse__image-placeholder">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="presse__news-badge">
                    {
                      newsCategories.find((cat) => cat.id === news.category)
                        ?.label
                    }
                  </div>
                </div>
                <div className="presse__news-content">
                  <div className="presse__news-meta">
                    <span className="presse__news-date">{news.date}</span>
                  </div>
                  <h3 className="presse__news-title">{news.title}</h3>
                  <p className="presse__news-excerpt">{news.excerpt}</p>
                  <div className="presse__news-tags">
                    {news.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="presse__news-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div
          className="presse__modal-overlay"
          onClick={() => setSelectedNews(null)}
        >
          <div className="presse__modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="presse__modal-close"
              onClick={() => setSelectedNews(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="presse__modal-image">
              <div className="presse__image-placeholder">
                <i className="fas fa-newspaper"></i>
              </div>
            </div>
            <div className="presse__modal-content">
              <div className="presse__modal-meta">
                <span className="presse__news-date">{selectedNews.date}</span>
                <span className="presse__news-author">
                  von {selectedNews.author}
                </span>
              </div>
              <h1>{selectedNews.title}</h1>
              <h2>{selectedNews.subtitle}</h2>
              <p className="presse__modal-text">{selectedNews.content}</p>
              <div className="presse__news-tags">
                {selectedNews.tags.map((tag, index) => (
                  <span key={index} className="presse__news-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presse;
