import React from 'react';
import navbarlogo from '../../assets/navbarlogo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={navbarlogo} alt="gpt3_logo" />
        <p>Developed By Nadeem Khan <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>B-603, Orange Heights-2, Mumbai-India</p>
        <p>+91-7007897915</p>
        <p>nadeemkhan.nf25@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 My-TechApp. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
