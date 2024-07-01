"use client"
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../adminNavbar/AdminNavbar';

interface IBLogItem {
    _id: string;
    title: string;
    category: string;
    description: string;
    image: string;
  }

const DeleteCategory = () => {

    const [blogs, setBlogs] = useState<IBLogItem[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<string>('');


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


      const deleteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedBlog) {
          alert('Lütfen bir kategori seçin');
          return;
        }
      
        try {
          const res = await fetch(`/api/blogs`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ blogId: selectedBlog }),
          });
          const data = await res.json();
          if (res.ok) {
            // Kategori başarıyla silindiğinde, yerel state'i güncelleyin
            setBlogs(blogs.filter(blog => blog._id !== selectedBlog));
            setSelectedBlog('');
            alert(data.message); // Opsiyonel: Kullanıcıya başarılı silme mesajı göster
          } else {
            // Kategori silinemediğinde veya diğer hata durumlarında
            alert(data.error); // Opsiyonel: Kullanıcıya hata mesajı göster
          }
        } catch (error) {
          console.error('Blog silinirken bir hata oluştu:', error);
          alert('Blog silinemedi. Daha sonra tekrar deneyin.');
        }
      };
  

    return (
        <div className='flex flex-col items-center border-2 bg-blue-100 w-full mx-auto  h-full md:min-h-screen'>
          <AdminNavbar/>
        <h1 className='text-2xl font-bold text-center my-14 mt-36'>Delete Blog</h1>
        <form onSubmit={deleteSubmit} className='w-full max-w-lg flex flex-col items-center'>
          <div className='w-full mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='blog'>
              Blog Title
            </label>
            <select
              name='blog'
              value={selectedBlog}
              onChange={(e) => setSelectedBlog(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value="">Blog Seç</option>
              {blogs?.map((blog) => (
                <option key={blog._id} value={blog._id}>
                  {blog.title}
                </option>
              ))}
            </select>
          </div>
          <button
          title="Title"
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7'
          >
            Sil
          </button>
        </form>
    </div>
  
      );
}

export default DeleteCategory