import React, { useState,useEffect, useRef } from 'react'
import { ListOfMenu, StAll } from './style'
import { Button, Dropdown, MenuProps } from 'antd'
import { useRouter } from 'next/navigation'
import ItemsList from '../itemsList'
import { Datas } from '@/helpers/datas'
import dynamic from 'next/dynamic'
import { ClickAwayListener,Box } from '@mui/material'
const SearchNavbar=dynamic(()=>import('@/components/searchNavbar'),{ssr:false})

const Navbar = () => {
 
  const router=useRouter()
  const wrapperRef = useRef(null);
  const [showList, setshowList] = useState(false)
  const [openedItem, setopenedItem] = useState<string>('')
  const onClick= (e:any) => {
    setopenedItem(e.target.value)
    setshowList(false)
  };
  useEffect(() => {
  
  }, [openedItem])
  return (
    
    <>
    <StAll>
      
      <SearchNavbar/>
      <ListOfMenu>
        
        {Datas?.dropMenu?.map((res:any,index:any)=><Button key={index} onClick={(e:any)=>onClick(e)}>
          <li value={res?.value}>{res?.title}</li>
        </Button>)}
      </ListOfMenu>
      <ClickAwayListener onClickAway={onClick}>
      <Box sx={{width:'95%',position:'relative'}}>
        <ItemsList data={Datas?.dropMenu?.find((res:any)=>res?.value===JSON.stringify(openedItem))}/>
        </Box>
</ClickAwayListener>
    </StAll>
    </>
  )
}

export default Navbar
