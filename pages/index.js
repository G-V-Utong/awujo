import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../Components/Header/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-regal-blue flex min-h-screen flex-col p-4">
     <Header/>
    </main>
  )
}
