import React from "react";
import { motion } from "framer-motion";
import profilePic from "./profile pic.jpg";
import { Link } from 'react-router-dom'; 
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      
      <section className="hero">
      <table className="hero-table">
        <tbody>
          <tr>
            <td className="hero-content">
              <p className="intro">Hi, my name is</p>
              <h1>Siddharthi Saha.</h1>
              <h2>I build things for the web and robotics.</h2>
              <p className="description">
                I'm a software engineer specializing in web development and autonomous systems. I focus on
                creating exceptional digital experiences and innovative solutions.
              </p>
              <Link to="/work" className="cta-button">Check out my work</Link>
            </td>
            <td className="profile-picture">
            <img src={profilePic} alt="Siddharthi Saha" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    </motion.section>
  );
};

export default Hero;
