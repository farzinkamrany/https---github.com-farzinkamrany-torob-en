// import Sidebar from '../components/sidebar'
"use client"
import React,{FC} from 'react'
import { StAll } from './style'
// import MainPage from '../components/main'
interface PropTypes{
  children?:any
}
const Search:FC<PropTypes> = ({children}) => {
  return (
    <StAll>
      {/* <Sidebar/>
        <MainPage/> */}
        {children}
    </StAll>
  )
}

export default Search
