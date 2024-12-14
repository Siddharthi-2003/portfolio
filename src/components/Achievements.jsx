import React from "react";
import { motion } from "framer-motion";
import "./Achievement.css"; // Importing the CSS file for styling

const Achievements = () => {
  return (
    <motion.section
      className="achievements-section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}

    >

<section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <h2 className="achievements-heading">My Achievements</h2>
        <p className="achievements-description">
          Here are some key highlights of my achievements and experiences:
        </p>

        {/* Achievements List */}
        <div className="achievements-list">
          <div className="achievement-item">
            <h3>Leader</h3>
            <p>Led a team that ranked second at <strong>Concetto</strong>, the IIT(ISM) Dhanbad tech fest.</p>
          </div>

          <div className="achievement-item">
            <h3>Sport Programming</h3>
            <p>
              Crafted solutions for complex problems on platforms like{" "}
              <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a>,{" "}
              <a href="https://www.codestudio.io" target="_blank" rel="noopener noreferrer">CodeStudio</a>, and{" "}
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">Leetcode</a>, achieving an 80%+ completion rate.
            </p>
            <p>
              Certifications:{" "}
              <a href="https://www.coursera.org/courses/css" target="_blank" rel="noopener noreferrer">CSS</a>,{" "}
              <a href="https://www.coursera.org/courses/java" target="_blank" rel="noopener noreferrer">JAVA</a>,{" "}
              <a href="https://www.coursera.org/courses/cplusplus" target="_blank" rel="noopener noreferrer">C++</a>.
            </p>
          </div>

          <div className="achievement-item">
            <h3>Social Engagements</h3>
            <p>
              Member: <strong>Roboism</strong>, Robotronics Club of IIT (ISM) Dhanbad
            </p>
            <p>
              Content Writer: <strong>Kartavya</strong>, IIT (ISM) Dhanbad
            </p>
          </div>
        </div>
      </div>
    </section>

      <section className="achievements-container">
        <h2 className="achievements-heading">My Progress in Domains</h2>
        <p className="achievements-description">
          Here’s a look at my progress, in various domain.
        </p>

        <div className="progress-bars">
          {/* Example progress bars for achievements */}
          <div className="progress-item">
            <span>Programming Skills</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "95%" }}></div>
            </div>
            <span>95%</span>
          </div>

          <div className="progress-item">
            <span>Web Development</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span>90%</span>
          </div>
          <div className="progress-item">
            <span>Hardware and Electronics Projects</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span>90%</span>
          </div>
          <div className="progress-item">
            <span>Technical Skills and Simulation</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
            <span>85%</span>
          </div>
          <div className="progress-item">
            <span>Portfolio Projects</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
            <span>80%</span>
          </div>
          <div className="progress-item">
            <span>Autonomous Systems</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
            <span>75%</span>
          </div>

         


          
        </div>
      </section>
    </motion.section>
  );
};

export default Achievements;
