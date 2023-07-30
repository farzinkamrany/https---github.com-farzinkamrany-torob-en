import React,{FC} from 'react'
import { StAll } from './style'
import { Button, Drawer } from 'antd'
import Link from 'next/link'
import DetailsDrawer from '@/app/browse/[name]/[details]'
import { Datas } from '@/helpers/datas'
import { useState } from 'react';

interface PropTypes{
  setopenDrawer?:any
  openDrawer?:boolean
  items?:any
  title?:string
}

const SubMenu:FC<PropTypes> = ({
  items,openDrawer,setopenDrawer,title
}) => {
  return (
    <StAll>
        <Button><Link href='/'>Search</Link></Button>
        <Button onClick={()=>setopenDrawer(true)}><Link href='/browse'>Categories</Link></Button>
        <Button>Special Offer</Button>
        <Button>My torob</Button>
        
    <Drawer width={1000}
    bodyStyle={{padding:5}} title="Products"  open={openDrawer} onClose={()=>setopenDrawer(false)}>
      <DetailsDrawer openDetails={openDrawer}setopenDetails={setopenDrawer} items={items}/>
    </Drawer>
    </StAll>
  )
}

export default SubMenu
