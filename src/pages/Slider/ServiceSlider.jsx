import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

import { Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <div className="slider__container">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
              onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   576: {
        //     slidesPerView: 2
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 25,
        //   }
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Product Development Consulting​ </h2>
                <h5 className="slider__desc">We’ll analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs work</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Product UI/UX ​ </h2>
                <h5 className="slider__desc">We're beside and take care your concerns, our designers specialize in taking complex, unique problems and making products deceptively simple yet powerful innovative.​</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Software Product ​ Development​ </h2>
                <h5 className="slider__desc">We deliver full-cycle software development services in a variety of technology stacks and business domains in our production centers.</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Mobile App ​ Development​ </h2>
                <h5 className="slider__desc">Our hand-picked team of software engineers applies their unique skills to build full-cycle mobile applications and enterprise solutions across all platforms.</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Dedicated Team​​ </h2>
                <h5 className="slider__desc">Our dedicated team offers the best technology solutions throughout every stage of your journey to success and takes the hassle out of your day-to-day changes</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Modern Front-end Development for Products​ </h2>
                <h5 className="slider__desc">We turn your ideas into state-of-the-art technology products with cost-effective development proposals. </h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Cloud-based Product Development​ </h2>
                <h5 className="slider__desc">Our dedicated production team build secure, scalable cloud infrastructures, data science applications in the cloud, and more​</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">SaaS Product Development </h2>
                <h5 className="slider__desc">Our software architects design highly-available solutions to make sure applications remain operational in spite of any possible infrastructure issues</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">AI Product ​ Development​ </h2>
                <h5 className="slider__desc">We create cutting-edge and focused Artificial Intelligent solutions to optimize and enhance problems that previously required a great deal of Human Intelligence​.</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">AI Chatbot Development​ </h2>
                <h5 className="slider__desc">We have expertise in providing custom chatbots for a variety of industries that we can offer you the best AI technology for your custom needs​</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Social Media Product Development​ </h2>
                <h5 className="slider__desc">We create social media solutions that include everything from an excellent UX to visually aesthetic UI to a high level of security for user.</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Software Product Maintenance​ </h2>
                <h5 className="slider__desc">Increase your business productivity and realize significant cost benefits to your business with innovative software product maintenance.</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">Automation Testing ​ for Products ​ </h2>
                <h5 className="slider__desc">Whatever you need, our industry-driven, intelligent testing and automation services ensure maximum efficiency and cost benefits</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide className="slider__card">
            <div>
                <h2 className="slider__title">QA & Software Testing </h2>
                <h5 className="slider__desc">Our proficient and well-trained Testers and QA team are committed to providing the best QA and testing services to ensure quality results for our partners​.</h5>
            </div>
        </SwiperSlide>
        <br />
        <br />
        <br />
      </Swiper>
    </div>
  );
}


export default ServiceSlider;