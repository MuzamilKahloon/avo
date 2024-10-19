import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import CountUp from 'react-countup';
import bgImage from '../../../public/avo-images/bg_1.jpg';
import bgImage2 from '../../../public/avo-images/bg_2.jpg.webp'
import Navbar from '../Navbar/Navbar';
import '../Slider/Slider.css';
import { motion } from 'framer-motion';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: bgImage,
            title: 'We Create Modern & Minimal Website',
            description: 'A small river named Duden flows by their place and supplies.',
            years: 21,
            projects: 0
        },
        {
            image: bgImage2,
            title: 'More than 400 Successful Projects',
            description: 'Our team has completed more than 400 projects worldwide.',
            years: 0,
            projects: 400
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const motionProps = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, ease: "easeOut" }
    };

    // Debugging log
    console.log("Current Slide: ", slides[currentSlide]);

    return (
        <div className="slider">
            <Navbar />
            <div
                className="slide"
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100vh'
                }}
            >
                <motion.div className="content" {...motionProps}>
                    <h1>{slides[currentSlide].title}</h1>
                    <p>{slides[currentSlide].description}</p>
                    <button className="explore-btn">Explore Projects</button>
                </motion.div>

                <motion.div className="counter" {...motionProps}>
                    {slides[currentSlide].years > 0 ? (
                        <h2>
                            <span className="number-wrapper">
                                <CountUp className='numbers' start={0} end={slides[currentSlide].years} duration={2} />
                                <span className="red-column y"></span>
                            </span>
                            <br />
                            <span className="description">Years of Experience</span>
                        </h2>
                    ) : (
                        <h2>
                            <span className="number-wrapper">
                                <CountUp className='numbers' start={0} end={slides[currentSlide].projects} duration={2} suffix="+" />
                                <span className="red-column"></span>
                            </span>
                            <br />
                            <span className="description">Successful Projects</span>
                        </h2>
                    )}
                </motion.div>

                <div className="play-button">
                    <FaPlay size={40} color="red" />
                </div>

                <div className="slider-indicators">
                    <span className={currentSlide === 0 ? "active" : ""}></span>
                    <span className={currentSlide === 1 ? "active" : ""}></span>
                </div>
            </div>
        </div>
    );
}

export default Slider;
