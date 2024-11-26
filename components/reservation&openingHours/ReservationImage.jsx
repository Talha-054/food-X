"use client"

import React from 'react'
import { motion } from 'framer-motion';

export default function ReservationImage() {

    

  return (
    <>
        <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.5, type:"spring"}}
            id="image" 
            className='absolute md:hidden 2xl:block bg-reservation-img h-[500px] w-[95vw] max-w-[400px] lg:w-[400px] lg:h-[600px] bg-center bg-cover inset-0 m-auto'>
        </motion.div>
    </>
  )
}
