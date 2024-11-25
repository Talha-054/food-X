import React from 'react'
import Image from 'next/image'
export default function FoodGallery() {
  return (
    <>
        <div className='pt-12 xl:py-20  p-[1em] bg-[#1b1b1b]'>
            <div className='flex justify-center items-center gap-5 mb-2'>
                <Image className='w-[140px] hidden lg:block h-[23px]' width={140} height={23} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/17-2.png" alt="" />
                <h2 className=' text-[20px] font-body text-red-600 font-semibold'>FOOD MENU</h2>
                <Image className='w-[140px] hidden lg:block h-[23px]' width={140} height={23} src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/18-2.png"alt="" />
            </div>
            <h2 className='text-center text-[36px] lg:text-[50px] text-[#FFFFFF] font-body font-semibold mb-6'>Our Food Gallery</h2>
            <div id="gallery-food-pics" className='flex flex-col lg:flex-row justify-evenly gap-5 items-center'> 
                <div id="food-1" className='bg-gallery-food-1 bg-cover bg-center min-h-[350px] w-full'></div>
                <div id="food-2" className='bg-gallery-food-2 bg-cover bg-center min-h-[350px]  w-full'></div>
                <div id="food-3" className='bg-gallery-food-3 bg-cover bg-center min-h-[350px]  w-full'></div>
            </div>
        </div>
    </>
  )
}
