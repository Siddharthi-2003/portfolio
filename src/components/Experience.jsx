import React from "react";
import "./Experience.css"; // Optional: Create a separate CSS file for styling
import { motion } from "framer-motion";

const Experience = () => (
 
    <motion.section
    className="about"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="work-experience-container">
      <h1 className="section-title">Work Experience</h1>

      <div className="experience-item">
        <h2 className="job-title">Web Development Intern</h2>
        <p className="company-name">Sparks Foundation</p>
        <p className="dates">June 2024 – August 2024 (Remote)</p>
        <ul>
          <li>
            Led a team to develop a <strong>Basic Banking System</strong> for efficient money
            transfer tracking, improving transaction tracking by 50%.
          </li>
          <li>
            Utilized <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong> for
            frontend; <strong>PHP</strong> for backend; and <strong>MySQL</strong> for database
            management.
          </li>
          <li>
            Collaborated with team members to ensure timely delivery and smooth integration of
            all system components.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h2 className="job-title">Web Development Intern</h2>
        <p className="company-name">Tech Alpha</p>
        <p className="dates">May 2024 – July 2024 (Remote)</p>
        <ul>
          <li>
            Led the development of a responsive <strong>food ordering website</strong> to enhance
            user experience, reducing page load time by 30%.
          </li>
          <li>
            Used <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for
            frontend development.
          </li>
          <li>
            Managed a team of interns, providing guidance on best practices and ensuring timely
            project delivery.
          </li>
        </ul>
      </div>
    </div>
    </motion.section>
  );


export default Experience;
