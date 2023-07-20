import React from 'react'
import { StAll, StCardContainer, StHeader, StMobileHeader } from './style'
import Card from '../card'
import Sidebar from '../sidebar'
import { Button, Col, Dropdown, MenuProps } from 'antd'
import SearchNavbar from '../searchNavbar'
import BreadCrumb from '../breadCrumb'

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
        <br />
        
  <Sidebar/>
        <Col>
        <StHeader>
          <BreadCrumb/>
           <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
        <span>sort</span>
    </a>
  </Dropdown>
  </StHeader>
  <StMobileHeader>
  <div className='dropdownFilter'>
    <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
  </div>
    <div className='tags'>
    <h3>title</h3>
    <div> </div>
  </div>
  {/* <div className='cards'>
    <div className="cards">1</div>
    <div className="cards">2</div>
    <div className="cards">3</div>
  </div> */}
  
  <div className='shoppers'>  
    <Button>online shopping</Button>
    <Button>in-person</Button>
  </div>
  </StMobileHeader>
  <br />
  <hr />
  <h2>List Of Products</h2>
      <StCardContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </StCardContainer></Col>
    </StAll>
  )
}

export default SearchResult
