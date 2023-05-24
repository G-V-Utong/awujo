import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../Components/Header/header';
import Deco from '../Components/Header/image/Group 9197.png';
import Profile from '../Components/profile/profile';
import Footer from '../Components/Footer';
import Ranking from '../Components/profile/ranking';
import MyRankingDropdown from '@/Components/rankingDropdown';


export default function Home() {
  return (
    <main className="bg-regal-blue flex min-h-screen flex-col">
     <Header/>
     <div className='flex md:justify-center min-w-full lg:justify-between lg:pl-14 lg:pr-14 text-white'>
      <div>
        <div className='pl-4 pr-4 pt-2 pb-2 md:p-4 flex items-center mb-1 lg:mb-8'>
          <h1 className='text-3xl md:text-5xl font-Inter font-semibold'>
            Leaderboard
          </h1>
          <Image alt='decoration' src={Deco} className='hidden md:inline md:w-96 ml-8 lg:w-80 xl:w-96 h-9'></Image>
        </div>
        <div>
          <h1 className='font-semibold pl-4 pr-4 pt-1 pb-1 md:p-4 text-xs md:text-2xl font-Inter mb-2 md:mb-6'>
            Top players on Afriguild this week
          </h1>
        </div>
        <div className='pl-4 pr-4 pt-2 pb-2 md:p-p-4'>
          <Profile/>
        </div>
        <div className='md:ml-8 lg:ml-0  md:flex flex justify-center'>
          <div className='font-Inter pt-2 pl-4 pb-2 pr-4 md:pt-4 md:pl-12 md:pb-4 md:pr-12 w-10/12 lg:w-full h-128 md:w-11/12 xl:h-128 bg-article rounded-2xl border-t-2 border-t-hover mb-20'>
            <div className='mb-3 flex justify-between items-center'>
              <h1 className='font-bold text-sm md:text-xl '>Live ranking</h1>
              <div className='text-xs md:text-xs justify-center md:justify-between w-14 h-8 md:w-72 md:h-10 font-Inter bg-hover bg-opacity-50 rounded-xl flex items-center'>
                <MyRankingDropdown/>
                <button className='focus:bg-hover h-5 md:h-10 rounded-xl w-14 transition ease-in-out delay-150 hidden md:inline'>All</button>
                <button className='focus:bg-hover h-5 md:h-10 rounded-xl w-24 transition ease-in-out delay-150 hidden md:inline'>This week</button>
                <button className='focus:bg-hover h-5 md:h-10 rounded-xl w-32 transition ease-in-out delay-150 hidden md:inline'>My connections</button>
              </div>
            </div>
            <hr className='mb-3'/>
            <div className='overflow-y-auto h-5/6 scrollbar-track-black scrollbar-thin scrollbar-track-rounded scrollbar-thumb-thumbs scrollbar-thumb-rounded'>
              <div className='text-xs md:text-sm lg:text-sm xl:text-sm'>
                <p>
                  Welcome to the weekly live ranking on Afriguild, players are ranked based on final position in <br/> every tournament they play in.  
                  The more you play, and the more you win the higher your ranking.
                  <br/>
                  <br/>
                  <span className='italic font-bold'>The weekly leaderboard is rest at 00.00 WAT every Mondays.  </span>
                </p>
              </div>
              <button className='mt-4 p-2 text-xs md:text-xs lg:text-base md:p3 text-hover border-2 border-hover rounded-full mb-8'>
                See my ranking
              </button>
              <Ranking/>
              
            </div>
            
          </div>
        </div>
        
      </div>
      <div className=' hidden lg:inline-flex h-150 w-128 bg-article rounded-2xl'>
        
      </div>
      </div>
     <Footer />
    </main>
  )
}