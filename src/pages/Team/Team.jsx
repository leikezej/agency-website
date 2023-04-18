import React from "react";
import './team.css';
import Carousel from 'react-grid-carousel'

import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
import team3 from '../../assets/team/team3.jpg';
import team4 from '../../assets/team/team4.jpg';
import team5 from '../../assets/team/team5.jpg';
import team6 from '../../assets/team/team6.jpg';

const Team = () => {

  return (
    <section className="team__wrapper">
        <h3 className="team__subtitle"> Group Members </h3>
        <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
        <br />
        <div className="divider"></div>
        <Carousel cols={4} rows={1} gap={5} loop>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team1} alt="" />
                <h1>Peter H.</h1>
                <h3>Country Manager</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team2} alt="" />
                <h1>Pete D.</h1>
                <h3>Technical Manager</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team3} alt="" />
                <h1>Nam H.</h1>
                <h3>Head Of Production</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team4} alt="" />
                <h1>Nevill Ng.</h1>
                <h3>President</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team5} alt="" />
                <h1>Yen D.</h1>
                <h3>HR Manager</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team6} alt="" />
                <h1>Dzung Ph.</h1>
                <h3>Delivery Manager</h3>
            </div>
          </Carousel.Item>
    </Carousel>

    </section>
  )
}

export default Team;