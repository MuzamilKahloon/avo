import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/Pages/Home/Home.jsx'
import About from '../src/Pages/About/About.jsx';
import Work from '../src/Pages/WorkP/Work.jsx'  
import Blog from '../src/Pages/Blog/Blog.jsx'
import Contact from '../src/Pages/Contact/Contact.jsx'  

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />  
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />  
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
