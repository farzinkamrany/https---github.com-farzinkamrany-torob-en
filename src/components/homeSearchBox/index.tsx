import React from 'react'
import {Input, Select} from 'antd'
import {InputStyle} from './style'
import Card from '../card'
const HomeSearchBox = () => {
  return (
    <InputStyle>
    <img src="https://api.torob.com/static/webservice/img/Eid-Ghadir-1402-Desktop.gif" alt="" />
      <Select showSearch placeholder='Enter the product name'/>
    </InputStyle>
  )
}

export default HomeSearchBox
