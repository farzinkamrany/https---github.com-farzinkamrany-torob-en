// import { useState, useEffect, useCallback } from "react";

// /** Default size is 768px */
// export const useScreenSizeChecker = (width = 768):boolean => {
//   const [sizeCheck, setSizeCheck] = useState(window.innerWidth < width);

//   const checkSize = useCallback(() => {
//     setSizeCheck(window.innerWidth < width);
//   }, [width]);

//   useEffect(() => {
//     window.addEventListener("resize", checkSize);
//     checkSize();
//     return () => {
//       window.removeEventListener("resize", checkSize);
//     };
//   }, [checkSize]);

//   return sizeCheck;
// };
import React,{useState} from 'react'

const useScreenSizeChecker = () => {
  const [sizeCheck, setSizeCheck] = useState();
  return (
    <div>useScreenSizeChecker</div>
  )
}

export default useScreenSizeChecker