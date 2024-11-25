"use client";

import React from 'react'
import { SlMenu } from "react-icons/sl";
import Image from 'next/image';
import logo from "../../public/assets/thaya-logo-light.png"
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Navbar({sidebarHandler}) {

    const activeSegment = useSelectedLayoutSegment();
    

  return (
    <>
        <button onClick={sidebarHandler} className='absolute left-2'> <SlMenu color='#FFFFFF' className='w-[50px]  lg:hidden h-[25px]'/> </button>
        <div className='hidden lg:flex gap-10'>
            <Link href={"/menu"}><h1 className={`text-[#fdb100] ${activeSegment == "menu" ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[18px] hover:text-[#FFDC8A]`}>Menu</h1></Link>
            <Link href={"/about-us"}><h1 className={`text-[#fdb100] ${activeSegment == "about-us" ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[18px] hover:text-[#FFDC8A]`}>About Us</h1></Link>
            <Link href={"/"}><h1 className={`text-[#fdb100] ${activeSegment == null ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[18px] hover:text-[#FFDC8A]`}>Home</h1></Link>
        </div>
        <div className='z-20 lg:relative'>
            <Image className='w-[150px] h-[150px] lg:fil translate-y-[3px] main-logo ' decoding="async" title="thaya-footer-logo-min" src={logo} alt=""  srcSet="https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-200x78.png 200w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-400x156.png 400w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min.png 426w"  />
            {/* <Image src="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light.png" srcSet="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light.png 1x, https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light2x.png 2x" width={200} height={199}  alt="Thaya Indian Restaurant Logo" data-retina_logo_url="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light2x.png" className="" _mstalt="640380" _msthash="3" /> */}
        </div>
        <div className='hidden lg:flex gap-10'>
            <Link href={"/gallery"}><h1 className={`text-[#fdb100] ${activeSegment == "gallery" ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[18px] hover:text-[#FFDC8A]`}>Gallery</h1></Link>
            <Link href={"/reservation"}><h1 className={`text-[#fdb100] ${activeSegment == "reservation" ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[18px] hover:text-[#FFDC8A]`}>Reservation</h1></Link>
            <Link href={"/contact"}><h1 className={`text-[#fdb100] ${activeSegment == "contact" ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[18px] hover:text-[#FFDC8A]`}>Contact Us</h1></Link>
        </div>
    </>
  )
}
