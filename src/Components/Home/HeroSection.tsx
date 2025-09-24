import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Styles/pages/home/_herosection.scss";

function HeroSection() {
  return (
    <section className="home-hero home-hero--glass home-hero--no-overflow">
      <div className="home-hero__brands">
        <a
          href="https://www.cupraofficial.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-hero__brand"
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Cupra.svg"
            alt="Cupra Logo"
          />
        </a>
        <a
          href="https://auto-emotion.seat.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-hero__brand"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/SEAT_Logo_from_2017.svg"
            alt="SEAT Logo"
          />
        </a>
        <a
          href="https://www.nissan.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-hero__brand"
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg"
            alt="Nissan Logo"
          />
        </a>
      </div>

      <div className="home-hero__content-overlay">
        <div className="home-hero__text-content">
          <h1 className="home-hero__title">
            Premium Fahrzeuge für jeden Anspruch
          </h1>
          <p className="home-hero__subtitle">
            Entdecken Sie unsere exklusive Auswahl an Cupra, SEAT und Nissan
            Fahrzeugen
          </p>
          <div className="home-hero__cta-buttons">
            <button className="home-hero__cta-primary">
              Fahrzeuge entdecken
            </button>
            <button className="home-hero__cta-secondary">
              Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>

      <div className="home-hero__media">
        <Swiper
          className="home-hero__swiper"
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={800}
        >
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://www.hdcarwallpapers.com/download/cupra_formentor_ehybrid_2024_5k-1920x1080.jpg"
              alt="Cupra Hero"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://www.cupraofficial.ch/content/dam/public/cupra-website/cars/terramar/automatic-gallery/cupra-terramar-front-view-timanfaya-grey.jpg"
              alt="SEAT Hero"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://www.photoscar.fr/wp-content/uploads/2023/04/Cupra-Tavascan-2024-04.jpg"
              alt="Auto Emotion"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://content.presspage.com/uploads/2534/d6f6294c-3456-4fd1-8eef-60134f3f2a0e/1920_cupra-leon-01.jpg?10000"
              alt="Nissan Hero"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://www.razaoautomovel.com/wp-content/uploads/2024/07/cupra-leon-scaled.jpg.webp"
              alt="Nissan Hero"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;
