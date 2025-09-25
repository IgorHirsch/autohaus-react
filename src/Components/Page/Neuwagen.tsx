import React, { useState, useEffect } from "react";
import MegaMenuCar from "./MegaMenuCar";

const Neuwagen: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<"seat" | "cupra" | "nissan">(
    "seat"
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 970);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const carData = {
    seat: [
      {
        image:
          "https://seat-hws-prod.imgix.net/cms/Modelle/NEU/Ibiza_900x450.png?auto=format&fit=max&w=3840",
        name: "Ibiza",
        price: "18.990 €",
        fuelType: "Benzin" as const,
        power: "95 PS",
        consumption: "5.4 L/100km",
      },
      {
        image:
          "https://seat-hws-prod.imgix.net/cms/Modelle/NEU/Arona_900x450.png?auto=format&fit=max&w=3840",
        name: "Arona",
        price: "21.990 €",
        fuelType: "Benzin" as const,
        power: "110 PS",
        consumption: "5.9 L/100km",
      },
      {
        image:
          "https://seat-hws-prod.imgix.net/cms/Modelle/NEU/Ateca_900x450.png?auto=format&fit=max&w=3840",
        name: "Ateca",
        price: "32.990 €",
        fuelType: "Benzin" as const,
        power: "150 PS",
        consumption: "6.8 L/100km",
      },
      {
        image:
          "https://seat-hws-prod.imgix.net/cms/Modelle/NEU/Leon-5D_900x450.png?auto=format&fit=max&w=3840",
        name: "Leon",
        price: "24.990 €",
        fuelType: "Benzin" as const,
        power: "130 PS",
        consumption: "6.1 L/100km",
      },
      {
        image:
          "https://seat-hws-prod.imgix.net/cms/Modelle/NEU/Leon-SP_900x450.png?auto=format&fit=max&w=3840",
        name: "Leon Sportstour",
        price: "26.990 €",
        fuelType: "Benzin" as const,
        power: "150 PS",
        consumption: "6.3 L/100km",
      },
      {
        image:
          "https://seat-hws-prod.imgix.net/cms/Modelle/NEU/Tarraco_900x450.png?auto=format&fit=max&w=3840",
        name: "Tarraco",
        price: "39.990 €",
        fuelType: "Benzin" as const,
        power: "190 PS",
        consumption: "7.2 L/100km",
      },
    ],
    cupra: [
      {
        image:
          "https://cupra-hws-cdn.imgix.net/cms/Modelle/Fahrzeugaufwertungen/cupra-born-aurora-blue-side.png?auto=format&fit=max&w=1440",
        name: "Born",
        price: "35.990 €",
        fuelType: "Elektro" as const,
        power: "204 PS",
        consumption: "16.8 kWh/100km",
      },
      {
        image:
          "https://cupra-hws-cdn.imgix.net/cms/Modelle/Fahrzeugaufwertungen/new-cupra-formentor-2024-side.png?auto=format&fit=max&w=1440",
        name: "Formentor",
        price: "42.990 €",
        fuelType: "Benzin" as const,
        power: "310 PS",
        consumption: "7.8 L/100km",
      },
      {
        image:
          "https://cupra-hws-cdn.imgix.net/cms/Modelle/Cupra_Ateca.png?auto=format&fit=max&w=1440",
        name: "Ateca",
        price: "39.990 €",
        fuelType: "Benzin" as const,
        power: "300 PS",
        consumption: "7.5 L/100km",
      },
      {
        image:
          "https://cupra-hws-cdn.imgix.net/cms/Modelle/Fahrzeugaufwertungen/new-cupra-leon-2024-side-grey-matte.png?auto=format&fit=max&w=1440",
        name: "Leon",
        price: "37.990 €",
        fuelType: "Benzin" as const,
        power: "245 PS",
        consumption: "7.1 L/100km",
      },
      {
        image:
          "https://cupra-hws-cdn.imgix.net/cms/Modelle/Cupra%20Tavascan.png?auto=format&fit=max&w=1440",
        name: "Tavascan",
        price: "47.990 €",
        fuelType: "Elektro" as const,
        power: "286 PS",
        consumption: "18.2 kWh/100km",
      },
      {
        image:
          "https://cupra-hws-cdn.imgix.net/cms/Modelle/cupra_terramar_profil.png?auto=format&fit=max&w=1440",
        name: "Terramar",
        price: "44.990 €",
        fuelType: "Hybrid" as const,
        power: "272 PS",
        consumption: "6.8 L/100km",
      },
    ],
    nissan: [
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/model-overview/Micra_600x320.png.ximg.l_3_m.smart.png",
        name: "Micra",
        price: "16.990 €",
        fuelType: "Benzin" as const,
        power: "92 PS",
        consumption: "5.1 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/vehicles/juke-my24-assets-webp/juke_mc.webp.ximg.l_3_m.smart.webp",
        name: "Juke",
        price: "23.990 €",
        fuelType: "Benzin" as const,
        power: "114 PS",
        consumption: "6.2 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/UNVEIL_QQ-PUSH/new-unveil-qashqai.png.ximg.l_3_m.smart.png",
        name: "Qashqai",
        price: "28.990 €",
        fuelType: "Hybrid" as const,
        power: "158 PS",
        consumption: "5.9 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/model-overview/Leaf_600x320.png.ximg.l_3_m.smart.png",
        name: "Leaf",
        price: "31.990 €",
        fuelType: "Elektro" as const,
        power: "150 PS",
        consumption: "17.1 kWh/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/vehicles/x-trail-my24-assets-webp/x-trail.webp.ximg.l_3_m.smart.webp",
        name: "X-Trail",
        price: "35.990 €",
        fuelType: "Hybrid" as const,
        power: "204 PS",
        consumption: "6.1 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/model-overview/Ariya_600x320.png.ximg.l_3_m.smart.png",
        name: "Ariya",
        price: "45.990 €",
        fuelType: "Elektro" as const,
        power: "218 PS",
        consumption: "19.6 kWh/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/vehicles/townstar-van-my24-assets-webp/townstar_van.webp.ximg.l_3_m.smart.webp",
        name: "Townstar",
        price: "25.990 €",
        fuelType: "Diesel" as const,
        power: "130 PS",
        consumption: "5.4 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/de/vehicles/Townstar-Combi-my24-assets-webp/Townstar%20combi.webp.ximg.l_3_m.smart.webp",
        name: "Townstar Kombi",
        price: "28.990 €",
        fuelType: "Benzin" as const,
        power: "130 PS",
        consumption: "6.4 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/TDIEU_MY21_PRIMASTAR_FULL_PES_VLP-PLUS/Primastar%20fourgon.jpg.ximg.l_3_m.smart.jpg",
        name: "Primastar",
        price: "29.990 €",
        fuelType: "Diesel" as const,
        power: "120 PS",
        consumption: "6.5 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/TDIEU_MY21_PRIMASTAR_FULL_PES_VLP-PLUS/Primastar-combi_de.jpg.ximg.l_3_m.smart.jpg",
        name: "Primastar Kombi",
        price: "32.990 €",
        fuelType: "Diesel" as const,
        power: "120 PS",
        consumption: "6.8 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/TDIEU_MY21_PRIMASTAR_FULL_PES_VLP-PLUS/Primastar-combi-seaside_de.jpg.ximg.l_3_m.smart.jpg",
        name: "Primastar Seaside",
        price: "48.990 €",
        fuelType: "Diesel" as const,
        power: "120 PS",
        consumption: "7.2 L/100km",
      },
      {
        image:
          "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/interstar/unveil/new-interstar-vap_V2.jpg.ximg.l_3_m.smart.jpg",
        name: "Interstar",
        price: "38.990 €",
        fuelType: "Diesel" as const,
        power: "150 PS",
        consumption: "7.8 L/100km",
      },
    ],
  };

  return (
    <>
      {/* Brand Navigation */}
      <div className="brand-navigation">
        <div
          className={`brand-nav-item ${activeBrand === "seat" ? "active" : ""}`}
          onClick={() => setActiveBrand("seat")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/SEAT_Logo_from_2017.svg"
            alt="Seat Logo"
            className="brand-logo"
          />
        </div>
        <div
          className={`brand-nav-item ${
            activeBrand === "cupra" ? "active" : ""
          }`}
          onClick={() => setActiveBrand("cupra")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Cupra.svg"
            alt="Cupra Logo"
            className="brand-logo"
          />
        </div>
        <div
          className={`brand-nav-item ${
            activeBrand === "nissan" ? "active" : ""
          }`}
          onClick={() => setActiveBrand("nissan")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg"
            alt="Nissan Logo"
            className="brand-logo"
          />
        </div>
      </div>

      {/* Car Cards Grid */}
      <div className="car-grid">
        {isMobile ? (
          // Mobile Swiper Structure
          <div className="swiper-container-newcar">
            {carData[activeBrand].map((car, index) => (
              <div key={`${activeBrand}-${index}`} className="mega-menu-car">
                <div className="mega-menu-car__wrapper">
                  <div className="mega-menu-car__image-container">
                    <img
                      className={`mega-menu-car__image ${
                        activeBrand === "cupra"
                          ? "wide-image"
                          : activeBrand === "nissan"
                          ? "nissan-image"
                          : ""
                      }`}
                      src={car.image}
                      alt={car.name}
                    />
                    <div className="mega-menu-car__fuel-badge">
                      {car.fuelType}
                    </div>
                  </div>
                  <div className="mega-menu-car__content">
                    <div className="mega-menu-car__name">{car.name}</div>
                    <div className="mega-menu-car__specs">
                      <div className="mega-menu-car__spec">
                        <span className="spec-label">Leistung:</span>
                        <span className="spec-value">{car.power}</span>
                      </div>
                      {car.consumption && (
                        <div className="mega-menu-car__spec">
                          <span className="spec-label">Verbrauch:</span>
                          <span className="spec-value">{car.consumption}</span>
                        </div>
                      )}
                    </div>
                    <div className="mega-menu-car__price">ab {car.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Grid Structure (original)
          carData[activeBrand].map((car, index) => (
            <MegaMenuCar
              key={`${activeBrand}-${index}`}
              image={car.image}
              name={car.name}
              price={car.price}
              fuelType={car.fuelType}
              power={car.power}
              consumption={car.consumption}
              brand={activeBrand}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Neuwagen;
