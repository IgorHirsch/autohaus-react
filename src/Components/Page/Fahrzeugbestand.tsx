import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface VehicleInfo {
  brand: string;
}

interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  vehicles: VehicleInfo[];
}

const Fahrzeugbestand: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("neuwagen");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 970);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const vehicleCategories: VehicleCategory[] = [
    {
      id: "neuwagen",
      name: "Neuwagen",
      description: "Brandneue Fahrzeuge",
      icon: "",
      vehicles: [
        {
          brand: "CUPRA",
        },
        {
          brand: "SEAT",
        },
        {
          brand: "NISSAN",
        },
        {
          brand: "PORSCHE",
        },
        {
          brand: "AUDI",
        },
      ],
    },
    {
      id: "gebrauchtwagen",
      name: "Gebrauchtwagen",
      description: "Geprüfte Gebrauchte",
      icon: "",
      vehicles: [
        {
          brand: "SEAT",
        },
        {
          brand: "AUDI",
        },
        {
          brand: "NISSAN",
        },
      ],
    },
    {
      id: "vorführwagen",
      name: "Vorführwagen",
      description: "Geringe Laufleistung",
      icon: "",
      vehicles: [
        {
          brand: "CUPRA",
        },
        {
          brand: "SEAT",
        },
      ],
    },
    {
      id: "jahreswagen",
      name: "Jahreswagen",
      description: "Junge Gebrauchte",
      icon: "",
      vehicles: [
        {
          brand: "SEAT",
        },
        {
          brand: "AUDI",
        },
      ],
    },
    {
      id: "leasing",
      name: "Leasing-Rückläufer",
      description: "Gepflegte Fahrzeuge",
      icon: "",
      vehicles: [
        {
          brand: "PORSCHE",
        },
        {
          brand: "AUDI",
        },
      ],
    },
    {
      id: "ersatz-mietwagen",
      name: "Ersatz- & Mietwagen",
      description: "Flexibilität wenn Sie sie brauchen",
      icon: "",
      vehicles: [
        {
          brand: "SEAT",
        },
        {
          brand: "CUPRA",
        },
        {
          brand: "VOLKSWAGEN",
        },
        {
          brand: "AUDI",
        },
      ],
    },
  ];

  const currentCategory = vehicleCategories.find(
    (cat) => cat.id === activeCategory
  );

  const brandLogos: Record<string, string> = {
    CUPRA: "https://upload.wikimedia.org/wikipedia/commons/7/70/Cupra.svg",
    SEAT: "https://upload.wikimedia.org/wikipedia/commons/f/fc/SEAT_Logo_from_2017.svg",
    NISSAN:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg",
    PORSCHE:
      "https://upload.wikimedia.org/wikipedia/de/thumb/7/70/Porsche_Logo.svg/960px-Porsche_Logo.svg.png?20250407095904",
    AUDI: "https://upload.wikimedia.org/wikipedia/de/thumb/1/15/Audi_logo.svg/1199px-Audi_logo.svg.png?20061124002954",
    VOLKSWAGEN:
      "https://companieslogo.com/img/orig/VOW3.DE-672bac7c.png?t=1720244494",
  };

  const groupedBrands = currentCategory
    ? Object.values(
        currentCategory.vehicles.reduce<
          Record<
            string,
            { brand: string; image: string; vehicles: VehicleInfo[] }
          >
        >((acc, vehicle) => {
          const brandKey = vehicle.brand;
          if (!acc[brandKey]) {
            const normalizedBrand = brandKey.toUpperCase();
            const fallbackLogo = `https://via.placeholder.com/160x80?text=${encodeURIComponent(
              brandKey
            )}`;

            acc[brandKey] = {
              brand: brandKey,
              image: brandLogos[normalizedBrand] ?? fallbackLogo,
              vehicles: [],
            };
          }

          acc[brandKey].vehicles.push(vehicle);
          return acc;
        }, {})
      )
    : [];

  const closeNavigationOverlays = useCallback(() => {
    const overlayIds = ["showMega2", "menu-toggle"];

    overlayIds.forEach((id) => {
      const element = document.getElementById(id) as HTMLInputElement | null;

      if (element) {
        element.checked = false;
      }
    });
  }, []);

  const handleBrandNavigate = useCallback(
    (brandName: string) => {
      const searchParams = new URLSearchParams();
      searchParams.set("category", activeCategory);
      searchParams.set("brand", brandName);

      closeNavigationOverlays();
      navigate({
        pathname: "/fahrzeugbestand",
        search: searchParams.toString(),
      });
    },
    [activeCategory, closeNavigationOverlays, navigate]
  );

  const handleBrandKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, brandName: string) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleBrandNavigate(brandName);
      }
    },
    [handleBrandNavigate]
  );

  return (
    <div className="vehicle-stock-navigation">
      {/* Category Navigation */}
      <div className="vehicle-categories">
        <div className="category-nav">
          {isMobile ? (
            // Mobile Swiper Structure for Categories
            <div className="swiper-container-categories">
              {vehicleCategories.map((category) => (
                <div
                  key={category.id}
                  className={`category-item ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <h3>
                    {category.icon} {category.name}
                  </h3>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          ) : (
            // Desktop Structure for Categories
            vehicleCategories.map((category) => (
              <div
                key={category.id}
                className={`category-item ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <h3>
                  {category.icon} {category.name}
                </h3>
                <p>{category.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Vehicle Grid */}
      {currentCategory && (
        <div className="vehicle-grid-container">
          <h2 className="grid-title">{currentCategory.name}</h2>

          <div className="vehicle-brands-grid">
            {isMobile ? (
              // Mobile Swiper Structure for Brands
              <div className="swiper-container-brands">
                {groupedBrands.map((data) => (
                  <div key={data.brand} className="brand-section">
                    <div
                      className="brand-card brand-card--interactive"
                      role="button"
                      tabIndex={0}
                      aria-label={`${data.brand} auswählen`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleBrandNavigate(data.brand)}
                      onKeyDown={(event) =>
                        handleBrandKeyDown(event, data.brand)
                      }
                    >
                      <img
                        src={data.image}
                        alt={`${data.brand} Logo`}
                        className="brand-image"
                      />
                      <div className="brand-info">
                        <h4 className="brand-name">{data.brand}</h4>
                        <span className="vehicle-count">
                          {data.vehicles.length} Fahrzeug
                          {data.vehicles.length !== 1 ? "e" : ""} verfügbar
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop Structure for Brands
              groupedBrands.map((data) => (
                <div key={data.brand} className="brand-section">
                  <div
                    className="brand-card brand-card--interactive"
                    role="button"
                    tabIndex={0}
                    aria-label={`${data.brand} auswählen`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleBrandNavigate(data.brand)}
                    onKeyDown={(event) => handleBrandKeyDown(event, data.brand)}
                  >
                    <img
                      src={data.image}
                      alt={`${data.brand} Logo`}
                      className="brand-image"
                    />
                    <div className="brand-info">
                      <h4 className="brand-name">{data.brand}</h4>
                      <span className="vehicle-count">
                        {data.vehicles.length} Fahrzeug
                        {data.vehicles.length !== 1 ? "e" : ""} verfügbar
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fahrzeugbestand;
