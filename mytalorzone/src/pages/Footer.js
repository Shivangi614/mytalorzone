import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Footer.css"

const Footer = () => {
 

  return (

      <footer className="footer">
     <h1>MYTALORZONE</h1>
     <div className="footer-content">
        <div className="footer-contact">
        <h3>Contact us</h3>
                <br/>
                <ul>
                <li><a href="https://www.gmail.com/"> E Mail</a></li>
                <li><a href="tel:1234567890">PHONE NUMBER</a></li>

                </ul>
        </div>
        <div className="footer-quicklines">
                <h3>Quick Lines</h3>
                <br/>
                <ul>
            
         <li> <a href="/" className="nav-link">Home</a></li>
          <li><a href="/shop" className="nav-link">Shop</a></li>
         <li> <a href="/about" className="nav-link">Our Story</a></li>
         <li> <a href="/contact" className="nav-link">Contact</a></li>


                    
                </ul>
            </div>

        <div className="footer-social">
        <h3>Follow Us</h3>
                <br/>
<ul>
          <li><a href="https://facebook.com" className="social-link">Facebook</a></li>
          <li><a href="https://instagram.com" className="social-link">Instagram</a></li>
          <li><a href="https://www.linkedin.com/" className="social-link"> LINKEDIN</a></li>
          <li><a href="https://www.youtube.com/" className="social-link">YOUTUBE</a></li>
          <li><a href="https://twitter.com" className="social-link">Twitter</a></li>
          </ul></div>
          </div>
        <div className="footer-nav">
<p>&copy; 2024 Mytalorzone. All rights reserved</p>
          
        </div>
      </footer>
    
  );
};

export default Footer;
