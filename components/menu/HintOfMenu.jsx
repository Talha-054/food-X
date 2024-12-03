"use client";

import React from "react";
import HintOfMenuCard from "./HintOfMenuCard";
import img1 from "../../public/assets/food-images/vege-pic.png";
import img2 from "../../public/assets/food-images/samosa.png";
import img3 from "../../public/assets/food-images/tikka.png";
import { motion, useInView } from "framer-motion";
import bgImg from "../../public/assets/decoration/pattern.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuCard from "./MenuCard";
import CompleteMenu from "./CompleteMenu";
import DownloadMenu from "./DownloadMenu";

const menuHintData = [
  {
    heading: "Vegane Spezialitäten",
    src: img1,
    items: [
      { name: "Vegan Dal", priceRange: "12,90 €" },
      { name: "Tofu Matar", priceRange: "12,90 €" },
      { name: "Tofu Kokos", priceRange: "12,90 €" },
      { name: "Tofu Saagwala", priceRange: "12,90 €" },
    ],
  },
  {
    heading: "Vorspeisen",
    src: img2,
    items: [
      { name: "Mix Pakora", priceRange: "8,50 €" },
      { name: "Gobi Pakora", priceRange: "8,50 €" },
      { name: "Paneer Pakora", priceRange: "8,90 €" },
      { name: "Chicken Pakora", priceRange: "8,90 €" },
    ],
  },
  {
    heading: "Tandoori",
    src: img3,
    items: [
      { name: "Tandoori Chicken Tikka", priceRange: "17,00 €" },
      { name: "Tandoori Chicken", priceRange: "17,00 €" },
      { name: "Paneer Tikka", priceRange: "17,00 €" },
      { name: "GrillPlatte", priceRange: "19,90 €" },
    ],
  },
];

export default function HintOfMenu() {
  const path = usePathname();
  const isMenu = path === "/menu";

  return (
    <>
      <div
        className={` overflow-hidden ${
          isMenu ? "" : "pt-[20em]  p-[1em]"
        }  pb-[7em] flex flex-wrap justify-center gap-48 2xl:gap-12 items-center relative`}
      >
        {!isMenu &&
          menuHintData.map((data, index) => {
            return (
              <motion.div
                key={index}
                className="w-full flex  md:w-auto z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index, type: "spring" }}
                viewport={{ margin: "50px" }}
              >
                <HintOfMenuCard data={data} />
              </motion.div>
            );
          })}
        {isMenu && <CompleteMenu />}
        {isMenu && <DownloadMenu />}
        {/* {!isMenu && (
          <Image
          style={{backgroundImage: "url('assets/pattern.png')", backgroundRepeat: "repeat", backgroundSize: "cover", opacity:0}}
            alt="menu background image"
            quality={100}
            fill={true}
            objectFit="contain"
            className="absolute  top-0"
            src={bgImg}
          />
          
        )} */}
        {!isMenu && (
          <div
            style={{
              backgroundImage: "url('assets/decoration/pattern.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "contain",
            }}
            className="absolute h-full w-full top-0 left-0 "
          />
        )}

        <div className="flex justify-center items-center gap-5 mb-2 absolute top-0 py-[3em]">
          <Image
            style={{ filter: "hue-rotate(56deg) contrast(0.7)" }}
            alt="decoration image"
            className="w-[140px]  hidden lg:block h-[23px]"
            width={140}
            height={23}
            src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/17-2.png"
          />
          <h2 className=" text-[20px] font-body text-[#fdb100] font-semibold">
            {"Ein Hauch von Genuss"}
          </h2>
          <Image
            style={{ filter: "hue-rotate(56deg) contrast(0.7)" }}
            alt="decoration image"
            className=" w-[140px] hidden lg:block h-[23px]"
            width={140}
            height={23}
            src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/18-2.png"
          />
        </div>
      </div>
    </>
  );
}
