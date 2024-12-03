import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="bg-[#1b1b1b]  flex flex-col p-[1em] lg:p-[8em] 2xl:p-[13em] justify-start items-center gap-16">
        <div className="heading w-full flex-col gap-2 flex justify-center items-center mb-8">
          <h1 className="text-[34px] font-body font-bold text-center text-[#fdb100]">
            Sie haben noch Fragen?
          </h1>
          <p className="text-[20px] font-medium font-body text-[#fdb100] px-2 py-1 border-b-[1px] border-[#fdb100]">
            SCHREIBEN SIE UNS
          </p>
        </div>

        <div className="flex gap-12 w-full flex-col lg:flex-row">
          <input
            type="text"
            className="grow text-[#FFFFFF] h-[65px] px-2 py-1 bg-transparent border-[1px] focus:outline-[#CCCCCC]   border-[#CCCCCC]"
            placeholder="Vorname*"
          />
          <input
            type="text"
            className="grow text-[#FFFFFF] h-[65px] px-2 py-1 bg-transparent border-[1px] focus:outline-[#CCCCCC]  focus:border-[2px] border-[#CCCCCC]"
            placeholder="Nachname*"
          />
        </div>
        <div className="flex w-full gap-12 flex-col lg:flex-row">
          <input
            type="text"
            className="grow text-[#FFFFFF] h-[65px] px-2 py-1 bg-transparent border-[1px] focus:outline-[#CCCCCC]  focus:border-[2px] border-[#CCCCCC]"
            placeholder="Email*"
          />
          <input
            type="text"
            className="grow text-[#FFFFFF] h-[65px] px-2 py-1 bg-transparent border-[1px] focus:outline-[#CCCCCC]  focus:border-[2px] border-[#CCCCCC]"
            placeholder="Telefon*"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="w-full text-[#FFFFFF] h-[65px] px-2 py-1 bg-transparent border-[1px] focus:outline-[#CCCCCC]  focus:border-[2px] border-[#CCCCCC]"
            placeholder="Betreff"
          />
        </div>
        <div className="w-full">
          <textarea
            className="w-full text-[#FFFFFF] min-h-[165px] h-auto px-2 py-1 bg-transparent border-[1px] focus:outline-[#CCCCCC]  focus:border-[2px] border-[#CCCCCC]"
            placeholder="Nachricht*"
          ></textarea>
        </div>
        <div className="w-full">
          <button className="w-full h-[50px] bg-[#760124] text-[#FFFFFF] text-[20px] font-body">
            SENDEN
          </button>
        </div>
      </div>
    </>
  );
}
