import React from 'react'

export default function Reservation() {
  return (
    <>
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
    </>
  )
}
