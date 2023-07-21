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
import InstallApp from '@/components/installApp'
import { Datas } from '@/helpers/datas';

export default function Home({children}:any) {
  return (
   <StAll >
    <div className="homeNavbar">
    <HomeNavbar/>
    </div>
    <div className="searchBox">
    <HomeSearchBox data={Datas}/>
    {children}
    </div>
    <Footer/>
    <SubMenu/>
    <InstallApp/>
   </StAll>
  )
}
