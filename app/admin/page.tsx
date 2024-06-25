import Link from 'next/link'
import React from 'react'
import AdminNavbar from './adminNavbar/AdminNavbar'
import Navbar from '../components/navbar/Navbar'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className=' mt-24'><AdminNavbar/></div>
      <div className='mt-36'><img src='about.webp' className='mx-auto  rounded-3xl mb-12'></img>
      </div>
    </div>
    
  )
}

export default page