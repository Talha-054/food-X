import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <>
      <div className="py-8 px-2 flex flex-col lg:flex-row  justify-center items-center bg-[#1b1b1b] gap-4 lg:gap-12">
        <Link href={"http://bestellung.indische-tandoori.de"}>
          <div className="flex flex-col justify-center hover:cursor-pointer items-center w-[350px] bg-[#760124] text-white font-body  py-4">
            <span className="flex gap-2 text-xl font-semibold">
              {" "}
              <IoBagHandleSharp />
              Lieferservice
            </span>

            <span>Online bestellen & liefern lassen oder abholen</span>
          </div>
        </Link>

        <Link href={"/reservation"}>
          <div className="flex flex-col justify-center hover:cursor-pointer items-center  w-[350px] bg-[#760124] text-white font-body px-4 py-4">
            <span className="flex gap-2 text-xl font-semibold">
              {" "}
              <BsTelephone />
              Tischreservieren
            </span>

            <span>Jetzt online reservieren oder anrufen</span>
          </div>
        </Link>
      </div>
    </>
  );
}
