"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Home from './Home';
import ChatOnline from './ChatOnline';
import ChatList from './ChatList';
import About from './About';
import Blog from './Blog';
import Alternatives from './Alternatives';

const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='cursor-pointer mt-14 md:mt-24 w-full bg-gray-700 h-auto md:h-14 flex flex-col md:flex-row items-center justify-between p-4'>
      <div className='w-full flex justify-between md:hidden'>
        {/* Küçük ekran için menü butonunu en sola taşı ve Home butonunu yanına ekle */}
        <button onClick={toggleMenu} className='text-black focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
        <Link href={"/"} className={`block md:hidden ${isOpen ? 'hidden' : 'inline-block'}`}><Home /></Link>
      </div>
      <div className={`md:flex flex-col md:flex-row md:items-center w-full md:space-x-16 ${isOpen ? 'block mt-4 md:mt-0' : 'hidden md:block'}`}>
        {/* Home butonunu her zaman göster */}
        <Link href={"/"} className="block md:inline-block mx-2 mb-2 md:mb-0"><Home /></Link>
        <Link href={""} className="block md:inline-block mx-2 mb-2 ml-24 md:mb-0"><ChatList /></Link>
        <Link href={"/chatOnline"} className="block md:inline-block mx-2 mb-2 md:mb-0"><ChatOnline /></Link>
        <Link href={"/about"} className="block md:inline-block mx-2 mb-2 md:mb-0"><About /></Link>
        <Link href={"/blog"} className="block md:inline-block mx-2 mb-2 md:mb-0"><Blog /></Link>
        <Link href={"/alternatives"} className="block md:inline-block mx-2 mb-2 md:mb-0"><Alternatives /></Link>
      </div>
    </header>
  );
}

export default Navbar2;
