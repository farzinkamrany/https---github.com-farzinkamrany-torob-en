import React from 'react'
import {Input, Select} from 'antd'
import {InputStyle} from './style'
import Card from '../card'
import MobileTags from '../mobileTags'
import TwoRow from '../twoRow'
import Slider from '../slider'
const HomeSearchBox = () => {
  return (
    <InputStyle>
   <div className="pcImg">
   <img src="https://api.torob.com/static/webservice/img/Eid-Ghadir-1402-Desktop.gif" alt="" />
   </div>
    <div className="imgMobile">
    <img src="https://torob.com/static/images/torob_logo.svg" alt="" />
    </div>
      <Select showSearch placeholder='Enter the product name'/>
      <p className='pcP'>Price comparison of millions of products between thousands of stores</p>
      <p className='mobileP'>Most Searched by users</p>
      <div className="mobileView">
      <MobileTags />
      <TwoRow/>
      <Slider/>
      </div>
      <br /><br />

    </InputStyle>
  )
}

export default HomeSearchBox
