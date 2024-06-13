import React from "react-dom";
import { Link } from "react-router-dom";
import Sliders from "../../swiper";
import Slider1 from "../../Slider1";
import Clock from "../../Clock";
export default function Home() {
  return (
    <div className="homepage-area">
      <div className="home-first">
        <div className="first-area">
          <div></div>
          <div className="area-one">
            <Clock />
          </div>
        </div>
        <div className="first-text">
          <h2 className="my-header">
            Infinite design possibilities to ignite your company's evolution.
          </h2>
          <h5 className="my-header">
            Access elite designers for your products at affordable rates. Pay
            one subscription fee for endless design requests.
          </h5>
          <div className="home-button">
            <div className="btt-1">
              <button>
                <h3>Book a call</h3>
              </button>
            </div>
            <div className="btt-2">
              <button>
                <h3>See plan</h3>
              </button>
            </div>
          </div>
        </div>
        <div className="home-stararea">
          <div className="star-one">
            <img src="/images/Frame 8 (1).png" alt="" />
          </div>
          <div className="star-two">
            <div className="starr">
              <div className="star">
                <img src="/images/Vector (31).png" alt="" />
              </div>
              <div className="star">
                <img src="/images/Vector (31).png" alt="" />
              </div>
              <div className="star">
                <img src="/images/Vector (31).png" alt="" />
              </div>
              <div className="star">
                <img src="/images/Vector (31).png" alt="" />
              </div>
              <div className="star">
                <img src="/images/Vector (32).png" alt="" />
              </div>
            </div>
            <div className="starrr">
              <h3 className="my-header">Join our 100+ client</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="home-second">
        <Slider1 />
      </div>
      <div className="partners">
        <p>Leading corporations rely on our design expertise.</p>
        <div className="partners-img">
          <img src="/images/partners 1.png" alt="" />
        </div>
      </div>
      <div className="process-area">
        <div className="process-text">
          <h4 className="my-header">PROCESS</h4>
          <h3 className="my-header">How it works</h3>
          <p className="my-header">
            Submit design projects and get them delivered within days. Simple,
            fast, and accurate.
          </p>
        </div>
        <div className="process-all">
          <div className="process-one">
            <div className="pro-img">
              <img src="/images/Design-ICe.gif" alt="" />
            </div>

            <div className="one-text">
              <h3 className="my-header"> Book Call</h3>
              <p className="my-header">
                Begin by providing a comprehensive request customized.
              </p>
            </div>
          </div>
          <div className="process-one">
            <div className="pro-img">
              <img src="/images/Design-ICe-1.gif" alt="" />
            </div>
            <div className="one-text">
              <h3 className="my-header"> Subscribe</h3>
              <p className="my-header">
                Receive bespoke designs that breathe life into your vision.
              </p>
            </div>
          </div>
          <div className="process-one">
            <div className="pro-img">
              <img src="/images/Design-ICe-2.gif" alt="" />
            </div>
            <div className="one-text">
              <h3 className="my-header"> Review</h3>
              <p className="my-header">
                Work together to exceed all expectations.
              </p>
            </div>
          </div>
          <div className="process-one">
            <div className="pro-img">
              <img src="/images/Design-ICe-3.gif" alt="" />
            </div>
            <div className="one-text">
              <h3 className="my-header"> Launch</h3>
              <p className="my-header">
                Unveil your design masterpiece to captivate your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area">
        <div className="service-text">
          <h4 className="my-header">SERVICES</h4>
          <h3 className="my-header">
            Select Your Design & development Journey
          </h3>
          <p className="my-header">
            Your Ultimate Design Partner: Uniting Web, Mobile, Branding, and SEO
            Expertise. When it comes to crafting your digital presence,
            DesignMax Agency stands as your steadfast companion, offering a
            comprehensive suite of services to elevate every aspect of your
            online identity.
          </p>
        </div>
        <div className="service-all">
          <div className="part-1">
            <div className="service-one">
              <div className="service-image">
                <img src="/images/Rectangle 6 (1).png" alt="" />
              </div>
              <div className="service-write">
                <h3>Mobile App</h3>
                <p>
                  In an era where mobile devices reign supreme, it's essential
                  to deliver a seamless experience across all screens. With our
                  expertise in mobile optimization
                </p>
              </div>
            </div>
            <div className="service-two">
              <div className="service-image">
                <img src="/images/Rectangle 6 (2).png" alt="" />
              </div>
              <div className="service-write">
                <h3>Web Design</h3>
                <p>
                  Our team of seasoned designers and developers specializes in
                  creating captivating and functional websites that resonate
                  with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="part-two">
            <div className="service-two">
              <div className="service-write2">
                <h3>Branding</h3>
                <p>
                  Your brand is more than just a logo—it's a reflection of your
                  values, personality, and vision. Our branding experts work
                  closely with you to define and refine brand identity
                </p>
              </div>
              <div className="service-image">
                <img src="/images/Rectangle 6 (3).png" alt="" />
              </div>
            </div>
            <div className="service-one">
              <div className="service-write2">
                <h3>SEO</h3>
                <p>
                  In today's crowded digital landscape, being found online is
                  half the battle. Our SEO specialists employ proven strategies
                  to boost your visibility
                </p>
              </div>
              <div className="service-image">
                <img src="/images/Rectangle 6 (4).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-area">
        <div className="project-text">
          <h4 className="my-header">PROJECT</h4>
          <h3 className="my-header">Selected Projects</h3>
          <p className="my-header">
            At DesignMax Agency, we take pride in the diverse range of projects
            we've had the privilege to work on, each one a testament to our
            commitment to excellence and client satisfaction.
          </p>
        </div>
        <div className="project-link">
          <div className="link-one">
            <Link to="/tammer" className="link-www">
              <div className="link-img">
                <img src="/images/Frame 55.png" alt="" />
              </div>
              <div className="link-state">
                <h3 className="my-header">Tammer project</h3>
                <p className="my-header">Branding</p>
              </div>
              <div className="hover-circle">View</div>
            </Link>
            <Link to="lamma" className="link-www">
              <div className="link-img">
                <img src="/images/Frame 55 (1).png" alt="" />
              </div>
              <div className="link-state">
                <h3 className="my-header">Lamma project</h3>
                <p className="my-header">Mobile app</p>
              </div>
              <div className="hover-circle">View</div>
            </Link>
          </div>
          <div className="link-two">
            <Link to="/grammer" className="link-www">
              <div className="link-img">
                <img src="/images/Frame 55 (2).png" alt="" />
              </div>
              <div className="link-state">
                <h3 className="my-header">Grammer project</h3>
                <p className="my-header">Website</p>
              </div>
              <div className="hover-circle">View</div>
            </Link>
            <Link to="/kanmo" className="link-www">
              <div className="link-img">
                <img src="/images/Frame 55 (3).png" alt="" />
              </div>
              <div className="link-state">
                <h3 className="my-header">Kammo project</h3>
                <p className="my-header">Illustration</p>
              </div>
              <div className="hover-circle">View</div>
            </Link>
          </div>
        </div>
        <div className="project-showmore">
          <Link to="/Tammer">
            <h4>View all project</h4>
          </Link>
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
      <div className="pricing-area">
        <div className="price-text">
          <h4 className="my-header">PRICING</h4>
          <h3 className="my-header">Customized Pricing Options</h3>
          <p className="my-header">
            We understand that every project is unique, and so are our clients'
            needs and budgets. That's why we offer flexible pricing plans
            designed to accommodate a variety of requirements and financial
            considerations.
          </p>
        </div>
        <div className="pricing-section">
          {/* <h2>Our Pricing Plans</h2> */}
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Basic</h3>
              <p className="price">$19.99/month</p>
              <ul>
                <li>Insight</li>
                <li>Analystics</li>
                <li>Integration</li>
                <li>Shared features</li>
                <li>Insight</li>
                <li>No custom option</li>
              </ul>
              <button>Choose Plan</button>
            </div>
            <div className="pricing-plan">
              <h3>Standard</h3>
              <p className="price">$49.99/month</p>
              <ul>
                <li>Insight</li>
                <li>Analystics</li>
                <li>Integration</li>
                <li>Shared features</li>
                <li>Insight</li>
                <li>No custom option</li>
              </ul>
              <button>Choose Plan</button>
            </div>
            <div className="pricing-plan">
              <h3>Premium</h3>
              <p className="price">$99.99/month</p>
              <ul>
                <li>Insight</li>
                <li>Analystics</li>
                <li>Integration</li>
                <li>Shared features</li>
                <li>Insight</li>
                <li>No custom option</li>
              </ul>
              <button>Choose Plan</button>
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
          <Sliders />
        </div>
      </div>
    </div>
  );
}
