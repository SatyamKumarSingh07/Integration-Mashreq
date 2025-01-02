// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className='relative'>
            <div className='p-5 bg-white flex justify-between items-center'>
                <Link to="/" className="w-36">
                    <img
                        src="/mashreq.png"
                        alt="Company Logo"
                        width="196"
                        height="42"
                        className="w-full h-auto"
                    />
                </Link>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='md:hidden block text-orange-700 focus:outline-none'
                >
                    <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>
                <div className="hidden md:flex gap-7">
                    <Link
                        to='/support'
                        className='block text-sm px-4 py-2 rounded-lg shadow bg-orange-900 hover:bg-orange-600 text-white'
                    >
                        Support Groups
                    </Link>
                    <Link
                        to='/applications'
                        className='block text-sm px-4 py-2 rounded-lg shadow bg-orange-900 hover:bg-orange-600 text-white'
                    >
                        Our Products
                    </Link>
                    <Link
                        to='/initiative'
                        className='block text-sm px-4 py-2 rounded-lg shadow bg-orange-900 hover:bg-orange-600 text-white'
                    >
                        Upcoming Projects
                    </Link>
                </div>
               
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="p-5 space-y-4">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-orange-700"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Link
                            to='/support'
                            onClick={() => setMenuOpen(false)}
                            className='block text-sm px-4 py-2 rounded-lg shadow bg-orange-900 hover:bg-orange-600 text-white'
                        >
                            Support Groups
                        </Link>
                        <Link
                            to='/applications'
                            onClick={() => setMenuOpen(false)}
                            className='block text-sm px-4 py-2 rounded-lg shadow bg-orange-900 hover:bg-orange-600 text-white'
                        >
                            Our Products
                        </Link>
                        <Link
                            to='/initiative'
                            onClick={() => setMenuOpen(false)}
                            className='block text-sm px-4 py-2 rounded-lg shadow bg-orange-900 hover:bg-orange-600 text-white'
                        >
                            Future Projects
                        </Link>
                    </div>
                </div>
            
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;