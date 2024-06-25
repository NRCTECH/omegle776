"use client"
import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../adminNavbar/AdminNavbar';

interface ICategoryItem {
  _id: string;
  title: string;
}

const Page = () => {
  const [categories, setCategories] = useState<ICategoryItem[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({
        ...prevState,
        image: reader.result as string,
      }))
    }
    if(file){
      reader.readAsDataURL(file);
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setFormData({ title: '', category: '', description: '' , image: ''});
  };

  return (
    <div className='flex flex-col items-center border-2 bg-blue-100 w-full mx-auto h-full'>
      <AdminNavbar />
      <h1 className='text-2xl font-bold text-center my-14 mt-36'>Blog Ekle</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col items-center'>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
            Blog Başlığı
          </label>
          <input
            name='title'
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>Kategori</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value="">Kategori Seç</option>
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
            Blog Yazısı
          </label>
          <textarea
            name='description'
            className='shadow appearance-none border rounded w-full py-2 px-5 h-52 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='image'>
            Resim Ekle
          </label>
          <input
            type='file'
            name='image'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={handleImageChange}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7 mb-64'
        >
          Gönder
        </button>
      </form>
    </div>
  );
}

export default Page;
