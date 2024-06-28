"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        } else {
            window.removeEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='fixed flex items-center justify-between space-x-8 left-0 right-0 px-4 py-2 sm:px-8 sm:py-8 bg-gray-400 font-bold'>
            <div className="flex space-x-8">
                <Link href={"/admin"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Admin</Link>
                <Link href={"/admin/category"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Category</Link>

                <div className='relative' ref={dropdownRef}>
                    <button 
                        onClick={toggleDropdown} 
                        className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300 flex items-center'
                    >
                        Blog
                        <svg 
                            className={`ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 16L8 12H16L12 16Z" 
                                fill="currentColor" 
                            />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className='absolute mt-2 w-48 bg-white shadow-lg rounded-lg'>
                            <Link href={"/admin/blog/allblogs"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-t-lg transition duration-300'>Bloglar</Link>
                            <Link href={"/admin/blog/blogForm"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-t-lg transition duration-300'>Blog Ekle</Link>
                            <Link href={"/admin/blog/deleteBlog"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Blog Sil</Link>
                        </div>
                    )}
                </div>

                <Link href={"/admin/adminRegister"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Admin Ekle</Link>
                <Link href={"/admin/faq/faqList"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Faqs</Link>
                <Link href={"/admin/faq/faqForm"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Faq Ekle</Link>

            </div>
            <Link href={"/"} className='hover:bg-red-600 cursor-pointer p-2 rounded-lg bg-red-500 transition duration-300 ml-auto'>Main Menu</Link>
        </div>
    );
};

export default AdminNavbar;
