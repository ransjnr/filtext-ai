import { useState } from 'react'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai'


const Navbar = () => {
 const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
 return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-black">
      <h1 className='w-full text-3xl font-bold text-[#6956E5]'>filtext</h1>
    <ul className='hidden md:flex'>
      <li className='p-4'>Documentation</li>
      <li className='p-4'>Blog</li>
    </ul>
    
    <div onClick={handleNav} className='block md:hidden'>
    {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
    </div>
    <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold m-4 text-[#6956E5]'>filtext</h1>
      <ul className='uppercase p-4'>
      <li className='p-4 border-b border-gray-600'>Home</li>
      <li className='p-4 border-b border-gray-600'>Documentation</li>
      <li className='p-4 border-b border-gray-600'>Blog</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
