import React from 'react'
import galleryFood1 from "../../public/assets/gallery-food-4.jpg"
import galleryFood2 from "../../public/assets/gallery-food-7.jpg"
import galleryFood3 from "../../public/assets/gallery-food-6.jpg"
import { motion } from 'framer-motion'
import Image from 'next/image'


// const foodGallery = [galleryFood1, galleryFood2, galleryFood3];

export default function FoodGallery() {
  return (
    <>
        <motion.div 
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.75, ease: "easeInOut"}}
            viewport={{amount: "some"}} 
            id="food-1" 
            className='relative min-h-[350px] w-full'>
            <Image alt='food image' layout='fill' objectPosition='center' objectFit='cover' src={galleryFood1} className='absolute w-full h-full top-0'/>
        </motion.div>

        <motion.div 
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.75, delay:0.1, ease: "easeInOut"}}
            viewport={{amount:"some"}} 
            id="food-2"
            className='relative min-h-[350px]  w-full'>
            <Image alt='food image' layout='fill' objectPosition='center' objectFit='cover' src={galleryFood2} className='absolute w-full h-full top-0'/>
        </motion.div>

        <motion.div
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.75, delay:0.2, ease: "easeInOut"}}
            viewport={{amount: "some"}}  
            id="food-3" 
            className='relative min-h-[350px]  w-full'>
            <Image alt='food image' layout='fill' objectPosition='center' objectFit='cover' src={galleryFood3} className='absolute w-full h-full top-0'/>
        </motion.div>


        {/* {foodGallery.map((img)=>{
            return (
                <>
                console.log(img);
                
                <motion.div 
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.75, ease: "easeInOut"}}
                    viewport={{margin: "100px"}} 
                    id="food-1" 
                    className='relative min-h-[350px] w-full'>
                    <Image layout='fill' objectPosition='center' objectFit='cover' src={img} className='absolute w-full h-full top-0'/>
                </motion.div>
                </>
            )
        })} */}
    </>
  )
}
