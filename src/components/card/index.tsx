import React from 'react'
import { StCard } from './style'
import Meta from 'antd/es/card/Meta'
import { AiOutlineHeart,AiOutlineBell } from 'react-icons/ai';
import { Tooltip } from 'antd'
import Link from 'next/link';
const Card = () => {
  return (
      <Link href="/product" about='_blank'>
        <StCard
    hoverable
    style={{ width: 140 }}
    // onClick={()=>window.open('/product')}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    <h2>name</h2>
    <div>
      <Tooltip title="online and in-person sellers in this city"><span>location</span></Tooltip></div>
    <div><b>price</b></div>
    <div className='card-footer'>
      <div className='shops'>in 67 stores</div>
      <br />
    <div className='action-items'>
      <div><AiOutlineHeart/></div>
      <div><AiOutlineBell/></div>
    </div>
    </div>
  </StCard>
      </Link>
  )
}

export default Card
