import React from "react";
import './CSS/About.css';
import image from '../Components/Assets/a6.jpg';
import f1 from '../Components/Assets/features/f1.png';
import f2 from '../Components/Assets/features/f2.png';
import f3 from '../Components/Assets/features/f3.png';
import f4 from '../Components/Assets/features/f4.png';
import f5 from '../Components/Assets/features/f5.png';
import f6 from '../Components/Assets/features/f6.png';

const About = () => {
    return (
        <div id="page-header" className="about-header">
            <h2 className="know">#KnowUs</h2>
            <div className="about">
                <img src={image} alt="" className="image" />
                <div className="about-container p1">
                    <h2>Who Are You?</h2>
                    <p>Welcome to [SHOPPER], your ultimate destination for cutting-edge technology solutions.<br/> We offer a diverse range of products for all your digital needs, from state-of-the-art PCs and smartphones to innovative accessories.<br/> At [SHOPPER], we are committed to sustainability and ethical practices in the tech industry. We collaborate with brands that prioritize environmental conservation and fair labor conditions.<br/> Explore our online store today to stay updated with the latest tech trends and elevate your digital experience with confidence. Thank you for choosing [SHOPPER]!</p>
                    <br />
                    <marquee bgcolor="#ff4141" loop="-1" scrollamount="5" width="100%">
                        Create Stunning images with as much or as little control as you 
                        like thanks to a choice of Basic and Creative modes 
                    </marquee>
                    <section id="feature" className="section-p1">
                        <div className="fe-box">
                            <img src={f1} alt="f1" />
                            <h6>Free Shipping</h6>
                        </div>
                        <div className="fe-box">
                            <img src={f2} alt="f2" />
                            <h6>Online Order</h6>
                        </div>
                        <div className="fe-box">
                            <img src={f3} alt="f3" />
                            <h6>Save Money</h6>
                        </div>
                        <div className="fe-box">
                            <img src={f4} alt="f4" />
                            <h6>Promotions</h6>
                        </div>
                        <div className="fe-box">
                            <img src={f5} alt="f5" />
                            <h6>Happy Sell</h6>
                        </div>
                        <div className="fe-box">
                            <img src={f6} alt="f6" />
                            <h6>F24/7 Support</h6>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
