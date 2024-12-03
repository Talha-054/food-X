"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { sendEmail } from "utils/api-calls";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Reservation() {
  const [phoneNo, setPhoneNo] = useState();
  const [persons, setPersons] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [calender, setCalender] = useState(false)
  //   const [errorMsg, setErrorMsg] = useState({
  //     name: [],
  //     message: {
  //         phone: "",
  //         person: "",
  //         date: "",
  //         time: ""
  //     }
  //   })

  const [isPhoneNoValid, setIsPhoneNoValid] = useState(false);
  const [isPersonsValid, setIsPersonsValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (!isPersonsValid || !isPhoneNoValid || !isDateValid || !isTimeValid) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [isPhoneNoValid, isPersonsValid, isDateValid, isTimeValid]);

  useEffect(()=>{
    console.log(date);
    
  },[date])

  function handlePhone(e) {
    if (e.target.value.length <= 0) {
      setIsPhoneNoValid(false);
    }
    setPhoneNo(e.target.value);
    const validPattern = new RegExp("[+][49][0-9]{10}");
    validPattern.test(e.target.value)
      ? setIsPhoneNoValid(true)
      : setIsPhoneNoValid(false);
  }

  function handlePersons(e) {
    if (e.target.value.length <= 0) {
      setIsPersonsValid(false);
    }
    setPersons(e.target.value);
    const validPattern = new RegExp("[1-9]{1,}");
    validPattern.test(e.target.value)
      ? setIsPersonsValid(true)
      : setIsPersonsValid(false);
  }

  function handleDate(value,event) {
    console.log(value);
    console.log("func fired");
    
    
    if (value.length <= 0) {
      setIsDateValid(false);
    }
    setDate(value);
    const validPattern = new RegExp("[0-9]{3}[/][0-9]{3}[/][0-9]{2,5}");
    validPattern.test(value)
      ? setIsDateValid(true)
      : setIsDateValid(false);
    setIsDateValid(true);
    console.log(value);
    console.log(validPattern.test(value));
  }

  function handleTime(e) {
    if (e.target.value.length <= 0) {
      setIsTimeValid(false);
    }
    setTime(e.target.value);
    const validPattern = new RegExp("[0-9]{3}[:][0-9]{3}");
    validPattern.test(e.target.value)
      ? setIsTimeValid(true)
      : setIsTimeValid(false);
    setIsTimeValid(true);
    console.log(validPattern.test(e.target.value));
  }

  const handleFormSubmission = async () => {
    if (!formValid) return;

    const dataToSend = {
      phoneNo: phoneNo,
      persons: persons,
      date: date,
      time: time,
    };

    const data = await sendEmail({
      name: "Talha",
      message: "check",
      email: "talha.fullstackdev@gmail.com",
    });
    // const data = {
    //     phoneNo : phoneNo,
    //     persons : persons,
    //     date : date,
    //     time : time
    // }
  };

  return (
    <>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.15, type: "spring" }}
        className="form w-full p-[1em] pb-[20em] flex flex-col justify-center items-center lg:items-start lg:pb-0 lg:pl-[7em]"
      >
        <div className="flex flex-col w-full lg:w-auto lg:justify-center lg:items-center ">
          <div className="w-full">
            <h2 className="font-body text-[#FFFFFF] text-[36px] lg:text-[50px] mb-8 font-semibold">
              Tisch reservieren
            </h2>
          </div>
          <div id="phone" className="flex flex-col gap-2 mb-6 w-full">
            <label className="text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start">
              Telefonnummer
            </label>
            <input
              name="phone"
              onChange={handlePhone}
              type="text"
              placeholder=""
              className={`${
                isPhoneNoValid
                  ? "text-green-600 font-semibold "
                  : "text-red-600 font-semibold "
              } w-full  px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]`}
            />
            {/* {errorMsg.name.includes('phone')  && <div id='error-message' className='flex rounded-md text-red-600 border-[1px] border-red-600 justify-start items-center p-[0.5em]'>
                            <MdError className='mr-2' size={20} color='red'/> {errorMsg.message.phone} !
                        </div>} */}
          </div>
          <div id="person" className="flex flex-col gap-2 mb-6 w-full">
            <label className="text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start">
              Personen
            </label>
            <input
              name="person"
              onChange={handlePersons}
              type="text"
              placeholder="Anzahl der Personen"
              className={`${
                isPersonsValid
                  ? "text-green-600 font-semibold "
                  : "text-red-600 font-semibold "
              } w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]`}
            />
            {/* {errorMsg.name.includes('person') && <div id='error-message' className='flex rounded-md text-red-600 border-[1px] border-red-600 justify-start items-center p-[0.5em]'>
                            <MdError className='mr-2' size={20} color='red'/> {errorMsg.message.person} !
                        </div>} */}
          </div>
          <div id="date" className="flex flex-col gap-2 mb-6 w-full duration-300 relative">
            <label className="text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start">
              Datum
            </label>
            <input
              name="date"
              // onChange={handleDate}
              onFocus={()=> setCalender(true)}
              onBlur = {()=> setCalender(false)}
              value={date}
              placeholder="date"
              className={`${
                isDateValid
                  ? "text-green-600 font-semibold "
                  : "text-red-600 font-semibold "
              } w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px]`}
            />
           {calender && <Calendar  value={date} onChange={(value,event)=> console.log(value,event)} className={"bg-white w-[300px] rounded-lg absolute opacity-100 top-0 z-[99]"}/>}
            {/* {errorMsg.name.includes('date') && <div id='error-message' className='flex rounded-md text-red-600 border-[1px] border-red-600 justify-start items-center p-[0.5em]'>
                            <MdError className='mr-2' size={20} color='red'/> {errorMsg.message.date} !
                        </div>} */}
          </div>
          <div id="time" className="flex flex-col gap-2 mb-4 w-full">
            <label className="text-[16px] lg:text-[20px] font-body font-semibold text-[#FFFFFF] text-start">
              Uhrzeit
            </label>
            <input
              name="time"
              onChange={handleTime}
              type="time"
              placeholder="Time"
              className={`${
                isTimeValid
                  ? "text-green-600 font-semibold "
                  : "text-red-600 font-semibold "
              } w-full px-2 max-w-[650px] lg:w-[400px] h-[50px] rounded-[5px] `}
            />
            {/* {errorMsg.name.includes('time') && <div id='error-message' className='flex rounded-md text-red-600 border-[1px] border-red-600 justify-start items-center p-[0.5em]'>
                            <MdError className='mr-2' size={20} color='red'/> {errorMsg.message.time} !
                        </div>} */}
          </div>
          <div className="w-full flex justify-start items-center gap-4 pb-[1em]">
            <button
              disabled={formValid ? false : true}
              onClick={handleFormSubmission}
              className={`w-[165px] ${
                formValid ? "opacity-100" : "opacity-30"
              } h-[55px] bg-[#760124] text-[#FFFFFF] font-bold rounded-[5px]`}
            >
              Tisch reservieren
            </button>
            <span
              className={`  flex justify-center items-center
                 h-[55px]  text-[#CCCCCC] font-bold rounded-[5px]`}
            >
              Oder
            </span>
            <a href="tel:+923121500252">
              <button
                disabled={formValid ? false : true}
                className={`w-[165px] h-[55px] bg-[#760124] text-[#FFFFFF] font-bold cursor-pointer rounded-[5px]`}
              >
                Anrufen <br /> 0471 961 579 33
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
