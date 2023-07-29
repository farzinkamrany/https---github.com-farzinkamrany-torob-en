import React, { useState } from 'react'
import { ListOfMenu, StAll } from './style'
import { Button, Dropdown, MenuProps } from 'antd'
import SearchBox from '../searchBox'
import SearchNavbar from '../searchNavbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ItemsList from '../itemsList'

const Navbar = () => {
 
  const router=useRouter()
  const [showList, setshowList] = useState(false)
  const [openedItem, setopenedItem] = useState<string>('')

  const onClick= (e:any) => {
    setshowList(e.target.value===openedItem?false:true)
    setopenedItem(e.target.value)
    console.log(e.target.value)
  };
  console.log(openedItem)
  return (
    
    <>
    <StAll>
      
      <SearchNavbar/>
      <ListOfMenu>
        <Button onClick={(e)=>onClick(e)}>
          <li value='1'>Mobile and digital goods</li>
        </Button>

        <Button onClick={(e)=>onClick(e)}>
          <li value='2'>Laptop, computer, office</li></Button>

        <Button onClick={(e)=>onClick(e)}>
          <li value='3'>Hypermarket</li></Button>

        <Button onClick={(e)=>onClick(e)}>
          <li value='4'>Home Appliances</li></Button>
          
        <Button onClick={(e)=>onClick(e)}>
          <li value='5'>Fashion and clothing</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='6' >Beauty and health</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='7'>Video and Audio</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='8'>Cars and other vehicles</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='9'>sport and entertainment</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='10'>Health and medicine</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='11'>Artistic culture</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='12'>child and baby</li></Button>
        <Button onClick={(e)=>onClick(e)}>
          <li value='13'>Other categories</li></Button>
      </ListOfMenu>
    {showList&&<ItemsList/>}
    </StAll>
    </>
  )
}

export default Navbar
