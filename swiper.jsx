import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2.4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is <= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is <= 1024px
          1024: {
            slidesPerView: 2.4,
          },
        }}
      >
        <SwiperSlide>
          <div className="text-swiper">
            <div className="starr2">
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
            <div className="swiper-text">
              <h3 className="my-header">
                “The team at DesignMax Agency went above and beyond to ensure
                our project was a success. Their professionalism, expertise, and
                dedication to customer satisfaction made them a pleasure to work
                with”
              </h3>
            </div>
            <div className="swiper-image">
              <div className="swipe-1">
                <img src="/images/E26.png" alt="" />
              </div>
              <div className="swipe-2">
                <h2 className="my-header">Michael L.</h2>
                <p className="my-header"> CTO Tesla</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-swiper">
            <div className="starr2">
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
            <div className="swiper-text">
              <h3 className="my-header">
                “The team at DesignMax Agency went above and beyond to ensure
                our project was a success. Their professionalism, expertise, and
                dedication to customer satisfaction made them a pleasure to work
                with”
              </h3>
            </div>
            <div className="swiper-image">
              <div className="swipe-1">
                <img src="/images/E26.png" alt="" />
              </div>
              <div className="swipe-2">
                <h2 className="my-header">Michael L.</h2>
                <p className="my-header"> CTO Tesla</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-swiper">
            <div className="starr2">
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
            <div className="swiper-text">
              <h3 className="my-header">
                "Working with DesignMax Agency was a game-changer for our
                business. They helped us elevate our brand and significantly
                increase our online visibility. I can't recommend them highly
                enough!"
              </h3>
            </div>
            <div className="swiper-image">
              <div className="swipe-1">
                <img src="/images/E26.png" alt="" />
              </div>
              <div className="swipe-2">
                <h2 className="my-header">Michael L.</h2>
                <p className="my-header"> CTO Tesla</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-swiper">
            <div className="starr2">
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
            <div className="swiper-text">
              <h3 className="my-header">
                “The team at DesignMax Agency went above and beyond to ensure
                our project was a success. Their professionalism, expertise, and
                dedication to customer satisfaction made them a pleasure to work
                with”
              </h3>
            </div>
            <div className="swiper-image">
              <div className="swipe-1">
                <img src="/images/E26.png" alt="" />
              </div>
              <div className="swipe-2">
                <h2 className="my-header">Michael L.</h2>
                <p className="my-header"> CTO Tesla</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-swiper">
            <div className="starr2">
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
            <div className="swiper-text">
              <h3 className="my-header">
                “The team at DesignMax Agency went above and beyond to ensure
                our project was a success. Their professionalism, expertise, and
                dedication to customer satisfaction made them a pleasure to work
                with”
              </h3>
            </div>
            <div className="swiper-image">
              <div className="swipe-1">
                <img src="/images/E26.png" alt="" />
              </div>
              <div className="swipe-2">
                <h2 className="my-header">Michael L.</h2>
                <p className="my-header"> CTO Tesla</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
