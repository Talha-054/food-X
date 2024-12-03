"use client";

import React from 'react'
import { motion } from 'framer-motion'

const openingTimes = [
    { day: "Montag", timing: "12:00-14:00 & 16:00-21:30" },
    { day: "Dienstag", timing: "12:00-14:00 & 16:00-21:30" },
    { day: "Mittwoch", timing: "12:00-14:00 & 16:00-21:30" },
    { day: "Donnerstag", timing: "12:00-14:00 & 16:00-21:30" },
    { day: "Freitag", timing: "12:00-14:00 & 16:00-21:30" },
    { day: "Samstag", timing: "12:00-14:00 & 16:00-21:30" },
    { day: "Sonntag", timing: "12:00-14:00 & 16:00-21:30" }
  ]

export default function OpeningHours() {
  return (
    <>
        <motion.div 
            initial= {{x:200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{ duration:0.45, delay: 0.15, type:"spring"}}
            id='openingHoours' 
            className=' bg-[#826A45] p-[1em] py-[10em] w-full lg:flex lg:justify-center lg:items-end lg:pr-[5em] lg:flex-col'>
                <h2 className='text-[36px] lg:text-[50px] font-body text-[#FFFFFF] font-semibold mb-8 mt-12'>
                    Öffnungszeiten.
                </h2>
                {openingTimes.map((record, index)=>{
                    return (
                        <React.Fragment key={index}>
                            <div key={record.day} className='flex justify-between mb-4 lg:w-[400px]'>
                                <h3 className='text-[16px] font-body text-[#FFFFFF] font-semibold'>{record.day}</h3>
                                <h3 className='text-[16px]  text-[#FFFFFF] font-semibold'>{record.timing}</h3>
                            </div>
                            {index < 6 && <hr key={index} className='h-[10px] text-[#CCCCCC] lg:w-[400px]'/>} 
                        </React.Fragment>
                    )
                })}
            </motion.div>
    </>
  )
}
