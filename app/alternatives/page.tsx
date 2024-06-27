import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { Metadata } from "next";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Alternatives - Omegle: Talk to strangers!",
  description: "Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other.",
  keywords: "Omegle, chat, meet new people, secure chat, online friends",
  robots: "index, follow",
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/alternatives",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://omegle-seven.vercel.app/alternatives/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/alternatives",
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
  "url": "https://omegle-seven.vercel.app/alternatives"
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
      "name": "Alternatives",
      "item": "https://omegle-seven.vercel.app/alternatives"
    }
  ]
};

const page = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegle-seven.vercel.app" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
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
<div>
  

  <Navbar/>
  <Navbar2/>

    <div className="flex flex-col items-center  bg-blue-100 min-h-screen mt-0">

    <div className="mt-4 relative w-full mb-4" >
        <div className="absolute ml-8 text-left">
          <Breadcrumb/>
        </div>
      
      </div>

    
            
    <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom mt-7">
        
        <div className="font-extrabold text-3xl mb-7 ml-14 mt-24 text-center">
        3 Alternatives to Omegle
        </div>
        <div className=" text-left mt-3 ml-14 mr-12 mb-9">
        Embracing the legacy of its predecessor, a new platform has emerged as the leading choice among Omegle alternatives. With Omegle.com concluding its 14-year journey, this innovative platform steps into the spotlight, offering users an enhanced experience. Featuring lightning-fast connections and robust security measures, it provides a safe haven for spontaneous video chat adventures. Designed for the global community, this platform is more than just a service; it is a thoughtfully curated space for secure and instant connections with strangers from around the world. Welcome to the new era of online socializing!
                </div>

        <div className="font-bold text-2xl mb-7 ml-14 mt-6">
        OmeTV
        </div>

        <div className=" text-left mt-3 ml-14 mr-12 mb-9">
        Random Video Chat offers an exciting and worthwhile opportunity for those seeking spontaneous connections and genuine interactions. With its global reach, commitment to authenticity, and emphasis on user safety, it stands as a compelling choice for individuals looking to expand their social horizons in the digital age.
        </div>
        <div className="font-bold text-2xl mb-7 ml-14 mt-6">
        StrangerCam
        </div>
        <div className=" text-left mt-3 ml-14 mr-12 mb-9 mb-16">
          For those seeking an alternative to Omegle, StrangerCam emerges as a compelling choice. Through its intuitive website interface, StrangerCam facilitates live video chat sessions, connecting individuals from diverse backgrounds worldwide. With an emphasis on simplicity and authenticity, StrangerCam provides a platform for users to forge meaningful connections and explore new experiences within a safeguarded online community.        
          </div>

          <div className="font-bold text-2xl mb-7 ml-14 mt-6">
          Chatroulette
        </div>
        <div className=" text-left mt-3 ml-14 mr-12 mb-9 mb-16">
        As a trailblazer in the realm of random video chat platforms, Chatroulette continues to captivate users seeking thrilling encounters with strangers. Accessible via its website and Android mobile application, Chatroulette employs a distinctive roulette-style matching mechanism, ensuring serendipitous connections while adhering to rigorous moderation protocols. By prioritizing user safety and enjoyment, Chatroulette remains a preferred destination for spontaneous video interactions in the digital landscape.               </div>
</div>

    </div>
    <Footer/>
    </div>
    </>
  );
};

export default page;
