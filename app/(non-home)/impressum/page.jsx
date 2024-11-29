
import Impressum from '@/components/links/Impressum'
import LinksHeader from '@/components/links/LinksHeader'
import React from 'react'

export default function page() {
  return (
    <>
      <LinksHeader heading={'impressum'} subHeading ={'impressum'}/>
      <Impressum />
    </>
  )
}
