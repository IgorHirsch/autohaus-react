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
              src="https://images.unsplash.com/photo-1687942640889-b713c8e3f599?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cupra Hero"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://images.unsplash.com/photo-1692204621769-e77d24e25b12?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="SEAT Hero"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1920&auto=format&fit=crop"
              alt="Auto Emotion"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-hero__image"
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop"
              alt="Nissan Hero"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;
