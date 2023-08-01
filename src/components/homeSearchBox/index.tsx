import React,{FC} from 'react'
import {Input, Select} from 'antd'
import {InputStyle} from './style'
import Card from '../card'
import MobileTags from '../mobileTags'
import TwoRow from '../twoRow'
import Slider from '../slider'
import Feeds from '../feeds'
interface PropTypes{
  data?:any
}
const HomeSearchBox:FC<PropTypes> = ({data}) => {
  return (
    <InputStyle>
   <div className="pcImg">
   <img src="https://torob.com/static/images/logo_original.png" alt="" />
   <span>Torob</span>
   </div>
    <div className="imgMobile">
    <img src="https://torob.com/static/images/torob_logo.svg" alt="" />
    </div>
      <Select showSearch placeholder='Enter the product name'/>
      <p className='pcP'>Price comparison of millions of products between thousands of stores</p>
      <p className='mobileP'>Most Searched by users</p>
      <div className="mobileView"><br />
      <MobileTags data={data?.homeTags}/>
      <br/>
      {<Feeds data={data?.feeds}/>}
      <br />
      </div>
      <br /><br />

    </InputStyle>
  )
}

export default HomeSearchBox
