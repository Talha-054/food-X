import React from 'react'
import galleryFood1 from "../../public/assets/gallery-food-4.jpg"
import Image from 'next/image'


export default function MenuCard() {
  return (
    <>
        <div className='flex justify-center items-center flex-col md:flex-row p-[1em] gap-24 w-full z-10 bg-[#1b1b1b]'>

            <div className='grow  min-h-[500px] min-w-[400px] flex justify-center p-[2em]  px-[5em] items-center  relative'>
               <Image alt="menu page image" src={galleryFood1} layout='fill' objectFit='cover' objectPosition='center' className='absolute w-full'/>
            </div>

            <div className='grow h-full w-full md:min-w-[410px]  flex p-[1em] justify-center items-center gap-6 flex-col '>

                <section id='item card' className='flex justify-end gap-2 w-full mb-4'>
                    <p className='text-[#CCCCCC] font-body text-[16px] p-1 px-2 border-[1px] border-[#CCCCCC] font-semibold'>Half</p>
                    <p className='text-[#CCCCCC] font-body text-[16px] p-1 px-2 border-[1px] border-[#CCCCCC] font-semibold'>Full</p>
                </section>
                
                <section className='flex justify-start w-full gap-4 items-center'>
                    
                    <div id="image-circle" className='h-20 w-20 relative'>
                        <Image alt='food image' src={galleryFood1} layout='fill' objectFit='cover' objectPosition='center' className='absolute rounded-full'/>
                    </div>
                    <div id='menu-content' className='grow flex flex-col justify-around  h-16'>
                        <div id='content-1' className='flex justify-between items-center'>
                            <p className='font-body text-[#FFFFFF] font-semibold text-[20px]'>Chicken Alfredo</p>
                            <div id="price" className='flex justify-center items-center gap-3 pr-2'>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                            </div>
                        </div>
                        <div id='content-2' className='flex justify-between items-center'>
                            <p className='text-[#CCCCCC] text-[16px] font-body'>description</p>
                            <div id="price" className='flex justify-start items-center gap-2'>
                                <p className='text-[#CCCCCC] text-[16px] font-body'>Extra Free Juice</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex justify-start w-full gap-4 items-center'>
                    
                    <div id="image-circle" className='h-20 w-20 relative'>
                        <Image alt='food image' src={galleryFood1} layout='fill' objectFit='cover' objectPosition='center' className='absolute rounded-full'/>
                    </div>
                    <div id='menu-content' className='grow flex flex-col justify-around  h-16'>
                        <div id='content-1' className='flex justify-between items-center'>
                            <p className='font-body text-[#FFFFFF] font-semibold text-[20px]'>Chicken Alfredo</p>
                            <div id="price" className='flex justify-center items-center gap-3 pr-2'>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                            </div>
                        </div>
                        <div id='content-2' className='flex justify-between items-center'>
                            <p className='text-[#CCCCCC] text-[16px] font-body'>description</p>
                            <div id="price" className='flex justify-start items-center gap-2'>
                                <p className='text-[#CCCCCC] text-[16px] font-body'>Extra Free Juice</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex justify-start w-full gap-4 items-center'>
                    
                    <div id="image-circle" className='h-20 w-20 relative'>
                        <Image alt='food image' src={galleryFood1} layout='fill' objectFit='cover' objectPosition='center' className='absolute rounded-full'/>
                    </div>
                    <div id='menu-content' className='grow flex flex-col justify-around  h-16'>
                        <div id='content-1' className='flex justify-between items-center'>
                            <p className='font-body text-[#FFFFFF] font-semibold text-[20px]'>Chicken Alfredo</p>
                            <div id="price" className='flex justify-center items-center gap-3 pr-2'>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                            </div>
                        </div>
                        <div id='content-2' className='flex justify-between items-center'>
                            <p className='text-[#CCCCCC] text-[16px] font-body'>description</p>
                            <div id="price" className='flex justify-start items-center gap-2'>
                                <p className='text-[#CCCCCC] text-[16px] font-body'>Extra Free Juice</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex justify-start w-full gap-4 items-center'>
                    
                    <div id="image-circle" className='h-20 w-20 relative'>
                        <Image alt='food image' src={galleryFood1} layout='fill' objectFit='cover' objectPosition='center' className='absolute rounded-full'/>
                    </div>
                    <div id='menu-content' className='grow flex flex-col justify-around  h-16'>
                        <div id='content-1' className='flex justify-between items-center'>
                            <p className='font-body text-[#FFFFFF] font-semibold text-[20px]'>Chicken Alfredo</p>
                            <div id="price" className='flex justify-center items-center gap-3 pr-2'>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                                <p className='text-[#826A45] text-[20px] font-bold'>$00</p>
                            </div>
                        </div>
                        <div id='content-2' className='flex justify-between items-center'>
                            <p className='text-[#CCCCCC] text-[16px] font-body'>description</p>
                            <div id="price" className='flex justify-start items-center gap-2'>
                                <p className='text-[#CCCCCC] text-[16px] font-body'>Extra Free Juice</p>
                            </div>
                        </div>
                    </div>
                </section>

                

                

                

                

            </div>

        </div>
    </>
  )
}
