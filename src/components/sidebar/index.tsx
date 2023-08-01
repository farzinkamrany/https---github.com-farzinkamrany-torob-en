import React from 'react'
import { StAll } from './style'
import { Button, Checkbox, Col, Input, Menu, MenuProps, Row } from 'antd'
import SubMenu from '../subMenu';
import Card from '../card';
import { AiOutlineSearch } from 'react-icons/ai';
import { Datas } from '@/helpers/datas';

const Sidebar = () => {
  type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
  const items:any=[
    
    getItem('Specific detail', 'sub0','', 
      Datas?.category?.map((res:any)=>getItem(res?.title, res?.id)),
    ),
    getItem('Working Condition', 'sub1','', [
      getItem('new', '5'),
      getItem('second hand ', '6'),
    ]),
    getItem('Prices', 'sub2', '', [getItem((<Col style={{height:250}}>
      <Row><Input prefix={'from'}/>  <Input prefix={'to'}/></Row>
      <Row><Button style={{width:'100%',marginTop:8}}>filter price</Button></Row>
      </Col>),'Price'),
    ]),
  
    getItem('Search in Results', 'sub13','', [
      getItem(<Input.Search className='searchbtn' enterButton={<AiOutlineSearch/>}/>, '5'),
    ]),
  
    getItem('exsistance', 'sub4','', [
      getItem(
        <>
        <div><Checkbox>{" "}
        existance of all items</Checkbox></div>
        </>
        , '5'),
    ]),
    { type: 'divider' },
  
    
    getItem('Inventory', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
   
    { type: 'divider' },
    getItem(<p style={{color:'#ff3333'}}>Mobile price list and digital goods</p>, 'group'),
    
  
    { type: 'divider' },
    
  getItem('Popular Category', 'grp2', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ];
  return (
    <StAll>
      
    <Menu
      // onClick={onClick}
      style={{ width: '100%' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </StAll>
  )
}

export default Sidebar
