"use client"

import React from 'react'
import { motion } from 'framer-motion';
import reservationImg from "../../public/assets/thaya-0.png"
import Image from 'next/image';

export default function ReservationImage() {

    

  return (
    <>
        <motion.div 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.6, duration: 1, type:"spring"}}
            id="image" 
            className='absolute md:hidden 2xl:block    w-[95vw] max-w-[500px] lg:w-[500px] h-[500px] lg:h-[90%] inset-0 m-auto'>
              <Image alt='reservation page image' layout='fill' objectPosition='center' objectFit='cover' src={reservationImg} className='absolute h-full z-40 w-full top-0'/>
        </motion.div>
    </>
  )
}
