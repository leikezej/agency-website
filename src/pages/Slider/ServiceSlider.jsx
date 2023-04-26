import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceSlider } from "../../dummyData";

import './Works.css';
import './MostPopular.css';

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

import { Pagination } from "swiper";
import { Zoom, Fade, Roll, Rotate, Flip, Bounce } from 'react-reveal';

const ServiceSlider = () => {
  return (
    <div className="slider__container">
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        // loop={true}
        // centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            767: {
              width: 767,
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {serviceSlider.map(({ id, title, description  }) => {
      return (
        <SwiperSlide className="" key={id}>
        <Bounce left cascade>
          <div className="service__slider">
            <div className="slider__details">
              <h2>{title}</h2>
              <br />
              <p>{description}</p>
            </div>
          </div>
          </Bounce>
        </SwiperSlide>
              );
            })}
        <br />
        <br />
        <br />
      </Swiper>
    </div>
  );
}


export default ServiceSlider;