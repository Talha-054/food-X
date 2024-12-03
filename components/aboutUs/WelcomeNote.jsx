"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';


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

  const path = usePathname()
  
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
          <h2 className='mb-2 text-[#FFFFFF] font-body text-[20px] font-bold'>{path === "/menu"? "SPEISEKARTE":"ÜBER UNS"}.</h2>
          <h2 className='text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-semibold'>{path==="/menu"? "Authentische Aromen " : "Wir laden Sie ein"}.</h2>
          <h2 className='font-body text-[36px] lg:text-[50px] text-[#FFFFFF] font-semibold'>{path==="/menu"? "Indiens mit Leidenschaft und Tradition zubereitet!" :"Unser Restaurant zu besuchen"}.</h2>
          <p className='mb-8 text-[16px] text-[#CCCCCC] font-medium'>
            {path !== "/menu"? "Entdecken Sie eine vielfältige Speisekarte mit authentischen indischen Gerichten, von würzigen Currys bis hin zu aromatischen Tandoori-Spezialitäten – ein Genuss für alle Sinne!" : " Wir laden Sie herzlich ein unsere traditionelle nord-indische Küche mit ihren exotischen Zutaten, wie Curry, den vielfältigen Gewürzen und Kräutern, bei klassischer Atmosphäre zu genießen."}
         </p>
          {path !== "/menu" && <Link href={"./about-us"}>
            <button type='button' className='w-[175px] h-[55px] bg-[#760124] text-[#FFFFFF] font-semibold'>Entdecken Sie mehr.</button>
          </Link>}
      </motion.div>  
    </>
  )
}
