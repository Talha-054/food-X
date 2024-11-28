"use client";

import React from 'react'
import HintOfMenuCard from './HintOfMenuCard'
import img1 from "../../public/assets/menu-food-1.png"
import img2 from "../../public/assets/menu-food-2.png"
import img3 from "../../public/assets/menu-food-3.png"
import { motion, useInView } from 'framer-motion';
import bgImg from "../../public/assets/menu-hint.jpg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuCard from './MenuCard';


const menuHintData =  [
  {
  heading: "Vegane Spezialitäten",
  src: img1,
  items: [
  {name: "Vegan Dal", priceRange: "12,90 €"},
  {name: "Tofu Matar", priceRange: "12,90 €"},
  {name: "Tofu Kokos", priceRange: "12,90 €"},
  {name: "Tofu Saagwala", priceRange: "12,90 €"},]
},
{
  heading: "Vorspeisen",
  src: img2,
  items: [
  {name: "Mix Pakora", priceRange: "8,50 €"},
  {name: "Gobi Pakora", priceRange: "8,50 €"},
  {name: "Paneer Pakora", priceRange: "8,90 €"},
  {name: "Chicken Pakora", priceRange: "8,90 €"},]
},
{
  heading: "Tandoori Grillgerichte",
  src: img3,
  items: [
  {name: "Tandoori Chicken Tikka", priceRange: "17,00 €"},
  {name: "Tandoori Chicken", priceRange: "17,00 €"},
  {name: "Paneer Tikka", priceRange: "17,00 €"},
  {name: "GrillPlatte", priceRange: "19,90 €"},]
}
]



export default function HintOfMenu() {

  const path = usePathname();
  const isMenu = path === "/menu"

  return (
    <>
        <div className='min-h-screen overflow-hidden p-[1em] pt-[16em] pb-[7em] flex flex-wrap justify-center gap-48 2xl:gap-12 items-center relative'>
          {!isMenu && menuHintData.map((data, index)=>{
            return (
              <>
                <motion.div
                  className='w-full flex  md:w-auto z-10'
                  initial= {{scale: 0.5, opacity: 0}}
                  whileInView={{scale:1, opacity: 1}}
                  transition={{delay: 0.10*index, type:"spring"}}
                  viewport={{margin: "50px"}}
                >
                  <HintOfMenuCard data={data}/>
                </motion.div>
                
              </>
            )
          })}
          {/* {isMenu && <MenuCard />} */}
          <Image layout='fill' objectPosition='center' objectFit='cover' src={bgImg} className='absolute h-full w-full top-0'/>
        </div>
    </>
  )
}
