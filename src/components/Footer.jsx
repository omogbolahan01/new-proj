import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-first">
        <div className="footer-one">
          <h3 className="my-header">
            Design and development Cutting-Edge Technology
          </h3>
          <p className="my-header">
            responsive design to the latest web development frameworks, we
            leverage cutting-edge technology to ensure your website is fast,
            secure, and optimized for success across all devices and platforms
          </p>
          <div className="footer-button2">
            <div className="btt-11">
              <button>
                <h4>Book a call</h4>
              </button>
            </div>
            <div className="btt-12">
              <button>
                <h4>See plan</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="stilll-footer">
        {/* <div className="footer-text">
          <h4 className="my-header">FAQs</h4>
          <h3 className="my-header">Client Testimonials</h3>
          <p className="my-header">
            Discover what our clients have to say about their experiences
            working with DesignMax Agency
          </p>
        </div> */}
        <div className="footer-last">
          <div className="site-logo" onClick={() => navigate("/")}>
            <div className="site-image">
              <img src="/images/Group 1.png" alt="Site Logo" />
            </div>
            <h3>DesignMax</h3>
          </div>
          {/* <nav> */}
          <div className="nav-links">
            <NavLink to="/" className="nav-item2">
              Home
            </NavLink>
            <NavLink to="/team" className="nav-item2">
              Teams
            </NavLink>
            <NavLink to="/project" className="nav-item2">
              Projects
            </NavLink>
            <NavLink to="/contact" className="nav-item2">
              Contact Us
            </NavLink>
          </div>
          {/* </nav> */}
        </div>
        <div className="still-footer">
          <div className="empty2"></div>
          <div className="final-text">
            <h4>(c) Design Max 2024</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
