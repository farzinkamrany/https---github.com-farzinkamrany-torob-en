import React,{FC} from 'react'
import { StAll, StCard } from './style'
import Meta from 'antd/es/card/Meta'
import { AiOutlineHeart,AiOutlineBell } from 'react-icons/ai';
import { Button, Tooltip } from 'antd'
import Link from 'next/link';
interface PropTypes{
  data?:any
}
const Card:FC<PropTypes> = ({
  data
}) => {
  return (
     <StAll>
       <Link href="/product" about='_blank'>
        <StCard
    hoverable
    // onClick={()=>window.open('/product')}
    cover={<img alt="example" src={data?.image_url} />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    <h3>{data?.name1}</h3>
    <br />
    <br />
    <div>
      <Tooltip title="online and in-person sellers in this city"><span>{data?.delivery_city_name}</span></Tooltip></div>
    <div><b>{data?.price_text}</b></div>
    <div className='card-footer'>
      <div className='shops'>{data?.shop_text}</div>
      <br />
    <div className='action-items'>
      <div><Button style={{marginRight:10}} onClick={(e:any)=>e.preventDefault()}>
      <AiOutlineHeart/>
      </Button></div>
      <div>
        <Button onClick={(e:any)=>e.preventDefault()}> 
        <AiOutlineBell/>
        </Button>
      </div>
    </div>
    </div>
  </StCard>
      </Link>
     </StAll>
  )
}

export default Card
