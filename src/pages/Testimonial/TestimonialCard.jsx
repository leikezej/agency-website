import React from "react";
import './testimonial.css';

import { testimonials } from "../../dummyData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialCard = () => {
    return (
        <div className="testimonial__wrapper">
            <div className="swiper__container">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                {testimonials.map(({ id, image, message, name, position, date }) => {
                return (
                    <SwiperSlide className="swiper__card" key={id}>
                        <div className="testimonial__card">
                            <img className="testimonials__user" src={image} alt="" />
                            <p className="testimonials__message">{message}</p>
                            <h1 className="testimonials__name">{name}</h1>
                            <h5 className="swiper__desc">{position}</h5>
                            <span className="testimonial__date"><i className="fa fa-clock" />{" "}Posted At: {" "} {date}</span>
                        </div>
                    </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default TestimonialCard
