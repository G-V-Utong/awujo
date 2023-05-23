import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Group from '../Components/Header/image/Group.svg';
import Vector from '../Components/Header/image/Vector.svg';



const Logo = () => {
    return (
            <div className="col-span-2 jusrify-center">
                <Link href="/" legacyBehavior>
                    <a style={{display: 'flex', alignItems: 'center', color: 'white', fontFamily: 'Inter'}}><Image alt='Logo' src={Vector} layout='static' className='w-5 mr-2 md:w-8 lg:w-10 xl:w-12'/><Image alt='Logo' src={Group} layout='static' className='w-16 md:w-28 lg:w-40 xl:w-44'/></a>
                </Link>
            </div>

        )
};

export default Logo;

