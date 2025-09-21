import React, { useState, useEffect } from "react";

interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  vehicles: {
    brand: string;
    model: string;
    price: string;
    image: string;
    year?: number;
    mileage?: string;
  }[];
}

const VehicleStockNavigation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("neuwagen");
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

  const vehicleCategories: VehicleCategory[] = [
    {
      id: "neuwagen",
      name: "Neuwagen",
      description: "Brandneue Fahrzeuge",
      icon: "",
      vehicles: [
        {
          brand: "CUPRA",
          model: "Formentor VZ",
          price: "ab 45.990 €",
          image:
            "https://logos-world.net/wp-content/uploads/2021/03/Cupra-Logo.png",
        },
        {
          brand: "SEAT",
          model: "Leon FR",
          price: "ab 28.990 €",
          image:
            "https://logos-world.net/wp-content/uploads/2021/10/SEAT-Logo.png",
        },
        {
          brand: "NISSAN",
          model: "Qashqai",
          price: "ab 32.990 €",
          image:
            "https://logos-world.net/wp-content/uploads/2020/04/Nissan-Logo.png",
        },
        {
          brand: "PORSCHE",
          model: "911 Carrera",
          price: "ab 125.990 €",
          image:
            "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png",
        },
        {
          brand: "AUDI",
          model: "A4 Avant",
          price: "ab 42.990 €",
          image:
            "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png",
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
          model: "Ibiza Style",
          price: "18.990 €",
          year: 2022,
          mileage: "35.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/10/SEAT-Logo.png",
        },
        {
          brand: "AUDI",
          model: "A3 Sportback",
          price: "24.990 €",
          year: 2021,
          mileage: "45.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png",
        },
        {
          brand: "NISSAN",
          model: "Juke",
          price: "19.990 €",
          year: 2022,
          mileage: "28.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2020/04/Nissan-Logo.png",
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
          model: "Born VZ",
          price: "38.990 €",
          year: 2024,
          mileage: "8.500 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/03/Cupra-Logo.png",
        },
        {
          brand: "SEAT",
          model: "Leon Sportstourer",
          price: "31.990 €",
          year: 2024,
          mileage: "12.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/10/SEAT-Logo.png",
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
          model: "Arona FR",
          price: "26.990 €",
          year: 2023,
          mileage: "12.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/10/SEAT-Logo.png",
        },
        {
          brand: "AUDI",
          model: "Q3 Sportback",
          price: "35.990 €",
          year: 2023,
          mileage: "15.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png",
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
          model: "Macan",
          price: "89.990 €",
          year: 2023,
          mileage: "25.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png",
        },
        {
          brand: "AUDI",
          model: "A6 Avant",
          price: "48.990 €",
          year: 2023,
          mileage: "22.000 km",
          image:
            "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png",
        },
      ],
    },
  ];

  const currentCategory = vehicleCategories.find(
    (cat) => cat.id === activeCategory
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
                {Object.entries(
                  currentCategory.vehicles.reduce((acc, vehicle) => {
                    if (!acc[vehicle.brand]) {
                      acc[vehicle.brand] = {
                        brand: vehicle.brand,
                        image: vehicle.image,
                        vehicles: [],
                      };
                    }
                    acc[vehicle.brand].vehicles.push(vehicle);
                    return acc;
                  }, {} as Record<string, { brand: string; image: string; vehicles: any[] }>)
                ).map(([brand, data]) => (
                  <div key={brand} className="brand-section">
                    <div className="brand-card">
                      <img
                        src={data.image}
                        alt={`${brand} Logo`}
                        className="brand-image"
                      />
                      <div className="brand-info">
                        <h4 className="brand-name">{brand}</h4>
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
              Object.entries(
                currentCategory.vehicles.reduce((acc, vehicle) => {
                  if (!acc[vehicle.brand]) {
                    acc[vehicle.brand] = {
                      brand: vehicle.brand,
                      image: vehicle.image,
                      vehicles: [],
                    };
                  }
                  acc[vehicle.brand].vehicles.push(vehicle);
                  return acc;
                }, {} as Record<string, { brand: string; image: string; vehicles: any[] }>)
              ).map(([brand, data]) => (
                <div key={brand} className="brand-section">
                  <div className="brand-card">
                    <img
                      src={data.image}
                      alt={`${brand} Logo`}
                      className="brand-image"
                    />
                    <div className="brand-info">
                      <h4 className="brand-name">{brand}</h4>
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

export default VehicleStockNavigation;
