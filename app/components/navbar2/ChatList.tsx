"use client";
import React, { useState, useEffect, useRef } from 'react';
import OmeTv from './OmeTv';
import Link from 'next/link';
import ChatWithGirls from './ChatWithGirls';

const ChatList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);


  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownSecond = () => {
    setIsOpenSecond(!isOpenSecond);
  };
  const toggleDropdownThird = () => {
    setIsOpenThird(!isOpenThird);
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
    <div className="relative text-black hover:bg-white cursor-pointer ml-10 p-2 rounded-lg transition duration-300" ref={dropdownRef}>
      <div 
        className='flex items-center text-gray-800 hover:text-gray-600 cursor-pointer' 
        onClick={toggleDropdown}
      >
        Chat List
        <svg 
          className={`ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 16L8 12H16L12 16Z" 
            fill="currentColor" 
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-3 min-w-max bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            <div className="px-4 py-1 text-black hover:bg-gray-100 cursor-pointer" onClick={toggleDropdownSecond} ><strong>Video Chat Apps</strong><svg 
          className={`ml-2 transform transition-transform duration-200 ${isOpenSecond ? 'rotate-180' : 'rotate-0'}`} 
          width="" 
          height="20" 
          viewBox="0 0 64 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 16L8 12H16L12 16Z" 
            fill="currentColor" 
          />
        </svg></div>
            {isOpenSecond && (
             <div className="px-4 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer ml-6"><Link href={"/ometv"}><OmeTv/></Link></div>
            )}
            <div className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer" onClick={toggleDropdownThird}><strong>Video Chat with Girls</strong><svg 
          className={`ml-2 transform transition-transform duration-200 ${isOpenThird ? 'rotate-180' : 'rotate-0'}`} 
          width="" 
          height="20" 
          viewBox="0 0 64 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 16L8 12H16L12 16Z" 
            fill="currentColor" 
          />
        </svg></div>
            {isOpenThird && (
             <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer ml-6"><Link href={"/chatWithGirls"}><ChatWithGirls/></Link></div>

            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;