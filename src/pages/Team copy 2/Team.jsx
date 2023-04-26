import React from "react";
import './team.css';
import Card from "./Card";

import { team } from "../../dummyData";
import Carousel from 'react-grid-carousel';

function Team ()  {
    return (
        <section className="service component__space">
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
                    <Carousel cols={2} rows={1} gap={10} autoPlay={true} loop className="">
                        <Carousel.Item className="swiper__wrapper">
                            {team.map((value, index) => {
                                return <Card key={index} image={value.image} name={value.name} position={value.position} />
                            })}
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Team;
