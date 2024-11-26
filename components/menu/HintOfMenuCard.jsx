
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function HintOfMenuCard({data}) {



  return (
    <>
      <div 
        className=' px-[2em] pb-[3em] pt-[7em] w-full min-w-[370px] md:max-w-[370px] rounded-[25px] relative bg-white'>
        <h1 className='text-[#04000B] text-center font-body text-[30px] font-semibold mb-[1em]'>{data.heading}</h1>
        <div className='flex flex-col gap-4 w-full'>
          {data?.items?.map((record)=>{
            return (
              <>
                <div className='flex justify-between relative w-full'>
                  <span className='font-body text-[16px] text-[#666666] font-semibold z-20 bg-white pr-3'>{record.name}</span>
                  <span className='font-body text-[16px] text-[#666666] font-semibold z-20 bg-white pl-3'>{record.priceRange}</span>
                  <div className='absolute inset-0 m-auto w-full border-b-[1px] border-black border-dotted z-10 h-0'></div>
                </div>
              </>
            )
          })}
          <div className='flex justify-center items-center mt-[1em]'>
            <Link href={"/menu"}>
              <button className='rounded-full px-4 py-4 bg-[#826A45] w-[185px] text-[#FFFFFF] font-semibold'>Make Order</button>
            </Link>
            
          </div>
          
        </div>
        <div className="absolute plate-img-box inset-0 mx-auto top-[-35%] h-[235px] w-[235px] bg-white border-[#1b1b1b] border-[15px] rounded-full flex justify-center items-center">
          <Image decoding='async' src={data.src} className='h-[161px] w-[161px] rounded-full z-30'/>
        </div>
      </div>
    </>
  )
}
