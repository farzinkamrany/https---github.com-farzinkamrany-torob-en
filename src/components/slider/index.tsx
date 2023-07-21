import React,{FC} from 'react'
import { StAll } from './style'
import Link from 'next/link'
import Card from '../card'

interface PropTypes{
  data?:any
}
const Slider :FC<PropTypes> = ({data})=> {
  return (
    <StAll>
      <div className="header">
    <h2>
        {data?.data[0]?.title}
    </h2>
    <Link href='/product'>
        show all
    </Link>
      </div>
      <br />
      <div className="body">
        {data?.base_products?.map((res:any)=><Card data={res}/>)}
      </div>
    </StAll>
  )
}

export default Slider
