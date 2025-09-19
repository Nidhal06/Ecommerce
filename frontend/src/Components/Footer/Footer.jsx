import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li><Link to="/company" style={{ textDecoration: 'none' ,color: '#252525'}} onClick={scrollToTop}>Company</Link></li>
                <li><Link to="/products" style={{ textDecoration: 'none' ,color: '#252525'}} onClick={scrollToTop}>Products</Link></li>
                <li><Link to="/offices" style={{ textDecoration: 'none' ,color: '#252525'}} onClick={scrollToTop}>Offices</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none' ,color: '#252525'}} onClick={scrollToTop}>About</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none' ,color: '#252525'}} onClick={scrollToTop}>Contact</Link></li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <a href="https://www.facebook.com/" target='_blank' className='facebook'><i className="fab fa-facebook"></i></a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.instagram.com/" target='_blank' className='instagram'><i className="fab fa-instagram"></i></a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.twitter.com/" target='_blank' className='twitter'><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© copyright; 2024 SHOPPER. All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer
