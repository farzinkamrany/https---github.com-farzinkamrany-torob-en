import React from 'react'
import { ListOfMenu, StAll } from './style'
import { Button, Dropdown, MenuProps } from 'antd'
import SearchBox from '../searchBox'
import SearchNavbar from '../searchNavbar'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

const Navbar = () => {
  const items: any =  [ {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },]
  const router=useRouter()
  const onClick: MenuProps['onClick'] = ({ key }) => {
    // <Link  href="/browse"/>
    console.log('object')
    router.push('/browse')
    // message.info(`Click on item ${key}`);
    
  };
  return (
    
    <>
    <StAll>
      
      <SearchNavbar/>
      <ListOfMenu>
        <Dropdown menu={{ items,onClick:onClick }} >
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
    </StAll>
    </>
  )
}

export default Navbar
