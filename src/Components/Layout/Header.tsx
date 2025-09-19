import React from "react";
import "../../Styles/main.css";
import StarBorder from "../Elements/StarBorder";
import BrandNavigation from "../Page/BrandNavigation";

function Header() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo-container"></div>
        <div className="logo">
          <a href="./index.html">
            {" "}
            <span className="logo__accent">AUTO EMOTION</span>
          </a>
        </div>
        <input type="radio" name="slider" id="menu-btn" title="Menü öffnen" />
        <input
          type="radio"
          name="slider"
          id="close-btn"
          title="Menü schließen"
        />
        <ul className="nav-links">
          {/* Marken React */}
          <li>
            <a href="#" className="desktop-item">
              Neuwagen
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              Neuwagen
            </label>
            <div className="mega-box">
              <div className="content">
                <BrandNavigation />
              </div>
            </div>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Fahrzeugbestand
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              Fahrzeugbestand
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img
                    id="dynamic-logo"
                    src="https://static.vecteezy.com/system/resources/previews/020/502/464/original/cupra-brand-logo-car-symbol-white-design-spanish-automobile-illustration-with-black-background-free-vector.jpg"
                    alt="Cupra Logo"
                  />
                </div>

                <div className="row">
                  <img
                    id="dynamic-logo"
                    src="https://static.vecteezy.com/system/resources/previews/020/927/059/original/seat-logo-brand-car-symbol-white-design-spanish-automobile-illustration-with-black-background-free-vector.jpg"
                    alt="Cupra Logo"
                  />
                </div>
                <div className="row">
                  <img
                    id="dynamic-logo"
                    src="https://tse4.mm.bing.net/th/id/OIP.sTB2EHz-3nyR82Gp_0fzVQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Cupra Logo"
                  />
                </div>
                <div className="row">
                  <img
                    id="dynamic-logo"
                    src="https://wallpapercave.com/wp/wp2229386.jpg"
                    alt="Cupra Logo"
                  />
                </div>
                <div className="row">
                  <img
                    id="dynamic-logo"
                    src="https://logowik.com/content/uploads/images/audi-line-black4986.logowik.com.webp"
                    alt="Cupra Logo"
                  />
                </div>
              </div>
            </div>
          </li>

          {/* Leistungen */}
          <li>
            <a href="#" className="desktop-item">
              Leistungen
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Leistungen
            </label>
            <ul className="drop-menu">
              <li>
                <a href="sites/unternehmen/uberuns.html">
                  Neu und Gebrauchtwagen
                </a>
              </li>
              <li>
                <a href="sites/unternehmen/anfahrt.html">Leasingsangebote</a>
              </li>
              <li>
                <a href="sites/unternehmen/jobs.html">
                  Ersatzwagen & Mietwagen
                </a>
              </li>
              <li>
                <a href="sites/unternehmen/jobs.html">Wartung & Reparatur</a>
              </li>
              <li>
                <a href="sites/unternehmen/aktuelles.html">Reifenleistungen</a>
              </li>
              <li>
                <a href="sites/unternehmen/aktuelles.html">Dialognahme</a>
              </li>
              <li>
                <a href="sites/unternehmen/galerie.html">HU-Service</a>
              </li>
              <li>
                <a href="sites/unternehmen/aktuelles.html">
                  Werkstadt Leistungen
                </a>
              </li>
              <li>
                <a href="sites/unternehmen/anschprechpartner.html">
                  Hol- und Bringservice
                </a>
              </li>
              <li>
                <a href="sites/unternehmen/galerie.html">Garantie</a>
              </li>
              <li>
                <a href="sites/unternehmen/galerie.html">Teile und Zubehör</a>
              </li>
            </ul>
          </li>

          {/* Für Gewerbekunden */}
          <li>
            <a href="#" className="desktop-item">
              Für Gewerbekunden
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Leistungen
            </label>
            <ul className="drop-menu">
              <li>
                <a href="sites/unternehmen/uberuns.html">Firmenkunden</a>
              </li>
              <li>
                <a href="sites/unternehmen/anfahrt.html">Großkunden</a>
              </li>
              <li>
                <a href="sites/unternehmen/jobs.html">
                  Pflegedienste und Hebammen
                </a>
              </li>
            </ul>
          </li>

          {/* Unternehmen */}
          <li>
            <a href="#" className="desktop-item">
              Unternehmen
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Unternehmen
            </label>
            <ul className="drop-menu">
              <li>
                <a href="sites/unternehmen/uberuns.html">Uber uns</a>
              </li>
              <li>
                <a href="sites/unternehmen/jobs.html">Jobs</a>
              </li>
              <li>
                <a href="sites/unternehmen/aktuelles.html">Aktuelles</a>
              </li>
              <li>
                <a href="sites/unternehmen/anschprechpartner.html">
                  Anschprechpartner
                </a>
              </li>
              <li>
                <a href="sites/unternehmen/anfahrt.html">
                  Anfart & Öffnungszeiten
                </a>
              </li>
              <li>
                <a href="sites/unternehmen/galerie.html">Galerie</a>
              </li>
            </ul>
          </li>

          {/* Onlineshop */}
          <li>
            <a href="#" className="desktop-item">
              Onlineshop
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Unternehmen
            </label>
            <ul className="drop-menu">
              <li>
                <a href="sites/onlineshop/onlineshop.html">
                  Ersatzteile & Komponenten
                </a>
              </li>
              <li>
                <a href="sites/">Autozubehör & Tuning</a>
              </li>
              <li>
                <a href="sites/">Reifen & Räder</a>
              </li>
              <li>
                <a href="sites/">Lifestyle & Merchandise</a>
              </li>
              <li>
                <a href="sites/">Elektronik & Gadgets</a>
              </li>
            </ul>
          </li>

          {/* Kontakt */}
          <li>
            <StarBorder
              as="button"
              className="contact-button"
              color="red"
              speed="1s"
            >
              Kontakt
            </StarBorder>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
}

export default Header;
