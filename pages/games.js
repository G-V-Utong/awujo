import Header from '../Components/Header/header'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../Components/Footer'

export default function Home() {
    return (
      <main className="bg-regal-blue flex min-h-screen flex-col">
       <Header/>
       <div className='fixed bottom-0 w-screen'>
        <Footer/>
       </div>
       
      </main>
    )
  }
  