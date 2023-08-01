"use client"
import React,{useState} from 'react'
import { StAll } from './style'
import { Button, Divider, Dropdown, Input, MenuProps, Modal, Row } from 'antd'
// import { ListOfMenu } from '../components/navbar/style'
import Link from 'next/link'
// import LoginModal from '../components/loginModal'
import { useRouter } from 'next/navigation'
import { ListOfMenu } from '../../navbar/style'
import LoginModal from '../../loginModal'
import { Datas } from '@/helpers/datas'
import ItemsList from '@/components/itemsList'

const HomeNavbar = () => {
    const router=useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showList, setshowList] = useState(false)
  const [openedItem, setopenedItem] = useState<string>('')

  const items: any = [ {
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
  const onClick = ( e:any ) => {
    
    setshowList((prev)=>!prev)
    setopenedItem(e.target.value)
  };
  return (
    <StAll>
      
      <Row>
      <ListOfMenu>
      {Datas?.dropMenu?.map((res:any)=><Button onClick={(e)=>onClick(e)}>
          <li value={res?.value}>{res?.title}</li>
        </Button>)}
        
      </ListOfMenu>
    {showList&&<ItemsList data={Datas?.dropMenu?.find((res:any)=>res?.value===JSON.stringify(openedItem))}/>}
      </Row>
            
        <div>
      <Button onClick={()=>
         (typeof window !== 'undefined')? !localStorage.getItem('phone number')?setIsModalOpen(true):router.push('/profile'):null}>
        
      {
        (typeof window !== 'undefined')?
      localStorage.getItem('phone number')===null?'login/sign-up':localStorage.getItem('phone number'):null}
      </Button>
        </div>
          <LoginModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </StAll>
  )
}

export default HomeNavbar
