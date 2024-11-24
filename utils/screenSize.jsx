// "use client";

// import React, { useEffect } from 'react'
// import { useState } from 'react';

// function getDimensions(){
//     const {screenWidth: screenWidth, screenHeight : screenHeight} = window;
// }

// export default function useWindowDimensions() {
//     const [screenDimensions, setScreenDimensions] = useState(getDimensions())

//     useEffect(()=>{
//         function handleResize(){
//             setScreenDimensions(getDimensions())

//             window.addEventListener("resize", handleResize)
//             return ()=> window.removeEventListener("resize", handleResize)
//         }
//     },[])

//   return screenDimensions
// }
