import React from 'react'
import Logo from "/BKL-GRUP-logo.png"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav
    className="w-full px-8 py-2 mx-auto text-black bg-white shadow-md rounded-md lg:px-20 lg:py-3 sticky top-0 z-10"
  >
    <div
      className="container flex items-end justify-between mx-auto text-slate-800"
    >
      

      <Link to="/" className="   cursor-pointer mr-2">
        <img src={Logo}  width="100" alt="BKL GRUP" />
      </Link>

      <div className='flex flex-row'>
      <Link className="font-bold text-md border-gray-100 shadow-sm rounded-xl p-1"  to="/about">Hakkımızda</Link>

      <a
        href="#footer"
        className=" font-bold text-md border-gray-100 shadow-sm rounded-xl p-1 mx-2"
      >
        İletişim
      </a>

      </div>
    </div>
  </nav>
  )
}

export default Navbar