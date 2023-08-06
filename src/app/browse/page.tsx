"use client"
import React, { FC, useEffect } from 'react'
import { StAll, StRow } from './style'
import SearchResult from '../../components/searchResult'
import Navbar from '../../components/navbar'
import ProductTitle from '../../components/productHeader'
import { Datas } from '@/helpers/datas'
interface PropTypes{
  data?:any
}
const Browse:FC<PropTypes> = ({data}) => {
  useEffect(() => {
    document.title="Torob-Browse "
  }, [])
  return (
    <StAll>
      <ProductTitle />
       <Navbar/>
      <StRow>
<SearchResult data={Datas}/>
</StRow>
    </StAll>
  )
}

export default Browse

export async function getServerSideProps() {
  // Fetch data from external API
  const data = Datas
  // Pass data to the page via props
  return { props: { data } }
}
