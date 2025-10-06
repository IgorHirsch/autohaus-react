export const VEHICLE_CATEGORY_LABELS = {
  neuwagen: "Neuwagen",
  gebrauchtwagen: "Gebrauchtwagen",
  vorführwagen: "Vorführwagen",
  jahreswagen: "Jahreswagen",
  leasing: "Leasing-Rückläufer",
  "ersatz-mietwagen": "Ersatz- & Mietwagen",
} as const;

export type VehicleCategoryKey = keyof typeof VEHICLE_CATEGORY_LABELS;

export type VehicleSpecValue = {
  value: string;
  suffix?: string;
};

export type VehicleSpecGroup = {
  left: VehicleSpecValue;
  right: string;
};

export type VehicleAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type Vehicle = {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  variant: string;
  specGroups: VehicleSpecGroup[];
  price: string;
  priceNote?: string;
  actions: VehicleAction[];
  brand: string;
  category: VehicleCategoryKey;
};

const withStrong = (value: string, suffix: string = ""): VehicleSpecValue => ({
  value,
  suffix: suffix || undefined,
});

export const allVehicles: Vehicle[] = [
  // NEUWAGEN - CUPRA
  {
    id: "cupra-formentor-new",
    image:
      "https://autohaus-seitz.de/fahrzeugsuche/wp-content/uploads/carimg/072255_03.jpg",
    imageAlt: "Cupra Formentor VZ Extreme 2.0 TSI Neuwagen",
    name: "Cupra Formentor",
    variant: "VZ Extreme 2.0 TSI",
    brand: "CUPRA",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("333", " PS"), right: "Leistung" },
      { left: withStrong("8,9", " L/100km"), right: "Verbrauch" },
      { left: withStrong("4,9", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 52.990 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=cupra-formentor" },
      { label: "Konfigurieren", href: "/konfigurator/cupra-formentor" },
    ],
  },
  {
    id: "cupra-ateca-new",
    image: "https://www.adu.ch/Autobilder/125085_AS_GG.jpg",
    imageAlt: "Cupra Ateca 2.0 TSI 4Drive Neuwagen",
    name: "Cupra Ateca",
    variant: "2.0 TSI 4Drive DSG",
    brand: "CUPRA",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("300", " PS"), right: "Leistung" },
      { left: withStrong("8,4", " L/100km"), right: "Verbrauch" },
      { left: withStrong("5,2", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 48.990 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=cupra-ateca" },
      { label: "Konfigurieren", href: "/konfigurator/cupra-ateca" },
    ],
  },
  {
    id: "cupra-ateca-new-experience",
    image:
      "https://www.caralliance.be/wp-content/uploads/featured-cupra-ateca-334323.jpeg",
    imageAlt: "Cupra Ateca Experience Plus 1.5 TSI",
    name: "Cupra Ateca",
    variant: "Experience Plus 1.5 TSI",
    brand: "CUPRA",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("150", " PS"), right: "Leistung" },
      { left: withStrong("6,6", " L/100km"), right: "Verbrauch" },
      { left: withStrong("9,0", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 39.490 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=cupra-ateca-experience" },
      {
        label: "Ausstattung ansehen",
        href: "/fahrzeugbestand/cupra-ateca-experience",
      },
    ],
  },
  {
    id: "cupra-ateca-new-vz-biturbo",
    image:
      "https://www.sparneuwagen.de/wp-content/uploads/2023/04/cupra-ateca2-2048x1366.jpg",
    imageAlt: "Cupra Ateca VZ Biturbo Performance",
    name: "Cupra Ateca",
    variant: "VZ Biturbo Performance",
    brand: "CUPRA",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("310", " PS"), right: "Leistung" },
      { left: withStrong("8,9", " L/100km"), right: "Verbrauch" },
      { left: withStrong("4,8", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 56.490 €",
    priceNote: "inkl. MwSt.",
    actions: [
      {
        label: "Probefahrt",
        href: "/kontakt?fahrzeug=cupra-ateca-vz-biturbo",
      },
      {
        label: "Finanzierung",
        href: "/finanzierung?fahrzeug=cupra-ateca-vz-biturbo",
      },
    ],
  },
  // NEUWAGEN - SEAT
  {
    id: "seat-leon-new",
    image: "https://img.autrado.de/2735/4825_1024.jpg",
    imageAlt: "Seat Leon FR 1.5 TSI Neuwagen",
    name: "Seat Leon",
    variant: "FR 1.5 TSI DSG",
    brand: "SEAT",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("150", " PS"), right: "Leistung" },
      { left: withStrong("6,2", " L/100km"), right: "Verbrauch" },
      { left: withStrong("8,5", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 28.990 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=seat-leon" },
      { label: "Konfigurieren", href: "/konfigurator/seat-leon" },
    ],
  },
  // NEUWAGEN - NISSAN
  {
    id: "nissan-qashqai-new",
    image: "https://img.autrado.de/2932/44092_1024.jpg",
    imageAlt: "Nissan Qashqai 1.3 DIG-T Neuwagen",
    name: "Nissan Qashqai",
    variant: "1.3 DIG-T 160 PS",
    brand: "NISSAN",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("160", " PS"), right: "Leistung" },
      { left: withStrong("6,1", " L/100km"), right: "Verbrauch" },
      { left: withStrong("9,3", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 29.990 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=nissan-qashqai" },
      { label: "Konfigurieren", href: "/konfigurator/nissan-qashqai" },
    ],
  },
  // GEBRAUCHTWAGEN - CUPRA
  {
    id: "cupra-formentor-used-1",
    image: "https://www.toyota-dieburg.de/images/fahrzeuge/2686.2.1246.382.jpg",
    imageAlt: "Cupra Formentor Gebrauchtwagen",
    name: "Cupra Formentor",
    variant: "VZ 2.0 TSI DSG",
    brand: "CUPRA",
    category: "gebrauchtwagen",
    specGroups: [
      { left: withStrong("310", " PS"), right: "Leistung" },
      { left: withStrong("15.000", " km"), right: "Laufleistung" },
      { left: withStrong("2023"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "42.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=cupra-formentor-used" },
      {
        label: "Finanzieren",
        href: "/finanzierung?fahrzeug=cupra-formentor-used",
      },
    ],
  },
  // GEBRAUCHTWAGEN - SEAT
  {
    id: "seat-leon-used-1",
    image:
      "https://images.motorpoint.co.uk/vehicles/2023-06/21/1375439/3/1024.jpg",
    imageAlt: "Seat Leon Gebrauchtwagen",
    name: "Seat Leon",
    variant: "FR 1.5 TSI",
    brand: "SEAT",
    category: "gebrauchtwagen",
    specGroups: [
      { left: withStrong("150", " PS"), right: "Leistung" },
      { left: withStrong("28.500", " km"), right: "Laufleistung" },
      { left: withStrong("2022"), right: "Erstzulassung" },
      { left: withStrong("Manuell"), right: "Getriebe" },
    ],
    price: "24.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=seat-leon-used" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=seat-leon-used" },
    ],
  },
  // GEBRAUCHTWAGEN - NISSAN
  {
    id: "nissan-qashqai-used-1",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.LSYrTWOsfCwdvOQfBWfYTQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Nissan Qashqai Gebrauchtwagen",
    name: "Nissan Qashqai",
    variant: "1.3 DIG-T Tekna",
    brand: "NISSAN",
    category: "gebrauchtwagen",
    specGroups: [
      { left: withStrong("140", " PS"), right: "Leistung" },
      { left: withStrong("35.200", " km"), right: "Laufleistung" },
      { left: withStrong("2021"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "22.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=nissan-qashqai-used" },
      {
        label: "Finanzieren",
        href: "/finanzierung?fahrzeug=nissan-qashqai-used",
      },
    ],
  },
  // VORFÜHRWAGEN - CUPRA
  {
    id: "cupra-ateca-demo-1",
    image:
      "https://autoskauftmanbeikoch.de/de/wp-content/uploads/2019/03/CUPRA-Ateca-Special-Edition-1.jpg",
    imageAlt: "Cupra Ateca Vorführwagen",
    name: "Cupra Ateca",
    variant: "2.0 TSI 4Drive",
    brand: "CUPRA",
    category: "vorführwagen",
    specGroups: [
      { left: withStrong("300", " PS"), right: "Leistung" },
      { left: withStrong("8.500", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "44.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=cupra-ateca-demo" },
      { label: "Reservieren", href: "/reservierung?fahrzeug=cupra-ateca-demo" },
    ],
  },
  // VORFÜHRWAGEN - SEAT
  {
    id: "seat-arona-demo-1",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.F3ZsdCn2OvNdmxqHP9DItwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Seat Arona Vorführwagen",
    name: "Seat Arona",
    variant: "FR 1.0 TSI DSG",
    brand: "SEAT",
    category: "vorführwagen",
    specGroups: [
      { left: withStrong("110", " PS"), right: "Leistung" },
      { left: withStrong("5.200", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "22.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=seat-arona-demo" },
      { label: "Reservieren", href: "/reservierung?fahrzeug=seat-arona-demo" },
    ],
  },
  // VORFÜHRWAGEN - NISSAN
  {
    id: "nissan-juke-demo-1",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.8UTPwyTDMfj2BJwK1MrjjQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Nissan Juke Vorführwagen",
    name: "Nissan Juke",
    variant: "1.0 DIG-T N-Connecta",
    brand: "NISSAN",
    category: "vorführwagen",
    specGroups: [
      { left: withStrong("114", " PS"), right: "Leistung" },
      { left: withStrong("6.800", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Manuell"), right: "Getriebe" },
    ],
    price: "19.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=nissan-juke-demo" },
      { label: "Reservieren", href: "/reservierung?fahrzeug=nissan-juke-demo" },
    ],
  },
  // JAHRESWAGEN - SEAT
  {
    id: "seat-ibiza-jahres-1",
    image: "https://img.autrado.de/955/74978_1024.jpg",
    imageAlt: "Seat Ibiza Jahreswagen",
    name: "Seat Ibiza",
    variant: "FR 1.0 TSI",
    brand: "SEAT",
    category: "jahreswagen",
    specGroups: [
      { left: withStrong("95", " PS"), right: "Leistung" },
      { left: withStrong("12.800", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Manuell"), right: "Getriebe" },
    ],
    price: "19.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=seat-ibiza-jahres" },
      {
        label: "Finanzieren",
        href: "/finanzierung?fahrzeug=seat-ibiza-jahres",
      },
    ],
  },
  // JAHRESWAGEN - AUDI
  {
    id: "audi-a3-jahres-1",
    image: "https://img.autrado.de/1686/3429199_640.jpg",
    imageAlt: "Audi A3 Jahreswagen",
    name: "Audi A3",
    variant: "35 TFSI S-Line",
    brand: "AUDI",
    category: "jahreswagen",
    specGroups: [
      { left: withStrong("150", " PS"), right: "Leistung" },
      { left: withStrong("8.500", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "32.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=audi-a3-jahres" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=audi-a3-jahres" },
    ],
  },
  // LEASING-RÜCKLÄUFER - PORSCHE
  {
    id: "porsche-cayenne-leasing-1",
    image:
      "https://kr-leasing.de/wp-content/uploads/porsche-cayenne-e1677665228692.jpg",
    imageAlt: "Porsche Cayenne Leasing-Rückläufer",
    name: "Porsche Cayenne",
    variant: "S 2.9 V6 Turbo",
    brand: "PORSCHE",
    category: "leasing",
    specGroups: [
      { left: withStrong("440", " PS"), right: "Leistung" },
      { left: withStrong("24.500", " km"), right: "Laufleistung" },
      { left: withStrong("2023"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "89.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      {
        label: "Besichtigen",
        href: "/kontakt?fahrzeug=porsche-cayenne-leasing",
      },
      {
        label: "Finanzieren",
        href: "/finanzierung?fahrzeug=porsche-cayenne-leasing",
      },
    ],
  },
  // LEASING-RÜCKLÄUFER - AUDI
  {
    id: "audi-q5-leasing-1",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.RyP_VdZiCrZQC5zWU2-ZtAHaEs?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Audi Q5 Leasing-Rückläufer",
    name: "Audi Q5",
    variant: "45 TFSI Quattro S-Line",
    brand: "AUDI",
    category: "leasing",
    specGroups: [
      { left: withStrong("265", " PS"), right: "Leistung" },
      { left: withStrong("18.200", " km"), right: "Laufleistung" },
      { left: withStrong("2023"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "54.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=audi-q5-leasing" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=audi-q5-leasing" },
    ],
  },
  // ERSATZ-MIETWAGEN - PORSCHE
  {
    id: "porsche-911-ersatz-1",
    image:
      "https://images.finder.porsche.com/64956d69-2c03-4946-a4c5-753b8d62aabd/960",
    imageAlt: "Porsche 911 Ersatz-/Mietwagen",
    name: "Porsche 911",
    variant: "Carrera S",
    brand: "PORSCHE",
    category: "ersatz-mietwagen",
    specGroups: [
      { left: withStrong("450", " PS"), right: "Leistung" },
      { left: withStrong("5.800", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "149.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=porsche-911-ersatz" },
      {
        label: "Finanzieren",
        href: "/finanzierung?fahrzeug=porsche-911-ersatz",
      },
    ],
  },
  // ERSATZ-MIETWAGEN - AUDI
  {
    id: "audi-a6-ersatz-1",
    image: "https://www.mietwagen-talk.de/attachment/159153-img-1114-jpg/",
    imageAlt: "Audi A6 Ersatz-/Mietwagen",
    name: "Audi A6",
    variant: "50 TDI Quattro S-Line",
    brand: "AUDI",
    category: "ersatz-mietwagen",
    specGroups: [
      { left: withStrong("286", " PS"), right: "Leistung" },
      { left: withStrong("12.400", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "64.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=audi-a6-ersatz" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=audi-a6-ersatz" },
    ],
  },
  // ERSATZ-MIETWAGEN - CUPRA
  {
    id: "cupra-leon-ersatz-1",
    image:
      "https://media.whatcar.com/wc-image/2024-12/cupra-leon-estate-front-left-driving.jpg",
    imageAlt: "Cupra Leon Ersatz-/Mietwagen",
    name: "Cupra Leon",
    variant: "VZ 2.0 TSI DSG",
    brand: "CUPRA",
    category: "ersatz-mietwagen",
    specGroups: [
      { left: withStrong("300", " PS"), right: "Leistung" },
      { left: withStrong("8.900", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "39.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=cupra-leon-ersatz" },
      {
        label: "Finanzieren",
        href: "/finanzierung?fahrzeug=cupra-leon-ersatz",
      },
    ],
  },
  // ERSATZ-MIETWAGEN - SEAT
  {
    id: "seat-leon-ersatz-1",
    image:
      "https://gomeraindividual.de/wp-content/uploads/mietwagen-seat-leon.jpg",
    imageAlt: "Seat Leon Ersatz-/Mietwagen",
    name: "Seat Leon",
    variant: "FR 1.5 TSI DSG",
    brand: "SEAT",
    category: "ersatz-mietwagen",
    specGroups: [
      { left: withStrong("150", " PS"), right: "Leistung" },
      { left: withStrong("15.600", " km"), right: "Laufleistung" },
      { left: withStrong("2023"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "25.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=seat-leon-ersatz" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=seat-leon-ersatz" },
    ],
  },
  // ERSATZ-MIETWAGEN - VOLKSWAGEN
  {
    id: "vw-golf-ersatz-1",
    image:
      "https://www.auto-data.net/images/f39/Volkswagen-Golf-VIII-facelift-2024.jpg",
    imageAlt: "Volkswagen Golf Ersatz-/Mietwagen",
    name: "Volkswagen Golf",
    variant: "GTI 2.0 TSI DSG",
    brand: "VOLKSWAGEN",
    category: "ersatz-mietwagen",
    specGroups: [
      { left: withStrong("245", " PS"), right: "Leistung" },
      { left: withStrong("11.200", " km"), right: "Laufleistung" },
      { left: withStrong("2024"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "35.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=vw-golf-ersatz" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=vw-golf-ersatz" },
    ],
  },
  // NEUWAGEN - PORSCHE
  {
    id: "porsche-macan-new",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.Yhe2kgTgzJene3O-AMzJ0wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Porsche Macan Neuwagen",
    name: "Porsche Macan",
    variant: "S",
    brand: "PORSCHE",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("380", " PS"), right: "Leistung" },
      { left: withStrong("9,6", " L/100km"), right: "Verbrauch" },
      { left: withStrong("5,1", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 89.990 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=porsche-macan" },
      { label: "Konfigurieren", href: "/konfigurator/porsche-macan" },
    ],
  },
  // NEUWAGEN - AUDI
  {
    id: "audi-a4-new",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.9a_Hz-ZbfPuMFgfA18q7wgHaFk?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Audi A4 Neuwagen",
    name: "Audi A4",
    variant: "40 TFSI S-Line",
    brand: "AUDI",
    category: "neuwagen",
    specGroups: [
      { left: withStrong("190", " PS"), right: "Leistung" },
      { left: withStrong("6,8", " L/100km"), right: "Verbrauch" },
      { left: withStrong("7,9", " Sek."), right: "0-100 km/h" },
      { left: withStrong("2024"), right: "Baujahr" },
    ],
    price: "ab 42.990 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Probefahrt", href: "/kontakt?fahrzeug=audi-a4" },
      { label: "Konfigurieren", href: "/konfigurator/audi-a4" },
    ],
  },
  // GEBRAUCHTWAGEN - AUDI
  {
    id: "audi-q3-used-1",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.YNmZGgSymQ9xDjUEpd4r1gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Audi Q3 Gebrauchtwagen",
    name: "Audi Q3",
    variant: "35 TFSI S-Line",
    brand: "AUDI",
    category: "gebrauchtwagen",
    specGroups: [
      { left: withStrong("150", " PS"), right: "Leistung" },
      { left: withStrong("42.300", " km"), right: "Laufleistung" },
      { left: withStrong("2022"), right: "Erstzulassung" },
      { left: withStrong("Automatik"), right: "Getriebe" },
    ],
    price: "29.900 €",
    priceNote: "inkl. MwSt.",
    actions: [
      { label: "Besichtigen", href: "/kontakt?fahrzeug=audi-q3-used" },
      { label: "Finanzieren", href: "/finanzierung?fahrzeug=audi-q3-used" },
    ],
  },
];

export const getVehicleById = (id: string | undefined) =>
  id ? allVehicles.find((vehicle) => vehicle.id === id) ?? null : null;

export const getRelatedVehicles = (vehicle: Vehicle, limit = 4) =>
  allVehicles
    .filter(
      (candidate) =>
        candidate.id !== vehicle.id &&
        (candidate.brand === vehicle.brand ||
          candidate.category === vehicle.category)
    )
    .slice(0, limit);
