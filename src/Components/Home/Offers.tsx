import React from "react";

function Offers() {
  return (
    <div>
      <section className="glass-offers offers">
        <div className="container">
          <div className="offers__column-text">
            <h2 className="offers__text-heading">
              Topangebote aus unserem Bestand
            </h2>
          </div>

          {/* Container für drei karten */}
          <div className="offers__container">
            {/* Erste karte */}
            <div className="offers__card">
              <div className="offers__image-container">
                <img
                  className="offers__image"
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=75&w=300&h=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cupra Formentor"
                />
              </div>
              <div className="offers__content">
                <h4 className="offers__content-heading">Cupra Formentor</h4>
                <p className="offers__content-subheading">VZ Extreme 2.0 TSI</p>
                <div className="offers__content-info">
                  <div className="offers__content-info-duration">
                    <span className="offers__content-info-duration-text">
                      <strong>333</strong> PS
                    </span>
                  </div>
                  <div className="offers__content-info-level">
                    <span className="offers__content-info-duration-text">
                      8,9 L/100km
                    </span>
                  </div>
                </div>
                <div className="offers__content-price-container">
                  jetzt nur:
                  <strong className="offers__content-price">299,00 €</strong>
                </div>
              </div>

              {/* Card Hover */}
              <div className="offers__card-hover">
                {/* Button */}
                <a
                  href="#"
                  className="button contact-button button--slim button--secondary"
                  data-probefahrt-open="true"
                >
                  Jetzt Probefahrt buchen
                </a>
              </div>
            </div>

            {/* Zweite karte */}
            <div className="offers__card">
              <div className="offers__image-container">
                <img
                  className="offers__image"
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=75&w=300&h=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nissan Ariya"
                />
              </div>
              <div className="offers__content">
                <h4 className="offers__content-heading">Nissan Ariya</h4>
                <p className="offers__content-subheading">Elektro</p>
                <div className="offers__content-info">
                  <div className="offers__content-info-duration">
                    <span className="offers__content-info-duration-text">
                      <strong>160</strong> kW
                    </span>
                  </div>
                  <div className="offers__content-info-level">
                    <span className="offers__content-info-duration-text">
                      63-kWh
                    </span>
                  </div>
                </div>
                <div className="offers__content-price-container">
                  jetzt nur:
                  <strong className="offers__content-price">249,00 €</strong>
                </div>
              </div>
              <div className="offers__card-hover">
                <a
                  href="#"
                  className="button contact-button button--slim button--secondary"
                  data-probefahrt-open="true"
                >
                  Jetzt Probefahrt buchen
                </a>
              </div>
            </div>

            {/* dritte Karte */}
            <div className="werbecard">
              <div className="werbecard__image-container">
                <img
                  className="werbecard__image"
                  src="https://images.unsplash.com/photo-1692204621769-e77d24e25b12?q=75&w=300&h=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cupra Tavascan"
                />
              </div>
              <div className="werbecard__content">
                <h4 className="werbecard__content-heading">Cupra Tavascan</h4>
                <p className="werbecard__content-subheading">Elektro</p>
                <div className="werbecard__content-info">
                  <div className="werbecard__content-info-duration">
                    <span className="werbecard__content-info-duration-text">
                      <strong>250</strong> kW
                    </span>
                  </div>
                  <div className="werbecard__content-info-level">
                    <span className="werbecard__content-info-duration-text">
                      569 km
                    </span>
                  </div>
                </div>
                <div className="werbecard__content-price-container">
                  jetzt nur:
                  <strong className="werbecard__content-price">225,00 €</strong>
                </div>
              </div>
              <div className="werbecard__card-hover">
                <a
                  href="#"
                  className="button contact-button werbung-contact-button button--slim button--secondary"
                  data-probefahrt-open="true"
                >
                  Jetzt Probefahrt buchen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offers;
