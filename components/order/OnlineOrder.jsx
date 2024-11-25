import React from 'react'
import bgImg from '../../public/assets/online-order-main-img.png'
import Image from 'next/image'
import Link from 'next/link'

export default function OnlineOrder() {

  return (
    <>
        <div className='min-h-screen bg-[#1b1b1b] flex justify-center items-center px-[1em] py-[2em] lg:px-[12em] lg:py-[5em]'>
            <div className='h-full lg:min-w-[1000px] p-[1em] md:p-[3em] w-full bg-[#262525] bg-online-order-image bg-contain bg-no-repeat bg-left rounded-[20px] flex flex-col lg:flex-row'>
                <div id="section-1" className='grow  p-[1em]  flex justify-center items-center'>
                    <Image src={bgImg} className=' h-auto w-[100%] sm:w-[415px] md:w-[596px] lg:max-w-[500px]'/>
                </div>
                <div id="section-2" className='grow p-[1em] '>
                  <div className='flex justify-center lg:justify-start items-center mb-6'>
                    <h2 className='text-[#FFFFFF] text-[36px] md:text-[50px] font-body font-bold text-center lg:text-start max-w-[350px] md:max-w-[410px] lg:max-w-[500px]'>Are you Ready to start your online Order?</h2>
                  </div>
                  <div className='flex justify-center lg:justify-start items-center mb-6'>
                    <p className='text-[#CCCCCC] text-[16px] font-body font-medium text-center lg:text-start max-w-[350px] md:max-w-[410px] lg:max-w-[500px]'>
                      Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now 
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center  mb-6'>
                    <Link href="/online-order">
                      <button  className='rounded-full  py-4 bg-[#826A45] w-[175px] text-[#FFFFFF] font-semibold'>Make Order</button>
                    </Link>
                    <Link href="/online-order">
                      <button  className='rounded-full  py-4 bg-[#826A45] w-[175px] text-[#FFFFFF] font-semibold'>Make Order</button>
                    </Link>
                    
                    
                  </div>                  
                </div>
            </div>
        </div>
    </>
  )
}
