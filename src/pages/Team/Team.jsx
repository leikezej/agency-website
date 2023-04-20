import React from "react";
import "./team.css";
import { team } from "./TeamData";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  return (
      <section className="team__wrapper">
        <h3 className="team__subtitle"> Group Members </h3>
        <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
        <br />
        <div className="divider"></div>
        <Swiper className=""
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true
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
    {team.map(({ id, image, name, position, link }) => {
      return (
          <SwiperSlide className="" key={id}>
            <div className="members__card" key={id}>
              <img width="100%" src={image} alt=""
              className="" />
              <h2 className="">{name}</h2>
              <span className="">{position}</span>
              <br />
              <br />
              <a href={link}>See Profile</a>
              </div>
          </SwiperSlide>
      );
    })}
    <br />
    <br />
    <br />
        </Swiper>
      </section>
  );
};

export default Team;