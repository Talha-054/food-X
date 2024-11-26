"use client";

import React from 'react'
import HintOfMenuCard from './HintOfMenuCard'
import img1 from "../../public/assets/menu-food-1.png"
import img2 from "../../public/assets/menu-food-2.png"
import img3 from "../../public/assets/menu-food-3.png"
import { motion, useInView } from 'framer-motion';
import bgImg from "../../public/assets/menu-hint.jpg"
import Image from 'next/image';


const menuHintData =  [
  {
  heading: "Breakfast",
  src: img1,
  items: [
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},]
},
{
  heading: "Lunch",
  src: img2,
  items: [
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},]
},
{
  heading: "Dinner",
  src: img3,
  items: [
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},]
}
]



export default function HintOfMenu() {



  return (
    <>
        <div className='min-h-screen overflow-hidden p-[1em] pt-[16em] pb-[7em] flex flex-wrap justify-center gap-48 2xl:gap-12 items-center relative'>
          {menuHintData.map((data, index)=>{
            return (
              <>
                <motion.div
                  className='w-full flex  md:w-auto z-10'
                  initial= {{scale: 0.5, opacity: 0}}
                  whileInView={{scale:1, opacity: 1}}
                  transition={{delay: 0.10*index, type:"spring"}}
                >
                  <HintOfMenuCard data={data}/>
                </motion.div>
                
              </>
            )
          })}
          <Image layout='fill' objectPosition='center' objectFit='cover' src={bgImg} className='absolute h-full w-full top-0'/>
        </div>
    </>
  )
}
