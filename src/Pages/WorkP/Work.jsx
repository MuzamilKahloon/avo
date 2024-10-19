import React from 'react'
import '../WorkP/Work.css'
import Navbar from '../../components/Navbar/Navbar.jsx';
import img1 from '../../../public/avo-images/bg_2.jpg.webp';
import { FaChevronRight } from "react-icons/fa";
import Teamwork from '../../components/ourWorks/Work.jsx'
import Footer from '../../components/Footer/Footer.jsx';
const Work = () => {
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
              <p className='elements'>Home <span className="arrow"><FaChevronRight /> </span> Work<span className="arrow"><FaChevronRight /> </span></p>
            </div>
            <h1 className='abt'>Work</h1>
          </div>
        </div>
      </div>
      

      {/* Our Works */}
      <Teamwork />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Work
