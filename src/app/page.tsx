"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import { StAll } from './style'
import HomeSearchBox from '@/components/homeSearchBox'
import SubMenu from '@/components/subMenu'
import InstallApp from '@/components/installApp'
import { Datas } from '@/helpers/datas';
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import '../app/style.css'
const HomeNavbar=dynamic(()=>import('@/components/homeSearchBox'),{ssr:false})
export default function Home() {
  return (
   <StAll>
    {/* <Head><link href="https://fonts.cdnfonts.com/css/iranyekan" rel="stylesheet"
        /></Head> */}
    <div className="homeNavbar">
    <HomeNavbar/>
    </div>
    <div className="searchBox">
    <HomeSearchBox data={Datas}/>
    </div>
     <Footer/> 
    <InstallApp/> 
   </StAll>
   
  )
}
