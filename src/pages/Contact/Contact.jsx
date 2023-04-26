import React from "react";
import './contact.css';
import ContactImage from '../../assets/logo-v2.png';

function Contact() {
    return(
         <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                              <div className="text1">Contact</div>
                            <div className="text2">Contact Us</div>
                        <br />
                        <br />
                        <br />
                        <div className="contact__meta">
                            <h1 className=""></h1>
                            <p className="">
                                I am available for freelance work. Connect with me vai phone:
                            </p>
    
                        </div>
                        <div className="input__box">
                            <input type='text' className="contact name" placeholder="Your name *" />
                            <input type='text' className="contact email" placeholder="Your Email *" />
                            <input type='text' className="contact subject" placeholder="Write a Subject *" />
                            <textarea name='message' id="message" placeholder="Write Your message" ></textarea>
                            <center><button className="view__more contact pointer btn">Submit</button></center>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    {/* <img src={ContactImage} alt='' className="contact__img" /> */}
                    <div className="contact__box-right">
                    <h3 className="contact__second-title">To get your <i>concerns</i> underway, <br />simply <i>contact</i> us!</h3>
                    <div className="contact__divider"></div>
                    <div className="left__box1">
                    <h4>In Australia 🇦🇺 </h4>
                    <ul>
                        <li><i className="fa fa-home" />&nbsp;&nbsp;<b>Address:</b>&nbsp;Level 11/580 Collins St, Melbourne VIC 3000, Australia</li>
                        <li><i className="fa fa-fax" />&nbsp;&nbsp;<b>Tel:</b>(+61) 414 231 356</li>
                    </ul>
                    </div>
                    <br />
                    <br />
                    <div className="left__box2">
                        <h4>In Vietnam 🇻🇳 </h4>
                        <ul>
                        <li><i className="fa fa-home" />&nbsp;&nbsp;<b>Address:</b>&nbsp;No 219 Trung Kinh Str, Cau Giay Dist, Ha Noi, Vietnam</li>
                        <li><i className="fa fa-fax" />&nbsp;&nbsp;<b>Tel:</b>(+84) 24 6654 2283</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
         </div>
    )
}

export default Contact;