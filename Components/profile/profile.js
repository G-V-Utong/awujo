import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Shola from './profile pictures/autumn-goodman-vTL_qy03D1I-unsplash.jpg';
import Ben from './profile pictures/elizeu-dias-2EGNqazbAMk-unsplash.jpg';
import Santino from './profile pictures/kevwe-eru-e6k8RrfbJ2A-unsplash.jpg';
import Twilio from './profile pictures/miguel-bruna-ex1CRGFAftA-unsplash.jpg';
import Sammy from './profile pictures/pavel-anoshin-d0peGya6R5Y-unsplash.jpg';
import Onome from './profile pictures/prince-akachi-i2hoD-C2RUA-unsplash.jpg';
import Tammy from './profile pictures/prince-akachi-V6iX4MiOCyY-unsplash.jpg';
import { FaSearch, FaAngleDown, FaStar } from 'react-icons/fa';

const playerProfiles =  [
    {title: 'Shola', handle:  '@Shola', url: './profile pictures/autumn-goodman-vTL_qy03D1I-unsplash.jpg', score: '230'},
    {title: 'Ben', handle:  '@Ben', url: './profile pictures/elizeu-dias-2EGNqazbAMk-unsplash.jpg', score: '240'},
    {title: 'Santino', handle:  "@Santino", url: './profile pictures/kevwe-eru-e6k8RrfbJ2A-unsplash.jpg', score: '245'},
    {title: 'Twilio', handle:  '@Twilio', url: './profile pictures/miguel-bruna-ex1CRGFAftA-unsplash.jpg', score: '220'},
    {title: 'Sammy', handle:  '@Sammy', url: './profile pictures/pavel-anoshin-d0peGya6R5Y-unsplash.jpg', score: '250'},
    {title: 'Onome', handle:  "@Onome", url: './profile pictures/prince-akachi-i2hoD-C2RUA-unsplash.jpg', score: '244'},
    {title: 'Tammy', handle:  '@Tammy', url: './profile pictures/prince-akachi-V6iX4MiOCyY-unsplash.jpg', score: '235'},
];

const Star = () => <FaStar className='fill-hover'/>;

export default function Profile () {
    return (
        <div className='w-92 md:w-full flex justify-center'>
            <div className='md:w-full overflow-x-auto flex justify-between font-Inter mb-12'>
            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Shola} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[0].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[0].score} pts <Star/>
                </div>
            </div>

            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Ben} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[1].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[1].score} pts <Star/>
                </div>
            </div>
            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Santino} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[2].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[2].score} pts <Star/>
                </div>
            </div>
            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Twilio} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[3].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[3].score} pts <Star/>
                </div>
            </div>
            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Sammy} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[4].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[4].score} pts <Star/>
                </div>
            </div>
            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Onome} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[5].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[5].score} pts <Star/>
                </div>
            </div>
            <div className='mr-4 text-center hover:bg-gray-700 hover:rounded-lg'>
                <button className='w-20 h-20 rounded-full border-2 border-hover bg-white'>
                    <Image alt='profile photo' src={Tammy} className='w-20 h-18 rounded-full'></Image>
                </button>
                <h1 className='italic text-xs font-bold mb-2'>
                    {playerProfiles[6].handle}
                </h1>
                <div className='flex items-center justify-between text-xs'>
                    <Star/> {playerProfiles[6].score} pts <Star/>
                </div>
            </div>
        </div>
        </div>
        

    )
}
