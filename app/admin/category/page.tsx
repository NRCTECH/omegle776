"use client"

import { useEffect, useState } from "react";
import AdminNavbar from "../adminNavbar/AdminNavbar";

interface ICategoryItem {
  _id: string;
  title: string;
}


export default function AddCategory () {

    
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState<ICategoryItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');


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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    setTitle('');
  };


  const deleteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert('Lütfen bir kategori seçin');
      return;
    }
  
    try {
      const res = await fetch(`/api/categories`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ categoryId: selectedCategory }),
      });
      const data = await res.json();
      if (res.ok) {
        // Kategori başarıyla silindiğinde, yerel state'i güncelleyin
        setCategories(categories.filter(category => category._id !== selectedCategory));
        setSelectedCategory('');
        alert(data.message); // Opsiyonel: Kullanıcıya başarılı silme mesajı göster
      } else {
        // Kategori silinemediğinde veya diğer hata durumlarında
        alert(data.error); // Opsiyonel: Kullanıcıya hata mesajı göster
      }
    } catch (error) {
      console.error('Kategori silinirken bir hata oluştu:', error);
      alert('Kategori silinemedi. Daha sonra tekrar deneyin.');
    }
  };
  
  


    return (
      <div className='flex flex-col items-center border-2 bg-blue-100 w-full mx-auto  h-full md:min-h-screen'>
        <AdminNavbar/>
      <h1 className='text-2xl font-bold text-center my-14 mt-36'>New Category</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col items-center'>
          <div className='w-full mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
                  Category Name
              </label>
              <input 
              name='title'
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
          </div>
          
      <button
      title="Title"
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7'
      >
        Gönder
      </button>
      </form>

      <h1 className='text-2xl font-bold text-center my-14 mt-36'>Delete Category</h1>
      <form onSubmit={deleteSubmit} className='w-full max-w-lg flex flex-col items-center'>
        <div className='w-full mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>
            Category Name
          </label>
          <select
            name='category'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
        <button
        title="Title"
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7 mb-14'
        >
          Sil
        </button>
      </form>
  </div>

    );
}
