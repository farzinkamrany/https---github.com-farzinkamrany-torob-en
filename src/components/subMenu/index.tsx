import React,{FC} from 'react'
import { StAll } from './style'
import { Button, Drawer } from 'antd'
import Link from 'next/link'
import DetailsDrawer from '@/pages/browse/[name]/[details]'

interface PropTypes{
  setopenDrawer?:any
  openDrawer?:boolean
}
const SubMenu:FC<PropTypes> = ({
  openDrawer=false,
  setopenDrawer
}) => {
  return (
    <StAll>
        <Button><Link href='/'>Search</Link></Button>
        <Button onClick={()=>setopenDrawer(true)}><Link href='/browse'>Categories</Link></Button>
        <Button>Special Offer</Button>
        <Button>My torob</Button>
        
    <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
      <DetailsDrawer setopenDetails={setopenDrawer} openDetails={openDrawer}/>
    </Drawer>
    </StAll>
  )
}

export default SubMenu
