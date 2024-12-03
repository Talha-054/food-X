import AboutUs from '@/components/aboutUs/AboutUs'
import HintOfMenu from '@/components/menu/HintOfMenu'
import React from 'react'

export default function page() {
  return (
    <>
        <AboutUs />
        <div className='h-[10vh] bg-[#262525]'></div>
        <HintOfMenu />
    </>
  )
}
