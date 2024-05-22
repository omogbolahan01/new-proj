import React from "react-dom";
import Slider from "../../swiper";

export default function Project() {
  return (
    <div className="project-all2">
      <div className="project-text2">
        <div className="text-11">
          <h3 className="my-header">All Project</h3>
        </div>
        <div className="text-21">
          <p>
            Take a journey through our portfolio and discover the diverse range
            of projects we've had the privilege to work on. From web design and
            mobile app development to branding and SEO optimization, each
            project showcases our commitment to excellence and creativity.
          </p>
        </div>
      </div>
      <div className="project-link">
        <div className="link-one">
          <div className="link-www">
            <div className="link-img">
              <img src="/images/Frame 55.png" alt="" />
            </div>
            <div className="link-state">
              <h3 className="my-header">Tammer project</h3>
              <p className="my-header">Branding</p>
            </div>
          </div>
          <div className="link-www">
            <div className="link-img">
              <img src="/images/Frame 55 (1).png" alt="" />
            </div>

            <div className="link-state">
              <h3 className="my-header">Lamma project</h3>
              <p className="my-header">Mobile app</p>
            </div>
          </div>
        </div>
        <div className="link-two">
          <div className="link-www">
            <div className="link-img">
              <img src="/images/Frame 55 (2).png" alt="" />
            </div>

            <div className="link-state">
              <h3 className="my-header">Grammer project</h3>
              <p className="my-header">Website</p>
            </div>
          </div>
          <div className="link-www">
            <div className="link-img">
              <img src="/images/Frame 55 (3).png" alt="" />
            </div>

            <div className="link-state">
              <h3 className="my-header">Kammo project</h3>
              <p className="my-header">Illustration</p>
            </div>
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
