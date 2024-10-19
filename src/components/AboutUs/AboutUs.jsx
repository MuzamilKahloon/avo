import React from 'react';
import { motion } from 'framer-motion';
import '../AboutUs/AboutUs.css';
import UI from '../../../public/icons/vector.png';
import web from '../../../public/icons/web-programming.png';
import layer from '../../../public/icons/layers.png';
import code from '../../../public/icons/code.png';
import magnifier from '../../../public/icons/magnifier.png';
import about from '../../../public/avo-images/about.jpg';

// Animation variants for scroll-triggered motion
const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Work = () => {
  return (
    <div className="mywork">
      {/* About Us Section */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        ABOUT US
      </motion.h1>

      {/* Services Section */}
      <div className="techs">
        <motion.div
          className="tech"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <img src={UI} alt="UI/UX Design" />
          <p>UI/UX Design</p>
        </motion.div>

        <motion.div
          className="tech"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <img src={web} alt="Web Development" />
          <p>Web Development</p>
        </motion.div>

        <motion.div
          className="tech"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <img src={layer} alt="Product Design" />
          <p>Product Design</p>
        </motion.div>

        <motion.div
          className="tech"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <img src={code} alt="Mobile Apps" />
          <p>Mobile Apps</p>
        </motion.div>

        <motion.div
          className="tech"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <img src={magnifier} alt="SEO" />
          <p>SEO</p>
        </motion.div>
      </div>

      {/* Note Section */}
      <motion.div
        className=" note"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="ml-0 p content1">
          <h3>Welcome to AVO A Personal Portfolio Web Agency</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
            river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>

        <div className="ml-0 image-container">
          <img src={about} alt="About" />
        </div>

        <div className="ml-0 content2">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
          texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A
          small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly into your mouth.
        </div>

        <div className="button">
          <button>View all projects</button>
        </div>
      </motion.div>

      {/* Numbered Items Section */}
      <div className="ml-10 md:ml-0 num-cont-ab">
        <motion.div
          className="num1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className=" number">01</div>
          <div className="content">
            <h3>Search Engine Optimization</h3>
            <p>Far far away, behind the word mountains</p>
          </div>
        </motion.div>

        <motion.div
          className="num2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="number">02</div>
          <div className="content">
            <h3>Search Engine Optimization</h3>
            <p>Far far away, behind the word mountains</p>
          </div>
        </motion.div>

        <motion.div
          className="num3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="number">03</div>
          <div className="content">
            <h3>Search Engine Optimization</h3>
            <p>Far far away, behind the word mountains</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
