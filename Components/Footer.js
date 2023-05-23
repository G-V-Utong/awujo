import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../Components/logo';

export default function Footer () {
    return (
        <div className=''>
            <div className="h-38 text-white pt-8 bg-article md:h-44 items-start grid grid-cols-3 grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-8 gap-x-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-8 p-4 py-8">
                <div className='col-span-3 mb-8'>
                    <Logo />
                </div>
                <div className='col-span-2'>
                    <h1 className='font-bold mb-2 text-xs'>
                        EXPLORE
                    </h1>
                    <div className='flex flex-col text-xs '>
                        <Link href='/' className='hover:underline mb-2'>
                        Explore
                        </Link>
                        <Link href='/Leaderboard' className='hover:underline mb-2'>
                        Leaderboard
                        </Link>
                        <Link href='/' className='hover:underline mb-2'>
                        FAQ
                        </Link>
                    </div>
                    
                    
                </div>
                <div>
                    <h1 className='font-bold mb-2 text-xs'>
                        LEARN MORE
                    </h1>
                    <div className='flex flex-col text-xs'>
                        <Link href='/' className='hover:underline mb-2'>
                        About
                        </Link>
                        <Link href='/' className='hover:underline mb-2'>
                        Privacy Policy
                        </Link>
                        <Link href='/' className='hover:underline mb-2'>
                        Terms of Service
                        </Link>
                        <Link href='/' className='hover:underline mb-2'>
                        Contact Us
                        </Link>
                    </div>
                    
                    
                </div>
            
            </div>
            <hr />
            <div className=' bg-article pl-4 text-xs font-Inter text-white pb-6'>
                © 2022 AFRIGUILD
            </div>
        </div>
        
    )
}