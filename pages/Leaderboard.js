import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../Components/Header/header';
import Deco from '../Components/Header/image/Group 9197.png'


export default function Home() {
  return (
    <main className="bg-regal-blue flex min-h-screen flex-col p-4">
     <Header/>
     <div className='flex min-w-full justify-between pl-28 pr-28 text-white'>
      <div>
        <div className='flex items-center'>
          <h1 className='text-5xl font-Inter'>
            Leaderboard
          </h1>
          <Image alt='decoration' src={Deco} className='ml-8 h-9'></Image>
        </div>
      </div>
      <div>
        2
      </div>
     </div>
    </main>
  )
}