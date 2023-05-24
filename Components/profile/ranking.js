import React from 'react';
import Link from 'next/link';
import Shola from './profile pictures/autumn-goodman-vTL_qy03D1I-unsplash.jpg';
import Ben from './profile pictures/elizeu-dias-2EGNqazbAMk-unsplash.jpg';
import Santino from './profile pictures/kevwe-eru-e6k8RrfbJ2A-unsplash.jpg';
import Twilio from './profile pictures/miguel-bruna-ex1CRGFAftA-unsplash.jpg';
import Sammy from './profile pictures/pavel-anoshin-d0peGya6R5Y-unsplash.jpg';
import Onome from './profile pictures/prince-akachi-i2hoD-C2RUA-unsplash.jpg';
import Tammy from './profile pictures/prince-akachi-V6iX4MiOCyY-unsplash.jpg';
import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import { MdHorizontalRule } from "react-icons/md";
import Image from 'next/image';

const playerProfiles =  [
    {title: 'Shola', handle:  '@Shola', url: './profile pictures/autumn-goodman-vTL_qy03D1I-unsplash.jpg', score: '230'},
    {title: 'Ben', handle:  '@Ben', url: './profile pictures/elizeu-dias-2EGNqazbAMk-unsplash.jpg', score: '240'},
    {title: 'Santino', handle:  "@Santino", url: './profile pictures/kevwe-eru-e6k8RrfbJ2A-unsplash.jpg', score: '245'},
    {title: 'Twilio', handle:  '@Twilio', url: './profile pictures/miguel-bruna-ex1CRGFAftA-unsplash.jpg', score: '220'},
    {title: 'Sammy', handle:  '@Sammy', url: './profile pictures/pavel-anoshin-d0peGya6R5Y-unsplash.jpg', score: '250'},
    {title: 'Onome', handle:  "@Onome", url: './profile pictures/prince-akachi-i2hoD-C2RUA-unsplash.jpg', score: '244'},
    {title: 'Tammy', handle:  '@Tammy', url: './profile pictures/prince-akachi-V6iX4MiOCyY-unsplash.jpg', score: '235'},
];

const ArrowUp = () => <IoCaretUp className='fill-arrow-up'/>;
const ArrowDown = () => <IoCaretDown className='fill-arrow-down'/>;
const NoChange = () => <MdHorizontalRule className='fill-white'/>;



function Ranking() {
    return (
        <div className='md:inline'>
            <div className='flex items-center'>
                <ArrowUp/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    1
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Sammy} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[4].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[4].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[4].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowUp/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    2
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Santino} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[2].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[2].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[2].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowDown/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    3
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Onome} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[5].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[5].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[5].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowUp/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    4
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Ben} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[1].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[1].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[1].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <NoChange/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    5
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Tammy} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[6].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[6].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[6].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowUp/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    6
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Shola} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[0].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[0].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[0].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowDown/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    7
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Twilio} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                {playerProfiles[3].title}
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                {playerProfiles[3].handle}
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            {playerProfiles[3].score} points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <NoChange/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    8
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Sammy} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                Olusola
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                @Olusola
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            215 points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowUp/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    9
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Ben} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                Saliu
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                @Saliu
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            212 points
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ArrowDown/>
                <div className='bg-ranking text-xs md:text-base rounded-full w-4 h-4 md:w-8 md:h-8 flex justify-center text-center mx-1 md:mx-3 items-center'>
                    10
                </div>
                <div className='font-Inter flex pl-3 pr-3 md:pl-6 md:pr-6 bg-ranking rounded-2xl h-14 w-52 md:w-128 md:h-18 mb-2 mt-2 items-center justify-between'>
                    <div className='flex items-center'>
                        <Image alt='Sammy' src={Tammy} className='w-4 h-4 md:w-14 md:h-14 rounded-full'></Image>
                        <div className='ml-3'>
                            <h1 className='text-xs md:text-base font-bold'>
                                Etiene
                            </h1>
                            <p className='text-xs md:text-base font-extralight'>
                                @etiene
                            </p>
                        </div>
                    </div>
                    <div className='bg-score rounded-xl w-16 h-8 md:w-32 md:h-10 flex items-center justify-center end-full'>
                        <p className='text-xs md:text-base'>
                            210 points
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

    )
}
    

export default Ranking;