import React from "react";
import './team-grid.css';
import Carousel from 'react-grid-carousel';

import { team } from "../../dummyData";
import { FiFacebook, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Team = () => {

  return (
    <section className="team__wrapper">
        <h3 className="team__subtitle"> Group Members </h3>
        <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
        <br />
        <div className="divider"></div>
        <Carousel cols={2} rows={1} gap={10} autoPlay={true} loop className="">
        {team.map(({ id, image, name, position, portfolio, facebook, gmail, github, linkedin  }) => {
          return (
          <Carousel.Item key={id} className="swiper__wrapper">
            <div className="members__card">
                <img width="100%" src={image} alt="" />
                <h1>{name}</h1>
                <h3>{position}</h3>
                <h4>{portfolio}</h4>
                <ul className="social__icons">
                  <a href={facebook}><FiFacebook className="facebook"/></a>
                  <a href={gmail}><FiMail className="gmail"/></a>
                  <a href={github}><FiGithub className="github"/></a>
                  <a href={linkedin}><FiLinkedin className="linkedin"/></a>
              </ul>
            </div>
          </Carousel.Item>
            );
        })}
        </Carousel>
    </section>
  )
}

export default Team;