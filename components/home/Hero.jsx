"use client"

import React from "react";
import Header from "../header/Header";
import heroImg from "../../public/assets/hero2.png";
import hero2 from "../../public/assets/hero.png";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Hero() {
  return (
    <>
      <div className={`min-h-[100vh] lg:h-[100vh]  relative`}>
        <Header />
        <div
          id="hero-modal"
          className="absolute h-full top-0 w-full bg-black  opacity-35 z-10"
        ></div>

      {/* <Swiper slidesPerView={1} loop={true}
            autoplay={{
              delay: 3000,
            }}  modules={[Pagination, Autoplay]} className="w-full h-full">
        
        <SwiperSlide className="text-white h-full w-full">
          <div className="w-full h-full">
            <div className="w-[50%] h-full absolute top-0  left-0 swiper-slide">
                <Image
                  alt="hero image 1"
                  layout="fill"
                  objectPosition="right"
                  objectFit="cover"
                  src={hero2}
                  className="absolute h-full  w-full top-0 "
                />
              </div>
              <div className="w-[50%] h-full absolute top-0 right-0 swiper-slide">
                <Image
                  alt="hero image 2"
                  layout="fill"
                  objectPosition="left"
                  objectFit="cover"
                  src={heroImg}
                  className="absolute  h-full w-full top-0 "
                />
              </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className="text-white"><div className="absolute top-0 h-full w-full"><Image objectPosition="center" src={heroImg} className="w-full h-full"/></div></SwiperSlide>
        <SwiperSlide className="text-white">Slide 3</SwiperSlide>
        <SwiperSlide className="text-white">Slide 4</SwiperSlide>
      </Swiper> */}

        
      </div>
    </>
  );
}
