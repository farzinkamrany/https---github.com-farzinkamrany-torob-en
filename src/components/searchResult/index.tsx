import React, { FC, useEffect, useState } from 'react'
import { StAll, StCardContainer, StHeader, StMobileHeader } from './style'
import Card from '../card'
import Sidebar from '../sidebar'
import { Button, Checkbox, Col, Collapse, Drawer, Dropdown, Input, MenuProps, Row, Tag } from 'antd'
import BreadCrumb from '../breadCrumb'
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import SelectedItem from '../selectedItem'
interface PropTypes{
  data?:any
}
const SearchResult:FC<PropTypes> = ({data}) => {
  const [nextPage, setnextPage] = useState<number>(10)
  const [openDrawer, setopenDrawer] = useState(false)
  const [filterType, setfilterType] = useState(1)
  const [drawerLabel, setdrawerLabel] = useState('')
  const onClick=(data:any,label:any)=>{
    setopenDrawer(true)
    setfilterType(data)
    setdrawerLabel(label)
  }


    const items:any = [
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              most popular
            </a>
          ),
          key: '0',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              cheapest
            </a>
          ),
          key: '2',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              most expensive
            </a>
          ),
          key: '3',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              the newest
            </a>
          ),
          key: '4',
        },
      ];

      // useEffect(() => {
      //   setnextPage((prev:any)=>prev+10)
      // }, [nextPage<data?.listOfProducts.length])
      
      const handleNext=()=>{
        // console.log(23)
        setnextPage((prev:any)=>prev+7)
      }
      useEffect(() => {

        nextPage<=data?.listOfProducts.length&&setTimeout(()=>window.addEventListener("scroll", handleNext),200);
    
        return () => {
          window.removeEventListener("scroll", handleNext);
        };
      }, [nextPage]);
  return (
    <StAll>  
        {/* <SearchNavbar/> */}
  <Sidebar/>
        <Col>
        <StHeader>
          <BreadCrumb/>
           <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
        <span>sort by<AiOutlineDown/></span>
    </a>
  </Dropdown>
  </StHeader>
  <StMobileHeader>
    <Row style={{marginTop:30,width:'100%'}} justify="center">
      
    <Input.Search placeholder='search item to find' />
    <br />
    </Row>
  <div className='dropdownFilter'>
        <Button onClick={(e)=>onClick(1,'ordering')}>
          <li>ordering <AiOutlineDown/></li></Button>
        <Button onClick={(e)=>onClick(2,'price')}>
          <li>price <AiOutlineDown/></li></Button>
        <Button onClick={(e)=>onClick(3,'inventory')}>
          <li>inventory <AiOutlineDown/></li></Button>
  </div>
    <div className='tags'>
    <h3>More Detailed classifications</h3>
    {data?.specs?.map((res:any)=><Button><>{res?.title}</></Button>)}
  </div>
  
  
  </StMobileHeader>
  <h2>List Of Products</h2>
    <div className="shopper">
    <span><MdLocationOn style={{fill: 'rgb(215, 57, 72)'}}/>online shopping</span>
    <span><MdLocationOn style={{fill: 'rgb(52, 104, 204)'}}/>in-person</span>
    </div>
      <StCardContainer>
  {data?.listOfProducts?.slice(0,nextPage).map((res:any)=><Card data={res}/>)}
      </StCardContainer>
      
      </Col>
      <Drawer
      open={openDrawer}
      title={drawerLabel}
      onClose={()=>setopenDrawer(false)}
      destroyOnClose
      footer={
        <>
        <Button
        onClick={()=>setopenDrawer(false)}
        style={{width:'72%',background:'#333',color:'#fff',marginRight:'2%'}}>Confirm

        </Button>
        <Button   onClick={()=>setopenDrawer(false)}>
          remove
        </Button>
        </>
      }
      >
        {filterType===1?
        <>
<Input style={{height:40,marginRight:15,marginBottom:15}} prefix={<AiOutlineSearch/>} placeholder=''/>
          
          <SelectedItem data={data.specs}/>
        </>:
        filterType===2?
        <>
        <Row><Input style={{height:40,width:'80%',marginRight:15,marginBottom:15}} prefix={'from'} placeholder=''/>toman</Row>
        <Row><Input  style={{height:40,width:'80%',marginRight:15}}  prefix={'to'} placeholder=''/>toman</Row>
        </>:
        <>
        <Checkbox>
        show all exists
        </Checkbox>
        </>
      }
      </Drawer>
    </StAll>
  )
}

export default SearchResult
