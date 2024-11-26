"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import galleryFood1 from "../../public/assets/gallery-food-1.jpg"
import galleryFood2 from "../../public/assets/gallery-food-2.jpg"
import galleryFood3 from "../../public/assets/gallery-food-3.jpg"


export default function FoodGallery() {
  return (
    <>
        <div className='pt-12 xl:py-20  p-[1em] bg-[#1b1b1b]'>
            <div className='flex justify-center items-center gap-5 mb-2'>
                <Image className='w-[140px] hidden lg:block h-[23px]' width={140} height={23} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/17-2.png" alt="" />
                <h2 className=' text-[20px] font-body text-red-600 font-semibold'>FOOD MENU</h2>
                <Image className='w-[140px] hidden lg:block h-[23px]' width={140} height={23} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/18-2.png"alt="" />
            </div>
            <h2 className='text-center text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-semibold mb-6'>Our Food Gallery</h2>
            <div id="gallery-food-pics" className='flex flex-col lg:flex-row justify-evenly gap-5 items-center'> 
                <motion.div 
                  initial={{y:200, opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.75, type:"spring"}} 
                  id="food-1" 
                  className='relative min-h-[350px] w-full'>
                    <Image src={galleryFood1} className='absolute w-full h-full top-0'/>
                </motion.div>

                <motion.div 
                  initial={{y:200, opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.75, delay:0.1, type:"spring"}} 
                  id="food-2"
                  className='relative min-h-[350px]  w-full'>
                    <Image src={galleryFood2} className='absolute w-full h-full top-0'/>
                </motion.div>

                <motion.div
                  initial={{y:200, opacity:0}}
                  whileInView={{y:0, opacity:1}}
                  transition={{duration:0.75, delay:0.2, type:"spring"}}  
                  id="food-3" 
                  className='relative min-h-[350px]  w-full'>
                    <Image src={galleryFood3} className='absolute w-full h-full top-0'/>
                </motion.div>
            </div>
        </div>
    </>
  )
}
