import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">S</div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            01. Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            02. About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experience" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            03. Experience
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/work" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            04. Work
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            05. Contact
          </NavLink>
        </li>
      </ul>
      <a 
        href="https://drive.google.com/file/d/1meRWItpRR2CHQIjCUh28XdCH_6NwsfQT/view?usp=sharing" 
        className="resume-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
