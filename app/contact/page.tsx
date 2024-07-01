"use client"
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { Inter } from "next/font/google";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });




const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/contact",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://omegle-seven.vercel.app/contact/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/contact",
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
  "url": "https://omegle-seven.vercel.app/contact"
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
      "name": "Contact",
      "item": "https://omegle-seven.vercel.app/contact"
    }
  ]
};


const Page: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mesaj gönderimi simülasyonu
    setSubmitted(true);
    // Form alanlarını temizle
    setSubject("");
    setMessage("");
    setEmail("");
  };


  return (
    <>
      <head>
        <title>Contact Us - Omegle: Talk to strangers!</title>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://omegle-seven.vercel.app/contact"/>

        <meta name="description" content="Omegle is a great place to meet new friends..." />
        <meta name="keywords" content="Omegle, chat, meet new people, secure chat, online friends" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends..." />
        <meta property="og:image" content="https://omegle-seven.vercel.app/blog-img.webp" />
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

      <Navbar />
      <Navbar2 />
      <div className="flex flex-col items-center p-6 bg-stone-300 mt-0">
        <div className="mt-4 relative w-full">
          <div className="absolute ml-8 text-left">
            <Breadcrumb />
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-100 bg-opacity-100 min-h-screen mt-0">
          <div className="border-2 md:w-11/12 bg-stone-100 bg-opacity-100 shadow-inner-custom p-6 md:p-10 mt-7 mb-7">
            <img
              src="contact.webp"
              alt="Profile Picture"
              className="w-auto h-auto object-cover rounded-full p-5 shadow-inner-custom mx-auto"
            />
            <h1 className="text-2xl font-bold text-black mb-3 mt-9 text-center">CONTACT US</h1>
            <p className="text-black mb-9 mx-14 text-center">
              Welcome to Omegle
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-left text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter the subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </form>
            {submitted && (
              <div className="mt-4 text-green-600 text-center">
                Your message has been sent. Thanks for your feedback!
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
