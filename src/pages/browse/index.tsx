import React, { useState } from 'react'
import { StAll, StRow } from './style'
import SearchNavbar from '@/components/searchNavbar'
import ProductSection from '@/components/productSection'
import SearchResult from '@/components/searchResult'
import Menu from '@/components/menu'
import { Row } from 'antd'
import Navbar from '@/components/navbar'
import { useScreenSizeChecker } from '@/hooks/useScreenSizeChecker'

const Browse = () => {
  const issmallScreen=useScreenSizeChecker()
  return (
    issmallScreen?<StAll>
    
      <Navbar/>
      <StRow>
        <Menu/>

<SearchResult/>
</StRow>
    </StAll>:
  <StAll>
    <Menu/>
  </StAll>
  )
}

export default Browse
