import React from 'react'
import Hero from './Hero'
import AboutUs from '../aboutUs/AboutUs'
import FoodGallery from '../foodGallery/Gallery'
import HintOfMenu from '../menu/HintOfMenu'
import OnlineOrder from '../order/OnlineOrder'
import ReservationAndOpeningHrs from '../reservation&openingHours/ReservationAndOpeningHrs'
import Gallery from '../foodGallery/Gallery'
import HeroButtons from './HeroButtons'
import GalleryButton from './GalleryButton'


export default function Home() {
  return (
    <>
      <div className=' bg-[#1b1b1b] '>
        <Hero />
        <HeroButtons />
        <AboutUs />
        <HintOfMenu />
        <Gallery />
        <GalleryButton />
        <div className='h-[10vh] bg-[#262525]'></div>
        <ReservationAndOpeningHrs />
        <div className='h-[10vh] bg-[#262525]'></div>
        <OnlineOrder />
      </div>
        
    </>
  )
}
