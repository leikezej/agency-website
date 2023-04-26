import React from "react";
import './team.css';
import { Link } from "react-router-dom";
import { team } from "../../dummyData";
import Carousel from 'react-grid-carousel';
import { FiFacebook, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import  jep  from "../../assets/team/jep.jpg";

function Team ()  {
    return (
        <section className="service__wrapper component__space">
                <h3 className="team__subtitle"> Team Members </h3>
                <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
                <br />
                <div className="divider"></div>
                
                <div className="row">
                <Carousel cols={4} rows={1} gap={30}
                autoPlay
                infiniteLoop
                showArrows={true}
                responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 4,
                gap: 40,
              },
              {
                breakpoint: 768,
                cols: 3,
                gap: .5,
              },
              {
                breakpoint: 380,
                cols: 1,
                gap: 5
              }
            ]}
            mobileBreakpoint={380}
            // arrowRight={<ArrowBtn type="right" />}
            // arrowLeft={<ArrowBtn type="left" />}
          >

                    {team.map(({ id, image, name, position, portfolio, facebook, gmail, github, linkedin  }) => {
      return (
                <Carousel.Item
                    key={id}
                >
                    <div className="service__box">
                        <img src={image} alt="" />
                        <h1 className="">{name}</h1>
                        <h6 className="">{position}</h6>
                        <br />
                        <button><Link className="link_profile" to={portfolio}>Portfolio</Link></button>
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
                    </div>
        </section>
    )
}

export default Team;
