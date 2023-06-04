"use client";
import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'


const links = [
  {name : "Home" , link:"/" },
  {name : "Skills" , link:"/" },
  {name : "Projects" , link:"/" },
  {name : "Contact" , link:"/" },
]
const NavBar = () => {
  const [open , setOpen] = useState(false)
  return (
    <nav className="w-full fixed top-0 left-0">
      <div className="md:flex py-3 px-8 bg-white justify-between items-center">
        <div className="text-black font-bold text-2xl cursor-pointer">
          Logo
        </div>
        <div onClick={()=>{
          setOpen(open=>!open)
        }}>
          {open ? <AiOutlineClose  className=' text-black text-3xl absolute right-8 top-3 cursor-pointer md:hidden'/> : 
          <GiHamburgerMenu className=' text-black text-3xl absolute right-8 top-3 cursor-pointer md:hidden'/>}
        </div>
        <div className={`md:flex text-black text-lg mb-2 md:mb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 
transition-all duration-500 ease-in ${open ? 'top-[3.7rem]' : 'top-[-490px]'}`}>
            {
              links.map((link)=>{
                  return <div key={link.name} className='md:my-0 my-7 mr-6'>
                    <a href={link.link} className=' hover:text-gray-400 duration-500'>{link.name}</a>
                    </div>
              })
            }
      </div>
      <div>

      </div>
      </div>
     
    </nav>
  )
}

export default NavBar
