'use client'
import React,{FC, useState} from 'react'
import { StAll } from './style'
import { AiOutlineRight } from 'react-icons/ai'
import { Button, Drawer } from 'antd'
import SubMenu from '../subMenu'
import DetailsDrawer from '@/app/browse/[[...browseId]]/[details]/page'

interface PropTypes{
  data?:any
}
const MenuList:FC<PropTypes> = ({data}) => {
  const [openDrawer, setopenDrawer] = useState(false)
  return (
    <StAll>
      <div onClick={()=>setopenDrawer(true)}>
        {data?.label}
      </div>
      {data?.items?.length>0&&
     <>
      <Button style={{border:0,boxShadow:'none'}} onClick={()=>setopenDrawer(true)}>
        <AiOutlineRight/>
        </Button>
     <Drawer width={1000} open={openDrawer} onClose={()=>setopenDrawer(false)}>
     <DetailsDrawer items={ data.items} title={data?data?.label:'all products'} setopenDetails={setopenDrawer} openDetails={openDrawer}/>
     </Drawer>
      </>}
    </StAll>

  )
}

export default MenuList