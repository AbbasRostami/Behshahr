import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
// import svg from "./../../../src/assets/arrowUnder.svg"

import { RiSunLine } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
const DarkLightToggle = () => {



    const [Dark, setDark] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = localStorage.getItem("themes");
        if (initialColorValue === "dark") {
          root.classList.add("dark");
          setDark(true);
        } else {
          root.classList.remove("dark");
        }
      }, []);

  const DarkLightToggle = () => {
    
    const root = window.document.documentElement;
    if (Dark) {
      root.classList.remove("dark");
      localStorage.setItem("themes", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("themes", "dark");
    }
    setDark(!Dark);
  };
  
  
  return (
    <button onClick={DarkLightToggle} >
        

        {Dark ? <RiSunLine className='w-[30px] h-[40px] fill-[#158B68]' />: <IoMoon className='w-[30px] h-[40px] fill-[#158B68]'/>}

        
    </button>
  )
}

export default DarkLightToggle
