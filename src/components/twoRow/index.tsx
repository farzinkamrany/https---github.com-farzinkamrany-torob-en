import React,{FC}  from 'react'
import { StAll } from './style'

interface PropTypes{
  data?:any
}
const TwoRow:FC<PropTypes> = ({data})=> {
  // console.log(data)
  return (
    data?.length===5|| data?.length===2? <StAll>
      <div className='topRow'>
          <img src={data[0]?.image_url} alt="" />
        <img src={data[1]?.image_url} alt="" />
      </div> 
    {data?.length===5&&<div className='bottomRow'> 
        <img src={data[2]?.image_url} alt="" />
        <img src={data[3]?.image_url} alt="" />
        <img src={data[4]?.image_url} alt="" />
      </div>}
    </StAll>
    : data?.length===1?<StAll>
            <div className='oneRow'>
            {data?.map((res:any,index:any)=><img key={index} src={res?.image_url} alt="qwe" />)}
       </div>
     </StAll>:
      data?.length===3?
     <StAll>
            <div className='threeBase'>
            {data?.map((res:any,index:any)=><img key={index} src={res?.image_url} alt=""  />)}
       </div>
       </StAll>
       :<StAll>
            <div className='fourRow'>
            {data?.map((res:any,index:any)=><img key={index} src={res?.image_url} alt="" />)}
       </div>
       </StAll>
  )
}

export default TwoRow
