import React from 'react'
import '../Blog/Blog.css'
import Navbar from '../../components/Navbar/Navbar.jsx';
import img1 from '../../../public/avo-images/bg_2.jpg.webp';
import { FaChevronRight } from "react-icons/fa";
import img0 from '../../../public/avo-images/image_1.jpg'
import img2 from '../../../public/avo-images/image_2.jpg'
import img3 from '../../../public/avo-images/image_3.jpg'
import img4 from '../../../public/avo-images/image_4.jpg'
import { BiMessageRoundedDetail } from "react-icons/bi";
import Footer from '../../components/Footer/Footer.jsx';
const Blog = () => {
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
              <p className='elements'>Home <span className="arrow"><FaChevronRight /> </span> Blog<span className="arrow"><FaChevronRight /> </span></p>
            </div>
            <h1 className='abt'>Blog</h1>
          </div>
        </div>
      </div>

       

      <div className="blog">
        <h1>Recent Blogs</h1>
        <div className="containers">
          <div className="container1">
            <p>Amplify your blockchain team</p>
            <img src={img0} alt="" />
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


      {/* Footer */}
      <Footer />
     
    </div>
  )
}

export default Blog
