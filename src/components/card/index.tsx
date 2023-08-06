import React,{FC,useState} from 'react'
import { StAll, StCard } from './style'
import { AiOutlineHeart,AiOutlineBell, AiFillHeart, AiFillBell } from 'react-icons/ai';
import { Button, Tooltip } from 'antd'
import Link from 'next/link';
interface PropTypes{
  data?:any
}
const Card:FC<PropTypes> = ({
  data
}) => {
  const [heart, setheart] = useState(false)
  const [bell, setbell] = useState(false)
  return (
     <StAll>
       <Link href={"/product/"+data.name1} about='_blank'>
        <StCard
    hoverable
    // onClick={()=>window.open('/product')}
    cover={<img alt="example" src={data?.image_url} />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    <h3>{data?.name1}</h3>
    <br />
    <br />
    {/* <div className='city'>
      <Tooltip title="online and in-person sellers in this city"><span>{data?.delivery_city_name}</span></Tooltip></div> */}
    <div><b>{data?.price_text}</b></div>
    <div className='card-footer'>
      <div className='shops'>{data?.shop_text}</div>
      <br />
    <div className='action-items'>
      {/* <div>
        <Button style={{marginRight:10}} onClick={(e:any)=>e.preventDefault()}> */}
      <>{bell?<AiFillBell onClick={(e)=>{
        e.preventDefault()
        localStorage.getItem('phone number') ?setbell(!bell):null}} style={{fill:'rgb(215, 57, 72)'}}/>:
        <AiOutlineBell  
        onClick={()=>setbell(!bell)}/>}

        {heart?<AiFillHeart style={{fill:'rgb(215, 57, 72)'}}onClick={(e)=>{
          e.preventDefault()
          localStorage.getItem('phone number') ?setheart(!heart):null}}

        />:<AiOutlineHeart  onClick={(e)=>{
          e.preventDefault()
          setheart(!heart)}} />}</>
      {/* <AiOutlineHeart/> */}
      {/* </Button>
      </div> */}
    </div>
    </div>
  </StCard>
      </Link>
     </StAll>
  )
}

export default Card
