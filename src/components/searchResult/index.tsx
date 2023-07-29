import React from 'react'
import { StAll, StCardContainer, StHeader, StMobileHeader } from './style'
import Card from '../card'
import Sidebar from '../sidebar'
import { Button, Col, Dropdown, MenuProps, Tag } from 'antd'
import SearchNavbar from '../searchNavbar'
import BreadCrumb from '../breadCrumb'
import { GoLocation } from 'react-icons/go';
import { Datas } from '../../helpers/datas';
import { AiOutlineDown } from 'react-icons/ai';

const SearchResult = () => {
    const items: MenuProps['items'] = [
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
  <div className='dropdownFilter'>
        <Button >
          <li>ordering</li></Button>
        <Button>
          <li>price</li></Button>
        <Button>
          <li>inventory</li></Button>
  </div>
    <div className='tags'>
    <h3>More Detailed classifications</h3>
    <Button><Tag/></Button>
  <Button><Tag/></Button>
  <Button><Tag/></Button>
  
  <Button><Tag/></Button>
  <Button><Tag/></Button>
  <Button><Tag/></Button>
  </div>
  {/* <div className='cards'>
    <div className="cards">1</div>
    <div className="cards">2</div>
    <div className="cards">3</div>
  </div> */}
  
  <div className='shoppers'>  
    <Button><GoLocation/>online shopping</Button>
    <Button><GoLocation/>in-person</Button>
  </div>
  </StMobileHeader>
  <br />
  <hr />
  <h2>List Of Products</h2>
      <StCardContainer>
      {Datas?.listOfProducts?.map((res:any)=><Card data={res}/>)}
      </StCardContainer>
      </Col>
    </StAll>
  )
}

export default SearchResult
