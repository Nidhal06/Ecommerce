import React from "react";
import './CSS/Contact.css';
import p1 from '../Components/Assets/1.png'
import p2 from '../Components/Assets/2.png'
import p3 from '../Components/Assets/3.png'

const Contact = () => {
    return (
        <div id="page-header" className="contact-header">
            <div id="contact-details" className="contact-details">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <ul>
                        <li>
                            <i className="fas fa-map"></i>
                            <p>Avenue Habib Bourguiba Béja 9000</p>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <p>contact@example.com</p>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <p>(+216) 70 000 347 / 70 000 00</p>
                        </li>
                        <li>
                            <i className="far fa-clock"></i>
                            <p>Monday To Saturday : 9.00am to 5.00pm</p>
                        </li>
                    </ul>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.878757297722!2d9.184163975018413!3d36.72547297190972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb5880fbf73d2d%3A0x3ce7919e4b858be3!2sTunisie%20Telecom!5e0!3m2!1sfr!2stn!4v1705102830686!5m2!1sfr!2stn"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div id="form-details" className="form-details">
                <span>LEAVE A MESSAGE</span>
                <h2>We Love To Hear From You</h2>
                <input type="text" placeholder="Your Name" style={{ width: '65%', padding: '12px 15px', outline: 'none', marginBottom: '20px', border: '1px solid #e1e1e1' }} />
                <input type="email" placeholder="E-mail" style={{ width: '65%', padding: '12px 15px', outline: 'none', marginBottom: '20px', border: '1px solid #e1e1e1' }} />
                <input type="text" placeholder="Subject" style={{ width: '65%', padding: '12px 15px', outline: 'none', marginBottom: '20px', border: '1px solid #e1e1e1' }} />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" style={{ width: '65%', padding: '12px 15px', outline: 'none', marginBottom: '20px', border: '1px solid #e1e1e1' }}></textarea>
                <button className="b" style={{ backgroundColor: '#ff4141', color: '#fff' }}>Submit</button>
            </div>

            <div className="people">
                <div>
                    <img src={p1} alt="p1" />
                    <p><span>John Doe</span>Senior Marketing Manager<br />Phone : +216 54 100 588<br />Email : contact@example.com</p>
                </div>
                <div>
                    <img src={p2} alt="p2"  />
                    <p><span>William Smith</span>Senior Marketing Manager<br />Phone : +216 95 701 102<br />Email : contact@example.com</p>
                </div>
                <div>
                    <img src={p3} alt="p3"/>
                    <p><span>Emma Stone</span>Seniora Marketing Manager<br />Phone : +216 20 117 433<br />Email : contact@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
