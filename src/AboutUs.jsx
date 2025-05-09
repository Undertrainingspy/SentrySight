import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

// Import team member images
import huyPic from "./assets/huypic.jpg";
import ritchiePic from "./assets/ritchiepic.jpg";
import gavinPic from "./assets/gavinpic.jpg";
import enriquePic from "./assets/enriquepic.jpg";

// Import award images
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";

function AboutUs() {
  return (
    <motion.div
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        About SentrySight
      </motion.h2>

      <motion.p initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        At SentrySight, we believe in the power of technology to create safer spaces for everyone. By merging artificial intelligence with real-time detection systems, we bring the future of security to the present. Our solutions are crafted for businesses, schools, and communities seeking to proactively protect their spaces with precision and innovation.
      </motion.p>

      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
        Our Mission
      </motion.h3>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
        Our mission is to make security accessible, intelligent, and effortless for everyone. We are dedicated to developing AI-driven technologies that help detect potential risks early and effectively, reducing response time and enhancing overall safety.
      </motion.p>

      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        What We Offer
      </motion.h3>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        From AI-powered detection systems that monitor spaces in real-time to customizable alerts and analytics, our products are designed with user needs in mind. SentrySight provides solutions that fit seamlessly into daily operations, adding an extra layer of security without the complexity.
      </motion.p>

      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.8 }}>
        Meet Our Team
      </motion.h3>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}>
        Our team is composed of engineers, data scientists, and innovators driven by a commitment to safety and progress. With a collective background in AI, cybersecurity, and community safety, we bring a diverse skill set to every solution we create.
      </motion.p>

      {/* Team Members Grid - Organized in two rows */}
      <div className="team-grid">
        <div className="team-row">
          {/* Team member 1: Huy Dao */}
          <motion.div 
            className="team-member"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <div className="member-photo">
              <img src={huyPic} alt="Huy Dao" />
            </div>
            <h4>Huy Dao</h4>
            <p className="member-title">CTO/Lead AI Engineer</p>
            <p className="member-bio">Expert in computer vision and deep learning models.</p>
          </motion.div>
          
          {/* Team member 2: Ritchie Martinez */}
          <motion.div 
            className="team-member"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.8 }}
          >
            <div className="member-photo">
              <img src={ritchiePic} alt="Ritchie Martinez" />
            </div>
            <h4>Ritchie Martinez</h4>
            <p className="member-title">CEO</p>
            <p className="member-bio">Bridging technology and user needs for seamless security.</p>
          </motion.div>
        </div>
        
        <div className="team-row">
          {/* Team member 3: Gavin Garcia */}
          <motion.div 
            className="team-member"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            <div className="member-photo">
              <img src={gavinPic} alt="Gavin Garcia" />
            </div>
            <h4>Gavin Garcia</h4>
            <p className="member-title">CMO/Data Analyst</p>
            <p className="member-bio">Ensuring the company stays ahead of the trends.</p>
          </motion.div>
          
          {/* Team member 4: Enrique De La Torre */}
          <motion.div 
            className="team-member"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.8 }}
          >
            <div className="member-photo">
              <img src={enriquePic} alt="Enrique De La Torre" />
            </div>
            <h4>Enrique De La Torre</h4>
            <p className="member-title">Chief Operating Officer</p>
            <p className="member-bio">Oversees daily operations, ensuring efficient execution of company strategy and processes.</p>
          </motion.div>
        </div>
      </div>

      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.8 }}>
        Join Us in Making a Safer Tomorrow
      </motion.h3>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
        Whether you're looking to secure your business or simply want to learn more about the future of safety technology, we welcome you to connect with us. Together, we can create safer environments for all.
      </motion.p>

      <div className="awards-section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2, duration: 1 }}>
          Awards & Recognition
        </motion.h2>

        <div className="awards-gallery">
          <div className="awards-row">
            <div className="award-item">
              <img src={pic1} alt="Award 1" />
              <div className="award-caption">1st Place AI Hackathon</div>
            </div>
            <div className="award-item">
              <img src={pic2} alt="Award 2" />
              <div className="award-caption">Second Place University Pitch Competition</div>
            </div>
          </div>
          <div className="award-item">
            <img src={pic3} alt="Award 3" />
            <div className="award-caption">2nd Place Statewide Competition</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;