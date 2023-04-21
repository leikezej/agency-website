import React from "react";
import "./team.css";
import { team } from "../../dummyData";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, EffectCube, Zoom } from 'swiper';
import { FiFacebook, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Team = () => {

  return (
      <section className="team__wrapper">
        <h3 className="team__subtitle"> Group Members </h3>
        <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
        <br />
        <div className="divider"></div>
        <Swiper
          modules={[Navigation, Pagination, EffectCube, Zoom]}
            className=""
            loop={true}
            autoplay={true}
            // grabCursor={true}
            spaceBetween={50}
            navigation
            // slidesPerView={6}
            zoom={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{clickable: true}}
            // effect={"coverflow"}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: false,
            // }}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              }
            }}
        >
    {team.map(({ id, image, name, position, portfolio, facebook, gmail, github, linkedin  }) => {
      return (
          <SwiperSlide className="swiper__wrapper" key={id}>
            <div className="members__card">
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