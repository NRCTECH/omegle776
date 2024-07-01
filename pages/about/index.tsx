import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/about",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://omegle-seven.vercel.app/about/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/about",
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
  "url": "https://omegle-seven.vercel.app/about"
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
      "name": "About",
      "item": "https://omegle-seven.vercel.app/about"
    }
  ]
};

const Page: React.FC = () => {
  return (
    <>
      <Head>
      <title>About - Omegle Talk to Strangers</title>
<meta name="description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
<meta name="keywords" content="Omegle, chat, meet new people, secure chat, online friends" />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <link rel="canonical" href="https://omegle-seven.vercel.app/about"/>

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

        <Navbar />
        <Navbar2 />
        <div className="flex flex-col items-center p-6 bg-stone-300 mt-0">
        <div className="mt-4 mb-12 relative w-full " >
        <div className="ml-4 text-left">
          <Breadcrumb/>
        </div>
      </div>
          <div className="border-2 md:w-7/12 bg-stone-100 bg-opacity-100 shadow-inner-custom mb-7">
            <img
              src="about.webp"
              alt="Profile Picture"
              className="w-auto h-auto object-cover rounded-full p-5 shadow-inner-custom"
            />
            <h1 className="text-2xl font-bold text-black mb-3 mt-9 text-center">ABOUT US</h1>
            <p className="text-black mb-9 mx-14">
              Welcome to our platform, designed for the global community that thrives on the excitement of random video chat. With lightning-fast connections and enhanced content moderation, we provide a secure environment for your video chat adventures. Whether you are looking to make new friends, have meaningful conversations, or simply enjoy meeting new people, our platform offers a thoughtfully curated space for secure and instantaneous connections with individuals from around the world. Join us and experience the next evolution of random video chat. Connect, chat, and explore the world from the comfort of your own screen. Welcome to the future of online interactions! Welcome to the New Omegle!
            </p>
          </div>
        </div>
        <Footer />
    </>
  );
};

export default Page;
