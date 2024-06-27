import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/terms",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://omegle-seven.vercel.app/terms/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Omegle",
  "url": "https://omegle-seven.vercel.app/terms",
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
  "url": "https://omegle-seven.vercel.app/terms"
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
      "name": "Terms",
      "item": "https://omegle-seven.vercel.app/terms"
    }
  ]
};

const page = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-blue-100 min-h-screen mt-40">
      <Navbar/>

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

      <div className="border-2 w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-20 ml-14 text-left">WWW-OMEGLE.COM TERMS OF SERVICE</h1>
        <p className="text-black mb-10 mx-14 text-sm">
        These Terms of Service (the Terms) govern your use of the [www-omegle] website (the https://www-omegle.com). By using the Website, you agree to be bound by these Terms.
        </p>

        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">ACCEPTANCE OF TERMS</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        By using the Website, you represent and warrant that you are at least 18 years of age and that you have the legal capacity to enter into these Terms. If you are under the age of 18, you may use the Website only with the consent of a parent or guardian.
        </p>
        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">CHANGES TO TERMS</h1>
        <p className="text-black0 mb-5 mt-4 mx-14 text-sm">
        We may modify these Terms at any time. Any modifications will be effective immediately upon posting to the Website. Your continued use of the Website after any modifications will constitute your acceptance of the modified Terms. <br></br><br></br>

www-omegle.com reserves the right to modify these Terms (effective on a prospective basis) at any time in accordance with this provision. Therefore, you should review these Terms regularly. If we make changes to these Terms, we will post the revised Terms on the Services and update the “Last Updated” date at the top of these Terms. If you do not terminate this Agreement before the date the revised Terms become effective, your continued access to or use of the Services will constitute acceptance of the revised Terms.
        </p>

        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">USE OF WEBSITE</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        You may use the Website for lawful purposes only. You may not use the Website to:</p>
        <ul className="list-disc list-inside ml-24 mr-14 text-sm">
           <li className="mb-4">Post or transmit any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content.</li>
            <li className="mb-4">Post or transmit any content that infringes the intellectual property rights or other proprietary rights of others.</li>
            <li className="mb-4">Post or transmit any content that is false or misleading.</li>
            <li className="mb-4">Post or transmit any content that is harmful to minors.</li>
            <li className="mb-4">Use the Website to collect or store personal information about others without their consent.</li>
            <li className="mb-12">Use the Website to harm or attempt to harm minors.</li>
        </ul>

        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">INTELLECTUAL PROPERTY</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        The Website and all of its content, including but not limited to text, images, videos, and software, are the property of [www-omegle.com] or its licensors. You may not use the Website or its content without the express written permission of [www-omegle.com].
        </p>

        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">LINKS</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        The Website may contain links to other websites. We are not responsible for the content of any linked website.
        </p>
        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">DISCLAIMER OF WARRANTIES</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        THE WEBSITE IS PROVIDED AS IS AND [www-omegle.com] MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. [www-omegle.com] DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>

        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">LIMITATION OF LIABILITY</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        IN NO EVENT SHALL [www-omegle.com] BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE WEBSITE, EVEN IF [www omegle] HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">TERMINATION</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        [www-omegle] may terminate your access to the Website at any time for any reason.
        </p>
        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">GOVERNING LAW</h1>
        <p className="text-black mb-5 mt-4 mx-14 text-sm">
        These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws provisions.
        </p>
        
        <h1 className="text-l font-bold text-gray-800 mb-3 ml-14 text-left">ENTIRE AGREEMENT</h1>
        <p className="text-black mb-16 mt-4 mx-14 text-sm">
        These Terms constitute the entire agreement between you and [www-omegle.com] with respect to the Website and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written.
        </p>



        
      </div>
      <Footer/>

      </div>

  );
};

export default page;
