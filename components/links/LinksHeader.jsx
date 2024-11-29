import Image from 'next/image'
import React from 'react'
import bgImg from "../../public/assets/bg-impressum.jpg"

export default function LinksHeader({heading, subHeading}) {
  return (
    <>
        <div className='w-full relative h-[300px] flex-col flex justify-center items-center'>
            <Image src={bgImg} layout='fill' objectFit='cover' objectPosition='center'/>
            <h1 className='text-[#FFFFFF] text-[18px] md:text-[26px] lg:text-[40px] font-body font-bold z-10'>{heading}</h1>
            <p className='text-[#FFFFFF] text-[12px] lg:text-[16px] font-normal font-body z-10'>Startseite/ {subHeading}</p>
        </div>
    </>
  )
}
