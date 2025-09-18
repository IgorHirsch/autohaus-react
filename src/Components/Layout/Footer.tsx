import React from "react";
import "../../Styles/main.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section-main">
        <div className="footer__container">
          <div className="footer__text-column">
            <h3 className="footer__heading">
              Bereit, Ihre Auto-Erfahrung zu optimieren?
            </h3>
            <p className="footer__paragraph">
              Dann kommen Sie zu uns und erleben Sie den Unterschied!
            </p>
            <div className="footer__contact-item">
              <div className="footer__contact-item-icon">
                <svg className="icon" viewBox="0 0 512 512" aria-hidden="true">
                  <use href="images/svg/briefumschlag.svg#briefumschlag"></use>
                </svg>
              </div>
              <a
                className="footer__contact-item-link"
                href="mailto:contact@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@example.com
              </a>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-item-icon footer__contact-item-icon--phone">
                <svg className="icon" viewBox="0 0 512 512" aria-hidden="true">
                  <use href="images/svg/telefon.svg#telefon"></use>
                </svg>
              </div>
              <a
                className="footer__contact-item-link"
                href="tel:+49123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                +49 123 456 789
              </a>
            </div>
          </div>
        </div>
        <nav className="footer__footer">
          <ul className="footer__footer-list">
            <li>
              <a className="footer__footer-link" href="#">
                Lizenz
              </a>
            </li>
            <li>
              <a className="footer__footer-link" href="#">
                Datenschutz &amp; Cookies
              </a>
            </li>
            <li>
              <a className="footer__footer-link" href="#">
                Nutzungsbedingungen
              </a>
            </li>
            <li>
              <a className="footer__footer-link" href="#">
                Markenrechte
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} AUTO EMOTION GmbH. Alle Rechte
          vorbehalten.
        </div>
      </section>
    </footer>
  );
}

export default Footer;
