import React from "react";

function Wilkommen() {
  return (
    <section className="wilkommen glass-wilkommen">
      <div className="wilkommen__container">
        <div className="wilkommen__text-subline">
          <span className="wilkommen__text-subline-item">
            Herzlich Willkommen bei uns
          </span>
        </div>
        <h2 className="wilkommen__text-heading">
          Willkommen bei Ihrem Autohaus
        </h2>

        <div className="wilkommen__content">
          <div className="wilkommen__text-section">
            <p className="wilkommen__text">
              Seit über 20 Jahren sind wir Ihr vertrauensvoller Partner rund um
              das Thema Mobilität. Als autorisierter Händler für Cupra, SEAT und
              Nissan bieten wir Ihnen nicht nur erstklassige Fahrzeuge, sondern
              auch einen umfassenden Service, der keine Wünsche offen lässt.
            </p>
            <p className="wilkommen__text">
              Unser erfahrenes Team steht Ihnen mit Kompetenz und Leidenschaft
              zur Seite – von der ersten Beratung über den Fahrzeugkauf bis hin
              zur professionellen Wartung und Pflege Ihres Autos. Entdecken Sie,
              was echte Kundenbetreuung bedeutet.
            </p>

            <div className="wilkommen__highlights">
              <div className="wilkommen__highlight-item">
                <div className="wilkommen__highlight-content">
                  <h4 className="wilkommen__highlight-title">
                    Große Fahrzeugauswahl
                  </h4>
                  <p className="wilkommen__highlight-desc">
                    Über 200 Neu- und Gebrauchtwagen auf Lager
                  </p>
                </div>
              </div>

              <div className="wilkommen__highlight-item">
                <div className="wilkommen__highlight-content">
                  <h4 className="wilkommen__highlight-title">
                    Meisterwerkstatt
                  </h4>
                  <p className="wilkommen__highlight-desc">
                    Zertifizierte Techniker für alle Marken
                  </p>
                </div>
              </div>

              <div className="wilkommen__highlight-item">
                <div className="wilkommen__highlight-content">
                  <h4 className="wilkommen__highlight-title">
                    20+ Jahre Erfahrung
                  </h4>
                  <p className="wilkommen__highlight-desc">
                    Vertrauen durch Kompetenz und Zuverlässigkeit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wilkommen__image-section">
            <div className="wilkommen__image-container">
              <img
                className="wilkommen__image"
                src="https://www.seat-mediacenter.de/content/dam/seat-media-center/Img/de/2022/06/20220610_fuenf-spannende-fakten-ueber-cupra/F%C3%BCnf%20Fakten_CUPRA_04.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
                alt="Modernes Autohaus Showroom"
              />
              <div className="wilkommen__image-overlay">
                <div className="wilkommen__image-text">
                  <h3>Ihr Traumauto wartet auf Sie</h3>
                  <p>
                    Besuchen Sie uns und lassen Sie sich von unserer Auswahl
                    begeistern
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wilkommen;
