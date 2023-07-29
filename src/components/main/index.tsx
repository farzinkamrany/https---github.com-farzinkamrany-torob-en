import React from 'react'
import { StAll } from './style'
import {Input, Select} from 'antd'
import HomeSearchBox from '../homeSearchBox'
import SearchResult from '../searchResult'
import Sidebar from '../sidebar'
import SearchNavbar from '../searchNavbar'
import BreadCrumb from '../breadCrumb'
import SelectedTitle from '../selectedTitle'
import Menu from '../menu'
import Footer from '../footer'
const MainPage = () => {
  const options=[{
    label:'',value:0
  }]
  return (
    <StAll>
      {/* <HomeSearchBox/> */}
      {/* <SearchNavbar/> */}
      {/* <Select options={options} /> */}
      <SelectedTitle/>
      {/* <BreadCrumb/> */}
      {/* <Sidebar/> */}
      <Menu/>

      <SearchResult/>
      {/* <Footer/> */}
    </StAll>
  )
}

export default MainPage
