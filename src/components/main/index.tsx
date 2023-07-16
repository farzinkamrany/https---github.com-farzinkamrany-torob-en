import React from 'react'
import { StAll } from './style'
import {Input, Select} from 'antd'
import HomeSearchBox from '../homeSearchBox'
import SearchResult from '../searchResult'
import Sidebar from '../sidebar'
import SearchNavbar from '../searchNavbar'
import BreadCrumb from '../breadCrumb'
import SelectedTitle from '../selectedTitle'
const MainPage = () => {
  const options=[{
    label:'',value:0
  }]
  return (
    <StAll>
      {/* <HomeSearchBox/> */}
      {/* <Select options={options} /> */}
      <SelectedTitle/>
      <SearchNavbar/>
      {/* <BreadCrumb/> */}
      <Sidebar/>
      <SearchResult/>
    </StAll>
  )
}

export default MainPage
