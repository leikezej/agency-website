import React from 'react';
import './team.css';
import { FiFacebook, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Card = (props) => {
    return (
        <>

                <div className="col__3">
                    <div className="service__box pointer">
                        <div className="icon">
                            <img src={props.image} alt="" />
                        </div>
                        <div className="service__meta">
                            <h1 className="service__text">{props.name}</h1>
                            <p className="p service__text p__color">{props.position}</p>
                            <a className="p service__text p__color" href={props.portfolio}>Portfolio</a>
                            <ul className="social__icons">
                                <a href={props.facebook}><FiFacebook className="facebook"/></a>
                                <a href={props.gmail}><FiMail className="gmail"/></a>
                                <a href={props.github}><FiGithub className="github"/></a>
                                <a href={props.linkedin}><FiLinkedin className="linkedin"/></a>
                            </ul>
                            </div>
                    </div>
                </div>

        </>
    )
}

export default Card