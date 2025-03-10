import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import img from "../assets/logo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={img} alt="Logo" className="logo-img" />
    
      </div>

      {/* Menu for Large Screens */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#work">Work</a></li>
        <li><a href="#people">People</a></li>
        <li><a href="#jewellery-products">Jewellery Products</a></li>
        <li><a href="#jewellery">Jewellery</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
