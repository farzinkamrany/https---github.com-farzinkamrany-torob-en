'use client'
import React, { useState } from 'react'
import { StAll, StRow } from './style'
import SearchNavbar from '@/components/searchNavbar'
import ProductSection from '@/components/productSection'
import SearchResult from '@/components/searchResult'
import Menu from '@/components/menu'
import { Drawer, Row } from 'antd'
import Navbar from '@/components/navbar'
import SubMenu from '@/components/subMenu'
import DetailsDrawer from './[name]/[details]'
import Sidebar from '@/components/sidebar'
import ProductTitle from '@/components/productHeader'

const Browse = () => {
  const [openDrawer, setopenDrawer] = useState(false)
  return (
    <StAll>
      <ProductTitle/>
       <Navbar/>
      <StRow>
        {/* <Menu/> */}
        {/* <Sidebar/> */}
<SearchResult/>
</StRow>
    {/* <SubMenu setopenDrawer={setopenDrawer} openDrawer={openDrawer} /> */}
    <SubMenu/>
    </StAll>
  )
}

export default Browse
