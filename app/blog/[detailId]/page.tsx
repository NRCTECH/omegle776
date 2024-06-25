// blog/[id]/page.tsx
"use client"
import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/navbar/Navbar';
import Navbar2 from '@/app/components/navbar2/Navbar2';
import { useParams } from 'next/navigation';
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


const params = useParams();
const detailId = params?.detailId;

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

      const blog = blogs.find((blog) => blog._id === detailId) || null;
      setSelectedBlog(blog);
    }
  }, [detailId, blogs]);



  return (

    <div>
    <Navbar/>
    <Navbar2/>
    
        <div className="flex flex-col items-center p-6 bg-blue-100  mt-0">
          <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
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
