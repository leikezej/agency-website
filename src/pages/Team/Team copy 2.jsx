import React from "react";
import './team.css';
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import { team } from './TeamData';

const Team = () => {

  return (
    <section className="team__wrapper">
        <h3 className="team__subtitle"> Group Members </h3>
        <h1 className="team__title"> Meet with our <mark>management</mark> team </h1>
        <br />
        <div className="divider"></div>
        
    {team.map((team) => {
        <Carousel cols={4} rows={1} gap={5} loop key={team.id}>
          <Carousel.Item>
            <div className="members__card">
                <img width="100%" src={team.image} alt="" />
                <h1>{team.name}</h1>
                <h3>{team.position}</h3>
                <Link to={team.ink}>View</Link>
            </div>
            </Carousel.Item>
          </Carousel>
        ))};
        </section>
  );
};

export default Team;