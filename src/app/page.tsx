"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import MainPage from '@/components/main'

export default function Home() {
  return (
   <div>
   <Navbar />
   <div style={{display:'flex'}}>
     <MainPage/>
   </div>
   <Footer/> 
   </div>
  )
}
