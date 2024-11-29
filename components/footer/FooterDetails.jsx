"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import footerBorderImg from "../../public/assets/footer-border.png";
import Link from "next/link";

const aboutUsData = [
  { name: "youtube", logo: <FaYoutube size={15} color="white" /> },
  { name: "facebook", logo: <FaFacebookF size={15} color="white" /> },
  { name: "linkedIn", logo: <FaLinkedinIn size={15} color="white" /> },
  { name: "X", logo: <FaTwitter size={15} color="white" /> },
];

// contact info

const contactData = [
  {
    name: "location",
    text: "Ratiborerstr. 4027578 Bremerhaven",
    icon: <IoLocationSharp size={20} color="white" />,
  },
  {
    name: "cell-number",
    text: "+49(0)47196157933",
    icon: <FaPhone size={20} color="white" />,
  },
  {
    name: "email",
    text: "info(at)thaya-restaurant.de",
    icon: <MdEmail size={20} color="white" />,
  },
];

export default function FooterDetails() {
  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 125, opacity: 1 }}
        transition={{ duration: 0.75, type: "spring" }}
        id="container-1"
        className="bg-[#2e2d2d] flex p-[1em] md:w-[85vw] md:p-[2em] relative lg:translate-y-[30%] z-10"
      >
        <div className="flex w-full flex-col xl:flex-row xl:justify-evenly justify-start items-start gap-12 xl:gap-0 ">
          <div className="section-1 w-full flex flex-col md:flex-row md:justify-evenly md:gap-0 gap-10">
            <div className="md:border-r-[1px] border-[F8F9FA] border-opacity-50 md:pr-[1em]">
              <h2 className="text-[24px] text-[#FFFFFF] font-body font-semibold">
                Über uns
              </h2>
              <p className="text-[16px] text-[#CCCCCC] font-body font-normal my-8 md:max-w-[220px]">
                Von der Vorspeise bis zum Dessert – lassen Sie sich von der
                Vielfalt der indischen Küche und ihren einzigartigen Gewürzen
                verzaubern.
              </p>
              <div className="flex gap-2">
                {aboutUsData.map((record, index) => {
                  return (
                    <span
                      className="w-[40px] h-[40px] bg-[#3F3F3F] flex justify-center items-center"
                      key={record.name}
                    >
                      {record.logo}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-[24px] text-[#FFFFFF] font-body font-semibold mb-8">
                Entdecken Sie
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-body text-[#CCCCCC] cursor-pointer">
                  Über uns
                </p>
                <p className="text-[16px] font-body text-[#CCCCCC]  cursor-pointer">
                  Kontakt
                </p>
                <p className="text-[16px] font-body text-[#CCCCCC]  cursor-pointer">
                  Speisekarte
                </p>
                <p className="text-[16px] font-body text-[#CCCCCC]  cursor-pointer">
                  Galerie
                </p>
                <p className="text-[16px] font-body text-[#CCCCCC]  cursor-pointer">
                  Reservierung
                </p>
              </div>
            </div>
          </div>

          <div className="section-2 w-full flex flex-col md:flex-row md:justify-evenly md:gap-0 md:pl-[4em] xl:pl-0  gap-10">
            <div>
              <h2 className="text-[24px] text-[#FFFFFF] font-body font-semibold mb-8">
                Kontaktinformationen.
              </h2>
              <div className="flex flex-col gap-6">
                {contactData.map((record) => {
                  return (
                    <div
                      className="flex gap-4 justify-start items-center"
                      key={record.name}
                    >
                      <span className="bg-[#760124] h-[35px] w-[35px] flex justify-center items-center">
                        {record.icon}
                      </span>
                      <p className="text-[16px] text-[#FFFFFF] font-medium font-body md:max-w-[200px]">
                        {record.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="">
              <Link href={"/impressum"}>
                <h2 className="text-[24px] text-[#FFFFFF] font-body font-semibold mb-8 hover:cursor-pointer">
                  Impressum
                </h2>
              </Link>

              <div className="flex flex-col  gap-2">
                <Link href={"/AGB"}>
                  <p className="text-[16px] text-[#CCCCCC] font-body font-medium hover:cursor-pointer">
                    AGB
                  </p>
                </Link>
                <Link href={"/datenschutz"}>
                  <p className="text-[16px] text-[#CCCCCC] font-body font-medium hover:cursor-pointer">
                    Datenschutz
                  </p>
                </Link>
                <Link href={"/zahlungsweisen"}>
                  <p className="text-[16px] text-[#CCCCCC] font-body font-medium hover:cursor-pointer">
                    Zahlungsweisen
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="footer-top-border"
          className="absolute hidden xl:block right-0 top-[-7%] w-[85vw] h-[30px] z-20 "
        >
          <Image
            alt="footer background image"
            src={footerBorderImg}
            className="absolute w-full h-full"
          />
        </div>
      </motion.div>
    </>
  );
}
