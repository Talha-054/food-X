"use client"

import React from 'react'
import { motion } from 'framer-motion';
import reservationImg from "../../public/assets/reservation-page-img.jpg"
import Image from 'next/image';

export default function ReservationImage() {

    

  return (
    <>
        <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.5, type:"spring"}}
            id="image" 
            className='absolute md:hidden 2xl:block  h-[500px] w-[95vw] max-w-[400px] lg:w-[400px] lg:h-[600px] inset-0 m-auto'>
              <Image layout='fill' objectPosition='center' objectFit='cover' src={reservationImg} className='absolute h-full w-full top-0'/>
        </motion.div>
    </>
  )
}
