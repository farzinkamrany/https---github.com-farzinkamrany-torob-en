import React from 'react'
import { ListOfMenu, StAll } from './style'
import { Button, Dropdown } from 'antd'
import SearchBox from '../searchBox'

const Navbar = () => {
  const items: any = [{
    label: 'example', value: ''
  }]
  return (
    <>
    <br />
    <SearchBox/>
    <StAll>
      <ListOfMenu>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Mobile and digital goods</li>
        </Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Laptop, computer, office</li></Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Hypermarket</li></Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Home Appliances</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Fashion and clothing</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Beauty and health</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Video and Audio</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Cars and other vehicles</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>sport and entertainment</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Health and medicine</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Artistic culture</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>child and baby</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Other categories</li></Dropdown>
      </ListOfMenu>
      <Button>
        login/sign-up
      </Button>
    </StAll>
    </>
  )
}

export default Navbar
