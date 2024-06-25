"use client"
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNavbar from '../adminNavbar/AdminNavbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (res?.error) {
            setError(res.error);
        } else {
            
            router.push("/admin");
        }
    };

    return (
        <div className='flex flex-col items-center border-2 bg-blue-100 w-full mx-auto  h-full md:min-h-screen'>
            <AdminNavbar />
            <h1 className='text-2xl font-bold text-center my-14 mt-36 sm:mt-16'>Admin Login</h1>
            <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col items-center px-4'>
                <div className='w-full mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Username 
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='w-full mb-4'>
                    {error && (
                        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded mt-2'>
                            {error}
                        </div>
                    )}
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7 mb-64 sm:mb-8'
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
