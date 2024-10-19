import React from 'react';
import { motion } from 'framer-motion';
import '../ourWorks/Work.css';
import img1 from '../../../public/avo-images/work-1.jpg';
import img2 from '../../../public/avo-images/work-2.jpg';
import img3 from '../../../public/avo-images/work-3.jpg';
import img4 from '../../../public/avo-images/work-4.jpg';
import img5 from '../../../public/avo-images/work-5.jpg';
import img6 from '../../../public/avo-images/work-6.jpg';
import img7 from '../../../public/avo-images/person_1.jpg';
import img8 from '../../../public/avo-images/person_2.jpg';
import img9 from '../../../public/avo-images/person_3.jpg';

// Animation variants for scroll-triggered motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Work = () => {
  return (
    <>
      
      <div className="work">
        <h1>Our Works</h1>

        {/* Part 1 */}
        <motion.div
          className="part1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="image-prt">
            <img src={img1} alt="" />
          </div>
          <div className="cont-prt">
            <h3>Web Design</h3>
            <p>Cassette tape</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div className="cont-prt2">
              <img src={img7} alt="" />
              <h2>jamie jonson</h2>
              <br />
              <a className='link' href="#">avo.com</a>
            </div>
            <button className='profile'>View Profile</button>
          </div>
        </motion.div>

        {/* Part 2 */}
        <motion.div
          className="part2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="cont-prt2-two">
            <h3>Application</h3>
            <p>Miniwall Clock</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div className="logo-prt">
              <img src={img8} alt="" />
              <h2>jamie jonson</h2>
              <br />
              <a className='link' href="#">avo.com</a>
            </div>
            <button className='profile'>View Profile</button>
          </div>
          <div className="image-prt-two">
            <img src={img2} alt="" />
          </div>
        </motion.div>

        {/* Part 3 */}
        <motion.div
          className="part1 p3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="image-prt">
            <img src={img3} alt="" />
          </div>
          <div className="cont-prt">
            <h3>UI/UX Design</h3>
            <p>Avo Portfolio Agency</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div className="cont-prt2">
              <img src={img9} alt="" />
              <h2>jamie jonson</h2>
              <br />
              <a className='link' href="#">avo.com</a>
            </div>
            <button className='profile'>View Profile</button>
          </div>
        </motion.div>

        {/* Part 4 */}
        <motion.div
          className="part2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="cont-prt2-two">
            <h3>Web Development</h3>
            <p>Hand Writing</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div className="logo-prt">
              <img src={img8} alt="" />
              <h2>jamie jonson</h2>
              <br />
              <a className='link' href="#">avo.com</a>
            </div>
            <button className='profile'>View Profile</button>
          </div>
          <div className="image-prt-two">
            <img src={img4} alt="" />
          </div>
        </motion.div>

        {/* Part 5 */}
        <motion.div
          className="part1 p3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="image-prt">
            <img src={img5} alt="" />
          </div>
          <div className="cont-prt">
            <h3>Illustration</h3>
            <p>Keyboard</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div className="cont-prt2">
              <img src={img8} alt="" />
              <h2>jamie jonson</h2>
              <br />
              <a className='link' href="#">avo.com</a>
            </div>
            <button className='profile'>View Profile</button>
          </div>
        </motion.div>

        {/* Part 6 */}
        <motion.div
          className="part2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="cont-prt2-two">
            <h3>Application</h3>
            <p>Miniwall Clock</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div className="logo-prt">
              <img src={img9} alt="" />
              <h2>jamie jonson</h2>
              <br />
              <a className='link' href="#">avo.com</a>
            </div>
            <button className='profile'>View Profile</button>
          </div>
          <div className="image-prt-two">
            <img src={img6} alt="" />
          </div>
        </motion.div>
      </div>
      
    </>
  );
}

export default Work;
