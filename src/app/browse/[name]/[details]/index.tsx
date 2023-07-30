
import { Drawer } from 'antd'
import React,{FC} from 'react'
import { StRow } from '../../style'
import MenuList from '../../../../components/menuList'
import {Datas} from '../../../../helpers/datas'
import { useState } from 'react';

interface PropTypes{
    setopenDetails?:any
    openDetails?:boolean
    items?:any
    title?:string
  }
  

const DetailsDrawer:FC<PropTypes> = ({
    setopenDetails,openDetails,items,title
}) => {
  return (
    
    <>
    {items?.map((res:any)=>
    <> 
    <Drawer
     width={1000}
    title={title?title:'products'}
    bodyStyle={{padding:5}}
    open={openDetails} onClose={()=>setopenDetails(false)}>
        {items?.map((res:any)=><MenuList data={res}/>)}
  </Drawer>
    <MenuList data={res}/>
    </>)}
   
  </>
  )
}

export default DetailsDrawer