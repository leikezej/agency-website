import React from "react";
import './home.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../assets/carousel/slider1.jpg"
import img2 from "../../assets/carousel/slider2.jpg"
import img3 from "../../assets/carousel/slider3.jpg"

const Carous = () => {
  return (
    <>
        <h1 className="home__title">
        A Leading Software Product Studio
for Australia
        </h1>
        <h3 className="home__subtitle">Turning Great Ideas Into Digital Products</h3>
      <Carousel className="carousel__container">
          <div>
              <img src={img1} alt="img1" />
          </div>
          <div>
              <img src={img2} alt="img2" />
          </div>
          <div>
              <img src={img3} alt="img3" />
          </div>
      </Carousel>
    </>
  )
}

export default Carous;