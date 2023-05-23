import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../Components/Header/header';
import Footer from '../Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-regal-blue flex min-h-screen flex-col">
     <Header/>
     <div className='fixed bottom-0 w-full'>
        <Footer/>
       </div>
    </main>
  )
}
