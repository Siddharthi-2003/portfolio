import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import logoImage from "./College.jpg"; // Add the path to your logo image here

const Contact = () => (
  <motion.section
    className="about"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Left Column: Contact Information */}
          <div className="contact-details">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-description">
              Let’s connect! Here’s how you can reach me.
            </p>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <p>You can call me:</p>
                <a href="tel:+919051881296">+91 9051881296</a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <p>Feel free to email me:</p>
                <a href="mailto:sahasiddharthi0@gmail.com">
                  sahasiddharthi0@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div>
                <p>Connect with me on LinkedIn:</p>
                <a
                  href="https://www.linkedin.com/in/siddharthi-saha-269280259/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/Sid
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div>
                <p>Check out my GitHub:</p>
                <a
                  href="https://github.com/Siddharthi-2003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Sid
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Logo/Image */}
          <div className="contact-logo-container">
            <img src={logoImage} alt="Logo" className="contact-logo" />
          </div>
        </div>
      </div>
    </section>
  </motion.section>
);

export default Contact;
