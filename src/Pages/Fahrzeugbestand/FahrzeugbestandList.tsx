import React, { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Styles/pages/fahrzeugbestand/_fahrzeugbestand.scss";

import {
  allVehicles,
  Vehicle,
  VEHICLE_CATEGORY_LABELS,
} from "../../Data/vehicles";

type VehicleCategoryKey = keyof typeof VEHICLE_CATEGORY_LABELS;
type UrlParams = {
  category?: VehicleCategoryKey;
  brand?: string;
};

const FahrzeugbestandList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const urlParams = useMemo<UrlParams>(() => {
    const searchParams = new URLSearchParams(location.search);
    const rawCategory = searchParams.get("category");
    const normalizedCategory = rawCategory?.toLowerCase();
    const category = (
      Object.keys(VEHICLE_CATEGORY_LABELS) as VehicleCategoryKey[]
    ).find((key) => key === normalizedCategory);

    return {
      category,
      brand: searchParams.get("brand")?.toUpperCase() || undefined,
    };
  }, [location.search]);

  const { category, brand } = urlParams;

  const filteredVehicles = useMemo<Vehicle[]>(() => {
    return allVehicles.filter((vehicle) => {
      const categoryMatch = category ? vehicle.category === category : true;
      const brandMatch = brand ? vehicle.brand === brand : true;
      return categoryMatch && brandMatch;
    });
  }, [category, brand]);

  const categoryName = category ? VEHICLE_CATEGORY_LABELS[category] : undefined;

  const pageTitle = useMemo(() => {
    if (brand && categoryName) {
      return `${categoryName} ${brand}`;
    }

    if (brand) {
      return `Fahrzeuge ${brand}`;
    }

    if (categoryName) {
      return categoryName;
    }

    return "Fahrzeugbestand";
  }, [brand, categoryName]);

  const hashtag = useMemo(() => {
    if (brand && categoryName) {
      const condensedCategory = categoryName.replace(/\s+/g, "");
      return `#${brand}${condensedCategory}`;
    }

    if (brand) {
      return `#${brand}`;
    }

    if (categoryName) {
      return `#${categoryName.replace(/\s+/g, "")}`;
    }

    return "#Fahrzeugbestand";
  }, [brand, categoryName]);

  useEffect(() => {
    document.title = `${pageTitle} | Autohaus`;
  }, [pageTitle]);

  useEffect(() => {
    console.log("🔒 FahrzeugbestandList: Closing mega menus...");

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
    }, 1500);

    return () => clearTimeout(removeClassTimeout);
  }, [location]);

  const handleNavigate = useCallback(
    (vehicle: Vehicle) => {
      navigate(`/fahrzeugbestand/${vehicle.id}`, {
        state: {
          from: `${location.pathname}${location.search}`,
        },
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate, location.pathname, location.search]
  );

  const handleCardKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>, vehicle: Vehicle) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleNavigate(vehicle);
      }
    },
    [handleNavigate]
  );

  return (
    <section
      className="fahrzeugbestand-list"
      aria-labelledby="fahrzeugbestand-title"
    >
      <div className="fahrzeugbestand-list__background" aria-hidden="true">
        <span className="fahrzeugbestand-list__glow fahrzeugbestand-list__glow--left" />
        <span className="fahrzeugbestand-list__glow fahrzeugbestand-list__glow--right" />
      </div>

      <div className="fahrzeugbestand-list__container">
        <header className="fahrzeugbestand-list__header">
          <span className="fahrzeugbestand-list__badge">
            {hashtag}
            <span
              className="fahrzeugbestand-list__badge-dot"
              aria-hidden="true"
            />
          </span>
          <div className="fahrzeugbestand-list__copy">
            <h2
              id="fahrzeugbestand-title"
              className="fahrzeugbestand-list__title"
            >
              {pageTitle}
            </h2>
            {filteredVehicles.length > 0 && (
              <p className="fahrzeugbestand-list__lead">
                {filteredVehicles.length}{" "}
                {filteredVehicles.length === 1
                  ? "Fahrzeug gefunden"
                  : "Fahrzeuge gefunden"}
              </p>
            )}
          </div>
        </header>

        {filteredVehicles.length > 0 ? (
          <div className="fahrzeugbestand-list__grid">
            {filteredVehicles.map((vehicle) => {
              const specPreview = vehicle.specGroups.slice(0, 2);
              const ariaLabel = `${vehicle.brand} ${vehicle.name} ${vehicle.variant} – Fahrzeugdetails ansehen`;

              return (
                <article
                  key={vehicle.id}
                  className="fahrzeugbestand-list__card"
                  role="link"
                  tabIndex={0}
                  aria-label={ariaLabel}
                  data-vehicle-id={vehicle.id}
                  data-category={vehicle.category}
                  data-brand={vehicle.brand}
                  onClick={() => handleNavigate(vehicle)}
                  onKeyDown={(event) => handleCardKeyDown(event, vehicle)}
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    className="fahrzeugbestand-list__image"
                  />
                  <div className="fahrzeugbestand-list__content">
                    <h3 className="fahrzeugbestand-list__name">
                      {vehicle.name}
                    </h3>
                    <p className="fahrzeugbestand-list__variant">
                      {vehicle.variant}
                    </p>
                    <div
                      className="fahrzeugbestand-list__specs"
                      aria-label="Fahrzeug-Highlights"
                    >
                      {specPreview.map((spec, index) =>
                        spec ? (
                          <div
                            key={index}
                            className="fahrzeugbestand-list__spec"
                          >
                            <span className="fahrzeugbestand-list__spec-value">
                              <strong>{spec.left?.value}</strong>
                              {spec.left?.suffix}
                            </span>
                            <span>{spec.right}</span>
                          </div>
                        ) : null
                      )}
                    </div>
                    <div className="fahrzeugbestand-list__price">
                      <span className="price">{vehicle.price}</span>
                      {vehicle.priceNote && (
                        <span className="price-note">{vehicle.priceNote}</span>
                      )}
                    </div>
                    <div className="fahrzeugbestand-list__actions">
                      {vehicle.actions.map((action, index) => (
                        <a
                          key={index}
                          href={action.href}
                          className="btn btn-outline"
                          aria-label={action.ariaLabel || action.label}
                          title={action.label}
                          onClick={(event) => event.stopPropagation()}
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="fahrzeugbestand-list__empty">
            <h3 className="title">Keine Fahrzeuge gefunden</h3>
            <p className="text">
              Für die aktuelle Filterung wurden keine Fahrzeuge gefunden. Bitte
              versuchen Sie eine andere Kombination oder{" "}
              <a href="/fahrzeugbestand">
                durchsuchen Sie unseren gesamten Bestand
              </a>
              .
            </p>
          </div>
        )}

        {filteredVehicles.length > 0 && (
          <div className="fahrzeugbestand-list__cta-wrapper">
            <a
              className="fahrzeugbestand-list__cta"
              href="/kontakt"
              aria-label="Beratung anfordern"
              onClick={(event) => event.stopPropagation()}
            >
              Persönliche Beratung
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 10h10m0 0-3.5-3.5M15 10l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FahrzeugbestandList;
