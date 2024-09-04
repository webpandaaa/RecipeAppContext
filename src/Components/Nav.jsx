import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {

  const [flag, setFlag] = useState(0);

  const clickHanlder = () =>{
    
    const overlay = document.getElementById("overlay")
    
    if(flag === 0){
      overlay.style.top = 0;
      setFlag(1);
    }else{
      overlay.style.top = "-100%";
      setFlag(0);
    }
  }





  return (
    <>
      <div id="overlay" className='hidden'>
      <NavLink onClick={clickHanlder}
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/home"
          >Home
        </NavLink>
        <NavLink onClick={clickHanlder}
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/recipe"
          >Recipes
        </NavLink>
        <NavLink onClick={clickHanlder}
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/about"
          >About
        </NavLink>
        <NavLink onClick={clickHanlder}
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/contact"
          >Contact
        </NavLink>
      </div>
      <div id="nav" className='w-[95%] ml-10 flex items-center justify-between border-b-2 border-zinc-500 p-5' >
      <img  className=' w-[10%]' src="/images/logo.png" alt="" /> 
      <div id='links' className='  w-full h-full flex justify-center gap-10  '>
      <NavLink 
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/home"
          >Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/recipe"
          >Recipes
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/about"
          >About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-orange-300" : "")}
          to ="/contact"
          >Contact
        </NavLink>
      </div>
      <img  id='social' className='w-[10%] cursor-pointer' src="/images/social.png" alt="" />
      <div onClick={clickHanlder} id="menu" className="hidden "><i class="ri-menu-line"></i></div>
      </div>
    </>
  )
}

export default Nav
