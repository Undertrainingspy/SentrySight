import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./assets/Logo.png";
import "./header.css";

function Header({ userEmail, isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  // Function to determine if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Adding inline style to force white background
  return (
    <header className="header" style={{backgroundColor: 'white', color: '#333333'}}>
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo-image" />
          <h1>SentrySight</h1>
        </Link>
      </div>

      <nav className="nav-desktop">
        <ul className="nav-list">
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActiveLink('/demo') ? 'active' : ''}`}
              to="/demo"
            >
              Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActiveLink('/faq') ? 'active' : ''}`}
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActiveLink(isAdmin ? '/questionnaire_A' : '/questionnaire') ? 'active' : ''}`}
              to={isAdmin ? "/questionnaire_A" : "/questionnaire"}
            >
              Questionnaire
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActiveLink('/pricing') ? 'active' : ''}`}
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActiveLink(userEmail ? '/profile' : '/sign-in') ? 'active' : ''}`}
              to={userEmail ? "/profile" : "/sign-in"}
            >
              {userEmail ? "Profile" : "Register / Sign In"}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            style={{backgroundColor: 'white', color: '#333333'}}
          >
            <div className="back-arrow" onClick={toggleMenu}>
              &#8592;
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                  to="/about" 
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActiveLink('/demo') ? 'active' : ''}`}
                  to="/demo" 
                  onClick={toggleMenu}
                >
                  Demo
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActiveLink('/pricing') ? 'active' : ''}`}
                  to="/pricing" 
                  onClick={toggleMenu}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActiveLink('/faq') ? 'active' : ''}`}
                  to="/faq" 
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActiveLink(isAdmin ? '/questionnaire_A' : '/questionnaire') ? 'active' : ''}`}
                  to={isAdmin ? "/questionnaire_A" : "/questionnaire"} 
                  onClick={toggleMenu}
                >
                  Questionnaire
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActiveLink(userEmail ? '/profile' : '/sign-in') ? 'active' : ''}`}
                  to={userEmail ? "/profile" : "/sign-in"} 
                  onClick={toggleMenu}
                >
                  {userEmail ? "Profile" : "Register / Sign In"}
                </Link>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActiveLink('/admin') ? 'active' : ''}`}
                    to="/admin" 
                    onClick={toggleMenu}
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;