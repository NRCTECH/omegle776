"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNavbar from '../../adminNavbar/AdminNavbar';

interface IBlogItem {
  _id: string;
  title: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  const router = useRouter();


  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);



  return (
    <div className='flex flex-col items-center bg-blue-100 w-full mx-auto h-full lg:h-screen p-4'>
      <AdminNavbar />
      <h1 className='text-2xl font-bold text-center my-14 mt-36'>Blog Listesi</h1>
      <div className='w-full max-w-2xl flex flex-col items-center space-y-4'>
        {blogs.map(blog => (
          <div key={blog._id} className='w-full flex justify-between items-center p-4 bg-white rounded shadow'>
            <span>{blog.title}</span>
            <button
              onClick={() => router.push(`/admin/blog/${blog._id}`)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              UPDATE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
