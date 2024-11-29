"use client";

import React, { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import logo from "../../public/assets/logo-new.svg";
import Link from "next/link";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

export default function Navbar({ sidebarHandler, sticky }) {
  
  const path = useSelectedLayoutSegment()
  
  
  return (
    <>
      <button onClick={sidebarHandler} className="absolute left-2">
        {" "}
        <SlMenu color="#FFFFFF" className="w-[50px]  md:hidden h-[25px]" />{" "}
      </button>
      <div className="hidden md:w-[40%] md:flex justify-evenly max-w-[400px]">
        <Link href={"menu"}>
          <h1
            className={` ${
              path === "menu" ? "text-[#fdb100]" : "text-[#ffffff]"
            } font-body font-bold text-[18px] hover:text-[#FFDC8A]`}
          >
            Speisekarte
          </h1>
        </Link>
        <Link href={"about-us"}>
          <h1
            className={`${
              path == 'about-us' ? "text-[#fdb100]" : "text-[#ffffff]"
            } font-body font-bold text-[18px] hover:text-[#FFDC8A]`}
          >
            Über uns
          </h1>
        </Link>
        <Link href={"/"}>
          <h1
            className={` ${
              path == null ? "text-[#fdb100]" : "text-[#ffffff]"
            } font-body font-bold text-[18px] hover:text-[#FFDC8A]`}
          >
            Startseite
          </h1>
        </Link>
      </div>
      <div className="z-20 lg:w-[20%] lg:relative flex justify-center items-center">
        <Image
          className={`${sticky? "w-[65px] h-[65px] ":"w-[150px] h-[150px] main-logo"} duration-300 lg:fil `}
          decoding="async"
          title="thaya-footer-logo-min"
          src={logo}
          alt="shop logo"
          srcSet="https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-200x78.png 200w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-400x156.png 400w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min.png 426w"
        />
        {/* <Image src="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light.png" srcSet="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light.png 1x, https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light2x.png 2x" width={200} height={199}  alt="Thaya Indian Restaurant Logo" data-retina_logo_url="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light2x.png" className="" _mstalt="640380" _msthash="3" /> */}
      </div>
      <div className="hidden md:w-[40%] md:flex justify-evenly max-w-[400px]">
        <Link href={"gallery"}>
          <h1
            className={`${
              path == "gallery" ? "text-[#fdb100]" : "text-[#ffffff]"
            } font-body font-bold text-[18px] hover:text-[#FFDC8A]`}
          >
            Galerie
          </h1>
        </Link>
        <Link href={"reservation"}>
          <h1
            className={` ${
              path == "reservation"
                ? "text-[#fdb100]"
                : "text-[#ffffff]"
            } font-body font-bold text-[18px] hover:text-[#FFDC8A]`}
          >
            Reservierung
          </h1>
        </Link>
        <Link href={"contact"}>
          <h1
            className={` ${
              path == "contact" ? "text-[#fdb100]" : "text-[#ffffff]"
            } font-body font-bold text-[18px] hover:text-[#FFDC8A]`}
          >
            Kontakt
          </h1>
        </Link>
      </div>
    </>
  );
}
