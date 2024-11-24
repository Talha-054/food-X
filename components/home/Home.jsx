import React from 'react'
import Hero from './Hero'
import WelcomeNote from './WelcomeNote'
import FoodGallery from './FoodGallery'
import Reservation from './Reservation'
import HintOfMenu from '../menu/HintOfMenu'
import OnlineOrder from '../order/OnlineOrder'


export default function Home() {
  return (
    <>
      <div className=' bg-[#1b1b1b] '>
        <Hero />
        <WelcomeNote />
        <HintOfMenu />
        <FoodGallery />
        <div className='h-[10vh] bg-[#262525]'></div>
        <Reservation />
        <div className='h-[10vh] bg-[#262525]'></div>
        <OnlineOrder />
      </div>
        
    </>
  )
}
