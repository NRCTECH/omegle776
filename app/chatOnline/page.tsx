import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Online - Omegle: Talk to strangers!",
  description: "Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other.",
  keywords: "Omegle, chat, meet new people, secure chat, online friends",
  robots: "index, follow",
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/chatOnline",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://omegle-seven.vercel.app/chatOnline/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/chatOnline",
  "logo": "https://omegle-mu.vercel.app/static/logo.png",
  "sameAs": [
    "https://www.facebook.com/Omegle",
    "https://twitter.com/Omegle",
    "https://www.instagram.com/Omegle"
  ]
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Omegle: Talk to Strangers",
  "description": "Omegle is just a great way to Video Chat with Girls, meet new people and have a fun time omegle people.",
  "url": "https://omegle-seven.vercel.app/chatOnline"
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://omegle-seven.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ChatOnline",
      "item": "https://omegle-seven.vercel.app/chatOnline"
    }
  ]
};

const Page: React.FC = () => {

  
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

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />


    <div>
      <Navbar/>
      <Navbar2/>


    
    <div className="flex flex-col items-center p-6 bg-blue-100 mt-0  ">

    <div className="mt-4 relative w-full mb-4" >
        <div className="absolute ml-8 text-left">
          <Breadcrumb/>
        </div>
      
      </div>


      <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom mt-7 ">
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
    </>
  );
};

export default Page;
