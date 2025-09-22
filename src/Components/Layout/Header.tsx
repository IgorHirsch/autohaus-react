import React, { useState } from "react";
import "../../Styles/main.css";
import StarBorder from "../Elements/StarBorder";
import BrandNavigation from "../Page/BrandNavigation";
import VehicleStockNavigation from "../Page/VehicleStockNavigation";
import Angebote from "../Page/Angebote";
import Kontakt from "../Page/Kontakt";

function Header() {
  const [isKontaktVisible, setIsKontaktVisible] = useState(false);

  // Function to open contact modal
  const handleKontaktOpen = () => {
    setIsKontaktVisible(true);
    // Close mobile menu if open
    const menuToggle = document.getElementById(
      "menu-toggle"
    ) as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  };

  // Function to close contact modal
  const handleKontaktClose = () => {
    setIsKontaktVisible(false);
  };

  // Function to close all other menus when one is opened
  const handleMenuToggle = (targetId: string) => {
    const menuIds = [
      "showMega",
      "showMega2",
      "showMega3", // Neue ID für Angebote & Finanzierung
      "showDrop1",
      "showDrop2",
      "showDrop3",
      "showDrop4",
    ];

    // Sanftes Schließen aller anderen Menus mit längerem Delay
    menuIds.forEach((id) => {
      if (id !== targetId) {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        if (checkbox && checkbox.checked) {
          // Längeres Delay für smootheren Übergang
          setTimeout(() => {
            checkbox.checked = false;
          }, 100);
        }
      }
    });

    // Das neue Menu nach einem längeren Delay öffnen für smootheren Wechsel
    setTimeout(() => {
      const targetCheckbox = document.getElementById(
        targetId
      ) as HTMLInputElement;
      if (targetCheckbox) {
        targetCheckbox.checked = true;
      }
    }, 300);
  };

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
        <input type="checkbox" id="menu-toggle" title="Menü umschalten" />
        <ul className="nav-links">
          {/* Marken React */}
          <li>
            <a href="#" className="desktop-item">
              Neuwagen
            </a>
            <input type="checkbox" id="showMega" />
            <label
              htmlFor="showMega"
              className="mobile-item"
              onClick={() => handleMenuToggle("showMega")}
            >
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
            <input type="checkbox" id="showMega2" />
            <label
              htmlFor="showMega2"
              className="mobile-item"
              onClick={() => handleMenuToggle("showMega2")}
            >
              Fahrzeugbestand
            </label>
            <div className="mega-box">
              <div className="content">
                <VehicleStockNavigation />
              </div>
            </div>
          </li>

          {/* Angebote & Finanzierung */}
          <li>
            <a href="#" className="desktop-item">
              Angebote & Finanzierung
            </a>
            <input type="checkbox" id="showMega3" />
            <label
              htmlFor="showMega3"
              className="mobile-item"
              onClick={() => handleMenuToggle("showMega3")}
            >
              Angebote & Finanzierung
            </label>
            <div className="mega-box">
              <div className="content">
                <Angebote />
              </div>
            </div>
          </li>

          {/* Für Gewerbekunden */}
          <li>
            <a href="#" className="desktop-item">
              Gewerbekunden
            </a>
            <input type="checkbox" id="showDrop2" />
            <label
              htmlFor="showDrop2"
              className="mobile-item"
              onClick={() => handleMenuToggle("showDrop2")}
            >
              Für Gewerbekunden
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
            <input type="checkbox" id="showDrop3" />
            <label
              htmlFor="showDrop3"
              className="mobile-item"
              onClick={() => handleMenuToggle("showDrop3")}
            >
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
            <input type="checkbox" id="showDrop4" />
            <label
              htmlFor="showDrop4"
              className="mobile-item"
              onClick={() => handleMenuToggle("showDrop4")}
            >
              Onlineshop
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
              onClick={handleKontaktOpen}
            >
              Kontakt
            </StarBorder>
          </li>
        </ul>
        <label htmlFor="menu-toggle" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>

      {/* Kontakt Modal */}
      <Kontakt isActive={isKontaktVisible} onClose={handleKontaktClose} />
    </nav>
  );
}

export default Header;
