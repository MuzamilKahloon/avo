import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Avo Section */}
        <div className="footer-section">
          <h3>avo</h3>
          {/* <FaTwitter/> */}
          <p>Far far away, behind the word mountains, far from the countries.</p>
          <div className='flex gap-5 mt-4 text-4xl'>
            <FaTwitter className='p-2 bg-gray-500 rounded-full' />
            <FaInstagram className='p-2 bg-gray-500 rounded-full' />
            <FaFacebookF className='p-2 bg-gray-500 rounded-full' />
          </div>
        </div>

        {/* Community Section */}
        <div className="footer-section">
          <h3>Community</h3>
          <div className=''>
            <ul>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Meet the Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Have a Questions? Section */}
        <div className="footer-section">
          <h3>Have a Questions?</h3>
          <ul>
            <li className='special'><FaMapMarkerAlt /> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li className='special'><FaPhoneAlt /> +2 392 3929 210</li>
            <li className='special'><FaEnvelope /> info@yourdomain.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{' '}
          <span>🤍</span> by <a href="https://colorlib.com">Colorlib</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
