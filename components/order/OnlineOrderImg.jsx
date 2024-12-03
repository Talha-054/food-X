"use client"

import React from 'react'
import bgImg from '../../public/assets/food-images/online-order-main-img.png'
import Image from 'next/image'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';


export default function OnlineOrderImg() {

  const orderImgRef = useRef();

  const { scrollYProgress} = useScroll({
    target: orderImgRef,
    offset: ["0 1", "1.1 1"]
  })

  return (
    <>
        <motion.div 
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress
        }} 
        ref={orderImgRef} 
        id="section-1" 
        className='grow  p-[1em]  flex justify-center items-center'>
            <Image alt='decoration image' src={bgImg} className=' h-auto w-[100%] sm:w-[415px] md:w-[596px] lg:max-w-[500px]'/>
        </motion.div>
    </>
  )
    
}
