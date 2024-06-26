"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import Footer from "./components/footer/Footer";
import Head from "next/head";

export default function Home() {

  const router = useRouter();
  const handleClick = () => {
    router.push('/ftf')
  }



  const FAQItem: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div>
        <div
          onClick={toggleAnswer}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          {question}
        </div>
        {isOpen && (
          <div style={{ marginTop: "5px", paddingLeft: "10px" }}>{answer}</div>
        )}
      </div>
    );
  };


  return (
    <>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegle-seven.vercel.app" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
        <meta property="og:image" content="https://omegle-seven.vercel.app/about.webp" />
      </Head>


    <div className="bg-orange-100  items-center flex flex-col  text-black text-center">
      <Navbar/>
      <Navbar2/>
      <div className="bg-white border-2 border-gray-400 sm:w-5/12 w-5/6 h-screen rounded-lg shadow-inner-custom overflow-y-auto relative mt-64 md:mt-16">
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
        <span className="font-bold text-2xl bg-blue-200  px-12">
          <strong>Video is monitored. Keep it clean</strong>
          <span className="text-white ml-4 px-2 py-0 bg-orange-400 rounded ">
            &#33;
          </span>
        </span>
        <div className=" text-left mt-7 ml-7 mr-6 text-sm ">
          Leave Omegle and visit an adult site instead if that is what you are
          looking for, and you are 18 or older.
        </div>

        <div className="mt-7 fixed sticky bottom-4 left-0 right-0 absolute">
          <div className="bg-white rounded-lg p-6 w-fit  me-auto  ms-auto ">
            <div className="font-extrabold text-xl mb-4">Start chatting:</div>
            <button className="text-2xl text-white py-2 px-44 bg-gradient-to-r from-blue-400 to-blue-600 rounded">
              <Link href={"/ftf"}>Video</Link>
            </button>
          </div>
        </div>
      </div>

     

      <div className="mt-4 bg-blue-100 border-2 w-full shadow-inner rounded-lg">

      <div className="mt-16 mb-8 font-extrabold text-4xl">
        Omegle Video Chat With Strangers
      </div>

        <img src="home3.webp" alt="Logo 1" className="p-1  mt-16 mb-8 mx-auto w-8/12 h-2/6" />
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
          <strong>What Is New Omegle?</strong>
        </div>

        <div className=" text-left mt-3 ml-24 mr-24 mb-9">
        For your safety, conversations on Omegle are anonymous unless you choose to disclose your identity (not recommended!). Community Guidelines You have the freedom to end a chat at any time. Please refer to our Terms of Service and Community Guidelines for guidance on using Omegle responsibly. While Omegle video chat is moderated, it is important to note that moderation is not flawless. Users bear full responsibility for their conduct while using Omegle.
        </div>

        <div className="text-2xl text-left ml-24 ">
          <strong>How Does It Work?</strong>
        </div>

        <div className=" text-left mt-3 ml-24 mr-24 mb-9">
          At this platform, our chat system gathers only the necessary
          information from users to find the perfect match for them. Using
          cutting-edge AI technology, we analyze user inputs and preferences to
          match them with compatible chat partners from our extensive database.
        </div>

        <div className="text-2xl text-left ml-24 ">
          <strong>Omegle Features</strong>
        </div>

        <div className=" text-left mt-3 ml-24 mr-24 ">
          Our platform inherits the legacy of being the year is most visited
          online random video chat website, offering an array of remarkable
          features:
        </div>

        <div className=" space-y-1 text-left ml-36 mt-5 mb-9">
          <p>• Engage in live 1 v1 Chat channels with strangers.</p>
          <p>
            •  Global Conversations in an Instant:
          </p>
          <p>
            • Complete Confidentiality
          </p>
          <p>
            • Simple and Convenient
          </p>
          <p>
            • Safe and Secure:
          </p>
          <p>
            • Omegle Random Matching Algorithm
          </p>
          <p>
            •  Next-Level Experience with AI-Powered Enhancements:
          </p>
          <p>
            • Omegle Mobile-Friendly
          </p>
        </div>

        <div className="text-2xl text-left ml-24 ">
          <strong>Alternatives</strong>
        </div>
        <div className=" text-left mt-3 ml-24 mr-24 mb-14">
          At this platform, our chat system gathers only the necessary
          information from users to find the perfect match for them. Using
          cutting-edge AI technology, we analyze user inputs and preferences to
          match them with compatible chat partners from our extensive database.
        </div>
      </div>

      <div className=" w-full bg-blue-100">
      <div className="mt-16 mb-8 font-extrabold text-4xl">FAQs</div>
      <div className="mt-4 bg-white border-2 w-7/12 shadow-inner rounded-lg text-left p-4 w-9/12 mx-auto">
        <div className="ml-7">
          <FAQItem
            question="How is user safety ensured on this platform??"
            answer="How is user safety ensured on this platform?"
          />
        </div>
        <div className="ml-7 mb-4 mt-4">
          <FAQItem
            question="Can I use this platform on a global scale?"
            answer="Can I use this platform on a global scale?"
          />
        </div>
        <div className="ml-7 mb-4 mt-4">
          <FAQItem
            question="Is this platform free to use?"
            answer="Yes, this platform is completely free. Engage in random video chats, connect with strangers, and enjoy the freedom of conversation without any subscription fees."
          />
        </div>

        {/* Buraya daha fazla FAQItem ekleyebilirsiniz */}
      </div>

      <div className="font-extrabold text-4xl mb-9 mt-14">
        Talk to Strangers Right Now!
      </div>
      <button className="flex mx-auto bg-gradient-to-r mt-16 mb-16 from-blue-400 py-5 px-36 to-blue-600 text-xl text-white animate-bounce font-bold py-2 px-4 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700 transition duration-300">
        <Link href={"/ftf"}>Start Video Chat</Link>
        </button> 

      </div>
      <Footer/>
      
    </div>
    </>
  );
}
