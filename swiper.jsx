import React, { useState } from "react";
import "./style.css"; // Import the custom CSS

const Sliders = () => {
  const slides = [
    {
      text: "“The team at DesignMax Agency went above and beyond to ensure our project was a success. Their professionalism, expertise, and dedication to customer satisfaction made them a pleasure to work with”",
      name: "Michael L.",
      title: "CTO Tesla",
      image: "/images/E26.png",
    },
    {
      text: "“The team at DesignMax Agency went above and beyond to ensure our project was a success. Their professionalism, expertise, and dedication to customer satisfaction made them a pleasure to work with”",
      name: "Michael L.",
      title: "CTO Tesla",
      image: "/images/E26.png",
    },
    {
      text: "“The team at DesignMax Agency went above and beyond to ensure our project was a success. Their professionalism, expertise, and dedication to customer satisfaction made them a pleasure to work with”",
      name: "Michael L.",
      title: "CTO Tesla",
      image: "/images/E26.png",
    },
    {
      text: "“The team at DesignMax Agency went above and beyond to ensure our project was a success. Their professionalism, expertise, and dedication to customer satisfaction made them a pleasure to work with”",
      name: "Michael L.",
      title: "CTO Tesla",
      image: "/images/E26.png",
    },
    {
      text: "“The team at DesignMax Agency went above and beyond to ensure our project was a success. Their professionalism, expertise, and dedication to customer satisfaction made them a pleasure to work with”",
      name: "Michael L.",
      title: "CTO Tesla",
      image: "/images/E26.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slider-inner"
          style={{
            transform: `translateX(-${currentSlide * (500 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className={`slide ${
                index === currentSlide ||
                index === (currentSlide + 1) % slides.length
                  ? "active"
                  : ""
              }`}
              key={index}
            >
              <div className="testimonial">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="star"
                      src="/images/Vector (33).png"
                      alt="Star"
                    />
                  ))}
                </div>
                <p className="testimonial-text">{slide.text}</p>
                <div className="testimonial-info">
                  <div className="testimonial-image">
                    <img src={slide.image} alt={slide.name} />
                  </div>
                  <div className="testimonial-details">
                    <h3>{slide.name}</h3>
                    <p>{slide.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dots-container">
        <div className="dots-wrapper">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliders;
