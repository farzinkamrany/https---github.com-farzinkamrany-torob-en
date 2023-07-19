import React, { useState } from 'react'
import { StAll, StRow } from './style'
import SearchNavbar from '@/components/searchNavbar'
import ProductSection from '@/components/productSection'
import SearchResult from '@/components/searchResult'
import Menu from '@/components/menu'
import { Row } from 'antd'
import Navbar from '@/components/navbar'
import { useScreenSizeChecker } from '@/hooks/useScreenSizeChecker'
import SubMenu from '@/components/subMenu'

const Browse = () => {
  return (
    <StAll>
      <Navbar/>
      <StRow>
        <Menu/>
<SearchResult/>
</StRow>
    <SubMenu/>
    </StAll>
  )
}

export default Browse
