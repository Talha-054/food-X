import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FooterInfo() {
  return (
    <>
        <div className='p-[3em] xl:pb-0 flex justify-evenly items-center bg-[#1b1b1b]'>
            <div className='flex flex-col justify-center items-center gap-1'>
                <span className='bg-[#826A45] p-4 rounded-full'><FaPhone color='white' fontSize={35}/></span>
                <h3 className='text-[#FFFFFF] text-[16px] font-medium'>Hotline</h3>
                <h3 className='text-[#FFFFFF] text-[12px] font-normal'>+49723658349</h3>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
                <span className='bg-[#826A45] p-4 rounded-full'><FaMapMarkedAlt color='white' fontSize={35}/></span>
                <h3 className='text-[#FFFFFF] text-[16px] font-medium'>Our Location</h3>
                <h3 className='text-[#FFFFFF] text-[12px] font-light'>+49723658349</h3>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
                <span className='bg-[#826A45] p-4 rounded-full'><MdEmail color='white' fontSize={35}/></span>
                <h3 className='text-[#FFFFFF] text-[14px] font-medium'>Official Email</h3>
                <h3 className='text-[#FFFFFF] text-[12px] font-normal'>test@gmail.com</h3>
            </div>
        </div>
    </>
  )
}
