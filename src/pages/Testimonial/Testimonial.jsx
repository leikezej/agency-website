import React from "react";
import './testimonial.css';

import TestimonialCard from "./TestimonialCard"

const Testimonial = () => {

  return (
    <>
      <div className="testimonial__head">
        <h1 className="testimonial__title">Testimonial</h1>
        <h3 className="testimonial__subtitle">Happy Partners</h3>
        <p className="testimonial__text">Working at the highest level with our <mark>partners</mark></p>
          <br />
        <div className="divider"></div>
        <TestimonialCard />
      </div>
    </>
  )
}

export default Testimonial;