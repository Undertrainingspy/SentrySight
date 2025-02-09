
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import ContactUs from './ContactUs';
import "./CSS.css";
import CTA from "./CTA.jsx";
import Demo from "./Demo.jsx";
import FAQ from "./FAQ.jsx";
import Features from "./Features.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import News from "./News.jsx";
import Pricing from './Pricing.jsx'; // Add this import
import Profile from "./Profile.jsx";
import Questionnaire from "./Questionnaire.jsx";
import Login from "./SignIn.jsx";
import SignUp from "./SignUp.jsx"; // Changed to SignUp to match the component name
import Socials from "./Socials.jsx";
import Testimonials from "./Testimonials.jsx";

function App() {
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";

  });

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    }
  }, [userEmail]);

  return (
    <Router>
      <div className="App">
        <Header userEmail={userEmail} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <News />
                  <Testimonials />
                  <CTA />
                  <Contact />
                  <Socials />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/questionnaire" element={<Questionnaire userEmail={userEmail} />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/sign-in"
              element={<Login setUserEmail={setUserEmail} />}
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile userEmail={userEmail} setUserEmail={setUserEmail}/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;