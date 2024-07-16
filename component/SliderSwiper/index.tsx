"use client";
import { Navigation, Pagination, A11y,EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";

import Image, { StaticImageData } from "next/image";
import img1 from "@/images/home-slider-1.jpg";
import img2 from "@/images/home-slider-2.jpg";
import img3 from "@/images/home-slider-3.jpg";
import img4 from "@/images/home-slider-4.jpg";
import img5 from "@/images/home-slider-5.jpg";
import img6 from "@/images/home-slider-6.jpg";
import img8 from "@/images/home-slider-8.jpg";
import img9 from "@/images/home-slider-9.jpg";
import arrow from "@/images/prevArrow.svg";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import smallArrow from "@/images/smallArrow.svg";

let IMAGES = [
  {
    id: 1,
    img: img1,
    title: "40% Discount on Musicals",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Musicals & West End",
  },
  {
    id: 2,
    img: img2,
    title: "40% Discount On Any Hotel WorldWide",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Hotels & Serviced Apartments WorldWide",
  },
  {
    id: 3,
    img: img3,
    title: "40% Discount On Attractions",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Tourist Attractions, Activities and Landmarks WorldWide",
  },
  {
    id: 4,
    img: img4,
    title: "40% Discount On Theme Parks",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for most popular Theme Parks WorldWide",
  },
  {
    id: 5,
    img: img5,
    title: "40% Discount On Experiences",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Experiences & Adventure WorldWide",
  },
  {
    id: 6,
    img: img6,
    title: "40% Discount On Travel On WorldWide",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major TravelBooking Websites WorldWide",
  },
  {
    id: 7,
    img: img8,
    title: "40% Discount On Resorts WorldWide",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Resorts WorldWide",
  },
  {
    id: 8,
    img: img9,
    title: "40% Discount On Activities",
    description:
      "As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Activities WorldWide",
  },
];

export default function SliderSwiper() {
    return (
<Swiper className="swiper-container"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"><span class="bullet-divider">0${index+1}</span> </span>`;
        },
      }}
      navigation
      modules={[Navigation, Pagination, A11y, Autoplay,EffectFade]}
      // effect="fade"
    >
      {
        IMAGES.map(sliderDetail =>{
          return(
            <SwiperSlide key={sliderDetail.id}>
              <div className="rectangle-slider"></div>
              <Image id="imageSlider" src={sliderDetail.img} alt='img'/>
              <div id="description-box">
                  <p id='description'>
                      {sliderDetail.description}
                  </p>
                  <div id="join-now">
                      <p>Join Now</p>
                      <Image src={smallArrow} alt='smallArrow' style={{width : "20px"}}/>
                  </div>
              </div>
              <div id="slider-text">
                  <p id="slider-titles">
                      {sliderDetail.title}
                  </p>
                  <p id="slider-description">
                      Become a member & receive generous discounts on the lowest  online prices
                  </p>
              </div>
            </SwiperSlide>
          )
        })
      }

    </Swiper>

    );
}