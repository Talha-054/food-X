import React from 'react'
import Reservation from './Reservation'
import ReservationImage from './ReservationImage'
import OpeningHours from './OpeningHours'

export default function ReservationAndOpeningHrs() {
  return (
    <>
        <div className=' bg-[#1b1b1b] relative flex flex-col lg:flex-row'>
            <Reservation />
            <ReservationImage />
            <OpeningHours />
        </div>
    </>
  )
}
