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

export default function OpeningHours() {
  return (
    <>
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
    </>
  )
}
