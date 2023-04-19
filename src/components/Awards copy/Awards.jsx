import React, { useState } from 'react';
import { Controller } from 'swiper';
import './awards.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import awrd1 from "../../assets/awards/awards1.png";
import awrd2 from "../../assets/awards/awards2.png";
import awrd3 from "../../assets/awards/awards3.png";
import awrd4 from "../../assets/awards/awards4.png";
import awrd5 from "../../assets/awards/awards5.png";
import awrd6 from "../../assets/awards/awards6.png";

const Awards = () => {
    const swiper = useSwiper();
    
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className="awards__wrapper">
              <h1 className="awards__title">OUR AWARDS & RECOGNITIONS</h1>
        <h2 className="awards__text">We’re trusted worldwide for our reliable approach and for delivering the best solutions <br />that meet our partners unique business digital objectives.</h2>
        <br />
        <div className="divider"></div>
        
        <div className="awards__container">
        <Swiper
      // install Swiper modules
            //   modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
            //   navigation
                modules={[Navigation]}
            //   pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            //   onSwiper={(swiper) => console.log('awards swiper')}
            //   onSlideChange={() => console.log('slide awards')}
    >
          <SwiperSlide><img src={awrd1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={awrd2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={awrd3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={awrd4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={awrd5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={awrd6} alt="" /></SwiperSlide>
        </Swiper>   
        {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
        <Swiper
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
      >
        {/* ... */}
      </Swiper>

      <Swiper
        modules={[Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        {/* ... */}
      </Swiper>
        </div>
    </section>
  )
}

export default Awards
