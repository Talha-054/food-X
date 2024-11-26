import React from 'react'
import Header from '../header/Header'
import heroImg from "../../public/assets/hero.jpg"
import Image from 'next/image'


export default function Hero() {
  return (
    <>
        <div className={`min-h-[100vh] lg:h-[100vh] relative`}>
          <Header />
          <div id="hero-modal" className='absolute h-full top-0 w-full bg-black opacity-50 z-10'>
          </div>
          <Image src={heroImg} className='absolute h-full top-0 w-full' />
        </div>
    </>
  )
}
