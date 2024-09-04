import React from 'react'
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
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
      <img  className='w-[10%] cursor-pointer' src="/images/social.png" alt="" />
    </div>
  )
}

export default Nav
