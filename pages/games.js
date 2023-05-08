import Header from '../Components/Header/header'
import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
    return (
      <main className="bg-regal-blue flex min-h-screen flex-col p-4">
       <Header/>
      </main>
    )
  }
  