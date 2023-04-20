import React from 'react';
import './portfolio.css';

import img1 from "../../assets/portfolio/web.png";
import img2 from "../../assets/portfolio/software.png";
import img3 from "../../assets/portfolio/aa.png";
import img4 from "../../assets/portfolio/pos.png";
import img5 from "../../assets/portfolio/iot.png";

// import { HiOutlineArrowNarrowRight } from "react-icons/hi";


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
        <div class="portfolio__wrapper">
            <div class="portfolio__wrapper-image">
              <div className="portfolio__image">
                <img src={img1} alt="" />
                <div class="overlay">
                    {/* <HiOutlineArrowNarrowRight /> */}
                  <div class="text">
                      <p className="image__title">Website Development</p>
                      <span className="image__description">SEA Top E-Scooter Tracking Mobile App</span>
                  </div>
                </div>
              </div>

              <div className="portfolio__image">
                <img src={img2} alt="" />
                <div class="overlay">
                    {/* <HiOutlineArrowNarrowRight /> */}
                  <div class="text">
                      <p className="image__title">Software Systems</p><br />
                      <span className="image__description">Top Children's Healthcare Web Application in new</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="portfolio__wrapper-image center__image">
              <div className="portfolio__image">
                <img src={img3} alt="" />
                  <div className="overlay">
                    <div class="text">
                        <p className="image__title">Mobile App Development</p><br />
                        <span className="image__description">A Go-to Marketplace providing gaming companionship and entertainment services</span>
                    </div>
                  </div>
              </div>
            </div>

            <div class="portfolio__wrapper-image">
              <div className="portfolio__image">
                <img src={img4} alt="" />
                <div class="overlay">
                    {/* <HiOutlineArrowNarrowRight /> */}
                  <div class="text">
                      <p className="image__title">POS Systems</p><br />
                      <span className="image__description">US Leading OKR Solution (Mobile App)</span>
                  </div>
                </div>
              </div>

              <div className="portfolio__image">
                <img src={img5} alt="" />
                <div class="overlay">
                    {/* <HiOutlineArrowNarrowRight /> */}
                  <div class="text">
                      <p className="image__title">IOT Devices</p>
                      <span className="image__description">Autstralia Most Popular E-learning Portal</span>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default Portfolio