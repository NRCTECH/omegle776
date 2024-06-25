import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-blue-100 min-h-screen mt-40">
      <Navbar/>
      <div className="border-2 w-7/12 text-black shadow-inner-custom">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-20 text-center">www-omegle Privacy Policy</h1>
        <p className="text-black mb-10 mx-14">
        This Privacy Policy describes how [www-omegle] collects, uses, and shares your personal information when you visit our website [https://www-omegle.com].
        </p>

        <h1 className="text-l font-bold text-gray-800 mb-3 text-center underline">Personal Information We Collect</h1>
        <p className="text-black mb-5 mt-4 mx-14">
        We collect the following personal information from you:
        </p>
        <ul className="list-disc list-inside ml-24 mr-14 text-sm">
           <li className="mb-4"><strong>Information you provide to us:</strong> We collect the information you provide to us when you use our website, such as your name, email address, and other contact information. For example, you may provide us with your information when you sign up for our newsletter, contact us with a question, or make a purchase.</li>
            <li className="mb-4"><strong>Information we collect automatically: </strong>  We collect certain information automatically when you visit our website, such as your IP address, browser type, and operating system. We also collect information about your browsing behavior, such as the pages you visit, the links you click, and the time you spend on our website.
          </li>
        </ul>

        <h1 className="text-l font-bold text-gray-800 mb-3 text-center underline">How We Use Your Personal Information</h1>
        <p className="text-black mb-5 mt-4 mx-14">
        We use your personal information for the following purposes:
        </p>
        <ul className="list-disc list-inside ml-24 mr-14 text-sm">
           <li className="mb-4"><strong>To provide you with the services you request: </strong>We use your information to provide you with the services you request, such as sending you our newsletter or responding to your questions.</li>
            <li className="mb-4"><strong>To improve our website:  </strong>  We use your information to improve our website and make it more useful to you. For example, we use your information to track how people use our website so that we can make it more user friendly.</li>
            <li className="mb-4"><strong>To send you marketing messages: </strong>We may use your information to send you marketing messages about our products or services. You can opt out of receiving marketing messages at any time by clicking the unsubscribe link at the bottom of any marketing email.</li>

        </ul>

        <h1 className="text-l font-bold text-gray-800 mb-3 text-center underline">Sharing Your Personal Information</h1>
        <p className="text-black mb-5 mt-4 mx-14">
        We may share your personal information with the following third parties:
        </p>
        <ul className="list-disc list-inside ml-24 mr-14 text-sm">
           <li className="mb-4"><strong>Our service providers:</strong>We may share your personal information with our service providers who help us operate our website and provide you with the services you request. For example, we may share your information with a company that hosts our website or sends out our newsletter.</li>
            <li className="mb-4"><strong>Other third parties:  </strong>  We may share your personal information with other third parties in the following circumstances: * To comply with a legal obligation * To protect our rights or property * To protect the safety of our users</li>
        </ul>

        <h1 className="text-l font-bold text-gray-800 mb-3 text-center underline">Your Rights</h1>
        <p className="text-black mb-5 mt-4 mx-14">
        You have the following rights with respect to your personal information:
        </p>
        <ul className="list-disc list-inside ml-24 mr-14 text-sm">
           <li className="mb-4"><strong>Access:</strong>You have the right to access your personal information that we collect.</li>
            <li className="mb-4"><strong>Correction:</strong>You have the right to correct any inaccurate or incomplete personal information that we collect.</li>
            <li className="mb-4"><strong>Deletion:</strong>You have the right to request that we delete your personal information.</li>
            <li className="mb-4"><strong>Portability:</strong>You have the right to request that we transfer your personal information to another organization.</li>
            <li className="mb-4"><strong>Objection:</strong>You have the right to object to our processing of your personal information.</li>
 
        </ul>

        <h1 className="text-l font-bold text-gray-800 mb-3 text-center underline">Security</h1>
        <p className="text-black mb-5 mt-4 mx-14">
        We take measures to protect your personal information from unauthorized access, use, or disclosure. These measures include:
        </p>
        <ul className="list-disc list-inside ml-24 mr-14 text-sm">
           <li className="mb-4"><strong>Physical security:</strong>We store your personal information in a secure environment.</li>
            <li className="mb-4"><strong>Technical security:</strong>We use security measures to protect your personal information when it is transmitted over the internet.</li>
            <li className="mb-16"><strong>Employee training:</strong>We train our employees on the importance of protecting your personal information.</li>

        </ul>
      </div>
      <Footer/>

      </div>

  );
};

export default page;
