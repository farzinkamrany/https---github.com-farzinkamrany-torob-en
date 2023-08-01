import React, { useState } from 'react'
import { ListOfMenu, StAll } from './style'
import { Button, Dropdown, MenuProps } from 'antd'
import SearchBox from '../searchBox'
import SearchNavbar from '../searchNavbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ItemsList from '../itemsList'
import { Datas } from '@/helpers/datas'

const Navbar = () => {
 
  const router=useRouter()
  const [showList, setshowList] = useState(false)
  const [openedItem, setopenedItem] = useState<string>('')
console.log(openedItem)
  const onClick= (e:any) => {
    setshowList((prev)=>!prev)
    setopenedItem(e.target.value)
    console.log(e.target.value)
  };
  console.log(Datas?.dropMenu?.find((res:any)=>res?.value===JSON.stringify(openedItem)))
  return (
    
    <>
    <StAll>
      
      <SearchNavbar/>
      <ListOfMenu>
        
        {Datas?.dropMenu?.map((res:any)=><Button onClick={(e)=>onClick(e)}>
          <li value={res?.value}>{res?.title}</li>
        </Button>)}
      </ListOfMenu>
    {showList&&<ItemsList data={Datas?.dropMenu?.find((res:any)=>res?.value===JSON.stringify(openedItem))}/>}
    </StAll>
    </>
  )
}

export default Navbar
