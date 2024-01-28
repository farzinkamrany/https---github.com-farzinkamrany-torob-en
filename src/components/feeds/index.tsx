"use client"
import React,{FC}  from 'react'
import Slider from '../slider'
import Tiles from '../tiles'
import TwoRow from '../twoRow'

interface PropTypes{
    data?:any
  }
const Feeds :FC<PropTypes>= ({data}) => {
  const type0=data?.filter((res:any)=>res?.type===0)
  const type1=data?.filter((res:any)=>res?.type===1)
  const type2=data?.filter((res:any)=>res?.type===2)
  const type4=data?.filter((res:any)=>res?.type===4)
  return (
   <>
  {data?.map((response:any,index:any)=>response?.type===4? <TwoRow key={index} data={response?.data}/>:
   (response?.type===0)?<Slider key={index} data={response}/>:
   (response?.type===2)? <Tiles key={index} data={response}/>:
   (response?.type===1)? <TwoRow key={index} data={response?.data}/>:'')}
    </>
  )
}

export default Feeds