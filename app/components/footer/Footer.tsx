import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return ( 

    <div className="bg-gray-700 text-white p-6 w-full">
  <div className="container mx-auto flex justify-between items-center flex-col md:flex-row text-center ">
    <div className="mb-4 md:mb-0 ">
      &copy; Copyright 2023 | Omegle - Connect with Strangers Online
    </div>
    <div className="flex flex-wrap justify-center md:justify-end gap-4">
      <Link href="/terms-of-service" className="block md:inline-block  underline">Terms and Conditions</Link>
      <Link href="/privacy-policy" className="block md:inline-block  underline">Privacy Policy</Link>
      <Link href="/contact" className="block md:inline-block underline">Contact Us</Link>
    </div>
  </div>
</div>


    


  )
}

export default Footer