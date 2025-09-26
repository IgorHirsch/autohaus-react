import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Styles/main.css";
import StarBorder from "../Elements/StarBorder";
import BrandNavigation from "../Page/Neuwagen";
import VehicleStockNavigation from "../Page/Fahrzeugbestand";
import Geschaeftskunden from "../Page/Geschaeftskunden";
import Angebote from "../Page/Angebote";
import Kontakt from "../Page/Kontakt";
import Werkstatt from "../Page/Werkstatt";
import OnlineShop from "../Page/OnlineShop";
import Unternehmen from "../Page/Unternehmen";

const MENU_CHECKBOX_IDS = [
  "showMega",
  "showMega2",
  "showMega3",
  "showMega4",
  "showMega5",
  "showMega6",
  "showDrop1",
  "showDrop2",
  "showDrop3",
];

const MENU_TOGGLE_ID = "menu-toggle";

function Header() {
  const [isKontaktVisible, setIsKontaktVisible] = useState(false);
  const location = useLocation();
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close all mega menus when route changes
  useEffect(() => {
  const menuIds = [...MENU_CHECKBOX_IDS, MENU_TOGGLE_ID];

    // Add class to disable hover effects temporarily
    const navElement = document.querySelector("nav");
    if (navElement) {
      navElement.classList.add("force-close-menus");
    }

    menuIds.forEach((id) => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox && checkbox.checked) {
        checkbox.checked = false;
      }
    });

    // Force blur all navigation elements to remove hover states
    const navLinks = document.querySelectorAll(
      ".nav-links li a, .nav-links li label"
    );
    navLinks.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.blur();
      }
    });

    // Clear any pending timeout when route changes
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    // Remove the force-close class after a short delay
    const removeClassTimeout = setTimeout(() => {
      if (navElement) {
        navElement.classList.remove("force-close-menus");
      }
    }, 1500);

    return () => clearTimeout(removeClassTimeout);
  }, [location]);

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
    // Clear any pending timeout first
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

  const menuIds = MENU_CHECKBOX_IDS;

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
    openTimeoutRef.current = setTimeout(() => {
      const targetCheckbox = document.getElementById(
        targetId
      ) as HTMLInputElement;
      if (targetCheckbox) {
        targetCheckbox.checked = true;
      }
      openTimeoutRef.current = null;
    }, 300);
  };

  const closeAllMenusImmediately = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    MENU_CHECKBOX_IDS.forEach((id) => {
      const checkbox = document.getElementById(id) as HTMLInputElement | null;
      if (checkbox && checkbox.checked) {
        checkbox.checked = false;
      }
    });

    const menuToggle = document.getElementById(
      MENU_TOGGLE_ID
    ) as HTMLInputElement | null;
    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }

    const navLinks = document.querySelectorAll(
      ".nav-links li a, .nav-links li label"
    );
    navLinks.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.blur();
      }
    });
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo-container"></div>
        <div className="logo">
          <Link to="/" aria-label="Zur Startseite">
            <span className="logo__accent">AUTO EMOTION</span>
          </Link>
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
            <Link
              to="/fahrzeugbestand"
              className="desktop-item"
              onClick={closeAllMenusImmediately}
            >
              Fahrzeugbestand
            </Link>
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

          {/* Geschäftskunden */}
          <li>
            <a href="#" className="desktop-item">
              Geschäftskunden
            </a>
            <input type="checkbox" id="showDrop1" />
            <label
              htmlFor="showDrop1"
              className="mobile-item"
              onClick={() => handleMenuToggle("showDrop1")}
            >
              Geschäftskunden
            </label>
            <div className="mega-box">
              <div className="content">
                <Geschaeftskunden />
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

          {/* Werkstatt & Service */}
          <li>
            <a href="#" className="desktop-item">
              Werkstatt & Service
            </a>
            <input type="checkbox" id="showMega4" />
            <label
              htmlFor="showMega4"
              className="mobile-item"
              onClick={() => handleMenuToggle("showMega4")}
            >
              Werkstatt & Service
            </label>
            <div className="mega-box">
              <div className="content">
                <Werkstatt />
              </div>
            </div>
          </li>

          {/* Unternehmen */}
          <li>
            <a href="#" className="desktop-item">
              Unternehmen
            </a>
            <input type="checkbox" id="showMega6" />
            <label
              htmlFor="showMega6"
              className="mobile-item"
              onClick={() => handleMenuToggle("showMega6")}
            >
              Unternehmen
            </label>
            <div className="mega-box">
              <div className="content">
                <Unternehmen />
              </div>
            </div>
          </li>

          {/* Onlineshop */}
          <li>
            <a href="#" className="desktop-item">
              Onlineshop
            </a>
            <input type="checkbox" id="showMega5" />
            <label
              htmlFor="showMega5"
              className="mobile-item"
              onClick={() => handleMenuToggle("showMega5")}
            >
              Onlineshop
            </label>
            <div className="mega-box">
              <div className="content">
                <OnlineShop />
              </div>
            </div>
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
