import React from 'react'
import { StAll } from './style'
import { Button } from 'antd'
import Link from 'next/link'

const SubMenu = () => {
  return (
    <StAll>
        <Button><Link href='/'>Search</Link></Button>
        <Button><Link href='/browse'>Categories</Link></Button>
        <Button>Special Offer</Button>
        <Button>My torob</Button>
    </StAll>
  )
}

export default SubMenu
