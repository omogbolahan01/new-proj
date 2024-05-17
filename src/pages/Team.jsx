import React from "react-dom";
import Slider from "../../swiper";
export default function Team() {
  return (
    <div className="team-all">
      <div className="team-first">
        <div className="team-text2">
          <h2 className="my-header">Here! Creativity Meets Ingenuity</h2>
          <p className="my-header">
            we believe in the power of creativity, innovation, and collaboration
            to transform ideas into extraordinary experiences. Our tagline
            encapsulates our core values and commitment to excellence
          </p>
        </div>
      </div>
      <div className="team-img">
        <img src="/images/Frame 1 (2).png" alt="" />
      </div>
      <div className="figures-area">
        <div></div>
        <div className="fig-area">
          <h3>
            Our metrics provide insights into the performance and impact of our
            platform, allowing us to measure success
          </h3>
          <div className="fig-no">
            <div className="fig-nn">
              <h3 className="my-header">400+</h3>
              <p className="my-header">Projects Completed</p>
            </div>
            <div className="fig-nn">
              <h3 className="my-header">4.9</h3>
              <p className="my-header">Client Satisfaction</p>
            </div>
            <div className="fig-nn">
              <h3 className="my-header">100+</h3>
              <p className="my-header">Total Client</p>
            </div>
            <div className="fig-nn">
              <h3 className="my-header">90%</h3>
              <p className="my-header">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="team-area">
        <div className="team-text">
          <h4 className="my-header">OUR TEAM</h4>
          <h3 className="my-header">Meet Our Dynamic Team</h3>
          <p className="my-header">
            We're more than just a group of individuals—we're a cohesive team
            united by our passion for design, creativity, and innovation.
          </p>
        </div>
        <div className="empty"></div>
        <div className="team-flex">
          <div className="team-image">
            <img src="/images/Frame 64.png" alt="" />
          </div>
          <div className="team-image">
            <img src="/images/Frame 65.png" alt="" />
          </div>
          <div className="team-image">
            <img src="/images/Frame 70 (1).png" alt="" />
          </div>
          <div className="team-image">
            <img src="/images/Frame 69.png" alt="" />
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
