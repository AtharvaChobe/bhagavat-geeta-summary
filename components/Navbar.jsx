import React from 'react'
import { GiSpellBook } from "react-icons/gi";
import Link from 'next/link';
const Navbar = () => {
    return (
        <>
            <header className="text-black body-font bg-black">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <GiSpellBook className='text-yellow-400 text-4xl mr-4'/>
                        <span className="bg-gradient-to-r from-red-500 via-yellow-300 to-amber-500 bg-clip-text text-transparent text-2xl">Geeta Summary</span>
                    </Link>
                    {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav> */}

                    <Link href="/contact">
                        <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                    
                </div>
            </header>
        </>
    )
}

export default Navbar