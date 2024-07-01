"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const AdminNavbar = () => {
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [isFaqOpen, setIsFaqOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const dropdownRefs = {
        blog: useRef<HTMLDivElement>(null),
        faq: useRef<HTMLDivElement>(null),
        privacy: useRef<HTMLDivElement>(null),
        terms: useRef<HTMLDivElement>(null),
    };

    const toggleDropdown = (setter: React.Dispatch<React.SetStateAction<boolean>>, current: boolean) => {
        setter(!current);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const refs = Object.values(dropdownRefs);
        if (!refs.some(ref => ref.current && ref.current.contains(event.target as Node))) {
            setIsBlogOpen(false);
            setIsFaqOpen(false);
            setIsPrivacyOpen(false);
            setIsTermsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='fixed flex items-center justify-between space-x-8 left-0 right-0 px-4 py-2 sm:px-8 sm:py-8 bg-gray-400 font-bold'>
            <div className="flex space-x-8">
                <Link href={"/admin"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Admin</Link>
                <Link href={"/admin/category"} className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300'>Category</Link>

                {/* Blog Dropdown */}
                <div className='relative' ref={dropdownRefs.blog}>
                    <button 
                        title="Title"
                        onClick={() => toggleDropdown(setIsBlogOpen, isBlogOpen)} 
                        className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300 flex items-center'
                    >
                        Blog
                        <svg 
                            className={`ml-2 transform transition-transform duration-200 ${isBlogOpen ? 'rotate-180' : 'rotate-0'}`} 
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
                    {isBlogOpen && (
                        <div className='absolute mt-2 w-48 bg-white shadow-lg rounded-lg'>
                            <Link href={"/admin/blog/allblogs"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Bloglar</Link>
                            <Link href={"/admin/blog/blogForm"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Blog Ekle</Link>
                            <Link href={"/admin/blog/deleteBlog"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Blog Sil</Link>
                        </div>
                    )}
                </div>

                {/* FAQs Dropdown */}
                <div className='relative' ref={dropdownRefs.faq}>
                    <button
                    title="Title"
                        onClick={() => toggleDropdown(setIsFaqOpen, isFaqOpen)} 
                        className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300 flex items-center'
                    >
                        FAQs
                        <svg 
                            className={`ml-2 transform transition-transform duration-200 ${isFaqOpen ? 'rotate-180' : 'rotate-0'}`} 
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
                    {isFaqOpen && (
                        <div className='absolute mt-2 w-48 bg-white shadow-lg rounded-lg'>
                            <Link href={"/admin/faq/faqList"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Faqs</Link>
                            <Link href={"/admin/faq/faqForm"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Faq Ekle</Link>
                        </div>
                    )}
                </div>

                {/* Privacy Policy Dropdown */}
                <div className='relative' ref={dropdownRefs.privacy}>
                    <button
                    title="Title" 
                        onClick={() => toggleDropdown(setIsPrivacyOpen, isPrivacyOpen)} 
                        className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300 flex items-center'
                    >
                        Privacy Policy
                        <svg 
                            className={`ml-2 transform transition-transform duration-200 ${isPrivacyOpen ? 'rotate-180' : 'rotate-0'}`} 
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
                    {isPrivacyOpen && (
                        <div className='absolute mt-2 w-48 bg-white shadow-lg rounded-lg'>
                            <Link href={"/admin/privacy-policy/privacyList"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Göster</Link>
                            <Link href={"/admin/privacy-policy/privacyForm"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Ekle</Link>
                        </div>
                    )}
                </div>

                {/* Terms and Conditions Dropdown */}
                <div className='relative' ref={dropdownRefs.terms}>
                    <button 
                    title="Title"
                        onClick={() => toggleDropdown(setIsTermsOpen, isTermsOpen)} 
                        className='hover:bg-white cursor-pointer p-2 rounded-lg transition duration-300 flex items-center'
                    >
                        Terms
                        <svg 
                            className={`ml-2 transform transition-transform duration-200 ${isTermsOpen ? 'rotate-180' : 'rotate-0'}`} 
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
                    {isTermsOpen && (
                        <div className='absolute mt-2 w-48 bg-white shadow-lg rounded-lg'>
                            <Link href={"/admin/terms-of-service/termsList"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Göster</Link>
                            <Link href={"/admin/terms-of-service/termsForm"} className='block px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300'>Ekle</Link>
                        </div>
                    )}
                </div>
            </div>
            <Link href={"/"} className='hover:bg-red-600 cursor-pointer p-2 rounded-lg bg-red-500 transition duration-300 ml-auto'>Main Menu</Link>
        </div>
    );
};

export default AdminNavbar;
