import React from "react";
import "./team.css";
import { team } from "../../dummyData";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { FiFacebook, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Team = () => {

  return (
      <section className="team__wrapper">
        <h3 className="team__subtitle"> Group Members </h3>
        <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
        <br />
        <div className="divider"></div>
        <Swiper
            className=""
            loop={true}
            autoPlay={true}
            // grabCursor={true}
            // spaceBetween={24}
            // slidesPerView={6}
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
    {team.map(({ id, image, name, position, portfolio, facebook, gmail, github, linkedin  }) => {
      return (
          <SwiperSlide className="swiper__wrapper" key={id}>
            <div className="members__card" key={id}>
              <img src={image} alt=""
              className="" />
              <h2 className="">{name}</h2>
              <h4 className="">{position}</h4>
              <br />
              <h5 onClick={portfolio}>Profile</h5>
              <ul className="social__icons">
                  <a href={facebook}><FiFacebook className="facebook"/></a>
                  <a href={gmail}><FiMail className="gmail"/></a>
                  <a href={github}><FiGithub className="github"/></a>
                  <a href={linkedin}><FiLinkedin className="linkedin"/></a>
              </ul>
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