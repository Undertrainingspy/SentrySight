import React from "react";
import { motion } from "framer-motion";
import rifleImage from "./assets/Rifle.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" style={{ 
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${rifleImage})` 
    }}>
      {/* Animated overlay gradient */}
      <motion.div 
        className="hero-gradient-overlay"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Decorative elements */}
      <div className="hero-decorative-elements">
        <motion.span 
          className="circle-element c1"
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.span 
          className="circle-element c2"
          animate={{ scale: [1.2, 1, 1.2] }} 
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ADVANCED SECURITY SOLUTIONS
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          Experience Peace of Mind
        </motion.h1>
        
        <motion.div 
          className="title-accent"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          Cutting-edge technology to keep your home and business safe.
        </motion.p>
        
        <div className="cta-buttons">
          <motion.a
            href="/sign-in"
            className="btn-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(229, 57, 53, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="/demo"
            className="btn-secondary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(58, 110, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-text">Explore</div>
      </motion.div>
    </div>
  );
};

export default Hero;