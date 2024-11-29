import AGB from '@/components/links/AGB'
import LinksHeader from '@/components/links/LinksHeader'
import React from 'react'

export default function page() {
  return (
    <>
      <LinksHeader heading={'Allgemeine Geschäftsbedingungen'} subHeading={"Allgemeine Geschäftsbedingungen"}/>
       <AGB />
    </>
   
  )
}
