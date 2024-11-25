import React from 'react'
import Image from 'next/image'
import WelcomeNote from './WelcomeNote'

export default function AboutUs() {
  return (
    <>
        <div
            className=" py-28 pb-36 bg-[#1b1b1b] flex flex-col lg:flex-row relative">
          
          <div className="welcome-note-images flex gap-10">
              <div id="welcome-note-img" className="bg-welcome-note-1 bg-top bg-cover w-full h-[300px] lg:w-[360px] lg:h-[525px]"></div>
              <div id="welcome-note-img-2" className="bg-welcome-note-2 hidden lg:block bg-top bg-cover w-full h-[300px] lg:w-[360px] lg:h-[525px]"></div>
          </div>

          <WelcomeNote />

          <div id="paint-foog-image" className='absolute hidden lg:block right-10 '>
            <Image decoding="async" color="#FFFFFF" width={212} height={100} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-1.png" alt="Restan" />
          </div>
        </div>
    </>
  )
}
