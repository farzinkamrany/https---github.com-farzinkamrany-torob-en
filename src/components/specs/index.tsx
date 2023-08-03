import React from 'react'
import { StAll } from './style'
import { Button } from 'antd'
import { FC } from 'react'
interface PropTypes{
    data?:any
}
const Specs:FC<PropTypes> = ({data}) => {
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
            
        </div>)}
        </div>
        <Button className="mobile">
            show all
        </Button>
    </StAll>
  )
}

export default Specs
