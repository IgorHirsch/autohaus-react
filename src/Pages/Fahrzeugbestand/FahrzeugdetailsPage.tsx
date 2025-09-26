import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../Styles/pages/fahrzeugbestand/_fahrzeugdetails.scss";

import {
  getRelatedVehicles,
  getVehicleById,
  VEHICLE_CATEGORY_LABELS,
} from "../../Data/vehicles";

const FahrzeugdetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const previousFrom = useMemo(() => {
    const state = location.state as { from?: string } | undefined;
    return state?.from;
  }, [location.state]);

  const vehicle = useMemo(() => getVehicleById(id), [id]);

  const relatedVehicles = useMemo(() => {
    if (!vehicle) {
      return [];
    }

    return getRelatedVehicles(vehicle, 3);
  }, [vehicle]);

  useEffect(() => {
    if (vehicle) {
      document.title = `${vehicle.name} ${vehicle.variant} | Autohaus`;
    } else {
      document.title = "Fahrzeug nicht gefunden | Autohaus";
    }
  }, [vehicle]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    console.log("🔒 FahrzeugdetailsPage: Closing mega menus...");

    const menuIds = [
      "showMega",
      "showMega2",
      "showMega3",
      "showMega4",
      "showMega5",
      "showMega6",
      "showDrop1",
      "showDrop2",
      "showDrop3",
      "menu-toggle",
    ];

    const navElement = document.querySelector("nav");
    if (navElement) {
      navElement.classList.add("force-close-menus");
      console.log("✅ Added force-close-menus class to nav element");
    }

    let closedMenus = 0;
    menuIds.forEach((id) => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox && checkbox.checked) {
        checkbox.checked = false;
        closedMenus++;
        console.log(`🔒 Closed mega menu: ${id}`);
      }
    });
    console.log(`✅ Closed ${closedMenus} mega menus total`);

    const navLinks = document.querySelectorAll(
      ".nav-links li a, .nav-links li label"
    );
    navLinks.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.blur();
      }
    });

    const removeClassTimeout = setTimeout(() => {
      if (navElement) {
        navElement.classList.remove("force-close-menus");
        console.log(
          "🔓 Removed force-close-menus class - mega menus can hover again"
        );
      }
    }, 300);

    return () => clearTimeout(removeClassTimeout);
  }, [location]);

  const handleBack = () => {
    if (previousFrom) {
      navigate(previousFrom);
    } else {
      navigate("/fahrzeugbestand");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (vehicleId: string) => {
    navigate(`/fahrzeugbestand/${vehicleId}`, {
      state: { from: previousFrom || "/fahrzeugbestand" },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!vehicle) {
    return (
      <section
        className="fahrzeugdetails"
        aria-labelledby="fahrzeugdetails-title"
      >
        <div className="fahrzeugdetails__background" aria-hidden="true">
          <span className="fahrzeugdetails__glow fahrzeugdetails__glow--left" />
          <span className="fahrzeugdetails__glow fahrzeugdetails__glow--right" />
        </div>
        <div className="fahrzeugdetails__container">
          <button
            type="button"
            className="fahrzeugdetails__back"
            onClick={handleBack}
          >
            <span aria-hidden="true">←</span> Zurück zum Fahrzeugbestand
          </button>
          <div className="fahrzeugdetails__empty">
            <h1 id="fahrzeugdetails-title">Fahrzeug nicht gefunden</h1>
            <p>
              Das angeforderte Fahrzeug ist nicht mehr verfügbar. Bitte kehren
              Sie zum Fahrzeugbestand zurück und wählen Sie ein anderes Modell.
            </p>
            <button
              type="button"
              className="fahrzeugdetails__cta"
              onClick={() => navigate("/fahrzeugbestand")}
            >
              Zum Fahrzeugbestand
            </button>
          </div>
        </div>
      </section>
    );
  }

  const categoryLabel = VEHICLE_CATEGORY_LABELS[vehicle.category];

  return (
    <section
      className="fahrzeugdetails"
      aria-labelledby="fahrzeugdetails-title"
    >
      <div className="fahrzeugdetails__background" aria-hidden="true">
        <span className="fahrzeugdetails__glow fahrzeugdetails__glow--left" />
        <span className="fahrzeugdetails__glow fahrzeugdetails__glow--right" />
      </div>

      <div className="fahrzeugdetails__container">
        <button
          type="button"
          className="fahrzeugdetails__back"
          onClick={handleBack}
        >
          <span aria-hidden="true">←</span> Zurück zur Übersicht
        </button>

        <header className="fahrzeugdetails__header">
          <span className="fahrzeugdetails__badge">{categoryLabel}</span>
          <h1 id="fahrzeugdetails-title" className="fahrzeugdetails__title">
            {vehicle.name}
          </h1>
          <p className="fahrzeugdetails__subtitle">{vehicle.variant}</p>
        </header>

        <div className="fahrzeugdetails__layout">
          <figure className="fahrzeugdetails__media">
            <img
              src={vehicle.image}
              alt={vehicle.imageAlt}
              className="fahrzeugdetails__image"
            />
            <figcaption className="fahrzeugdetails__media-caption">
              {vehicle.brand} – {categoryLabel}
            </figcaption>
          </figure>

          <div className="fahrzeugdetails__info">
            <div className="fahrzeugdetails__price">
              <span className="fahrzeugdetails__price-label">Preis</span>
              <span className="fahrzeugdetails__price-value">
                {vehicle.price}
              </span>
              {vehicle.priceNote && (
                <span className="fahrzeugdetails__price-note">
                  {vehicle.priceNote}
                </span>
              )}
            </div>

            <dl className="fahrzeugdetails__spec-grid">
              {vehicle.specGroups.map((spec, index) => (
                <div key={index} className="fahrzeugdetails__spec">
                  <dt className="fahrzeugdetails__spec-label">{spec.right}</dt>
                  <dd className="fahrzeugdetails__spec-value">
                    <strong>{spec.left.value}</strong>
                    {spec.left.suffix}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="fahrzeugdetails__actions">
              {vehicle.actions.map((action, index) => (
                <a
                  key={index}
                  className={`fahrzeugdetails__action${
                    index === 0 ? " fahrzeugdetails__action--primary" : ""
                  }`}
                  href={action.href}
                  aria-label={action.ariaLabel || action.label}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {relatedVehicles.length > 0 && (
          <section
            className="fahrzeugdetails__related"
            aria-label="Ähnliche Fahrzeuge"
          >
            <div className="fahrzeugdetails__related-header">
              <h2 className="fahrzeugdetails__related-title">
                Das könnte Sie auch interessieren
              </h2>
              <p className="fahrzeugdetails__related-subtitle">
                Fahrzeuge aus derselben Marke oder Kategorie
              </p>
            </div>
            <div className="fahrzeugdetails__related-grid">
              {relatedVehicles.map((related) => (
                <article
                  key={related.id}
                  className="fahrzeugdetails__related-card"
                  role="link"
                  tabIndex={0}
                  aria-label={`${related.name} ${related.variant} ansehen`}
                  onClick={() => handleNavigate(related.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleNavigate(related.id);
                    }
                  }}
                >
                  <img
                    src={related.image}
                    alt={related.imageAlt}
                    className="fahrzeugdetails__related-image"
                  />
                  <div className="fahrzeugdetails__related-body">
                    <h3 className="fahrzeugdetails__related-name">
                      {related.name}
                    </h3>
                    <p className="fahrzeugdetails__related-variant">
                      {related.variant}
                    </p>
                    <span className="fahrzeugdetails__related-price">
                      {related.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default FahrzeugdetailsPage;
