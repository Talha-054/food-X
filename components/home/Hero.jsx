import React from "react";
import Header from "../header/Header";
import heroImg from "../../public/assets/hero2.png";
import hero2 from "../../public/assets/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={`min-h-[100vh] lg:h-[100vh]  relative`}>
        <Header />
        <div
          id="hero-modal"
          className="absolute h-full top-0 w-full bg-black opacity-35 z-10"
        ></div>

        <div className="w-[50%] h-full absolute top-0 left-0 ">
          <Image
            alt="hero image 1"
            layout="fill"
            objectPosition="right"
            objectFit="cover"
            src={hero2}
            className="absolute h-full  w-full top-0 "
          />
        </div>
        <div className="w-[50%] h-full absolute top-0 right-0">
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
    </>
  );
}
