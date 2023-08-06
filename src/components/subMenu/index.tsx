import React,{FC} from 'react'
import { StAll } from './style'
import { Button, Drawer } from 'antd'
import Link from 'next/link'
import DetailsDrawer from '@/app/browse/[name]/[details]'
import { Datas } from '@/helpers/datas'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { AiOutlineSearch, AiOutlineTag } from 'react-icons/ai'
import {TbCategory } from 'react-icons/tb'
import { GoPerson } from 'react-icons/go'
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
        <Button onClick={()=>router.push('/')}><div className='btns'>
        <AiOutlineSearch/>
        Search</div></Button>
        <Button onClick={()=>setshowDrawer(true)}><Link href='/browse'>
          <div className='btns'>
          <TbCategory/>
          Categories
        </div></Link></Button>
        <Button>
          <div className="btns">
           <AiOutlineTag/> 
          Special Offer
          </div>
          </Button>
        <Button>
          <div className="btns">
          <GoPerson/>
          My torob
          </div>
        </Button>
        
    <Drawer width={1000}
    bodyStyle={{padding:5}} title="Products"  open={showDrawer} onClose={()=>setshowDrawer(false)}>
      <DetailsDrawer openDetails={showDrawer}setopenDetails={setshowDrawer} items={items}/>
    </Drawer>
    </StAll>
  )
}

export default SubMenu
