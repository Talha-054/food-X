"use client"

import React from 'react'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ReservationImage() {

    const imgRef = useRef();

    const { scrollYProgress} = useScroll({
        target: imgRef,
        offset: ["0 1", "1 1"]

    })

  return (
    <>
        <motion.div 
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
                }} 
            ref={imgRef} id="image" 
            className='absolute md:hidden 2xl:block bg-reservation-img h-[500px] w-[95vw] max-w-[400px] lg:w-[400px] lg:h-[600px] bg-center bg-cover inset-0 m-auto'>
        </motion.div>
    </>
  )
}
