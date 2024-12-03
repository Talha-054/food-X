import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function FooterInfo() {
  return (
    <>
      <div className="p-[3em] xl:pb-0 flex flex-col sm:flex-row justify-evenly sm:justify-evenly sm:items-start items-center gap-6 bg-[#1b1b1b]">
        <Link href={"/contact"}>
            <div className="flex flex-col justify-center items-center gap-1">
            <span className="bg-[#760124] p-3 lg:p-4 rounded-full cursor-pointer">
                <MdEmail color="white" fontSize={35} />
            </span>
            <span className="text-[20px] font-semibold font-body text-[white]">
                Email
            </span>
            <span className="text-[16px] text-[#CCCCCC] font-medium font-body">
                info@indische-tandoori.de
            </span>
            </div>
        </Link>
        
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="bg-[#760124] p-3 lg:p-4 rounded-full cursor-pointer">
            <BsFillTelephoneFill color="white" fontSize={35} />
          </span>
          <span className="text-[20px] font-semibold font-body text-[white]">
            Telefon
          </span>
          <span className="text-[16px] text-[#CCCCCC] font-medium font-body">
            +49 (0) 471 96 15 70 33
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="bg-[#760124] p-3 lg:p-4 rounded-full cursor-pointer">
            <FaLocationDot color="white" fontSize={35} />
          </span>
          <span className="text-[20px] font-semibold font-body text-[white]">
            Finde Uns
          </span>
          <span className="text-[16px] text-[#CCCCCC] font-medium font-body">
            Ratiborerstr. 40
          </span>
          <span className="text-[16px] text-[#CCCCCC] font-medium font-body">
            27578 Bremerhaven
          </span>
        </div>
      </div>
    </>
  );
}
