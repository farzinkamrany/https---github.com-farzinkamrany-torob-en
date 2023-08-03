import React,{FC} from 'react'
import { StAll } from './style'
import { Button, Drawer } from 'antd'
import Link from 'next/link'
import DetailsDrawer from '@/app/browse/[name]/[details]'
import { Datas } from '@/helpers/datas'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

interface PropTypes{
  setopenDrawer?:any
  openDrawer?:boolean
  items?:any
  title?:string
}

const SubMenu:FC<PropTypes> = ({
  items,openDrawer,setopenDrawer,title
}) => {
  const [showDrawer, setshowDrawer] = useState(false)
  const router=useRouter()
  return (
    <StAll>
        <Button onClick={()=>router.push('/')}><>Search</></Button>
        <Button onClick={()=>setshowDrawer(true)}><Link href='/browse'>Categories</Link></Button>
        <Button>Special Offer</Button>
        <Button>My torob</Button>
        
    <Drawer width={1000}
    bodyStyle={{padding:5}} title="Products"  open={showDrawer} onClose={()=>setshowDrawer(false)}>
      <DetailsDrawer openDetails={showDrawer}setopenDetails={setshowDrawer} items={items}/>
    </Drawer>
    </StAll>
  )
}

export default SubMenu
