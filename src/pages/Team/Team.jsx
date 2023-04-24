  import React from "react";
  import './team.css';
  import Carousel from 'react-grid-carousel'
  import { team } from "../../dummyData";
  import { FiFacebook, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
  const Team = () => {
  
    return (
      <section className="team__wrapper">
          <h3 className="team__subtitle"> Team Members </h3>
          <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
          <br />
          <div className="divider"></div>
          <Carousel cols={3} rows={1} gap={10}
                      // responsiveLayout={[
            //   {
            //     breakpoint: 1200,
            //     cols: 3
            //   },
            //   {
            //     breakpoint: 990,
            //     cols: 2
            //   }
            // ]}
            // mobileBreakpoint={670}
            // arrowRight={<ArrowBtn type="right" />}
            // arrowLeft={<ArrowBtn type="left" />}
          >
          {team.map(({ id, image, name, position, portfolio, facebook, gmail, github, linkedin  }) => {
      return (
            <Carousel.Item 
                key={id}
          >
              <div className="members__card">
                  <img width="100%" src={image} alt="" />
                  <h2>{name}</h2>
                  <h4>{position}</h4>
                  <br />
                  <h5><a href={portfolio}>Profile</a></h5>
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