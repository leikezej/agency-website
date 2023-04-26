import React from "react";
import './services.css';

import { motion } from "framer-motion";
import { Zoom, Fade, Roll, Rotate, Flip, Bounce } from 'react-reveal';

const Services = () => {
  return (
    <div className="services__wrapper">
      <Zoom left cascade>
        <Bounce right cascade>
          <h1 className="services__title">Services</h1>
        </Bounce>
      </Zoom>
      <Zoom right cascade>
          <Bounce left cascade>
            <h3 className="services__subtitle">Your <mark>projects</mark> are all that matter. We build them as if they <br /> were our own.</h3>
            <br />
            <div className="divider"></div>
          </Bounce>
        </Zoom>

        <Bounce right cascade>
          <div className="card__container">
                <div class="services__cards">
                    <div className="card__wrappers">
                        <div class="card-image"></div>
                      <div class="card__title">Build Product from Scratch
                    </div>
                      <div class="card-text">
                      From scratch, we can plug into your organization to support you innovate and transform faster.
                      </div>
                    </div>
                </div>
    
              <div class="services__cards">
                <div className="card__wrappers">
                  <div class="card-image"></div>
                    <div class="card__title">Extend Production Team</div>
                    <div class="card-text">
                    If you're short on tech specialists, missing deadlines or going over budget, we're here for you.
                    </div>
                </div>
              </div>
    
              <div class="services__cards">
                <div className="card__wrappers">
                  <div class="card-image"></div>
                    <div class="card__title">Manage an Entire Product</div>
                    <div class="card-text">
                    We deliver world-class software products from initial discovery all the way to deployment and maintenance.
                    </div>
                </div>
              </div>
          </div>
      </Bounce>
    </div>
  )
}

export default Services;