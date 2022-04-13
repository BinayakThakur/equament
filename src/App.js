import React, { useState } from "react";
import "./App.css";
import "./components/Navbar.css";
//import "./Navbar.css";
import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo Equamnet name */}
        <div className="logo">
          <h2>
            <span>E</span>QUA
            <span>M</span>ENT
          </h2>
        </div>

        {/* 2nd part:- Rest of the servies or logo */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#"> Upload Bill </a>
            </li>
            <li>
              <a href="#"> ClaimStatus </a>
            </li>

            <li>
              <a href="#">My Account</a>
            </li>
          </ul>
        </div>

        {/* 3-- Social Media Links For Future Case */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.youtube.com/" target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_thapa">
                <FaFacebookMessenger className="facebook" />
              </a>
            </li>
          </ul>
          {/* hamburger menu */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* Welcome Section:- NON-NAVBAR Stuff */}
      <section className="hero-section">
        <p>Welocme to</p>
        <h1>EquaMent</h1>
      </section>
    </>
  );
};

export default Navbar;
