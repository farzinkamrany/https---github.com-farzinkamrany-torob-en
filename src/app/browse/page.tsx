"use client"
import React, { useState } from 'react'
import { StAll, StRow } from './style'
import SearchResult from '../../components/searchResult'
import Navbar from '../../components/navbar'
import ProductTitle from '../../components/productHeader'

const Browse = () => {
  const [openDrawer, setopenDrawer] = useState(false)
  return (
    <StAll>
      <ProductTitle/>
       <Navbar/>
      <StRow>
<SearchResult/>
</StRow>
    </StAll>
  )
}

export default Browse
