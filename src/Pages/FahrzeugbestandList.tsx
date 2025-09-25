import React, { useEffect } from "react";

type VehicleSpecGroup = {
  left: React.ReactNode;
  right: React.ReactNode;
};

type VehicleAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type Vehicle = {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  variant: string;
  specGroups: VehicleSpecGroup[];
  price: string;
  priceNote?: string;
  actions: VehicleAction[];
};

type InventorySection = {
  id: string;
  title: string;
  hashtag?: string;
  vehicles: Vehicle[];
};

const withStrong = (value: string, suffix: string = "") => (
  <>
    <strong>{value}</strong>
    {suffix}
  </>
);

const inventorySections: InventorySection[] = [
  {
    id: "cupra",
    title: "Topangebote aus unserem Bestand",
    hashtag: "#Cupra",
    vehicles: [
      {
        id: "cupra-formentor",
        image: "../../images/marken/cupra/cupra-formentor.jpg",
        imageAlt: "Cupra Formentor in der Ausstattung VZ Extreme 2.0 TSI",
        name: "Cupra Formentor",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "../../sites/unternehmen/fzgdetails.html" },
          {
            label: "Vergleichen",
            href: "../../sites/unternehmen/vergleichen.html",
          },
        ],
      },
      {
        id: "cupra-born",
        image: "../../images/marken/cupra/cupra-born.webp",
        imageAlt: "Cupra Born mit VZ Extreme Ausstattung",
        name: "Cupra Born",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "../../sites/unternehmen/fzgdetails.html" },
          { label: "Vergleichen", href: "#" },
        ],
      },
      {
        id: "cupra-leon-sportstourer",
        image: "../../images/marken/cupra/cupra-leon-sportstourer.jpg",
        imageAlt: "Cupra Leon Sportstourer in Seitenansicht",
        name: "Cupra Leon Sportstourer",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "../../sites/unternehmen/fzgdetails.html" },
          { label: "Vergleichen", href: "#" },
        ],
      },
    ],
  },
  {
    id: "seat",
    title: "Topangebote aus unserem Bestand",
    hashtag: "#Seat",
    vehicles: [
      {
        id: "seat-leon",
        image: "../../images/marken/seat/seat.webp",
        imageAlt: "Seat Leon in Seitenansicht",
        name: "Seat Leon",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "#" },
          { label: "Vergleichen", href: "#" },
        ],
      },
      {
        id: "seat-ateca",
        image: "../../images/marken/seat/Seat Ateca.webp",
        imageAlt: "Seat Ateca SUV vor moderner Architektur",
        name: "Seat Ateca",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "#" },
          { label: "Vergleichen", href: "#" },
        ],
      },
      {
        id: "seat-arona",
        image: "../../images/marken/seat/Seat-Arona-Hero.jpg",
        imageAlt: "Seat Arona in urbaner Umgebung",
        name: "Seat Arona",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "#" },
          { label: "Vergleichen", href: "#" },
        ],
      },
    ],
  },
  {
    id: "nissan",
    title: "Topangebote aus unserem Bestand",
    hashtag: "#Nissan",
    vehicles: [
      {
        id: "nissan-qashqai",
        image: "../../images/marken/nissan/nissan-juke.jpg",
        imageAlt: "Nissan Qashqai in Vorderansicht",
        name: "Nissan Qashqai",
        variant: "1.3 DIG-T 160 PS",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "#" },
          { label: "Vergleichen", href: "#" },
        ],
      },
      {
        id: "nissan-x-trail",
        image: "../../images/marken/nissan/x-trail.jpg",
        imageAlt: "Nissan X-Trail",
        name: "Nissan Qashqai",
        variant: "1.3 DIG-T 160 PS",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          {
            label: "Details",
            href: "../../sites/unternehmen/fzgdetails.html",
          },
          { label: "Vergleichen", href: "#" },
        ],
      },
      {
        id: "nissan-qashqai-2021",
        image: "../../images/marken/nissan/nissan-qashqai-2021.jpg",
        imageAlt: "Nissan Qashqai Modell 2021",
        name: "Cupra Formentor",
        variant: "VZ Extreme 2.0 TSI",
        specGroups: [
          { left: "Neufahrzeug", right: "Schaltgetriebe" },
          { left: withStrong("10", " km"), right: "Benzin" },
          { left: withStrong("85 kW", "/ 116 PS"), right: "8,9 L/100km" },
          { left: withStrong("5", " Türen"), right: "SUV" },
          { left: "CO₂-Emi.: 126 g/km", right: "CO₂-Klasse: E" },
        ],
        price: "27.145 €",
        priceNote: "MwSt. ausw.",
        actions: [
          { label: "Details", href: "#" },
          { label: "Vergleichen", href: "#" },
        ],
      },
    ],
  },
];

const FahrzeugbestandList: React.FC = () => {
  useEffect(() => {
    const overlayIds = [
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

    overlayIds.forEach((id) => {
      const element = document.getElementById(id) as HTMLInputElement | null;
      if (element) {
        element.checked = false;
      }
    });
  }, []);

  return (
    <section className="bestand" aria-label="Fahrzeugbestand">
      {inventorySections.map((section) => {
        const headingId = `bestand-${section.id}-heading`;

        return (
          <div className="container" key={section.id}>
            <div className="bestand__column-text">
              <h2 className="bestand__text-heading" id={headingId}>
                {section.title}
                {section.hashtag ? <span> {section.hashtag}</span> : null}
              </h2>
            </div>

            <div
              className="bestand__container"
              role="list"
              aria-labelledby={headingId}
            >
              {section.vehicles.map((vehicle) => (
                <article
                  className="bestand__card"
                  key={vehicle.id}
                  role="listitem"
                >
                  <div className="bestand__image-container">
                    <img
                      className="bestand__image"
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      loading="lazy"
                    />
                  </div>

                  <div className="bestand__content">
                    <h3 className="bestand__content-heading">{vehicle.name}</h3>
                    <p className="bestand__content-subheading">
                      {vehicle.variant}
                    </p>

                    {vehicle.specGroups.map((group, index) => (
                      <div
                        className="bestand__content-info"
                        key={`${vehicle.id}-spec-${index}`}
                      >
                        <div className="bestand__content-info-duration">
                          <span className="bestand__content-info-duration-text">
                            {group.left}
                          </span>
                        </div>
                        <div className="bestand__content-info-level">
                          <span className="bestand__content-info-duration-text">
                            {group.right}
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="bestand__content-price-container">
                      Preis:
                      <strong className="bestand__content-price">
                        {vehicle.price}
                      </strong>
                      {vehicle.priceNote ? (
                        <span> {vehicle.priceNote}</span>
                      ) : null}
                    </div>
                  </div>

                  <div className="bestand__card-hover">
                    {vehicle.actions.map((action) => (
                      <a
                        key={`${vehicle.id}-${action.label}`}
                        className="button button--slim button--secondary"
                        href={action.href}
                        aria-label={action.ariaLabel || action.label}
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FahrzeugbestandList;
