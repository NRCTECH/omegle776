import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return ( 

    <div className="bg-blue-300 text-gray-800 p-6 w-full">
  <div className="container mx-auto flex justify-between items-center flex-col md:flex-row text-center ">
    <div className="mb-4 md:mb-0 ">
      &copy; Copyright 2023 | Omegle - Connect with Strangers Online
    </div>
    <div className="flex flex-wrap justify-center md:justify-end gap-4">
      <Link href="/terms" className="block md:inline-block hover:text-gray-600 underline">Terms and Conditions</Link>
      <Link href="/privacyPolicy" className="block md:inline-block hover:text-gray-600 underline">Privacy Policy</Link>
      <Link href="/contact" className="block md:inline-block hover:text-gray-600 underline">Contact Us</Link>
    </div>
  </div>
</div>


    


  )
}

export default Footer