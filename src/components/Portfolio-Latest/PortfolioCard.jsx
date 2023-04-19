import React from 'react';
import './portfolio.css';

import img1 from "../../assets/portfolio/web.png";
import img2 from "../../assets/portfolio/software.png";
import img3 from "../../assets/portfolio/aa.png";
import img4 from "../../assets/portfolio/pos.png";
import img5 from "../../assets/portfolio/iot.png";

const PortfolioCard = () => {
  return (
    <div className="portfolio__card">
        <div className="portfolio__image">
          <div className="portfolio__box">
            <img src={img1} alt="" />
          </div>
          <div className="portfolio__box">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="portfolio__image">
          <img src={img3} alt="" />
            <div class="portfolio__overlay">
                <div class="portfolio__text">
                  <p className="overlay__title">Mobile App</p>
                  <span className="overlay__description">SEA Top E-Scooter Tracking Mobile App</span>
              </div>
            </div>
        </div>

        <div className="portfolio__image">
          <div className="portfolio__box">
            <img src={img4} alt="" />
          </div>
          <div className="portfolio__box">
            <img src={img5} alt="" />
          </div>
        </div>
    </div>
  )
}

export default PortfolioCard
