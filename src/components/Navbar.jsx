import React from 'react'
import Logo from "/logo-no-background.svg"
function Navbar() {
  return (
    <nav
    className="w-full px-8 py-2 mx-auto text-black bg-white shadow-md rounded-md lg:px-20 lg:py-3 sticky top-0 z-10"
  >
    <div
      className="container flex items-end justify-between mx-auto text-slate-800"
    >
      

      <a href="#" className=" block cursor-pointer">
        <img src={Logo}  width="190" alt="BKL GRUP" />
      </a>

      <div className='flex flex-row'>
      <a className="hidden sm:block font-bold text-md border-gray-100 shadow-sm rounded-xl p-2"  href="">İlkelerimiz</a>

      <a
        href="#footer"
        className="hidden sm:block font-bold text-md border-gray-100 shadow-sm rounded-xl p-2 mx-2"
      >
        İletişim
      </a>

      </div>
    </div>
  </nav>
  )
}

export default Navbar