import React from 'react';
import { Link } from "react-router-dom";

import  jep  from "../../assets/team/jep.jpg";
import './profiles.css';

const ProfileCard = ({name, position, about}) => {

    return (
        <>
            <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        {/* <img src="https://pyxis.nymag.com/v1/imgs/8d9/0a2/3080246fe006e95b46306b7a9bc245bb24-elon-musk.rhorizontal.w700.jpg" alt="" /> */}
                        <img src={jep} alt="" />
                    </div>
                </div>
                <div className="lower-container">
                    <h3> {name} </h3>
                    <h4> {position} </h4>
                    <p> {about} </p>
                    <button><Link to="https://dazzling-flan-64d2b7.netlify.app/">Visit Profile</Link></button>
                </div>
            </div>
        </>
    )
}

export default ProfileCard;
