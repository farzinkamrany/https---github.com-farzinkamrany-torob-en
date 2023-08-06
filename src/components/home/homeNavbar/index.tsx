"use client"
import React,{useEffect, useState} from 'react'
import { StAll, StComps } from './style'
import { Button, Col, Divider, Dropdown, Input, MenuProps, Modal, Row } from 'antd'
// import { ListOfMenu } from '../components/navbar/style'
import Link from 'next/link'
// import LoginModal from '../components/loginModal'
import { useRouter } from 'next/navigation'
import { ListOfMenu } from '../../navbar/style'
import LoginModal from '../../loginModal'
import { Datas } from '@/helpers/datas'
import ItemsList from '@/components/itemsList'
import { ClickAwayListener,Box } from '@mui/material'
import useScreenSizeChecker from '@/hooks/useScreenSizeChecker'

const HomeNavbar = () => {
    const router=useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showList, setshowList] = useState(false)
  const [openedItem, setopenedItem] = useState<string>('')
  const smallScreen=useScreenSizeChecker()
  const [userId, setuserId] = useState<any>(localStorage.getItem('phone number'))
  // useEffect(() => {
  //   if(typeof window !== 'undefined')
  //     setuserId(localStorage.getItem('phone number'))
  // }, [])
  
  
  const onClick = ( e:any ) => {
    setshowList((prev)=>!prev)
    setopenedItem(e.target.value)
  };
  return (
   <StComps >
    <StAll>
      
      <Row>
      <ListOfMenu>
      {Datas?.dropMenu?.map((res:any)=>
      <Col><Button onClick={(e:any)=>onClick(e)}>
      <li value={res?.value}>{res?.title}</li>
    </Button></Col>
      )}
        
      </ListOfMenu>
    {/* {showList&&<ItemsList data={Datas?.dropMenu?.find((res:any)=>res?.value===JSON.stringify(openedItem))}/>} */}
    <ClickAwayListener onClickAway={onClick}>
      <Box sx={{width:'95%',position:'relative'}}>
        <ItemsList data={Datas?.dropMenu?.find((res:any)=>res?.value===JSON.stringify(openedItem))}/>
        </Box>
</ClickAwayListener>
      </Row>
            
    </StAll>
        <div style={{position: 'fixed',
    right:' 2%',top:10}}>
      <Button onClick={()=>
          !userId?setIsModalOpen(true):router.push('/profile')}>
        
      {
        (typeof window !== 'undefined')?
        userId===null?'login/sign-up':userId:null}
      </Button>
        </div>
          <LoginModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
          </StComps>
  )
}

export default HomeNavbar
