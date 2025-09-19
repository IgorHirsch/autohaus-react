import React, { useState } from "react";
import MegaMenuCar from "./MegaMenuCar";

const BrandNavigation: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<"seat" | "cupra" | "nissan">(
    "seat"
  );

  const carData = {
    seat: [
      {
        image:
          "https://s1.cdn.autoevolution.com/images/gallery/SEAT-Ateca-5711_21.jpg",
        name: "Seat Ateca",
        price: "32.990 €",
        fuelType: "Benzin" as const,
        power: "150 PS",
        consumption: "6.8 L/100km",
      },
      {
        image: "https://i.blogs.es/6a0af4/seat-arona_/original.jpg",
        name: "Seat Arona",
        price: "21.990 €",
        fuelType: "Benzin" as const,
        power: "110 PS",
        consumption: "5.9 L/100km",
      },
      {
        image:
          "https://www.seat.es/content/dam/public/seat-website/myco/2325/carworlds/leon/leon-style/first-visual/seat-leon-style-trim-midnight-black-colour-dynamic-alloy-wheels.jpg",
        name: "Seat Leon",
        price: "24.990 €",
        fuelType: "Benzin" as const,
        power: "130 PS",
        consumption: "6.1 L/100km",
      },
      {
        image:
          "https://content.presspage.com/uploads/1444/1920_ipp-all-new-seat-leon-58-hq1-2.jpg?10000",
        name: "Seat Leon Sportstour",
        price: "26.990 €",
        fuelType: "Benzin" as const,
        power: "150 PS",
        consumption: "6.3 L/100km",
      },
      {
        image:
          "https://th.bing.com/th/id/R.a61226cc0955bb4cbc2c0df18ac59ef2?rik=pcgEObbF7Hs9gQ&pid=ImgRaw&r=0",
        name: "Seat Tarraco",
        price: "39.990 €",
        fuelType: "Benzin" as const,
        power: "190 PS",
        consumption: "7.2 L/100km",
      },
    ],
    cupra: [
      {
        image: "https://cdn.motor1.com/images/mgl/XxZZ9/s1/cupra-born-2021.jpg",
        name: "Cupra Born",
        price: "35.990 €",
        fuelType: "Elektro" as const,
        power: "204 PS",
        consumption: "16.8 kWh/100km",
      },
      {
        image:
          "https://cdn.motor1.com/images/mgl/vxKKkR/s1/cupra-formentor-restyling-2023-il-render-di-motor1.com.jpg",
        name: "Cupra Formentor",
        price: "42.990 €",
        fuelType: "Benzin" as const,
        power: "310 PS",
        consumption: "7.8 L/100km",
      },
      {
        image:
          "https://media.autoexpress.co.uk/image/private/s--hdtm22K4--/v1592811551/autoexpress/2020/06/Cupra%20Ateca%20facelift.jpg",
        name: "Cupra Ateca",
        price: "39.990 €",
        fuelType: "Benzin" as const,
        power: "300 PS",
        consumption: "7.5 L/100km",
      },
      {
        image:
          "https://tse2.mm.bing.net/th/id/OIP.kd2hKrKzR__8ULYciDXDSgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        name: "Cupra Leon",
        price: "37.990 €",
        fuelType: "Benzin" as const,
        power: "245 PS",
        consumption: "7.1 L/100km",
      },
      {
        image:
          "https://i.auto-bild.de/ir_img/3/6/2/1/6/1/9/Spanische-Wuerze-trifft-deutsche-Technik-_-erste-Fahrt-im-Tavascan-2869-1800x1012-b8af3a7ff3718714.jpg?impolicy=og_images",
        name: "Cupra Tavascan",
        price: "47.990 €",
        fuelType: "Elektro" as const,
        power: "286 PS",
        consumption: "18.2 kWh/100km",
      },
      {
        image:
          "https://www.cupraofficial.ch/content/dam/public/cupra-website/cars/car-range/new-cupra-terramar-vz-dark-void-car.png",
        name: "Cupra Terramar",
        price: "44.990 €",
        fuelType: "Hybrid" as const,
        power: "272 PS",
        consumption: "6.8 L/100km",
      },
    ],
    nissan: [
      {
        image:
          "https://tse3.mm.bing.net/th/id/OIP.z6OSsWQ8IkCyUMl1a8unQQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        name: "Nissan Juke",
        price: "23.990 €",
        fuelType: "Benzin" as const,
        power: "114 PS",
        consumption: "6.2 L/100km",
      },
      {
        image:
          "https://cdn.motor1.com/images/mgl/PEEP8/s1/nissan-qashqai-2021.jpg",
        name: "Nissan Qashqai",
        price: "28.990 €",
        fuelType: "Hybrid" as const,
        power: "158 PS",
        consumption: "5.9 L/100km",
      },
      {
        image:
          "https://autode-static.de/wp-content/uploads/2020/05/Nissan-Leaf-e-a-167985.jpg",
        name: "Nissan Leaf",
        price: "31.990 €",
        fuelType: "Elektro" as const,
        power: "150 PS",
        consumption: "17.1 kWh/100km",
      },
      {
        image:
          "https://th.bing.com/th/id/R.1943fcc8d760492fc11d08bb8b8e073d?rik=O03ID%2fmYuvOfeA&pid=ImgRaw&r=0",
        name: "Nissan Ariya",
        price: "45.990 €",
        fuelType: "Elektro" as const,
        power: "218 PS",
        consumption: "19.6 kWh/100km",
      },
      {
        image:
          "https://file.chobrod.com/2017/06/12/UYK53jes/as45aaaaaaa-4676.jpg",
        name: "Nissan X-Trail",
        price: "35.990 €",
        fuelType: "Hybrid" as const,
        power: "204 PS",
        consumption: "6.1 L/100km",
      },
      {
        image:
          "https://www.nissancentrum.hu/tartalom/jarmuvek/haszongepjarmuvek/townstar-van/townstar-van/883740a-f275-21wceulhd_townstar_van_cv_qng_001.jpg",
        name: "Nissan Townstar",
        price: "25.990 €",
        fuelType: "Diesel" as const,
        power: "130 PS",
        consumption: "5.4 L/100km",
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
        {carData[activeBrand].map((car, index) => (
          <MegaMenuCar
            key={`${activeBrand}-${index}`}
            image={car.image}
            name={car.name}
            price={car.price}
            fuelType={car.fuelType}
            power={car.power}
            consumption={car.consumption}
          />
        ))}
      </div>
    </>
  );
};

export default BrandNavigation;
