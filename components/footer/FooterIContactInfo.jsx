import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function FooterInfo() {
  return (
    <>
        <div className='p-[3em] xl:pb-0 flex justify-evenly items-center bg-[#1b1b1b]'>
            <div className='flex flex-col justify-center items-center gap-1'>
                <span className='bg-[#760124] p-3 lg:p-4 rounded-full cursor-pointer'><FaFacebookSquare color='white' fontSize={35}/></span>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
                <span className='bg-[#760124] p-3 lg:p-4 rounded-full cursor-pointer'><FaInstagram color='white' fontSize={35}/></span>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
                <span className='bg-[#760124] p-3 lg:p-4 rounded-full cursor-pointer'><FaYoutube color='white' fontSize={35}/></span>
            </div>
        </div>
    </>
  )
}
