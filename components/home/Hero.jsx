import React from 'react'
import Header from '../header/Header'


export default function Hero() {
  return (
    <>
        <div className="h-[75vh] lg:h-[100vh] bg-hero-img bg-center bg-cover relative">
          <Header />
          <div id="hero-modal" className='absolute h-full top-0 w-full bg-black opacity-50 z-10'>
          </div>
        </div>
    </>
  )
}
