"use client";

import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const pathName = usePathname();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) {
        if (sticky) return;
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  function toogleSidebar() {
    setSidebarVisible((sidebarVisible) => !sidebarVisible);
  }

  return (
    <>
      <header
        id="header"
        className={`lg:h-auto ${
          sticky ? "fixed" : ""
        } duration-300 overflow-hidden px-[12px] py-2 pt-[5px] flex  justify-center lg:justify-center gap-12 items-center w-full z-[99] top-0 bg-gradient-to-b from-black to-transparent ${
          pathName == "/"
            ? "fixed "
            : `${sticky? "sticky": "relative"}`
        }`}
      >
        <Navbar sticky={sticky} sidebarHandler={toogleSidebar} />
      </header>

      {<Sidebar handleSidebar={toogleSidebar} sidebarStatus={sidebarVisible} />}
    </>
  );
}
