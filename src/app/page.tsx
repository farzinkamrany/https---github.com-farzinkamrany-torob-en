"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import MainPage from '@/components/main'
import SearchNavbar from '@/components/searchNavbar'

export default function Home() {
  return (
   <div>
    
    <SearchNavbar/>
   <Navbar />
   <div style={{display:'flex'}}>
   {/* <Sidebar/>/> */}
     <MainPage/>
   </div>
   <Footer/> 
   </div>
  )
}
