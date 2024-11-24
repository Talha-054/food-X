import React from 'react'
import Image from 'next/image'

export default function WelcomeNote() {
  return (
    <>
        <div className=" py-28 pb-36 bg-[#1b1b1b] flex flex-col lg:flex-row relative">
          
          <div className="welcome-note-images flex gap-10">
              <div id="welcome-note-img" className="bg-welcome-note-1 bg-top bg-cover w-full h-[300px] lg:w-[360px] lg:h-[525px]"></div>
              <div id="welcome-note-img-2" className="bg-welcome-note-2 hidden lg:block bg-top bg-cover w-full h-[300px] lg:w-[360px] lg:h-[525px]"></div>
          </div>
           
          <div id="welcome-note-text" className= 'lg:p-[5em] p-[1em] max-w-[775px]  lg:bg-[#262525] lg:translate-y-20 lg:-translate-x-28 z-10'>
              <h2 className='mb-2 text-[#FFFFFF] font-body text-[20px] font-bold'>ABOUT US</h2>
              <h2 className='text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-bold'>We invite You</h2>
              <h2 className='font-body text-[36px] lg:text-[50px] text-[#FFFFFF] font-bold'>To Visit Our Restaurant</h2>
              <p className='mb-6 text-[16px] text-[#CCCCCC] font-normal'>
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
              <button className='w-[175px] h-[55px] bg-[#826a45] text-[#FFFFFF] font-semibold'>Discover More</button>
          </div>

          <div id="paint-foog-image" className='absolute hidden lg:block right-10 '>
            <Image decoding="async" color="#FFFFFF" width={212} height={100} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-1.png" alt="Restan" />
          </div>
        </div>
    </>
  )
}
