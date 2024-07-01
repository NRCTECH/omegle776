"use client";

import Breadcrumb from "@/app/components/breadCrumb/BreadCrumb";
import Footer from "@/app/components/footer/Footer";
import Faqs from "@/app/components/home/Faqs";
import Navbar from "@/app/components/navbar/Navbar";
import Navbar2 from "@/app/components/navbar2/Navbar2";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IFaqItem {
  question: string;
  answer: string;
}

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/ftf');
  };

  const [faqs, setFaqs] = useState<IFaqItem[]>([]);
  const [faqJsonLd, setFaqJsonLd] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch("/api/faqs");
      const data = await res.json();
      setFaqs(data);

      const generatedFaqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.map((faq: IFaqItem) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      };

      setFaqJsonLd(JSON.stringify(generatedFaqJsonLd));
    };

    fetchFaqs();
  }, []);

  useEffect(() => {
    // Başlıkları toplamak ve id eklemek
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));
    const headingTexts = headingElements.map((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      return { id, text: heading.textContent || '' };
    });
    setHeadings(headingTexts);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const yOffset = -100; // Navbar yüksekliği kadar ofset
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Omegle",
    "url": "https://omegle-seven.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://omegle-seven.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Omegle",
    "url": "https://omegle-seven.vercel.app",
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
    "url": "https://omegle-seven.vercel.app"
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
      }
    ]
  };

  return (
    <>
    <Head>
    <title>Omegle - Omegle: Talk to strangers!</title>
    <link rel="canonical" href="https://omegle-seven.vercel.app"/>
    
    </Head>
      <div>
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

        <div className="bg-orange-100 items-center flex flex-col text-black text-center">
          <Navbar />
          <Navbar2 />
          <div className="absolute left-8 text-left mt-44">
              <Breadcrumb />
            </div>
          <div className="flex justify-center items-center relative w-full mt-4">
            <div className="relative w-64 h-fit bg-gray-700 opacity-85 p-4 rounded-lg shadow-lg text-white ">
              <div className="flex justify-between items-center space-x-4">
                <h2 className="text-md font-bold">Contents</h2>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none hover:text-blue-600"
                >
                  {isOpen ? "[ close ]" : "[ open ]"}
                </button>
              </div>
              {isOpen && (
                <ul className="mt-4 space-y-1">
                  {headings.map((content) => (
                    <li key={content.id} className="text-xs">
                      <a href={`#${content.id}`} className="text-white hover:text-blue-800 transition duration-300">
                        {content.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

          <div className="bg-white border-2 border-gray-400 sm:w-5/12 w-5/6 h-screen rounded-lg shadow-inner-custom overflow-y-auto relative mt-64 md:mt-8">
            <div className="text-left mt-7 ml-7 mr-6 mb-4 text-sm">
              You do not need an app to use Omegle on your phone or tablet! The web
              site works great on mobile.
            </div>
            <div className="font-extrabold text-xl mb-7">
              Meet strangers with your interests!
            </div>
            <div className="text-left ml-7 mr-6 mb-7 text-sm">
              Omegle (oh`meg`ull) is a great way to meet new friends. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you’ll be randomly paired with someone who selected some of the same interests. To help you stay safe, chats are anonymous unless you tell someone who you are (not recommended!), and you can stop a chat at any time. See our Terms of Service and Community Guidelines for more info about the do’s and don’ts in using Omegle. Omegle video chat is moderated but no moderation is perfect. Users are solely responsible for their behavior while using Omegle.
            </div>
            <div className="text-left ml-7 mb-7 mr-6 text-sm">
              <a className="text-xl font-bold">
                YOU MUST BE 18 OR OLDER TO USE OMEGLE.
              </a>{" "}
              See Omegle’s Terms of Service for more info. Parental control
              protections that may assist parents are commercially available and you
              can find more info at https://www.connectsafely.org/controls/ as well
              as other sites.
            </div>
            <span className="font-bold text-2xl bg-blue-200 px-12">
              <strong>Video is monitored. Keep it clean</strong>
              <span className="text-white ml-4 px-2 py-0 bg-orange-400 rounded">
                &#33;
              </span>
            </span>
            <div className="text-left mt-7 ml-7 mr-6 text-sm">
              Leave Omegle and visit an adult site instead if that is what you are
              looking for, and you are 18 or older.
            </div>

            <div className="mt-7 fixed sticky bottom-4 left-0 right-0 absolute">
              <div className="bg-white rounded-lg p-6 w-fit me-auto ms-auto">
                <div className="font-extrabold text-xl mb-4">Start chatting:</div>
                <button className="text-2xl text-white py-2 px-44 bg-gradient-to-r from-blue-400 to-blue-600 rounded">
                  <Link href={"/ftf"}>Video</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-stone-300 border-r-2 border-l-2 border-t-2 w-full shadow-inner rounded-lg">
            <div className="mt-16 mb-8 font-extrabold text-4xl">
              <h1>Omegle Video Chat With Strangers</h1>
            </div>
            <img src="home3.webp" alt="Logo 1" className="p-1 mt-16 mb-8 mx-auto w-8/12 h-2/6" />
            <div className="font-extrabold text-3xl mb-7">
              Omegle: Talk to strangers!
            </div>
            <div className="text-left ml-24 mr-24 mb-9">
              Omegle is a platform designed specifically for users who are 18 years of age or older. By entering and utilizing this site, you confirm that you meet the age requirement of being at least 18 years old. This service connects strangers from around the world for anonymous text or video chats. While it offers an opportunity for unique and spontaneous interactions, users must be aware of and comply with the age restriction to ensure a safe and appropriate environment for all participants.
              <br />
              <br />
              Omegle (oh·meg·ull) provides an exciting platform to make new friends. When using Omegle, you are randomly matched with another individual for one-on-one conversations. Additionally, you have the option to add your interests, allowing you to be paired with someone who shares similar interests.
            </div>

            <div className="text-2xl text-left ml-24 ">
              <h1><strong>What Is New Omegle?</strong></h1>
            </div>

            <div className=" text-left mt-3 ml-24 mr-24 mb-9">
              For your safety, conversations on Omegle are anonymous unless you choose to disclose your identity (not recommended!). Community Guidelines You have the freedom to end a chat at any time. Please refer to our Terms of Service and Community Guidelines for guidance on using Omegle responsibly. While Omegle video chat is moderated, it is important to note that moderation is not flawless. Users bear full responsibility for their conduct while using Omegle.
            </div>

            <div className="text-2xl text-left ml-24 ">
              <h1><strong>How Does It Work?</strong></h1>
            </div>

            <div className=" text-left mt-3 ml-24 mr-24 mb-9">
              At this platform, our chat system gathers only the necessary
              information from users to find the perfect match for them. Using
              cutting-edge AI technology, we analyze user inputs and preferences to
              match them with compatible chat partners from our extensive database.
            </div>

            <div className="text-2xl text-left ml-24 ">
              <h1><strong>Omegle Features</strong></h1>
            </div>

            <div className=" text-left mt-3 ml-24 mr-24 ">
              Our platform inherits the legacy of being the year is most visited
              online random video chat website, offering an array of remarkable
              features:
            </div>

            <div className=" space-y-1 text-left ml-36 mt-5 mb-9">
              <p>• Engage in live 1 v1 Chat channels with strangers.</p>
              <p>• Global Conversations in an Instant:</p>
              <p>• Complete Confidentiality</p>
              <p>• Simple and Convenient</p>
              <p>• Safe and Secure:</p>
              <p>• Omegle Random Matching Algorithm</p>
              <p>• Next-Level Experience with AI-Powered Enhancements:</p>
              <p>• Omegle Mobile-Friendly</p>
            </div>

            <div className="text-2xl text-left ml-24 ">
              <h1><strong>Alternatives</strong></h1>
            </div>
            <div className=" text-left mt-3 ml-24 mr-24 mb-14">
              At this platform, our chat system gathers only the necessary
              information from users to find the perfect match for them. Using
              cutting-edge AI technology, we analyze user inputs and preferences to
              match them with compatible chat partners from our extensive database.
            </div>
          </div>

          <div className="w-full bg-stone-300">
            <h1 className="mt-16 mb-8 font-extrabold text-4xl">FAQs</h1>
            <div className="max-w-screen-lg w-full mx-auto mb-8 md:mb-16">
              <Faqs />
            </div>

            <div className="font-extrabold text-4xl mb-9 mt-14">
              <h1>Talk to Strangers Right Now!</h1>
            </div>
            <button className="flex mx-auto bg-gradient-to-r mt-16 mb-16 from-blue-400 py-5 px-36 to-blue-600 text-xl text-white animate-bounce font-bold py-2 px-4 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700 transition duration-300">
              <Link href={"/ftf"}>Start Video Chat</Link>
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
