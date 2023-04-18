import React from "react";
import "./slider.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const ServiceSlider = () => {
  return (
      <>
        <section className="slider container section">
        <Swiper className="slider__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 4
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            }
          }}
          modules={[Pagination]}
        >
    {Data.map(({id, title, description }) => {
      return (
        <SwiperSlide className="slider__card" key={id}>

          <h3 className="slider__name">{title}</h3>
          <p className="slider__description">{description}
          </p>
        </SwiperSlide>
      );
    })}
        </Swiper>
        </section>
      </>
  );
};

export default ServiceSlider;