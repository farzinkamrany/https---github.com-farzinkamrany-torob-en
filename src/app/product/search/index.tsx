import Sidebar from '@/components/sidebar'
import React from 'react'
import { StAll } from './style'
import MainPage from '@/components/main'

const Search = () => {
  return (
    <StAll>
      <Sidebar/>
        <MainPage/>
    </StAll>
  )
}

export default Search
