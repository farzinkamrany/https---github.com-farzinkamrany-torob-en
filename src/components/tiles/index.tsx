import React,{FC} from 'react'
import { StAll } from './style'


interface PropTypes{
    data?:any
  }
const Tiles:FC<PropTypes>= ({data}) => {
  return (
    <StAll>
        {data?.data?.map((res:any,index:any)=><div key={index}><img src={res?.image_url} alt="img"/></div>)}
    </StAll>
  )
}

export default Tiles