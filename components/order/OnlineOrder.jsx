import React from 'react'
import Link from 'next/link'
import OnlineOrderImg from './OnlineOrderImg'

export default function OnlineOrder() {

  return (
    <>
        <div className='min-h-screen bg-[#1b1b1b] flex justify-center items-center px-[1em] py-[2em] lg:px-[12em] lg:py-[5em]'>
            <div className='h-full lg:min-w-[1000px] p-[1em] md:p-[3em] w-full bg-[#262525] bg-online-order-image bg-contain bg-no-repeat bg-left rounded-[20px] flex flex-col lg:flex-row'>
                
                <OnlineOrderImg />

                <div id="section-2" className='grow p-[1em] '>
                  <div className='flex justify-center lg:justify-start items-center mb-6'>
                    <h2 className='text-[#FFFFFF] text-[36px] md:text-[50px] font-body font-bold text-center lg:text-start max-w-[350px] md:max-w-[410px] lg:max-w-[500px]'>Sind Sie bereit, Ihre Online-Bestellung zu beginnen?</h2>
                  </div>
                  <div className='flex justify-center lg:justify-start items-center mb-6'>
                    <p className='text-[#CCCCCC] text-[16px] font-body font-medium text-center lg:text-start max-w-[350px] md:max-w-[410px] lg:max-w-[500px]'>
                    Genießen Sie die authentischen Aromen Indiens in unserem Restaurant. Von aromatischen Currys bis hin zu würzigen Biryanis, jedes Gericht wird mit Leidenschaft und Tradition zubereitet. Ob Sie nun scharfes Street Food oder klassische Wohlfühlspeisen suchen, unsere einladende Atmosphäre sorgt für ein unvergessliches Erlebnis. Kommen Sie zu uns und erleben Sie den Geschmack Indiens wie nie zuvor! 
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center  mb-6'>
                    <Link href="/online-order">
                      <button  className='rounded-full  py-4 bg-[#760124] w-[175px] text-[#FFFFFF] font-semibold'>Make Order</button>
                    </Link>
                    <Link href="/online-order">
                      <button  className='rounded-full  py-4 bg-[#760124] w-[175px] text-[#FFFFFF] font-semibold'>Make Order</button>
                    </Link>
                  </div>                  
                </div>
            </div>
        </div>
    </>
  )
}
