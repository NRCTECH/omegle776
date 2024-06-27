// blog/[id]/page.tsx
"use client"
import Breadcrumb from '@/app/components/breadCrumb/BreadCrumb';
import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/navbar/Navbar';
import Navbar2 from '@/app/components/navbar2/Navbar2';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface IBLogItem {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
} 

const Page = () => {
  const [blogs, setBlogs] = useState<IBLogItem[]>([]); 
  const [selectedBlog, setSelectedBlog] = useState<IBLogItem | null>(null);

  const router = useRouter(); 

  const params = useParams();
  const detailTitle = Array.isArray(params?.detailTitle) ? params.detailTitle[0] : params?.detailTitle || '';
  const decodedTitle = decodeURIComponent(detailTitle.replace(/-/g, ' '));

  const formatTitleForURL = (title: string) => {
    return encodeURIComponent(
      title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '-')
 ) }

  useEffect(() => {
    if (selectedBlog) {
      const formattedTitle = formatTitleForURL(selectedBlog.title);
      router.replace(`/blog/${formattedTitle}`);
    }
  }, [selectedBlog, router]);

  useEffect(() => {
    const fetchBlog = async () => {
      
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
      
    };

    fetchBlog();
    
  }, []); // useEffect'i params bağımlılığıyla çağır


  useEffect(() => {
    if (blogs.length > 0) {
      const blog = blogs.find((blog) => blog.title.toLowerCase() === decodedTitle.toLowerCase()) || null;
      setSelectedBlog(blog);
    }
  }, [decodedTitle, blogs]);

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

  return (

    <div>
    <Navbar/>
    <Navbar2/>
    
        <div className="flex flex-col items-center p-6 bg-blue-100  mt-0">
        <div className="mt-4 relative w-full" >
        <div className="absolute ml-8 text-left">
          <Breadcrumb/>
        </div>
      
      </div>
          <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom mt-16">
            <img
              src={selectedBlog?.image}
              alt={selectedBlog?.title}
              className="w-auto h-auto mx-auto object-cover mt-4 p-5 shadow-inner-custom"
            />
    
            <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-9 text-center">{selectedBlog?.title}</h1>
            <p className="text-black mb-4 mx-14 ">
              {selectedBlog?.description}
            </p>
            
            
          </div>
        </div>
        <Footer/>
        </div>
      );
};

export default Page;
