"use client";

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Image from 'next/image';
import footerBorderImg from "../../public/assets/footer-border.png"

const aboutUsData = [
    {name: "youtube", logo: <FaYoutube size={15} color='white'/>},
    {name: "facebook", logo: <FaFacebookF size={15} color='white'/>},
    {name: "linkedIn", logo: <FaLinkedinIn size={15} color='white'/>},
    {name: "X", logo: <FaTwitter size={15} color='white'/>},
]
  
  const contactData = [
    {name: "location", text: "1/111 ARF PAC Kamra, Attock PC-43600", icon: <IoLocationSharp size={20} color='white'/>},
    {name: "cell-number", text: "+920311112312", icon: <FaPhone size={20} color='white'/>},
    {name: "email", text: "test@gmail.com", icon: <MdEmail size={20} color='white'/>},
]


export default function FooterDetails() {
  return (
    <>
         <motion.div
         initial={{y:200, opacity:0}}
         whileInView={{y:125, opacity:1}}
         transition={{duration:0.75, type:"spring"}}
          id='container-1' 
          className='bg-[#2e2d2d] flex p-[1em] md:w-[85vw] md:p-[2em] relative lg:translate-y-[30%] z-10'>
            <div className='flex w-full flex-col xl:flex-row xl:justify-evenly justify-start items-start gap-12 '>
              <div className="section-1 w-full flex flex-col md:flex-row md:justify-evenly md:gap-0 gap-10">
                <div className='md:border-r-[1px] border-[F8F9FA] border-opacity-50 md:pr-[1em]'>
                  <h2 className='text-[24px] text-[#FFFFFF] font-body font-semibold'>About Us</h2>
                  <p className='text-[16px] text-[#CCCCCC] font-body font-normal my-8 md:max-w-[220px]'>
                    Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                  </p>
                  <div className='flex gap-2'>
                    {aboutUsData.map((record)=>{
                      return (
                        <>
                          <span className="w-[40px] h-[40px] bg-[#3F3F3F] flex justify-center items-center" key={record.name}>{record.logo}</span>
                        </>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <h2 className='text-[24px] text-[#FFFFFF] font-body font-semibold mb-8'>Explore</h2>
                  <div className='flex flex-col gap-4'>
                    <p className='text-[16px] font-body text-[#CCCCCC]'>About</p>
                    <p className='text-[16px] font-body text-[#CCCCCC]'>Contact</p>
                    <p className='text-[16px] font-body text-[#CCCCCC]'>Career</p>
                    <p className='text-[16px] font-body text-[#CCCCCC]' >Company Profile</p>
                    <p className='text-[16px] font-body text-[#CCCCCC]'>Help Center</p>
                  </div>
                </div>
              </div>


              <div className="section-2 w-full flex flex-col md:flex-row md:justify-evenly md:gap-0 md:pl-[4em] xl:pl-0  gap-10">
                <div>
                  <h2 className='text-[24px] text-[#FFFFFF] font-body font-semibold mb-8'>Contact Info</h2>
                  <div className='flex flex-col gap-6'>
                    {contactData.map((record)=>{
                      return (
                        <>
                        <div className='flex gap-4 justify-start items-center' key={record.name}>
                          <span className='bg-[#826A45] h-[35px] w-[35px] flex justify-center items-center'>{record.icon}</span>
                          <p className='text-[16px] text-[#FFFFFF] font-medium font-body md:max-w-[200px]'>{record.text}</p>
                        </div>
                        </>
                      )
                    })}
                  </div>
                </div>

                <div className=''>
                  <h2 className='text-[24px] text-[#FFFFFF] font-body font-semibold mb-8'>Newsletter</h2>
                  <p className='text-[16px] text-[#CCCCCC] font-body font-normal my-8 max-w-[250px]'>
                    Join our subscribers list to get the latest news and special offers.
                  </p>
                  <label htmlFor='email' className='relative'>
                    <input placeholder='Your Email' className='w-full md:w-[250px] text-[#FFFFFF] font-body px-2 focus:outline-none h-[50px] bg-[#2e2d2d] border-b-[1px] border-[#F8F9FA] border-opacity-50' type="text" name="" id="email" />
                    <span className='h-[50px] w-[50px] bg-[#2e2d2d] z-10 flex justify-center items-center absolute top-0 -translate-y-[30%] right-0'><FaArrowRight color='white' size={15}/></span>
                  </label>
                  
                </div>
              </div>
            </div>

            <div id="footer-top-border" className='absolute hidden xl:block right-0 top-[-7%] w-[85vw] h-[30px] z-20 '>
              <Image src={footerBorderImg} className='absolute w-full h-full'/>
            </div>
          </motion.div>
    </>
  )
}
