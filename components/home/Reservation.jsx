"use client";
import React from 'react'

const openingTimes = [
    { day: "Monday", timing: "8 am - 9 am" },
    { day: "Tuesday", timing: "3 am - 5 am" },
    { day: "Wednesday", timing: "12 am - 1 am" },
    { day: "Thursday", timing: "7 am - 9 am" },
    { day: "Friday", timing: "5 am - 7 am" },
    { day: "Saturday", timing: "10 am - 12 am" },
    { day: "Sunday", timing: "1 am - 2 am" }
  ]

export default function Reservation() {
  return (
    <>
        <div className=' bg-[#1b1b1b] relative flex flex-col lg:flex-row'>
            

            <div className="form w-full p-[1em] pb-[20em] flex flex-col justify-center items-center lg:items-start lg:pb-0 lg:pl-[7em]">
                <div className='flex flex-col w-full lg:w-auto lg:justify-center lg:items-center '>
                    <div className='w-full'>
                        <h2 className='font-body text-[#FFFFFF] text-[36px] lg:text-[50px] mb-8 font-semibold'>Book a table</h2>
                    </div>
                    <div id="phone" className='flex flex-col gap-2 mb-6 w-full'>
                        <label className='text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start'>Phone</label>
                        <input type='number' placeholder='+920312xxxxxx2' className='w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]'/>
                    </div>
                    <div id="person" className='flex flex-col gap-2 mb-6 w-full'>
                        <label className='text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start'>Person</label>
                        <input type='number' placeholder='1 Person' className='w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]'/>
                    </div>
                    <div id="date" className='flex flex-col gap-2 mb-6 w-full'>
                        <label className='text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start'>Date</label>
                        <input type='date' placeholder='date' className='w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]'/>
                    </div>
                    <div id="time" className='flex flex-col gap-2 mb-4 w-full'>
                        <label className='text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start'>Time</label>
                        <input type='time' placeholder='Time' className='w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]'/>
                    </div>
                    <div className='w-full flex justify-start'>
                        <button className='w-[175px] h-[55px] bg-[#826a45] text-[#FFFFFF] font-bold rounded-[5px]'>Book a Table</button>
                    </div>
                </div>
                
            </div>



            <div id="image" className='absolute md:hidden 2xl:block bg-reservation-img h-[500px] w-[95vw] max-w-[400px] lg:w-[400px] lg:h-[600px] bg-center bg-cover inset-0 m-auto'></div>

            <div id='openingHoours' className=' bg-[#826A45] p-[1em] py-[10em] w-full lg:flex lg:justify-center lg:items-end lg:pr-[5em] lg:flex-col'>
                <h2 className='text-[36px] lg:text-[50px] font-body text-[#FFFFFF] font-semibold mb-8 mt-12'>
                    Opening Hours
                </h2>
                {openingTimes.map((record, index)=>{
                    return (
                        <>
                            <div key={record.day} className='flex justify-between mb-4 lg:w-[400px]'>
                                <h3 className='text-[16px] font-body text-[#FFFFFF] font-semibold'>{record.day}</h3>
                                <h3 className='text-[16px] font-body text-[#FFFFFF] font-semibold'>{record.timing}</h3>
                            </div>
                            {index < 6 && <hr key={index} className='h-[10px] text-[#CCCCCC] lg:w-[400px]'/>} 
                        </>
                    )
                })}
            </div>
        </div>
    </>
  )
}
