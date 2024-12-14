import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { Link } from 'react-router-dom'; // Make sure you import Link correctly
import Achievements from "./Achievements";
import Portfolio from "./Work.jsx";

const About = () => (
  <motion.section
    className="about"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h1>About Me</h1>
    
    <p>
      I am <strong>Siddharthi Saha</strong>, a passionate individual with expertise in{" "}
      <strong>web development</strong>, <strong>blockchain technology</strong>, and{" "}
      <strong>core electronics engineering</strong>. Currently, I am pursuing a Bachelor of
      Technology in Electrical Engineering with a minor in Electronics and Communication
      Engineering at IIT (ISM) Dhanbad. I am committed to innovation and delivering impactful
      solutions through technical excellence.
    </p>

    <h2>Web Development Strengths</h2>
    <ul>
      <li>
        I specialize in building responsive and user-centric web applications using technologies
        such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
        <strong>React</strong>, and <strong>Material-UI</strong>.
      </li>
      <li>
        My internships at Sparks Foundation and Tech Alpha helped me deliver scalable web
        solutions, including a banking system and a dynamic food-ordering platform.
      </li>
      <li>
        I excel in leading collaborative teams and ensuring high-quality project execution within
        deadlines.
      </li>
      <li>
        I integrate tools like <strong>Bootstrap</strong>, <strong>Node.js</strong>, and{" "}
        <strong>MySQL</strong> to build robust and efficient systems.
      </li>
    </ul>

    <h2>Blockchain Technology Expertise</h2>
    <ul>
      <li>I focus on creating real-time data solutions using <strong>blockchain technology</strong>.</li>
      <li>
        One of my key projects is a cryptocurrency price tracker that uses <strong>CoinGecko API</strong>,{" "}
        <strong>Chart.js</strong>, and <strong>Context API</strong>, offering real-time data and
        engaging user analytics.
      </li>
      <li>This work showcases my ability to adapt emerging technologies into user-oriented applications.</li>
    </ul>

    <h2>Core Electronics and Embedded Systems</h2>
    <ul>
      <li>
        With a strong foundation in <strong>core electronics</strong>, I excel in embedded systems,
        microcontrollers, and signal processing.
      </li>
      <li>
        Notable projects include a <strong>low-cost heart rate monitoring system</strong> for
        real-time health alerts and an <strong>autonomous quadcopter</strong> capable of precise
        navigation in GPS-denied environments.
      </li>
      <li>
        These projects reflect my problem-solving skills and the ability to translate theoretical
        concepts into practical solutions.
      </li>
    </ul>

    <h2>Technical Toolkit</h2>
    <ul>
      <li>
        <strong>Languages:</strong> C++, Python, JavaScript, PHP.
      </li>
      <li>
        <strong>Frameworks & Libraries:</strong> React, Bootstrap, Node.js, Material-UI, OpenCV.
      </li>
      <li>
        <strong>Tools & Platforms:</strong> GitHub, ROS1, Gazebo, Linux, Firebase, Raspberry Pi, Arduino.
      </li>
    </ul>

    <h2>Additional Highlights</h2>
    <ul>
      <li>Led a team to secure second place at <strong>Concetto</strong>, the tech fest of IIT (ISM) Dhanbad.</li>
      <li>
        Active problem-solver on platforms like <strong>LeetCode</strong>, <strong>GeeksForGeeks</strong>, and{" "}
        <strong>CodeStudio</strong>.
      </li>
      <li>
        Member of <strong>Roboism</strong>, the robotics club of IIT (ISM) Dhanbad, and content
        contributor for <strong>Kartavya</strong>, a nonprofit initiative.
      </li>
    </ul>

    <p>
      I am excited to leverage my skills in web development, blockchain, and core electronics to
      create meaningful and impactful solutions. Check out the work section of my portfolio for a
      closer look at my projects and experiences.
    </p>

    <div className="buttons">
    <a href="./Achievements" className="btn">Achievements</a>
    <a href="./Work" className="btn">My Portfolio</a>
    </div>
  </motion.section>
);

export default About;
