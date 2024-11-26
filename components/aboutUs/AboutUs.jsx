"use client";

import React from 'react'
import Image from 'next/image'
import WelcomeNote from './WelcomeNote'
import { motion } from 'framer-motion';
import abtUsImg1 from "../../public/assets/welcome-note-1.jpg"
import abtUsImg2 from "../../public/assets/welcome-note-2.jpg"

export default function AboutUs() {

  

  return (
    <>
        <motion.div
            
            className=" py-28 pb-36 bg-[#1b1b1b] flex flex-col lg:flex-row relative">
          
          <div
            className="welcome-note-images flex gap-10">
              
              <motion.div
                initial= {{x: -200}}
                whileInView={{x:0}}
                transition={{duration: 0.75, type: "spring"}} 
                id="welcome-note-img" 
                className="w-full h-[300px] lg:w-[360px] lg:h-[525px] relative">
                  <Image layout='fill' objectPosition='top' objectFit='cover' src={abtUsImg1} className='absolute h-full w-full top-0  '/>
              </motion.div>
              
              <motion.div
                initial= {{x: -400}}
                whileInView={{x:0}}
                transition={{duration: 1, type: "spring"}}  
                id="welcome-note-img-2" 
                className="relative hidden lg:block w-full h-[300px] lg:w-[360px] lg:h-[525px]">
                  <Image layout='fill' objectPosition='center' objectFit='cover' src={abtUsImg2} className='absolute h-full w-full top-0'/>
              </motion.div>
              
              
          </div>

          <WelcomeNote />

          <motion.div id="paint-foog-image" className='absolute hidden lg:block right-10 '>
            <Image decoding="async" color="#FFFFFF" width={212} height={100} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-1.png" alt="Restan" />
          </motion.div>
        </motion.div>
    </>
  )
}
