import { Tag } from 'antd'
import React,{FC} from 'react'
import { StAll } from './style'

interface PropTypes{
  data?:any
}
const MobileTags:FC<PropTypes> = ({data}) => {
  return (
    <StAll>

      <br />
      {data?.map((res:any,index:any)=><Tag key={index} color="purple">{res?.query}</Tag>)}
    </StAll>
  )
}

export default MobileTags
