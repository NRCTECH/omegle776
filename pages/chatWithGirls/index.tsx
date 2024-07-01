import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });


const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/chatWithGirls",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://omegle-seven.vercel.app/chatWithGirls/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/chatWithGirls",
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
  "url": "https://omegle-seven.vercel.app/chatWithGirls"
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
      "name": "ChatWithGirls",
      "item": "https://omegle-seven.vercel.app/chatWithGirls"
    }
  ]
};



const page = () => {
  return (

<>
      <Head>
      <title>Chat with Girls - Omegle Talk to Strangers</title>
<meta name="description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
<meta name="keywords" content="Omegle, chat, meet new people, secure chat, online friends" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <link rel="canonical" href="https://omegle-seven.vercel.app/chatWithGirls"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegle-seven.vercel.app" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
        <meta property="og:image" content="https://omegle-seven.vercel.app/about.webp" />
      </Head>

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


<div className={inter.className}>
    <Navbar/>
    <Navbar2/>
    <div>

    <div className="flex flex-col items-center p-6 bg-stone-300 min-h-screen ">
    <div className="mt-4 relative w-full mb-4" >
        <div className="absolute ml-8 text-left">
          <Breadcrumb/>
        </div>
      
      </div>
      <div className="border-2 md:w-7/12 bg-stone-100 bg-opacity-100 shadow-inner-custom mt-7">
        
        <h1 className="text-4xl font-bold text-black mb-3 mt-20 text-center">Chat With Girls</h1>
        
        <p className="text-black mb-16 mx-14 mt-16">
        Our platform is an innovative social network that connects individuals from all over the world through live video chats. With an intuitive interface and seamless performance, it offers a unique chance for users to make new friends online. As a leading entity in the social networking domain, it guarantees a secure and pleasant environment for engaging in meaningful conversations with strangers globally. Whether you are looking to meet new people, practice a foreign language, or simply have fun, this platform stands out as the top choice for virtual socializing.
                </p>
        
      </div>
  <button title='Title' className="bg-gradient-to-r mt-20 from-blue-400 py-5 px-32 to-blue-600 text-xl text-white animate-bounce font-bold py-2 px-4 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700 transition duration-300">
    <Link href={"/ftf"}>Start Video Chat</Link>
    </button>


    <div className="border-2 md:w-7/12 bg-stone-100 bg-opacity-100 shadow-inner-custom">
        


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
    </div>
 
    </>
  );
};

export default page;
