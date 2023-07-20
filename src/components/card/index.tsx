import React from 'react'
import { StCard } from './style'
import Meta from 'antd/es/card/Meta'
import { AiOutlineHeart,AiOutlineBell } from 'react-icons/ai';
import { Button, Tooltip } from 'antd'
import Link from 'next/link';
const Card = () => {
  return (
      <Link href="/product" about='_blank'>
        <StCard
    hoverable
    // onClick={()=>window.open('/product')}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    <h3>name</h3>
    <div>
      <Tooltip title="online and in-person sellers in this city"><span>location</span></Tooltip></div>
    <div><b>price</b></div>
    <div className='card-footer'>
      <div className='shops'>in 67 stores</div>
      <br />
    <div className='action-items'>
      <div><Button onClick={(e:any)=>e.preventDefault()}>
      <AiOutlineHeart/>
      </Button></div>
      <div>
        <Button  onClick={(e:any)=>e.preventDefault()}> 
        <AiOutlineBell/>
        </Button>
      </div>
    </div>
    </div>
  </StCard>
      </Link>
  )
}

export default Card
