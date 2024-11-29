import Datenschutz from '@/components/links/Datenschutz'
import LinksHeader from '@/components/links/LinksHeader'
import React from 'react'

export default function page() {
  return (
    <>
        <LinksHeader heading={'Datenschutz'} subHeading={'datenschutz'}/>
        <Datenschutz />
    </>
    
  )
}
