"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Quill stil dosyalarını dahil edin
import { useRouter } from 'next/navigation';
import AdminNavbar from '../../adminNavbar/AdminNavbar';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface ICategoryItem {
  _id: string;
  title: string;
}

const BlogForm: React.FC = () => {
  const [categories, setCategories] = useState<ICategoryItem[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
  });
  const router = useRouter();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({
        ...prevState,
        image: reader.result as string,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (value: string) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setFormData({ title: '', category: '', description: '', image: '' });
    router.push('/admin/blogs'); // Form gönderildikten sonra yönlendirme
  };

  return (
    <div className='flex flex-col items-center bg-blue-100 w-full mx-auto h-full lg:h-screen p-4'>
      <AdminNavbar />
      <h1 className='text-2xl font-bold text-center my-14 mt-36'>Blog Ekle</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-2xl flex flex-col items-center space-y-4'>
        <div className='w-full'>
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
        <div className='w-full'>
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
        <div className='w-full'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
            Blog Yazısı
          </label>
          <div className='shadow appearance-none border rounded w-full h-52 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <ReactQuill
              value={formData.description}
              onChange={handleDescriptionChange}
              className='h-full'
            />
          </div>
        </div>
        <div className='w-full'>
          <label className='block text-gray-700 text-sm font-bold mb-2 mt-9' htmlFor='image'>
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
};

export default BlogForm;

