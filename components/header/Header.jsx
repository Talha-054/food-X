"use client";

import React, { useEffect, useRef, useState } from 'react'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar';
import Sidebar from './Sidebar';




export default function Header() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const pathName = usePathname();
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",(e)=>{
      if (window.scrollY > 0){
        if (sticky)return;
        setSticky(true)
      }else {
        setSticky(false)
      }
    })
  },[])



  

  function toogleSidebar (){
    setSidebarVisible(sidebarVisible => !sidebarVisible)
    
  }
  

  return (
    <>
        <header  id='header' className={`lg:h-auto ${sticky? "fixed w-full z-50 top-0 bg-gradient-to-b from-black to-transparent": "relative"} duration-300 overflow-hidden z-20 px-[12px] py-2 pt-[5px] flex  justify-center lg:justify-center gap-12 items-center ${pathName == "/"? "":`${sticky? "bg-gradient-to-b from-black to-transparent sticky":"bg-[#1b1b1b]"}`}`}>
            <Navbar  sticky={sticky} sidebarHandler={toogleSidebar}/>
        </header>
       
        {<Sidebar handleSidebar={toogleSidebar} sidebarStatus={sidebarVisible} />}
        
       
    </>
  )
}
