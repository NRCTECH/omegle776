import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";

const page = () => {
  return (

    <div>
      <Navbar/>
      <Navbar2/>

    
    <div className="flex flex-col items-center p-6 bg-blue-100 mt-0  ">
      <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom  ">
        <img
          src="chatonline.webp"
          alt="Profile Picture"
          className="w-auto h-auto object-cover mx-auto p-5"
        />

        <button className="flex mx-auto bg-gradient-to-r mt-16 from-blue-400 py-5 px-32 to-blue-600 text-xl text-white animate-bounce font-bold py-2 px-4 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700 transition duration-300">
            <Link href={"/ftf"}>Start Video Chat</Link>
        </button> 

        <p className="text-gray-600 mb-4 mx-14 mt-5">
        Connect with new friends online  it is an exciting opportunity, it is a fresh connection every time. Dive into Omegle now!
        </p>
        
        <div className=" space-y-1 text-left ml-24 mt-7 mb-14 mr-12">
          <p>1• Go to <Link href={"/"} className="underline">omegle.com</Link></p>
          <p>
            2• Choose your age and gender.
          </p>
          <p>
            3• Click Text or Video.
          </p>
          <p>
            4• Enjoy instant, fun chats!
          </p>
          
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default page;
