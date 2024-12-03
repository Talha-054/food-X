"use client"

import React from "react";
import Header from "../header/Header";
import heroImg2 from "../../public/assets/restaurant-images/thaya-6-inverted.png";
import heroImg from "../../public/assets/restaurant-images/thaya-6.png";
import heroImg4 from "../../public/assets/restaurant-images/thaya-4-inverted.png";
import heroImg3 from "../../public/assets/restaurant-images/thaya-4.png";
import heroImg5 from "../../public/assets/restaurant-images/thaya-8.png";
import heroImg6 from "../../public/assets/restaurant-images/thaya-8-inverted.png";
import heroImg7 from "../../public/assets/food-images/desi-food.png";
import heroImg8 from "../../public/assets/food-images/desi-food-2.png";
import heroImg9 from "../../public/assets/food-images/desi-food-5.png";
import heroImg10 from "../../public/assets/food-images/desi-food-4.png";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Hero() {

  const slides = [
    {
      img1 : heroImg,
      img2: heroImg2
    },
    {
      img1 : heroImg9,
    },
    {
      img1 : heroImg3,
      img2: heroImg4
    },
    {
      img1 : heroImg7,
    },
    // {
    //   img1 : heroImg5,
    //   img2: heroImg6
    // },
  ]

  return (
    <>
      <div className={`h-[100vh]   relative`}>
        <Header />
        <div
          id="hero-modal"
          className="absolute h-full top-0 w-full bg-black  opacity-35 z-10"
        ></div>

      <Swiper slidesPerView={1} loop={true}
            autoplay={{
              delay: 2500,
            }}  modules={[Pagination, Autoplay]} className="w-full h-full">
        {slides.map((item)=>{
          return (
            <>
              <SwiperSlide className="text-white h-full w-full">
                <div className="w-full h-full relative">
                  <div className={`${item.img2? "w-[50%] ": "w-full"} h-full absolute top-0  left-0 `}>
                      <Image
                        alt="hero image 1"
                        layout="fill"
                        objectPosition="center"
                        objectFit="cover"
                        src={item.img1}
                        className="absolute h-full  w-full top-0 "
                      />
                    </div>
                    {item.img2 && <div className="w-[50%] h-full absolute top-0 right-0 ">
                      <Image
                        alt="hero image 2"
                        layout="fill"
                        objectPosition="center"
                        objectFit="cover"
                        src={item.img2}
                        className="absolute  h-full w-full top-0 "
                      />
                    </div>}
                  </div>
              </SwiperSlide>
            
            </>
          )
        })}
        
        
      </Swiper>

        
      </div>
    </>
  );
}
