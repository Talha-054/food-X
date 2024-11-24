import React from 'react'
import HintOfMenuCard from './HintOfMenuCard'
import img1 from "../../public/assets/menu-food-1.png"
import img2 from "../../public/assets/menu-food-2.png"
import img3 from "../../public/assets/menu-food-3.png"

const menuHintData =  {
  heading: "Breakfast",
  src: img1,
  items: [
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},]
}

const menuHintData2 =  {
  heading: "Lunch",
  src: img2,
  items: [
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},]
}

const menuHintData3 =  {
  heading: "Dinner",
  src: img3,
  items: [
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},
  {name: "random-1", priceRange: "$10-$12"},]
}

export default function HintOfMenu() {
  return (
    <>
        <div className='min-h-screen p-[1em] pt-[16em] pb-[7em] flex flex-wrap justify-center gap-48 2xl:gap-12 items-center bg-hint-of-menu-img bg-cover bg-center'>
          <HintOfMenuCard data={menuHintData}/>
          <HintOfMenuCard data={menuHintData2}/>
          <HintOfMenuCard data={menuHintData3}/>
        </div>
    </>
  )
}
