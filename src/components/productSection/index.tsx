import React ,{FC}from 'react'
import { StAll } from './style'
import { Button } from 'antd'

interface PropTypes{
  ProCons?:any
}
const ProductSection:FC<PropTypes> = ({ProCons}) => {
  return (
    <StAll>
      <div className='title'>
        <h2>
        {ProCons?.title}
        </h2>
        <h3>
    <small>{ProCons?.sub_title}</small>
        </h3>
      </div>
      <div className='qualities'>
        <div className="strengths">
            <span className="s-title">
                {ProCons?.pros_title}
            </span>
            <ul>
                {ProCons?.pros?.map((res:any)=><li>
                <p>{res}</p></li>
                )}
            </ul>
        </div>
        <div className="weaknesses">
            <span className="w-title">
            {ProCons?.cons_title}
            </span>
            <ul>
            {ProCons?.cons?.map((res:any)=><li>
                <p>{res}</p></li>
                )}
            </ul>
        </div>
      </div>
      <div className="continue">
            <Button>Continue review</Button>
            </div>
    </StAll>
  )
}

export default ProductSection
