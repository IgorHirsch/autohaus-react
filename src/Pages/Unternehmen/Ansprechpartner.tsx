import React from "react";
import "../../Styles/pages/unternehmen/_ansprechpartner.scss";

const teamMembers = [
  {
    id: "geschaeftsfuehrung",
    category: "Geschäftsführung",
    members: [
      {
        name: "Stefan Müller",
        position: "Geschäftsführer",
        department: "Gesamtleitung",
        phone: "+49 69 123456-10",
        email: "s.mueller@autohaus-emotion.de",
        image: "/images/team/stefan-mueller.jpg",
        description:
          "Mit über 20 Jahren Branchenerfahrung führt Stefan Müller unser Unternehmen mit Weitblick und Leidenschaft für Automobile.",
      },
      {
        name: "Andrea Schmidt",
        position: "Prokuristin",
        department: "Finanzen & Personal",
        phone: "+49 69 123456-11",
        email: "a.schmidt@autohaus-emotion.de",
        image: "/images/team/andrea-schmidt.jpg",
        description:
          "Andrea Schmidt verantwortet die kaufmännischen Bereiche und sorgt für eine starke Unternehmensführung.",
      },
    ],
  },
  {
    id: "verkauf",
    category: "Verkauf & Beratung",
    members: [
      {
        name: "Michael Weber",
        position: "Verkaufsleiter",
        department: "Neuwagen",
        phone: "+49 69 123456-20",
        email: "m.weber@autohaus-emotion.de",
        image: "/images/team/michael-weber.jpg",
        description:
          "Experte für SEAT, CUPRA und NISSAN Neuwagen mit fundierter Beratung zu Finanzierung und Leasing.",
      },
      {
        name: "Julia Fischer",
        position: "Verkaufsberaterin",
        department: "Gebrauchtwagen",
        phone: "+49 69 123456-21",
        email: "j.fischer@autohaus-emotion.de",
        image: "/images/team/julia-fischer.jpg",
        description:
          "Spezialistin für hochwertige Gebrauchtwagen mit einem Blick für Qualität und faire Preisgestaltung.",
      },
      {
        name: "Thomas Bauer",
        position: "Flottenberater",
        department: "Geschäftskunden",
        phone: "+49 69 123456-22",
        email: "t.bauer@autohaus-emotion.de",
        image: "/images/team/thomas-bauer.jpg",
        description:
          "Kompetenter Partner für Firmenflotten und Geschäftskunden mit maßgeschneiderten Mobilitätslösungen.",
      },
    ],
  },
  {
    id: "service",
    category: "Service & Werkstatt",
    members: [
      {
        name: "Markus Hoffmann",
        position: "Serviceleiter",
        department: "Werkstattleitung",
        phone: "+49 69 123456-30",
        email: "m.hoffmann@autohaus-emotion.de",
        image: "/images/team/markus-hoffmann.jpg",
        description:
          "Leitet unser Serviceteam und sorgt für höchste Qualitätsstandards in Wartung und Reparatur.",
      },
      {
        name: "Alexander Klein",
        position: "Kfz-Meister",
        department: "Diagnose & Reparatur",
        phone: "+49 69 123456-31",
        email: "a.klein@autohaus-emotion.de",
        image: "/images/team/alexander-klein.jpg",
        description:
          "Kfz-Meister mit Spezialisierung auf moderne Fahrzeugelektronik und Diagnoseverfahren.",
      },
      {
        name: "Daniel Koch",
        position: "Kfz-Mechaniker",
        department: "Wartung & Service",
        phone: "+49 69 123456-32",
        email: "d.koch@autohaus-emotion.de",
        image: "/images/team/daniel-koch.jpg",
        description:
          "Erfahrener Kfz-Mechaniker für alle Wartungsarbeiten und kleinere Reparaturen.",
      },
    ],
  },
  {
    id: "administration",
    category: "Administration",
    members: [
      {
        name: "Sabine Wagner",
        position: "Kundenbetreuerin",
        department: "Kundendienst",
        phone: "+49 69 123456-40",
        email: "s.wagner@autohaus-emotion.de",
        image: "/images/team/sabine-wagner.jpg",
        description:
          "Erste Ansprechpartnerin für alle Kundenanfragen und organisiert Termine sowie Abläufe.",
      },
      {
        name: "Lisa Zimmermann",
        position: "Buchhaltung",
        department: "Finanzen",
        phone: "+49 69 123456-41",
        email: "l.zimmermann@autohaus-emotion.de",
        image: "/images/team/lisa-zimmermann.jpg",
        description:
          "Verantwortlich für die Buchhaltung und unterstützt bei Finanzierungs- und Leasingabwicklungen.",
      },
    ],
  },
];

