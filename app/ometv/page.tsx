import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
    
    <div className="flex flex-col items-center p-6 bg-blue-100 min-h-screen ">
      <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-3 mt-20 text-center">OME TV</h1>
        <h1 className="text-3xl font-bold text-black mb-6 mt-14 text-left ml-14">Introduction to OmeTV</h1>
        <p className="text-black mb-16 mx-14">
        OmeTV is a cutting-edge social platform that brings people together from all corners of the globe through live video chats. Featuring a user-friendly interface and smooth functionality, OmeTV presents a distinctive opportunity for individuals to connect and forge new friendships online. As a prominent figure in the social networking realm, OmeTV ensures a safe and enjoyable space for users to have meaningful conversations with strangers worldwide. Whether you want to meet new people, practice a foreign language, or just have fun, OmeTV is the premier destination for virtual socializing.        </p>
        
      </div>
  <button className="bg-gradient-to-r mt-20 from-blue-400 py-5 px-32 to-blue-600 text-xl text-white animate-bounce font-bold py-2 px-4 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700 transition duration-300">
    <Link href={"/ftf"}>Start Video Chat</Link>
    </button>


    <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
        
        <div className="font-extrabold text-3xl mb-7 ml-14 mt-24">
        How OmeTV Works
        </div>
        <div className="text-left ml-14 mr-14 mb-9">
        OmeTV serves as a vibrant platform that enables random video chats among users globally. Upon entering the app, users are instantly paired with strangers for spontaneous video conversations. The app is user-friendly interface ensures smooth navigation, making it easy to start and end chats. Through OmeTV, individuals can engage in real-time interactions with people from various backgrounds and cultures. The app emphasizes user privacy and safety, featuring anonymity and reporting tools to maintain a secure environment. Available on both Android and iOS devices, OmeTV offers a convenient way for users to connect with others and expand their social circles. Whether you are looking for casual chats or meaningful connections, OmeTV provides a platform for spontaneous and enjoyable interactions, enhancing the online social experience for users around the world.        </div>





        <div className="font-extrabold text-3xl mb-7 ml-14 mt-12">
        Is OmeTV Worth Trying?
        </div>

        <div className=" text-left mt-3 ml-14 mr-12 mb-9">
        OmeTV is definitely a platform to consider for those wanting to expand their social circle, practice language skills, or simply enjoy meeting new people online. Here are some key factors to consider when deciding to try OmeTV:        </div>  
        

        <div className=" space-y-1 text-left ml-24 mt-5 mb-14 mr-12">
          <p>• Safety Measures:OmeTV places a high priority on user safety, employing stringent moderation to ensure a secure and pleasant experience for all users.</p>
          <p>
            • Privacy Considerations: While OmeTV facilitates anonymous video chats, it is important for users to exercise caution and avoid sharing personal information with strangers.

          </p>
          <p>
            • Interactive Features: OmeTV provides a variety of interactive features, such as text chat and virtual gifts, which enhance the user experience and make interactions more engaging and enjoyable.
          </p>
          
        </div>

        
      </div>

    </div>
    <Footer/>
    </div>
  );
};

export default page;
