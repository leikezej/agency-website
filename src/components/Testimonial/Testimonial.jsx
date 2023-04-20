import React from "react";
import './testimonial.css';

import test1 from "../../assets/testimonials/test1.png";
import test2 from "../../assets/testimonials/test2.png";
import test3 from "../../assets/testimonials/test3.png";
import test4 from "../../assets/testimonials/test4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {

  return (
    <>
      <div className="testimonial__head">
        <h1 className="testimonial__title">Testimonial</h1>
        <h3 className="testimonial__subtitle">Happy Partners</h3>
        <p className="testimonial__text">Working at the highest level with our <mark>partners</mark></p>
          <br />
        <div className="divider"></div>
      </div>
      <div className="testimonial__wrapper">
        <div className="swiper__container">
          <Swiper
            slidesPerView={1}
            // spaceBetween={30}
            loop={true}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            // breakpoints={{
            //   576: {
            //     slidesPerView: 2
            //   },
            //   768: {
            //     slidesPerView: 2,
            //     spaceBetween: 25,
            //   }
            // }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper__card">
                <div className="testimonial__card">
                    <img className="testimonials__user" src={test1} alt="" />
                    <p className="testimonials__message">Im really satisfied with theri work. Thanks to the efforts of PowerGate Australia's team, we we're able to launch our portal ahead of schedule</p>
                    <h1 className="testimonials__name">Helen M.</h1>
                    <h5 className="swiper__desc">Company Director</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__card">
            <div className="testimonial__card">
                    <img className="testimonials__user" src={test2} alt="" />
                    <p className="testimonials__message">Im really satisfied with theri work. Thanks to the efforts of PowerGate Australia's team, we we're able to launch our portal ahead of schedule</p>
                    <h2 className="testimonials__name">Mark Z.</h2>
                    <h5 className="swiper__desc">CEO</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__card">
            <div className="testimonial__card">
                    <img className="testimonials__user" src={test3} alt="" />
                    <p className="testimonials__message">PowerGate Australia's team was there whenever we neeeded them. They We're really responsive and supportive. </p>
                    <h2 className="testimonials__name">Eyad A.</h2>
                    <h5 className="swiper__desc">Founder & CTO</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__card">
            <div className="testimonial__card">
                    <img className="testimonials__user" src={test4} alt="" />
                    <p className="testimonials__message">PowerGate Australia's team was there whenever we neeeded them. They We're really responsive and supportive. </p>
                    <h2 className="testimonials__name">Rick T.</h2>
                    <h5 className="swiper__desc">CTO</h5>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonial;