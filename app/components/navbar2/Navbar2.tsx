
import Link from 'next/link'
import React from 'react'
import Home from './Home'
import ChatOnline from './ChatOnline'
import ChatList from './ChatList'
import About from './About'
import Blog from './Blog'
import Alternatives from './Alternatives'

const Navbar2 = () => {
  return ( 

    <header className='cursor-pointer mt-16 md:mt-24 items-center justify-between w-full bg-blue-300 h-auto md:h-14 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 items-center p-4'>
  <div className='flex flex-col md:flex-row md:flex-wrap md:justify-start'>
    <Link href={"/"} className="block md:inline-block mx-2 mb-2 md:mb-0"><Home /></Link>
    <Link href={""} className="block md:inline-block mx-2 mb-2 md:mb-0"><ChatList /></Link>
    <Link href={"/chatOnline"} className="block md:inline-block mx-2 mb-2 md:mb-0"><ChatOnline /></Link>
    <Link href={"/about"} className="block md:inline-block mx-2 mb-2 md:mb-0"><About /></Link>
    <Link href={"/blog"} className="block md:inline-block mx-2 mb-2 md:mb-0"><Blog /></Link>
    <Link href={"/alternatives"} className="block md:inline-block mx-2 mb-2 md:mb-0"><Alternatives /></Link>
  </div>
</header>

  )
}

export default Navbar2