import React from 'react'
import AdminNavbar from '../../adminNavbar/AdminNavbar';

const page = () => {
    return (
        <div className='flex flex-col items-center border-2 bg-blue-100 w-full mx-auto h-full'>
          <AdminNavbar/>
          <h1 className='text-2xl font-bold text-center my-14 mt-36'>Blog Güncelle</h1>
          <form className='w-full max-w-lg flex flex-col items-center'>
            <div className='w-full mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
                Blog Başlığı
              </label>
              <input
                name='title'
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

              />
            </div>
            <div className='w-full mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>Kategori</label>
              <select
                name='category'

                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >

          
              </select>
            </div>
            <div className='w-full mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
                Blog Yazısı
              </label>
              <textarea
                name='description'
                className='shadow appearance-none border rounded w-full py-2 px-5 h-52 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y'
                
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

export default page