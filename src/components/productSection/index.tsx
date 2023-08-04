import React ,{FC,useState}from 'react'
import { StAll } from './style'
import { Button } from 'antd'

interface PropTypes{
  ProCons?:any
}
const ProductSection:FC<PropTypes> = ({ProCons}) => {
  const [slicer, setslicer] = useState(3)
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
               <span>
                *
               </span>
                <p>{res}</p></li>
                )?.slice(0,slicer)}
            </ul>
        </div>
        <div className="weaknesses">
            <span className="w-title">
            {ProCons?.cons_title}
            </span>
            <ul>
            {ProCons?.cons?.map((res:any)=><li>
              <span>
                *
               </span><p>{res}</p></li>
                )?.slice(0,slicer)}
            </ul>
        </div>
      </div>
      <div className="continue">
            {slicer===3&&<Button onClick={()=>setslicer(10000)}>Continue review</Button>}
            </div>
    </StAll>
  )
}

export default ProductSection
