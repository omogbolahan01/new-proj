import React from "react-dom";
import Slider from "../../swiper";

export default function Contact() {
  return (
    <div className="contact-all">
      <div className="contact-first">
        <div className="contact-grid">
          <div className="grid-1">
            <h2 className="my-header">Get in Touch with DesignMax</h2>
            <p className="my-header">
              We're thrilled to hear from you! Whether you have a question about
              our services, want to discuss a potential project, or simply want
              to say hello, we're here to help. Contact us using the information
              below, and one of our friendly team members will get back to you
              as soon as possible.
            </p>
            <div className="grid-contact">
              <div className="con-1">
                <h3 className="my-header">info@DesignMax</h3>
                <div className="cnt-img">
                  <img src="/images/arrow.png" alt="" />
                </div>
              </div>
              <p className="my-header">+2349028372</p>
            </div>
          </div>
          <div className="grid-2">
            <img src="/images/Rectangle 13 (3).png" alt="" />
          </div>
        </div>
      </div>
      <div className="testi">
        <div className="testi-text">
          <h4 className="my-header">TESTIMONIALS</h4>
          <h3 className="my-header">Client Testimonials</h3>
          <p className="my-header">
            Discover what our clients have to say about their experiences
            working with DesignMax Agency
          </p>
        </div>
        <div className="my-header">
          <Slider />
        </div>
      </div>
    </div>
  );
}
