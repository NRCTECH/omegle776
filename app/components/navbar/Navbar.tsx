import Link from 'next/link'
import React from 'react'
import Login from './Login'

const Navbar = () => {
  return ( 

    <header className='fixed flex items-center justify-between top-0 z-50 left-0 right-0 px-2 py-2 sm:px-4 sm:py-4 bg-white'>
  <div className='flex items-center'>
    <a href='/'><img src="/logo_1.webp" alt="Logo 1" className="h-8 sm:h-16 p-1"/></a>
  </div>
  <div className='text-xs sm:text-sm font-semibold'><Login/></div>
</header>

    


  )
}

export default Navbar