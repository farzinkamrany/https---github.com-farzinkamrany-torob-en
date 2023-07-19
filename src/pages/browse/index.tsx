import React from 'react'
import { StAll, StRow } from './style'
import SearchNavbar from '@/components/searchNavbar'
import ProductSection from '@/components/productSection'
import SearchResult from '@/components/searchResult'
import Menu from '@/components/menu'
import { Row } from 'antd'
import Navbar from '@/components/navbar'

const Browse = () => {
  return (
    <StAll>
      <Navbar/>
      <StRow>
        <Menu/>

<SearchResult/>
</StRow>
    </StAll>
  )
}

export default Browse
