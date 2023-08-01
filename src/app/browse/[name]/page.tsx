'use client'
import { Drawer } from 'antd'
import React,{FC,useState} from 'react'
import DetailsDrawer from './[details]'
import Browse from '../page'

interface PropTypes{
  setOpen?:any
  open?:boolean
}

const CatPage:FC<PropTypes> = ({
  setOpen,open
}) => {

  const [openDetails, setopenDetails] = useState(false);

  return (
    // <Drawer open={open} onClose={()=>setOpen(false)}>
    <Browse/>
    //   <DetailsDrawer setopenDetails={setopenDetails} openDetails={openDetails}/>
    // </Drawer>
  )
}

export default CatPage