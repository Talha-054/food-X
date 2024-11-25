"use client";

import Link from 'next/link';
import React from 'react'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';


export default function WelcomeNote() {

  const isMobile = window.matchMedia("(max-width: 1024px)").matches
  const welcomeNoteRef = useRef();

  const { scrollYProgress} = useScroll({
    target: welcomeNoteRef,
    offset: ["0 1", "1.1 1"]
  })

  const animate = isMobile?  {} : {
    translateX: '-70px',
    translateY: '60px'
  } 

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
        className= {'lg:p-[5em] p-[1em] max-w-[775px]  lg:bg-[#262525] z-10 lg:translate-y-20 lg:-translate-x-28'}>
          <h2 className='mb-2 text-[#FFFFFF] font-body text-[20px] font-bold'>ABOUT US</h2>
          <h2 className='text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-bold'>We invite You</h2>
          <h2 className='font-body text-[36px] lg:text-[50px] text-[#FFFFFF] font-bold'>To Visit Our Restaurant</h2>
          <p className='mb-6 text-[16px] text-[#CCCCCC] font-normal'>
          A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
          <Link href={"./about-us"}>
            <button type='button' className='w-[175px] h-[55px] bg-[#826a45] text-[#FFFFFF] font-semibold'>Discover More</button>
          </Link>
      </motion.div>  
    </>
  )
}
