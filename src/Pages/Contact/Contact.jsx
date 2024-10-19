import React, { useState } from 'react';
import '../Contact/Contact.css'; // Ensure this CSS file is correctly linked
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import Navbar from '../../components/Navbar/Navbar.jsx';
import img1 from '../../../public/avo-images/bg_2.jpg.webp';
import { FaChevronRight } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (

    <>
    <div className="hero">
    <Navbar />
    <div className="hero-content">
      <div className="image-side">
        <img src={img1} alt="Background" />
      </div>
      <div className="content-part">
        <div className="breadcrumb">
          <p className='elements'>Home <span className="arrow"><FaChevronRight /> </span> Contact<span className="arrow"><FaChevronRight /> </span></p>
        </div>
        <h1 className='abt'>Contact</h1>
      </div>
    </div>
  </div>


  <div className="contact-section">
      <p className="contact-us">CONTACT US</p>
      <h1 className="project-heading">HAVE A PROJECT?</h1>
      <p className="project-description">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
      </p>
    </div>

    
    <div className="contact-container">
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <div className="icon"><FaLocationDot /></div>
          <div>
            <h3>Address:</h3>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon"><FaPhoneAlt /></div>
          <div>
            <h3>Phone:</h3>
            <p>+ 1235 2355 98</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon"><RiTelegramFill /></div>
          <div>
            <h3>Email:</h3>
            <p>info@yoursite.com</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon"><BiWorld /></div>
          <div>
            <h3>Website:</h3>
            <p>yoursite.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
    </>
  );
};

export default Contact;
