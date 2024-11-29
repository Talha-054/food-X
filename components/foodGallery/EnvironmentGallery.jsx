import React from 'react'
import thaya0 from "../../public/assets/thaya-0.png"
import thaya1 from "../../public/assets/thaya-1.png"
import thaya2 from "../../public/assets/thaya-2.png"
import thaya3 from "../../public/assets/thaya-3.png"
import thaya4 from "../../public/assets/thaya-4.png"
import thaya5 from "../../public/assets/thaya-5.png"
import thaya6 from "../../public/assets/thaya-6.png"
import thaya7 from "../../public/assets/thaya-7.png"
import thaya8 from "../../public/assets/thaya-8.png"
import thaya9 from "../../public/assets/thaya-9.png"
import thaya10 from "../../public/assets/thaya-10.png"
import Image from 'next/image'
import { motion } from 'framer-motion'


// const environmentGallery = [thaya4, thaya7, thaya10, thaya2, thaya8, thaya6]


export default function EnvironmentGallery() {
  return (
    <>
        <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.75, type:"spring"}}
            viewport={{margin: "100px"}} 
            id="food-1" 
            className='relative min-h-[350px] w-full'>
            <Image alt='restaurant image' layout='fill' objectPosition='center' objectFit='cover' src={thaya4} className='absolute w-full h-full top-0'/>
        </motion.div>

        <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.75, delay:0.1, type:"spring"}}
            viewport={{margin: "100px"}} 
            id="food-2"
            className='relative min-h-[350px]  w-full'>
            <Image alt='restaurant image' layout='fill' objectPosition='center' objectFit='cover' src={thaya7} className='absolute w-full h-full top-0'/>
        </motion.div>

        <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.75, delay:0.2, type:"spring"}}
            viewport={{margin: "50px"}}  
            id="food-3" 
            className='relative min-h-[350px]  w-full'>
            <Image alt='restaurant image' layout='fill' objectPosition='center' objectFit='cover' src={thaya10} className='absolute w-full h-full top-0'/>
        </motion.div> 

        {/* {
            environmentGallery.map((img)=>{
                <motion.div 
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.75, type:"spring"}}
                    viewport={{margin: "100px"}} 
                    id="food-1" 
                    className='relative min-h-[350px] w-full'>
                    <Image layout='fill' objectPosition='center' objectFit='cover' src={img} className='absolute w-full h-full top-0'/>
                </motion.div>
            })
        } */}
    </>
  )
}
