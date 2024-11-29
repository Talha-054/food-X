"use client";

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import FoodGallery from './FoodGallery';
import EnvironmentGallery from './EnvironmentGallery';

// const foodGallery = [galleryFood1, galleryFood2, galleryFood3];
// const environmentGallery = [thaya4, thaya7, thaya10, thaya2, thaya8, thaya6]

export default function Gallery() {

  console.log("FoodFGl")

  const path = usePathname();
  const isAboutUs = path === "/about-us";
  
  console.log(isAboutUs);
  

  return (
    <>
        <div className='pt-12 xl:py-20  p-[1em] bg-[#1b1b1b]'>
            <div className='flex justify-center items-center gap-5 mb-2'>
                <Image alt="decoration image" className='w-[140px] hidden lg:block h-[23px]' width={140} height={23} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/17-2.png" />
                <h2 className=' text-[20px] font-body text-red-600 font-semibold'>{isAboutUs? "DAS AMBIENTE, DAS WIR BIETEN" : "UNSER SPEISEKARTENANGEBOT"}</h2>            
                <Image alt='decoration image' className=' w-[140px] hidden lg:block h-[23px]' width={140} height={23} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/18-2.png" />
            </div>
            <h2 className='text-center text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-semibold mb-6'>{isAboutUs? "Galerie.":"Unsere Essensgalerie."}</h2>
            <div id="gallery-food-pics" className={`flex flex-col lg:flex-row justify-evenly gap-5 items-center`}>
              {!isAboutUs && <FoodGallery /> }
              {isAboutUs && <EnvironmentGallery />}
            </div>
        </div>
    </>
  )
}