const Ansprechpartner: React.FC = () => {
  return (
    <div className="ansprechpartner">
      {/* Background Effects */}
      <div className="ansprechpartner__background">
        <div className="ansprechpartner__glow ansprechpartner__glow--left"></div>
        <div className="ansprechpartner__glow ansprechpartner__glow--right"></div>
      </div>

      {/* Hero Section */}
      <section className="ansprechpartner__hero">
        <div className="ansprechpartner__hero-container">
          <div className="ansprechpartner__hero-content">
            <div className="ansprechpartner__badge">Team & Ansprechpartner</div>
            <h1 className="ansprechpartner__hero-title">
              Ihr persönliches Team bei Auto Emotion
            </h1>
            <p className="ansprechpartner__hero-lead">
              Lernen Sie unser engagiertes Team kennen – von der
              Geschäftsführung bis zur Werkstatt.
            </p>
            <p className="ansprechpartner__hero-description">
              Jeder unserer Mitarbeiter bringt Expertise und Leidenschaft mit,
              um Ihnen den bestmöglichen Service zu bieten. Mit jahrelanger
              Erfahrung und kontinulicher Weiterbildung stehen wir Ihnen in
              allen Bereichen zur Seite.
            </p>
          </div>
          <div className="ansprechpartner__hero-card">
            <h3 style={{ margin: 0, color: "#e86838", fontSize: "1.1rem" }}>
              Unser Versprechen
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: 1.5,
                opacity: 0.8,
              }}
            >
              Persönliche Beratung, kompetenter Service und langfristige
              Partnerschaften – das ist es, was uns ausmacht.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              <div>
                <strong style={{ color: "#4ecdc4" }}>12+</strong>
                <br />
                Teammitglieder
              </div>
              <div>
                <strong style={{ color: "#45b7d1" }}>20+</strong>
                <br />
                Jahre Erfahrung
              </div>
              <div>
                <strong style={{ color: "#96ceb4" }}>24/7</strong>
                <br />
                Für Sie da
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="ansprechpartner__content">
        <div className="ansprechpartner__container">
          {teamMembers.map((category) => (
            <div
              key={category.id}
              className="ansprechpartner__category"
              data-category={category.id}
            >
              <h2 className="ansprechpartner__category-title">
                {category.category}
              </h2>
              <div className="ansprechpartner__team-grid">
                {category.members.map((member, index) => (
                  <div
                    key={index}
                    className="ansprechpartner__member-card"
                    data-category={category.id}
                  >
                    <div className="ansprechpartner__member-image">
                      <div className="ansprechpartner__member-placeholder">
                        <i className="fas fa-user"></i>
                      </div>
                    </div>
                    <div className="ansprechpartner__member-info">
                      <h3 className="ansprechpartner__member-name">
                        {member.name}
                      </h3>
                      <p className="ansprechpartner__member-position">
                        {member.position}
                      </p>
                      <p className="ansprechpartner__member-department">
                        {member.department}
                      </p>
                      <p className="ansprechpartner__member-description">
                        {member.description}
                      </p>

                      <div className="ansprechpartner__member-contact">
                        <div className="ansprechpartner__contact-item">
                          <i className="fas fa-phone"></i>
                          <a href={`tel:${member.phone}`}>{member.phone}</a>
                        </div>
                        <div className="ansprechpartner__contact-item">
                          <i className="fas fa-envelope"></i>
                          <a href={`mailto:${member.email}`}>{member.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="ansprechpartner__cta">
        <div className="ansprechpartner__cta-container">
          <h2 className="ansprechpartner__cta-title">Haben Sie Fragen?</h2>
          <p className="ansprechpartner__cta-description">
            Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns
            direkt oder besuchen Sie uns vor Ort.
          </p>
          <div className="ansprechpartner__cta-buttons">
            <a
              href="/kontakt"
              className="ansprechpartner__cta-button ansprechpartner__cta-button--primary"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="tel:+496912345600"
              className="ansprechpartner__cta-button ansprechpartner__cta-button--secondary"
            >
              <i className="fas fa-phone"></i>
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ansprechpartner;
