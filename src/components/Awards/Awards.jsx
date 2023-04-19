import React, { useState } from 'react';
import './awards.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import awrd1 from "../../assets/awards/awards1.png";
import awrd2 from "../../assets/awards/awards2.png";
import awrd3 from "../../assets/awards/awards3.png";
import awrd4 from "../../assets/awards/awards4.png";
import awrd5 from "../../assets/awards/awards5.png";
import awrd6 from "../../assets/awards/awards6.png";

const Awards = () => {
    const swiper = useSwiper();
    
    const goNext = () => {
        console.log('slide next');
    }

    const goPrev = () => {
        console.log('slide prev');
    }

  return (
    <section className="awards__wrapper">
              <h1 className="awards__title">OUR AWARDS & RECOGNITIONS</h1>
        <h2 className="awards__text">We’re trusted worldwide for our reliable approach and for delivering the best solutions <br />that meet our partners unique business digital objectives.</h2>
        <br />
        <div className="divider"></div>
        
        <div className="awards__container">
        <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              pagination={{
                clickable: true,
              }}
                modules={[Pagination]}
              onSlideChange={() => console.log('awards slide')}
              onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={awrd1} alt="award1" /></SwiperSlide>
            <SwiperSlide><img src={awrd2} alt="award2" /></SwiperSlide>
            <SwiperSlide><img src={awrd3} alt="award3" /></SwiperSlide>
            <SwiperSlide><img src={awrd4} alt="award4" /></SwiperSlide>
            <SwiperSlide><img src={awrd5} alt="award5" /></SwiperSlide>
            <SwiperSlide><img src={awrd6} alt="award6" /></SwiperSlide>
        {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
        <br />
        <br />
        </Swiper>
        <div className="button__wrapper">
            <button onClick={goNext}> <i className="fa fa-chevron-left" /> </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={goPrev}> <i className="fa fa-chevron-right" /> </button>
           </div>
        </div>
    </section>
  )
}

export default Awards
