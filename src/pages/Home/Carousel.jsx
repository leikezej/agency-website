import React from "react";
import './home.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../assets/carousel/slider1.jpg"
import img2 from "../../assets/carousel/slider2.jpg"
import img3 from "../../assets/carousel/slider3.jpg"
import { Zoom, Roll, Rotate, Flip, Bounce } from 'react-reveal';

const ImageCarousel = () => {
  return (
    <>
      <Zoom ssrFadeout>
        <h5 className="home__title">
        A Leading Software Distributor in Philippines<br />
        </h5>
        <h3 className="home__subtitle">Turning Great Ideas Into Digital Products</h3>
      <Carousel
        className="carousel__container"
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
      >
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
      </Zoom>
    </>
  )
}

export default ImageCarousel;