"use client";

import React, { useState } from 'react'

import { usePathname, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'
import Navbar from './Navbar';

import Sidebar from './Sidebar';




export default function Header() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const pathName = usePathname();
  const activeSegment = useSelectedLayoutSegments();

  function toogleSidebar (){
    setSidebarVisible(sidebarVisible => !sidebarVisible)
    console.log(sidebarVisible);
    
  }
  

  return (
    <>
        <header id='navbar' className={`lg:h-auto overflow-hidden z-20 px-[12px] py-[1em] pt-[5px] flex relative justify-center gap-24 items-center ${pathName == "/"? "":"bg-[#1b1b1b]"}`}>
            <Navbar sidebarHandler={toogleSidebar}/>
        </header>

       {sidebarVisible && <Sidebar handleSidebar={toogleSidebar} sidebarStatus={sidebarVisible} activeSegment={activeSegment}/>}
    </>
  )
}
