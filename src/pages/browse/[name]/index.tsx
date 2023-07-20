import { Drawer } from 'antd'
import React,{FC,useState} from 'react'
import DetailsDrawer from './[details]'

interface PropTypes{
  setOpen?:any
  open?:boolean
}

const CatPage:FC<PropTypes> = ({
  setOpen,open
}) => {

  const [openDetails, setopenDetails] = useState(false);

  return (
    <Drawer open={open} onClose={()=>setOpen(false)}>
      <DetailsDrawer setopenDetails={setopenDetails} openDetails={openDetails}/>
    </Drawer>
  )
}

export default CatPage