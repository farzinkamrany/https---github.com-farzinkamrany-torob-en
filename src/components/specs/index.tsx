import React,{useState} from 'react'
import { StAll } from './style'
import { Button,Drawer } from 'antd'
import { FC } from 'react'
import useScreenSizeChecker from '@/hooks/useScreenSizeChecker'
interface PropTypes{
    data?:any
}
const Specs:FC<PropTypes> = ({data}) => {
  const [showCounter, setshowCounter] = useState(3)
  const smallScreen=useScreenSizeChecker()
  const [showAll, setshowAll] = useState(false)
  return (
    <StAll>
        <div className="detailed">
      <h2>Product Specifications</h2>
        {data?.map((res:any)=>
        <div className="specs">
            <div className="row-specs">
            <b>{res?.title}</b>
            <p>{res?.desc}</p>
            <br />

            </div>
            
        </div>).slice(0,smallScreen?3:100000)}
        
        </div>
        <Button onClick={()=>setshowAll(true)} className="mobile">
            show all
        </Button>
        <Drawer 
        footer={()=>{}}
        open={showAll} onCancel={()=>setshowAll(false)}
        title="Product Specifications"
        >

        <div className="detailed">
        {data?.map((res:any)=>
        <div className="specs">
            <div className="row-specs">
            <b>{res?.title}</b>
            <p>{res?.desc}</p>
            <br />

            </div>
            
        </div>)}
        </div>
        </Drawer>
    </StAll>
  )
}

export default Specs
