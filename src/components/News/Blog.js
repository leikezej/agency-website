import React from "react";
import './Blog.css';

import Blog1 from '../../assets/office/office-img1.jpg';
import Blog2 from '../../assets/office/office-img2.jpg';
import Blog3 from '../../assets/office/office-img3.jpg';

function Blog () {
    return (
    <div className="blog component__space" id="Blog">
        <div className="container">
            <div className="row">
                <div className="col__3">
                    <div className="project__box pointer relative">
                            <div className="project__img__box">
                                <img src={Blog1} alt="" className="project__img" />
                            </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="porject__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog2} alt="" className="project__img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="porject__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog3} alt="" className="project__img" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Blog;