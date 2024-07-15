"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
  //   const [first, setfirst] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setfirst(true);
  //     }, 200);
  //   }, [first]);

//   const handleSlideChange = () => {
//     const elements = document.querySelectorAll('.imgSwiper, .description, .join-now, .slider-titles, .slider-description');
//     elements.forEach(el => {
//         if (el instanceof HTMLElement) {
//             el.style.animation = 'none';
//             el.offsetHeight; // Trigger a reflow
//             el.style.animation = "";
//         }
//     });
// };

  return (
    // first && (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 1000,

        disableOnInteraction: false,
      }}
    //   onSlideChange={handleSlideChange}
    >
      {IMAGES.map((imageDetail) => {
        return (
          <SwiperSlide className="tst" key={imageDetail.id}>
            <Image
              className="imgSwiper"
              src={imageDetail.img}
              alt="image-slider"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
  //   );
}
