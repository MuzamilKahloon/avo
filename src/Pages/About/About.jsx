import React from 'react';
import '../About/About.css';
import img1 from '../../../public/avo-images/bg_2.jpg.webp';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { FaChevronRight } from "react-icons/fa";
import AboutUs from '../../components/AboutUs/AboutUs.jsx'
import bg1 from '../../../public/avo-images/bg_1.jpg';
import Client from '../../components/client/Client.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import team1 from '../../../public/avo-images/team-1.jpg'
import team2 from '../../../public/avo-images/team-2.jpg'
import team3 from '../../../public/avo-images/team-3.jpg'
import team4 from '../../../public/avo-images/team-4.jpg'
import team5 from '../../../public/avo-images/team-5.jpg'
import team6 from '../../../public/avo-images/team-6.jpg'
import team7 from '../../../public/avo-images/team-7.jpg'
import team8 from '../../../public/avo-images/team-8.jpg'
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

// Import Framer Motion and Intersection Observer
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants
const cardAnimation = {
  hidden: { opacity: 0, x: -100 },  // Cards start off-screen to the left
  visible: {
    opacity: 1,
    x: 0,  // Move to final position
    transition: {
      type: 'spring',
      stiffness: 50,
    }
  },
};

const About = () => {
  const controls = useAnimation();  // Hook for controlling animation
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Hook for checking if element is in view

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="hero">
        <Navbar />
        <div className="hero-content">
          <div className="image-side">
            <img src={img1} alt="Background" />
          </div>
          <div className="content-part">
            <div className="breadcrumb">
              <p className='elements'>Home <span className="arrow"><FaChevronRight /> </span> About Us<span className="arrow"><FaChevronRight /> </span></p>
            </div>
            <h1 className='abt'>About Us</h1>
          </div>
        </div>
      </div>

      <AboutUs />

      {/* Get Started */}
      <div className="estimate">
        <div className="pic-size">
          <img src={bg1} alt="Background Image" />
          <div className="content-est">
            <span>Get Started</span>
            <p>Fill in the brief and get the project estimate</p>
            <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h5>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="md:flex gap-8  md:flex-wrap justify-center ml-0 md:ml-[150px] team" ref={ref}>  {/* Attach ref here to detect when in view */}
        <h1>EXPERT TEAM</h1>
        <div className="gap-4 ml-4 team-cards">
          {/* Team Member Cards */}
          <motion.div 
            className="card1"
            initial="hidden"
            animate={controls}  // Control animation based on scroll
            variants={cardAnimation}
          >
            <img src={team1} alt="" />
            <h3>John Wilson</h3>
            <p>Web Designer</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="card2"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team2} alt="" />
            <h3>Robert Wills</h3>
            <p>Web Developer</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="card3"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team3} alt="" />
            <h3>Mike Smith</h3>
            <p>Graphic Designer</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="card4"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team4} alt="" />
            <h3>Adrian Henderson</h3>
            <p>System Analyst</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>
        </div>

        {/* Second row of cards */}
        <div className="gap-4 ml-4 team-card2">
          <motion.div 
            className="card5"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team5} alt="" />
            <h3>John Wilson</h3>
            <p>Web Programmer</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="card6"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team6} alt="" />
            <h3>Robert Wills</h3>
            <p>Web Designer</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="card7"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team7} alt="" />
            <h3>Mike Smith</h3>
            <p>Graphic Designer</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>

          <motion.div 
            className="card8"
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
          >
            <img src={team8} alt="" />
            <h3>Adrian Henderson</h3>
            <p>SEO</p>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider */}
      <Client />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
