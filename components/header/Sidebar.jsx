"use client";

import React from 'react'
import logo from "../../public/assets/thaya-logo-light.png"
import Image from 'next/image';
import Link from 'next/link';
import restaurantDrawing from "../../public/assets/footer-restaurant.png"
import { RiCloseLargeLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';


const sidebarData =[
    {href: "/", text: "Home", activeSegment: null},
    {href: "/about-us", text: "AboutUs", activeSegment: "about-us"},
    {href: "/contact", text: "Contact", activeSegment: "contact"},
    {href: "/gallery", text: "Gallery", activeSegment: "gallery"},
    {href: "/reservation", text: "Booking", activeSegment: "reservation"},
    {href: "/menu", text: "Menu", activeSegment: "menu"}
]


export default function Sidebar({activeSegment, handleSidebar, sidebarStatus}) {

  return (
    <>
      <AnimatePresence mode='sync'>
        
        {sidebarStatus && <motion.div
          layout
          initial={{scale:0, opacity:0}}
          animate= {{scale:1, opacity:1}}
          exit={{scale: 0, opacity:0}}
          transition={{ease: "backOut"}}
          id='sidebar' 
          className={`fixed  min-h-screen w-screen top-0 bg-[#1b1b1b] z-[99] flex-col justify-start items-start p-[1em]`}>
          <div className='w-full flex justify-center items-center border-b-[2px] border-[#262525] mb-8'>
              <Image className='w-[150px] p-[5px]  h-[150px] lg:fil translate-y-[3px] main-logo ' decoding="async" title="thaya-footer-logo-min" src={logo} alt=""  srcSet="https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-200x78.png 200w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-400x156.png 400w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min.png 426w"  />
          </div>
          
          <div className='flex justify-center items-center flex-wrap gap-8'>
            {sidebarData.map((item, index)=>{
              return (
                <>
                  <div key={index} className='w-20 h-20 border-[#EB5B00] border-[1px] z-10 rounded-full flex justify-center items-center'>
                    <Link href={item.href} className={`text-[#fdb100] ${activeSegment == item.activeSegment ? "text-[#FFDC8A]" : "text-[#fdb100]"} font-body font-bold text-[16px] hover:text-[#FFDC8A]`}>{item.text}</Link>
                  </div>
                </>
              )
            })}

            <div className='flex w-full justify-center items-center'>
              <Image src={restaurantDrawing} width={215} className='opacity-30  h-[200px] w-full'/>
            </div>
          </div>
          <button onClick={handleSidebar} className='absolute top-5 p-[0.5em] right-5'><RiCloseLargeLine size={20} color='#FFFFFF'/></button>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}
