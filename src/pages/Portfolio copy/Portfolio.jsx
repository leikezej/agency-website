import React from 'react';
import './portfolio.css';

import img1 from "../../assets/portfolio/image1.jpg";
import img2 from "../../assets/portfolio/image2.jpg";
import img3 from "../../assets/portfolio/image3.jpg";
import img4 from "../../assets/portfolio/image4.jpg";
import img5 from "../../assets/portfolio/image5.jpg";

const Portfolio = () => {
  return (
    <>
        <h1 className="portfolio__title">Portfolio</h1>
        <h3 className="portfolio__subtitle">Successful Stories</h3>
        <h2 className="portfolio__text">We never let ourselves forget that we're fortunate<br />
to collaborate with <mark>our partners</mark>.</h2>
       <br />
       <div className="divider"></div>
        <br />
        <div className="portfolio__grids">
            <div className="portfolio__card-grid">1</div>
            <div className="portfolio__card-grid">2</div>
            <div className="portfolio__card-grid">3</div>
            <div className="portfolio__card-grid">4</div>
            <div className="portfolio__card-grid">5</div>
        </div>
    </>
  )
}

export default Portfolio