import React from 'react'
import './header.css'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

export default function Header() {
    // Create Ref element.
    const el = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["JavaScript", "HTML", "CSS", "MERN", "More to come!!"], // Strings to display
        startDelay: 500,
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 75
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className='main-info'>
        <h1>Aquired Knowledge</h1>
        {/* Element to display typing strings */}
        <span ref={el}></span>
      </div>
    );
  }
  

