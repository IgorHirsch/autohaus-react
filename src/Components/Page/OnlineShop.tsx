import React, { useState, useEffect } from "react";
import "../../Styles/pages/onlineshop/_onlineshopmegamennu.scss";

// OnlineShop rendered inside the mega menu, matching the Angebote layout/classes

type ShopItem = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  status: string;
  special: string;
};

const OnlineShop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"original" | "zubehoer">(
    "original"
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 970);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shopData: Record<"original" | "zubehoer", ShopItem[]> = {
    original: [
      {
        icon: "🔧",
        title: "Ölfilter (Original)",
        description: "Passgenau, lange Lebensdauer, Herstellergarantie",
        features: ["Originalteil", "Herstellergarantie", "Schneller Einbau"],
        price: "€14,90",
        status: "Auf Lager",
        special: "Top-Seller",
      },
      {
        icon: "🛞",
        title: "Bremsbeläge (Satz)",
        description: "Optimale Performance & Sicherheit",
        features: ["Geprüfte Qualität", "Leiser Betrieb", "Lange Haltbarkeit"],
        price: "€69,00",
        status: "Begrenzt",
        special: "Aktion",
      },
      {
        icon: "🧼",
        title: "Innenraumfilter",
        description: "Saubere Luft, Aktivkohle-Variante",
        features: ["Aktivkohle", "Allergikerfreundlich", "Einfache Montage"],
        price: "€24,50",
        status: "Auf Lager",
        special: "Neu",
      },
    ],
    zubehoer: [
      {
        icon: "📦",
        title: "Dachbox 420L",
        description: "Aerodynamisch, schnell montiert",
        features: ["Leichtbau", "Schnellbefestigung", "Schließsystem"],
        price: "€349,00",
        status: "Auf Lager",
        special: "Beliebt",
      },
      {
        icon: "🧽",
        title: "Gummifußmatten",
        description: "Robust, passgenau, leicht zu reinigen",
        features: ["Passgenau", "Rutschfest", "Pflegeleicht"],
        price: "€49,90",
        status: "Auf Lager",
        special: "Set-Angebot",
      },
      {
        icon: "👕",
        title: "Merch Hoodie",
        description: "Komfortabel, Logo-Print, unisex",
        features: ["Weich", "Unisex", "Maschinenwaschbar"],
        price: "€59,00",
        status: "Neu",
        special: "Limited",
      },
    ],
  };

  return (
    <>
      {/* Category Navigation */}
      <div className="angebote-stock-navigation">
        <div className="angebote-categories">
          <div className="angebote-nav">
            <div
              className={`angebote-item ${
                activeCategory === "original" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("original")}
            >
              <span className="nav-label">Originalteile</span>
            </div>
            <div
              className={`angebote-item ${
                activeCategory === "zubehoer" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("zubehoer")}
            >
              <span className="nav-label">Zubehör & Lifestyle</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="angebote-grid">
          {isMobile ? (
            // Mobile Swiper Structure
            <div className="swiper-container-angebote">
              {shopData[activeCategory].map((item, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="angebot-card"
                >
                  <div className="angebot-card__wrapper">
                    <div className="angebot-card__header">
                      <div className="angebot-card__icon">{item.icon}</div>
                      <div className="angebot-card__title">{item.title}</div>
                    </div>
                    <div className="angebot-card__content">
                      <div className="angebot-card__description">
                        {item.description}
                      </div>
                      <div className="angebot-card__features">
                        {item.features.map((feature, featIndex) => (
                          <div key={featIndex} className="feature-item">
                            <span className="feature-check">✓</span>
                            <span className="feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="angebot-card__details">
                        <div className="detail-item">
                          <span className="detail-label">Preis:</span>
                          <span className="detail-value">{item.price}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Status:</span>
                          <span className="detail-value">{item.status}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Besonderheit:</span>
                          <span className="detail-value">{item.special}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop Grid Structure
            shopData[activeCategory].map((item, index) => (
              <div key={`${activeCategory}-${index}`} className="angebot-card">
                <div className="angebot-card__wrapper">
                  <div className="angebot-card__header">
                    <div className="angebot-card__icon">{item.icon}</div>
                    <div className="angebot-card__title">{item.title}</div>
                  </div>
                  <div className="angebot-card__content">
                    <div className="angebot-card__description">
                      {item.description}
                    </div>
                    <div className="angebot-card__features">
                      {item.features.map((feature, featIndex) => (
                        <div key={featIndex} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="angebot-card__details">
                      <div className="detail-item">
                        <span className="detail-label">Preis:</span>
                        <span className="detail-value">{item.price}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value">{item.status}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Besonderheit:</span>
                        <span className="detail-value">{item.special}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default OnlineShop;
