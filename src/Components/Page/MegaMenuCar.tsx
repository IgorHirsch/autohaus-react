import React from "react";
import "../../Styles/main.scss"; // Optional: für eigene Styles

interface MegaMenuCarProps {
  image: string;
  name: string;
  price: string;
  fuelType: "Benzin" | "Diesel" | "Elektro" | "Hybrid";
  power: string;
  consumption?: string;
}

const MegaMenuCar: React.FC<MegaMenuCarProps> = ({
  image,
  name,
  price,
  fuelType,
  power,
  consumption,
}) => (
  <div className="mega-menu-car">
    <div className="mega-menu-car__image-container">
      <img className="mega-menu-car__image" src={image} alt={name} />
      <div className="mega-menu-car__fuel-badge">{fuelType}</div>
    </div>
    <div className="mega-menu-car__content">
      <div className="mega-menu-car__name">{name}</div>
      <div className="mega-menu-car__specs">
        <div className="mega-menu-car__spec">
          <span className="spec-label">Leistung:</span>
          <span className="spec-value">{power}</span>
        </div>
        {consumption && (
          <div className="mega-menu-car__spec">
            <span className="spec-label">Verbrauch:</span>
            <span className="spec-value">{consumption}</span>
          </div>
        )}
      </div>
      <div className="mega-menu-car__price">ab {price}</div>
    </div>
  </div>
);

export default MegaMenuCar;
