import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export interface HeaderText {
  text: string,
  products:string,
}
export const Header = ({ text , products }: HeaderText) => {
  return <>
    <div className="text">{text}</div>
    {/* menu for header */}
      
    <Router>
        <div className="menu">
            <div className="menu-item">
              <Link to="/">Home</Link>
            </div>
            <div className="menu-item">
              <Link to="/about">About</Link>
            </div>
            <div className="menu-item">
              <Link to="/contact">Contact</Link>
            </div>
            <div className='menu-item'>
              <Link to={"/products"} className='products'>{products}</Link>
            </div> 
            <div className="menu-item">
              <Link to="#">Login</Link>
            </div>
            <div className="menu-item">
              <Link to="#">Register</Link>
            </div>
          </div> 

  
      <Routes> 
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/> 
          <Route path="/" element={<Home />}/>  
        </Routes> 
    </Router>
    
  </>
}