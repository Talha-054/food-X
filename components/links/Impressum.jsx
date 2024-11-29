import React from 'react'

export default function Impressum() {
  return (
    <>
        <div className=' bg-[#1b1b1b] p-[1em] lg:p-[5em] lg:px-[10em]'>
            <div className='flex flex-col gap-4 mb-8'>
                <h1 className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Restaurant Indische Tandoori</h1>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Inhaber: Poovilingam Lingeswanran</p>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Ratiborer Straße 40</p>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>27578 Bremerhaven</p>
            </div>
            <div className='flex flex-col gap-4 mb-8'>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Tel: +49 (0)471 96 15 79 33</p>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>E-Mail: Info@thaya-restaurant.de</p>
            </div>
            <div className='flex flex-col mb-8 gap-4'>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Umsatzsteuer-Identifikationsnummer: DE 189 278 309</p>
            </div>
            <div className='flex flex-col mb-8 gap-4'>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Inhaltlich verantwortlich: Poovilingam Lingeswaran, Ratiborer Straße 40, 27578 Bremerhaven</p>
            </div>
            <div className='flex flex-col mb-8 gap-4'>
                <p className='text-[#FFFFFF] font-body text-[16px] font-semibold'>Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS) für Verbraucher: https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
        </div>
    </>
  )
}
