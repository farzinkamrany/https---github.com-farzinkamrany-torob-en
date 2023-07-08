import React from 'react'
import { StAll } from './style'
import {Input} from 'antd'
import HomeSearchBox from '../homeSearchBox'
import SearchResult from '../searchResult'
const MainPage = () => {
  return (
    <StAll>
      {/* <HomeSearchBox/> */}
      <SearchResult/>
    </StAll>
  )
}

export default MainPage
