import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OfferCard from "./OfferCard"

import javascript from "../../assets/social/javascript.png"
import python from "../../assets/social/python.png"
import mongo from "../../assets/social/mongodb.png"
import vue from "../../assets/social/vue-js.png"
import laravel from "../../assets/social/laravel.png"
// import kvm from "../assets/skills/kvm.svg"
// import linux from "../assets/skills/linux.svg"
// import python from "../assets/skills/python.svg"
// import reactIcon from "../assets/skills/react.svg"
// import tailwind from "../assets/skills/tailwind.svg"
// import mikrotik from "../assets/skills/mikrotik.svg"
// import kubernetes from "../assets/skills/kubernetes.svg"
// import ansible from "../assets/skills/ansible.svg"
// import windows from "../assets/skills/windows.svg"
// import react from "../assets/skills/react.svg"
// import cisco from "../assets/skills/cisco.svg"
// import docker from "../assets/skills/docker.svg"
// import git from "../assets/skills/git.svg"
// import express from "../assets/skills/express.svg"
// import gitlab from "../assets/skills/gitlab.svg"

// import hr from "../assets/curve-hr.svg"

export const Offer = () => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div id="skills" className="mt-4 text-white">
            {/* <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my Offered Skills</p> */}

            <div className="mt-5">
                <Slider {...settings}>
                <OfferCard name="Javascript" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={javascript} />
                <OfferCard name="Mongo" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={mongo} />
                <OfferCard name="Python" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={python} />
                <OfferCard name="Vue" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={vue} />
                <OfferCard name="Laravel" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={laravel} />
                <OfferCard name="Javascript" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={javascript} />
                <OfferCard name="Python" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={python} />
                <OfferCard name="Javascript" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={javascript} />
                <OfferCard name="Python" desc="Well analyze your product, advise you as partners, and cooperate with you closely to improve everything that needs" experience="1 years" img={python} />
                {/* <OfferCard name="python" desc="" experience="1 years" img={python} />
                <OfferCard name="javascript" desc="" experience="1 years" img={javascript} />
                <OfferCard name="react" desc="" experience="1 years" img={reactIcon} />
                <OfferCard name="tailwind" desc="" experience="1 years" img={tailwind} />
                <OfferCard name="kvm" desc="" experience="1 years" img={kvm} />
                <OfferCard name="mikrotik" desc="" experience="1 years" img={mikrotik} />
                <OfferCard name="kubernetes" desc="" experience="1 years" img={kubernetes} />
                <OfferCard name="ansible" desc="" experience="1 years" img={ansible} />
                <OfferCard name="windows" desc="" experience="1 years" img={windows} />
                <OfferCard name="react" desc="" experience="1 years" img={react} />
                <OfferCard name="cisco" desc="" experience="1 years" img={cisco} />
                <OfferCard name="docker" desc="" experience="1 years" img={docker} />
                <OfferCard name="git" desc="" experience="1 years" img={git} />
                <OfferCard name="express" desc="" experience="1 years" img={express} />
                <OfferCard name="gitlab" desc="" experience="1 years" img={gitlab} /> */}
                </Slider>
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-3" alt="hr" /> */}
        </div>
    )
}

export default Offer
