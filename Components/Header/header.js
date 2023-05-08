import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Group from './image/Group.svg';
import Elipse from './image/Ellipse 9.png'
import Vector from './image/Vector.svg';
import { useRouter } from 'next/router';
import { FaSearch, FaAngleDown } from 'react-icons/fa';
import { MdNotificationsNone } from "react-icons/md";
import MyDropdown from '/Components/myDropDown';

// const navLinks = [
//     {title:'Home', path: '/'},
//     {title: 'Games', path: '/games'},
//     {title: 'Leaderboard', path: '/Leaderboard'}
// ];


export const NavLink = ({ children, href }) => {
    const router = useRouter();
    const className = {className: router.pathname =='/'? 'active': ''}
    const style = {
        color: router.asPath === href ? '#F4068F' : 'white',
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    }

    return (
        <Link href={href} onClick={handleClick} className={className} style={style}>
            {children}
        </Link>
    );
};

const Question = () => <FaSearch className='pointer-events-none absolute lg:left-3 lg:top-2 lg:transform-translate-y-1/2  xl:top-3 xl:transform-translate-y-1/8 xl:left-5' fill='white'/>;
const AngleDown = () => <FaAngleDown className='ml-2' />
const Notification = () => <MdNotificationsNone className='fill-regal-blue ml-1 w-4 h-4 lg:ml-1 xl:ml-2 lg:w-6 lg:h-6 xl:w-6 xl:h-6'/>

const Header = () => {
    return (
        <div className="md:h-48 items-start grid grid-cols-3 grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-8 gap-x-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-8 p-4 py-8">
            <div className="col-span-2 jusrify-center">
                <Link href="/" legacyBehavior>
                    <a style={{display: 'flex', alignItems: 'center', color: 'white', fontFamily: 'Inter'}}><Image alt='Logo' src={Vector} layout='static' className='w-5 mr-2 md:w-8 lg:w-10 xl:w-12'/><Image alt='Logo' src={Group} layout='static' className='w-16 md:w-28 lg:w-40 xl:w-44'/></a>
                </Link>
            </div>
            <div className="col-span-3 md:col-span-3 lg:col-span-4 xl:col-span-4 md:flex flex-row md:text-sm xl:text-xl text-white justify-between items-center hidden md:ml-10 lg:ml-0 xl:ml-0 lg:justify-evenly xl:justify-evenly">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/games'>Games</NavLink>
                <NavLink href='/Leaderboard'>Leaderboard</NavLink>

                <label className='relative text-white focus-within:text-white lg:inline hidden'>
                    <Question/>
                    <input type='text' placeholder='Find a tournament' className='h-12 bg-transparent  w-50 lg:h-8  xl:h-12  xl:w-55 lg:w-50 shadow-[inset_-6px_-6px_4px_rgba(255,255,255,0.1),inset_6px_6px_4px_rgba(0,0,0,0.15)] rounded-3xl focus:outline-none lg:pl-10 xl:pl-14'></input>
                </label>
                
            </div>
            <div className= "flex flex-row text-md md:text-sm 2xl:text-xl text-white justify-between md:justify-evenly lg:justify-between items-center md:col-span-2 lg:col-span-1 xl:col-span-2">
                <Link href='/my_wallet' className='hidden xl:inline'>
                    My wallet
                </Link>
                <button className='bg-white rounded-full w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 justify-center text-center item-center'><Notification/></button>
                <button className='bg-white rounded-full w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 justify-center text-center item-center'><Image alt='profile picture' width={30} height={30} layout='static' src={Elipse} className='w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10'></Image></button>
                <MyDropdown/>
            </div>
        </div>

)};

export default Header;