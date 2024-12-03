import React from 'react'
import menuImg1 from "../../public/assets/menu/1.jpeg"
import menuImg2 from "../../public/assets/menu/2.jpeg"
import menuImg3 from "../../public/assets/menu/3.jpeg"
import menuImg4 from "../../public/assets/menu/4.jpeg"
import menuImg5 from "../../public/assets/menu/5.jpeg"
import menuImg6 from "../../public/assets/menu/6.jpeg"
import menuImg7 from "../../public/assets/menu/7.jpeg"
import menuImg8 from "../../public/assets/menu/8.jpeg"
import menuImg9 from "../../public/assets/menu/9.jpeg"
import menuImg10 from "../../public/assets/menu/10.jpeg"
import Image from 'next/image'

export default function CompleteMenu() {
  return (
    <>
        <div className='h-full flex justify-center items-center w-full flex-wrap'>
            <div className='m-0 p-0  flex  '>
                <Image quality={0} src={menuImg1} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg2} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg3} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg4} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg5} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg6} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg7} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg8} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg9} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
            <div className='m-0 p-0  flex  '>
                <Image quality={50} src={menuImg10} className='w-full md:w-[50vw] xl:w-[33vw]'/>
            </div>
        </div> 
         
    </>
  )
}
