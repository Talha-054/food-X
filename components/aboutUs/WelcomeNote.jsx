"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';


export default function WelcomeNote() {

  const [isMobile, setIsMobile] = useState(null); 
  const welcomeNoteRef = useRef();

  const { scrollYProgress} = useScroll({
    target: welcomeNoteRef,
    offset: ["0 1", "1 1"]
  })
  console.log(scrollYProgress);
  

  const animate = isMobile?  {} : {
    translateX: '-70px',
    translateY: '60px'
  }
  
  useEffect(()=>{
    setIsMobile(window?.matchMedia("(max-width: 1024px)").matches)
  },[])

  // function screenSize(){
  //   if (window){
  //     return window?.matchMedia("(max-width: 1024px)").matches
  //   }else {
  //     return false
  //   }
  // }

  return (
    <>     
      <motion.div
        ref={welcomeNoteRef}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress
        }}
        animate= {animate} 
        id="welcome-note-text" 
        className= {'lg:p-[5em] p-[1em] max-w-[775px]  lg:bg-[#262525] z-10 '}>
          <h2 className='mb-2 text-[#FFFFFF] font-body text-[20px] font-bold'>ÜBER UNS.</h2>
          <h2 className='text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-semibold'>Wir laden Sie ein.</h2>
          <h2 className='font-body text-[36px] lg:text-[50px] text-[#FFFFFF] font-semibold'>Unser Restaurant zu besuchen.</h2>
          <p className='mb-8 text-[16px] text-[#CCCCCC] font-medium'>
          Wir laden Sie herzlich ein unsere traditionelle nord-indische Küche mit ihren exotischen Zutaten, wie Curry, den vielfältigen Gewürzen und Kräutern, bei klassischer Atmosphäre zu genießen.</p>
          <Link href={"./about-us"}>
            <button type='button' className='w-[175px] h-[55px] bg-[#760124] text-[#FFFFFF] font-semibold'>Entdecken Sie mehr.</button>
          </Link>
      </motion.div>  
    </>
  )
}
