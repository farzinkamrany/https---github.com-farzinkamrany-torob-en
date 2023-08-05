import React,{useState} from 'react'
import { StAll } from './style'
import { Button, Checkbox, Col, Input, Menu, MenuProps,Radio, Row } from 'antd'
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
const [selected, setselected] = useState()
  const items:any=[
    
    getItem('Specific detail', 'sub023','', 
      Datas?.category?.map((res:any)=>getItem(res?.title, res?.id)),
    ),
    getItem('Working Condition', 'sub1213','', [
      getItem(<Radio.Group onChange={(e)=>setselected(e.target.value)} value={selected} style={{display:'flex',flexDirection:'column'}}>
        <Radio value={0}>new</Radio>
        <br/>
        <Radio value={1}>second hand </Radio>
      </Radio.Group>, '523'),
      // getItem(<Radio>second hand </Radio>, '6'),
    ]),
    getItem('Prices', 'sub1232', '', [getItem((<Col style={{height:250,width:310}}>
      <Row ><Input prefix={'from'}style={{marginRight: '5%'}}/>  <Input prefix={'to'}/></Row>
      <Row><Button style={{width:'100%',marginTop:8,background:'#ecedef'}}>filter price</Button></Row>
      </Col>),'Price'),
    ]),
  
    getItem('Search in Results', 'sub113','', [
      getItem(<Input.Search className='searchbtn' enterButton={<AiOutlineSearch/>}/>, 'Search'),
    ]),
  
    getItem('exsistance', 'sub423','', [
      getItem(
        <>
        <div><Checkbox>{" "}
        existance of all items</Checkbox></div>
        </>
        , 'exsistance'),
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
