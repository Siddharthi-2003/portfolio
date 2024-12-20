import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    
    <Router basename="/portfolio">
      <div className="App">
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/work" element={<Work />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/achievements" element={<Achievements/>} />
          
          {/* Add routes for Experience, Work, Contact */}
          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
