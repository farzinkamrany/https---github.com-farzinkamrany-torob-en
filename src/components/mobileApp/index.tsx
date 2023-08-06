import { Button, Image } from 'antd'
import React from 'react'
import { StAll } from './style'

const MobileApp = () => {
  return (
    
    <StAll>
        <div className="mobile-app">
            
    <div className='installer'>
  <div className='question'>you want app on your phone?</div>
  <br />
  <div className='btns'><Button className='yes' style={{background:'linear-gradient(180deg,#f04151,#d73948)',color:'#fff'}}>yes, install it</Button>
  <Button className='no'>No</Button></div>
    </div>
    <div className='logo'>
      <Image src="	https://torob.com/static/images/bordered_logo.svg" alt="" />
    </div>
        </div>
  </StAll>
  )
}

export default MobileApp