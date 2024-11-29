import LinksHeader from '@/components/links/LinksHeader'
import Zahlungsarten from '@/components/links/Zahlungsarten'
import React from 'react'

export default function page() {
  return (
    <>
        <LinksHeader heading={"ZAHLUNGSWEISEN"} subHeading={'Zahlungsweisen'}/>
        <Zahlungsarten />
    </>
  )
}
