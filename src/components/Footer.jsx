import React, { useState } from "react";

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
          <div className="footer-button">
            <button>Book a call</button>
            <button>Select price</button>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <h4 className="my-header">FAQs</h4>
        <h3 className="my-header">Client Testimonials</h3>
        <p className="my-header">
          Discover what our clients have to say about their experiences working
          with DesignMax Agency
        </p>
      </div>
    </footer>
  );
}
