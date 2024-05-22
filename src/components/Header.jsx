import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
  };

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="site-logo" onClick={() => navigate("/")}>
        <div className="site-image">
          <img src="/images/Group 1.png" alt="Site Logo" />
        </div>
        <h2>DesignMax</h2>
      </div>
      <nav>
        <div
          className="navbar-toggle"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <div className={`bar ${isOpen ? "animate" : ""}`}></div>
          <div className={`bar ${isOpen ? "animate" : ""}`}></div>
          <div className={`bar ${isOpen ? "animate" : ""}`}></div>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeNavbar}
            className="nav-item"
          >
            Home
          </NavLink>
          <NavLink
            to="/team"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeNavbar}
            className="nav-item"
          >
            Teams
          </NavLink>
          <NavLink
            to="/project"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeNavbar}
            className="nav-item"
          >
            Projects
          </NavLink>
          {/* <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeNavbar}
            className="nav-item"
          >
            About
          </NavLink> */}
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeNavbar}
            className="nav-item"
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
