"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import SearchNavbar from '@/components/searchNavbar'
import { StAll } from '@/pages/style'
import HomeSearchBox from '@/components/homeSearchBox'
import HomeNavbar from '@/components/home/homeNavbar'
import SubMenu from '@/components/subMenu'

export default function Home(children:any) {
  return (
   <StAll >
    <HomeNavbar/>
    <HomeSearchBox/>
    <Footer/>
    <SubMenu/>
   </StAll>
  )
}
