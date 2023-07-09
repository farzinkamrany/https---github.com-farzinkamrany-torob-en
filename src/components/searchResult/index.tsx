import React from 'react'
import { StAll, StCardContainer } from './style'
import Card from '../card'
import Sidebar from '../sidebar'
import { Dropdown, MenuProps } from 'antd'
import SearchNavbar from '../searchNavbar'

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
         <div> <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
        <span>sort</span>
    </a>
  </Dropdown></div>
  <br />
  <hr />
      <StCardContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </StCardContainer>
    </StAll>
  )
}

export default SearchResult
