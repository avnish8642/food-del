import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            doloribus voluptate, facilis fuga modi consequatur pariatur aut
            dolores eius reiciendis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon } alt="" />
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
                <li>+1-234-353-532-3424</li>
                <li>conatct@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © Tomate.com - All Rights Reserved</p>
    </div>
  )
}
