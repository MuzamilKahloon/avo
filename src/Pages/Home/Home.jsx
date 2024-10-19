import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import '../Home/Home.css';
import bg1 from '../../../public/avo-images/bg_1.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import About from '../../components/AboutUs/AboutUs.jsx';
import Work from '../../components/ourWorks/Work.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import img1 from '../../../public/avo-images/image_1.jpg'
import img2 from '../../../public/avo-images/image_2.jpg'
import img3 from '../../../public/avo-images/image_3.jpg'
import img4 from '../../../public/avo-images/image_4.jpg'
import { BiMessageRoundedDetail } from "react-icons/bi";
import Client from '../../components/client/Client.jsx'
// Define animation variants
const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};


const Home = () => {
  return (
    <div>
    
      <Navbar />
      <Slider />
      <About />
      <Work />
       <Client />


      
      <motion.div 
        className="estimate"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="pic-size">
          {/* Apply motion to the image */}
          <img src={bg1} alt="Background Image" />

          
          {/* Apply motion to the content inside */}
          <motion.div 
            className="content-est"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <motion.span 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              Get Started
            </motion.span>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              Fill in the brief and get the project estimate
            </motion.p>

            <motion.h5 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </motion.h5>

            <motion.button 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div className="blog">
        <h1>Recent Blogs</h1>
        <div className="containers">
          <div className="container1">
            <p>Amplify your blockchain team</p>
            <img src={img1} alt="" />
            <span>June 01,2020   ADMIN<BiMessageRoundedDetail /> 03</span>
            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</h3>
          </div>
          <div className="container2">
            <p>Amplify your blockchain team</p>
            <img src={img2} alt="" />
            <span>June 01,2020   ADMIN<BiMessageRoundedDetail /> 03</span>
            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</h3>
          </div>
          <div className="container3">
            <p>Amplify your blockchain team</p>
            <img src={img3} alt="" />
            <span>June 01,2020   ADMIN<BiMessageRoundedDetail /> 03</span>
            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</h3>
          </div>
          <div className="container4">
            <p>Amplify your blockchain team</p>
            <img src={img4} alt="" />
            <span>June 01,2020   ADMIN<BiMessageRoundedDetail /> 03</span>
            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
