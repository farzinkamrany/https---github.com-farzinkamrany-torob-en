import React,{FC} from 'react'
import { StAll } from './style'


interface PropTypes{
    data?:any
  }
const Tiles:FC<PropTypes>= ({data}) => {
  return (
    <StAll>
        {data?.data?.map((res:any)=><div><img src={res?.image_url}/></div>)}
    </StAll>
  )
}

export default Tiles