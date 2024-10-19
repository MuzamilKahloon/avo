import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import '../Navbar/Navbar.css';  // Path to your Navbar CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <h1 className="logo">a<span>v</span>o</h1>
            <div className="toggle-icon" onClick={toggleNavbar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
