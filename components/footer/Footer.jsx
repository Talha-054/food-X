

import React from 'react'


import Image from 'next/image';
import restaurantDrawing from "../../public/assets/footer-restaurant.png"
import shopLogo from "../../public/assets/thaya-logo-light.png"
import FooterContactInfo from './FooterIContactInfo';
import FooterDetails from './FooterDetails';




export default function Footer() {
  return (
    <>
        <FooterContactInfo />
        <div id='footer' className=' flex flex-col justify-start items-center bg-[#1b1b1b]'>

         <FooterDetails />

          <div id='shop-logo' className='h-[35h] w-full bg-[#262525] flex justify-between'>
              <Image src={restaurantDrawing} width={215} height={280} className='opacity-30 hidden xl:block'/>
              <div className='p-[1em] h-full flex items-end pr-[10em]'>
                <h1 className='text-[#CCCCCC] text-[18px] font-normal '>&copy;  Copyright 2024 Devineers. All Rights Reserved</h1>
              </div>
          </div>
        </div>
        {/* <Image src={shopLogo} className=' hidden xl:block z-20 h-[100px] w-[100px]  fixed bottom-2 right-2 float-shadow'/> */}
       
    </>
  )
}
