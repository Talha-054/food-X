import React from "react";
import { IoMdDownload } from "react-icons/io";

export default function DownloadMenu() {
  return (
    <>
      <div className="pt-8 px-2 flex flex-col lg:flex-row  justify-center items-center bg-[#1b1b1b] gap-4 lg:gap-12">
        <a href={"/menu.pdf"}  download>
          <div className="flex  justify-center hover:cursor-pointer items-center gap-4  bg-[#760124] text-[#FFFFFF] font-body px-8 py-4">
            <span><IoMdDownload color="white" size={25}/></span>
            <span>Download Menu</span>
          </div>
        </a>
      </div>
    </>
  );
}
