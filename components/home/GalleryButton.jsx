import React from "react";
import Link from "next/link";

export default function GalleryButton() {
  return (
    <>
      <div className="py-8 px-2 flex justify-center items-center bg-[#1b1b1b] gap-4 ">
        <Link href={"/gallery"}>
          <div className="flex items-center justify-center hover:cursor-pointer  w-[350px] bg-[#760124] text-white font-body  py-4">
            <span className=" text-xl font-semibold">
              {" "}
              Weiter zu Galerie
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
