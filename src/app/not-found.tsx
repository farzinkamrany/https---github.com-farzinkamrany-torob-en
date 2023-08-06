'use client'
import React, { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/sidebar'
import { Image, Row } from 'antd'
import FullFooter from '@/components/fullFooter'
// const HomeNavbar = dynamic(() => import('../components/home/homeNavbar'), { ssr: false })
// const SearchNavbar = dynamic(() => import('../components/searchNavbar'), { ssr: false })

const NotFound = () => {
  // useEffect(() => {
  //   document.title="page not found"
  // }, [])
  
  return (
    <Suspense>
    {/* <SearchNavbar/> */}
    <br />
    {/* <HomeNavbar /> */}
    <Row>
      
   <Row  justify='center'>
    <img style={{width:600,height:600}} src="https://torob.com/static/images/error_404.jpg"/>

   </Row>
    </Row>
    <FullFooter/>
    </Suspense>
  )
}

export default NotFound