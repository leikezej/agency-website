import React from 'react';
import './offer.css'

const OfferCard = (props) => {
  return (
    <div>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12  p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48">
            <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img>
            <div className="mt-20 offer__details">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                {/* <h1 className="text-2xl font-bold">{props.name}</h1> */}
                <p className="font-light md:text-lg">{props.experience} of experience</p>
                <p className="font-light md:text-lg">{props.desc}</p>
                {/* <p className="font-light text-gray-400">{props.desc}</p> */}
            </div>
        </div>
      </div>
  )
}

export default OfferCard