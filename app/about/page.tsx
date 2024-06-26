import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abourrt - Omegle: Talk to strangers!",
  description: "Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other.",
  keywords: "Omegle, chat, meet new people, secure chat, online friends",
  robots: "index, follow",
  themeColor: "#ffffff",
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
      <body className={inter.className}>
        <Navbar />
        <Navbar2 />
        <div className="flex flex-col items-center p-6 bg-blue-100 mt-0">
          <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
            <img
              src="about.webp"
              alt="Profile Picture"
              className="w-auto h-auto object-cover rounded-full p-5 shadow-inner-custom"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-9 text-center">ABOUT US</h1>
            <p className="text-black mb-9 mx-14">
              Welcome to our platform, designed for the global community that thrives on the excitement of random video chat. With lightning-fast connections and enhanced content moderation, we provide a secure environment for your video chat adventures. Whether you are looking to make new friends, have meaningful conversations, or simply enjoy meeting new people, our platform offers a thoughtfully curated space for secure and instantaneous connections with individuals from around the world. Join us and experience the next evolution of random video chat. Connect, chat, and explore the world from the comfort of your own screen. Welcome to the future of online interactions! Welcome to the New Omegle!
            </p>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
};

export default Page;
