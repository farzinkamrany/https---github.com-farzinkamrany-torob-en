import React from 'react'
import { StCard } from './style'
import Meta from 'antd/es/card/Meta'
const Card = () => {
  return (
      <StCard
    hoverable
    style={{ width: 140 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    <p>name</p>
    <p>location</p>
    <p>price</p>
    <p>footer</p>
  </StCard>
  )
}

export default Card
