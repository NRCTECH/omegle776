"use client"
import { useState } from 'react';
import AdminNavbar from '../adminNavbar/AdminNavbar';

const Page = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/register',{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({username,email, password}),

        }
      )
      setUsername(''),
      setEmail('');
      setPassword('');
    }

  return (
    
    <div className='flex flex-col items-center border-2 bg-blue-100 w-full mx-auto  h-full md:min-h-screen'>
      <AdminNavbar/>
        <h1 className='text-2xl font-bold text-center my-14 mt-36'>New Admin</h1>
        <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col items-center'>
            <div className='w-full mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                    Username 
                </label>
                <input 
                name='username'
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='w-full mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Email 
                </label>
                <input 
                name='email'
                type='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='w-full mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    Password
                </label>
                <input
                id='password'
                type='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='w-full mb-4'>
          
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7 mb-64'
        >
          Create
        </button>
        </form>
    </div>
  )
}

export default Page