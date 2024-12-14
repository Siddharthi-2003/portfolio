import React from "react";
import "./Work.css"; // Create a separate CSS file to style this page
import { motion } from "framer-motion";

const Projects = () => (

    <motion.section
    className="about"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
 
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="project">
        <h2>1. Autonomous Quadcopter</h2>
        <p className="project-description">
          This project showcases the development of an autonomous quadcopter system capable of
          precise navigation and object manipulation, even in GPS-denied environments. The system
          uses advanced <span class="block-underline"></span>ArUco tag detection for pose estimation and is powered by <span class="block-underline"></span>**Raspberry Pi**,
          <span class="block-underline"></span>**PX4 Autopilot**, and  <span class="block-underline"></span>**MAVSDK**. The project highlights my knowledge of <span class="block-underline"></span>robotics,
          <span class="block-underline"></span> Computer vision, and <span class="block-underline"></span>control systems.
        </p>
        <p><strong>Technologies:</strong> C++, Raspberry Pi, PX4 Autopilot, OpenCV, MAVSDK, TfLite</p>
        <a href="https://github.com/Siddharthi-2003/Autonomous_Quadcopter" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h2>2. Crypto Tracker</h2>
        <p className="project-description">
          The Crypto Tracker is a responsive web application that allows users to monitor the
          real-time prices of cryptocurrencies. The application integrates the <span class="block-underline">CoinGecko API</span> to fetch
          live data and displays it through <span class="block-underline">Chart.js</span> for dynamic visualizations. Users can track
          market trends, compare different currencies, and make informed decisions. This project
          demonstrates my ability to integrate APIs, use <span class="block-underline">React</span> for front-end development, and
          create engaging, data-driven interfaces.
        </p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript, React, Material-UI, Blockchain, CoinGecko API, Chart.js</p>
        <a href="https://github.com/Siddharthi-2003/Crypto_Tracker" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h2>3. Heart Rate Monitoring System</h2>
        <p className="project-description">
          The Heart Rate Monitoring System is an IoT-based solution designed to monitor heart rates in real time
          and provide alerts for potential health risks. The system uses <span class="block-underline">ESP32</span>  and <span class="block-underline">Arduino</span> for
          the hardware components and integrates with a web-based dashboard to display data and send notifications.
          This project demonstrates my understanding of microcontroller programming and IoT concepts for
          healthcare applications.
        </p>
        <p><strong>Technologies:</strong> IoT, Arduino, ESP32, Proteus, Web Dashboard</p>
        <a href="https://github.com/Siddharthi-2003/Siddharthi-21JE0921-IoT/tree/main" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h2>4. Speed Control Algorithm</h2>
        <p className="project-description">
          The Speed Control Algorithm project involves the development of a model in <span class="block-underline">MATLAB</span> and <span class="block-underline">Simulink</span>
          to simulate the behavior of a speed control system. This system helps control the speed of motors in
          an optimized manner. The model uses real-time data to adjust parameters and improve system performance,
          making it ideal for use in various mechanical control applications.
        </p>
        <p><strong>Technologies:</strong> MATLAB, Simulink, Control Systems</p>
        <a href="https://github.com/Siddharthi-2003/Speed-Control-Algorithm" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </div>

    </div>
    </motion.section>
  );


export default Projects;
