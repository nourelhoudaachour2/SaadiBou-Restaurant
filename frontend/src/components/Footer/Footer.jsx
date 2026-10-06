import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo1} alt=''/>
            <p>Saadibou is an online restaurant offering authentic Tunisian and Mediterranean cuisine, with fresh and delicious dishes available for fast delivery.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+216) 93 853 854</li>
                <li>Contact@saadibou.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @ Saadibou.com - All Right Reserved . </p>
    </div>
  )
}

export default Footer
