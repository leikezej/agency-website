import React from "react";
import './team.css';

import raymund from "../../assets/team/raymund.jpg";
import jep from "../../assets/team/jep.jpg";
import jaybee from "../../assets/team/jaybee.png";

function Team ()  {
    return (
        <div className="service component__space" id="Services">
            <div className="heading">
                <h1 className="heading">My Awesome Service</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration,
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                                <img src={raymund} alt="Raymund Ogsimer" />
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Business Strategy</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                                <img src={jep} alt="Jezekiel Isip" />
                            {/* <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                            </svg> */}
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Business Stratagy</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                                <img src={jaybee} alt="Jaybee Geli" />
                                
                            {/* <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg> */}
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Marketing & Reporting</h1>
                                <p className="p service__text p__color">
                                    I throw myself down among the
                                </p>
                                <p className="p service__text p__color">
                                   tall grass by the stream as I lie
                                </p>
                                <p className="p service__text p__color">
                                    Close to the earth.
                                </p>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Team;
 