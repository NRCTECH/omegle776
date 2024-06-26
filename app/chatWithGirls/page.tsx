import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with Girls - Omegle: Talk to strangers!",
  description: "Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other.",
  keywords: "Omegle, chat, meet new people, secure chat, online friends",
  robots: "index, follow",
  themeColor: "#ffffff",
};

const page = () => {
  return (

<>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegle-seven.vercel.app" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
        <meta property="og:image" content="https://omegle-seven.vercel.app/about.webp" />
      </head>

<div>
    <Navbar/>
    <Navbar2/>


    <div className="flex flex-col items-center p-6 bg-blue-100 min-h-screen ">
      <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-3 mt-20 text-center">Chat With Girls</h1>
        
        <p className="text-black mb-16 mx-14 mt-16">
        Our platform is an innovative social network that connects individuals from all over the world through live video chats. With an intuitive interface and seamless performance, it offers a unique chance for users to make new friends online. As a leading entity in the social networking domain, it guarantees a secure and pleasant environment for engaging in meaningful conversations with strangers globally. Whether you are looking to meet new people, practice a foreign language, or simply have fun, this platform stands out as the top choice for virtual socializing.
                </p>
        
      </div>
  <button className="bg-gradient-to-r mt-20 from-blue-400 py-5 px-32 to-blue-600 text-xl text-white animate-bounce font-bold py-2 px-4 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700 transition duration-300">
    <Link href={"/ftf"}>Start Video Chat</Link>
    </button>


    <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
        


        <div className="font-extrabold text-3xl mb-7 ml-14 mt-12">
        Is Random Video Chat Worth Trying?
        </div>

        <div className=" text-left mt-3 ml-14 mr-12 mb-9">

        Random Video Chat provides an exhilarating and valuable experience for anyone interested in spontaneous connections and meaningful interactions. Its worldwide accessibility, dedication to authenticity, and focus on user safety make it an excellent option for those aiming to broaden their social horizons in the digital era.
                </div>
        <div className="font-extrabold text-3xl mb-7 ml-14 mt-12">
        Summary of Random Video Chat
        </div>
        <div className=" text-left mt-3 ml-14 mr-12 mb-9 mb-16">
        Random Video Chat transforms online socializing by enabling instant and genuine connections with strangers via live video interactions. Its worldwide reach, strong focus on privacy and safety, and user-friendly design set it apart as a leading platform for spontaneous encounters and meaningful conversations. Users are invited to enjoy the excitement while remaining cautious, ensuring a positive and enriching experience every time.        </div>

        
      </div>

    </div>
    <Footer/>
    </div>
    </>
  );
};

export default page;
