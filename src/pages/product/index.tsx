
import React, { useState } from 'react'
import Navbar from '@/components/navbar'
import SearchNavbar from '@/components/searchNavbar'
import { StAll } from './style'
import { Breadcrumb, Tabs, TabsProps, Tooltip } from 'antd'
import { AiOutlineBell,AiOutlineHeart } from 'react-icons/ai';
import {BsShare,BsFlag} from 'react-icons/bs'
import PriceCard from '@/components/priceCard'
const Product = () => {
  const [onlineCounter, setonlineCounter] = useState(1234)
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `online shopping ${onlineCounter}`,
      children:<PriceCard/>,
    },
    {
      key: '2',
      label: `buy in person ${onlineCounter}`,
      children: `Content of Tab Pane 2`,
    },
  ];
  return (
  <StAll>
      <SearchNavbar/>
    
    <Navbar/>
      <div className="details">
        <div>
          <br />
    <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  /></div>
        <div className='product-overview'>
      <img src="https://storage5.torob.com/backend-api/base/images/o7/Il/o7IlY8wjdaSSQjr8_/216x216.jpg" alt="" />
      <div className="price-details">
        <div><h1>Samsung A14 phone Samsung Galaxy A14 64/4 GB memory 64 RAM 4 GB</h1></div>
        <div className='price-tags'>
          <span><b>
          64 GB - 4 GB
            </b>
            <p>From 4,899,000 tomans</p>
            </span>
          <span><b>
          64 GB - 4 GB
            </b>
            <p>From 4,899,000 tomans</p>
            </span>
        </div>
        <div className='price-help'> 
          <Tooltip title="price from 10000000 tomans">
            <b>price from 10000000 tomans</b></Tooltip>
            </div>
        <div className='actions'>
        <AiOutlineBell/>
        <AiOutlineHeart/>
        <BsShare/>
        <span>
          <BsFlag/>
          report
        </span>
        </div>
        <div className='seller'>
            <div className="red">

              <div><b>Buy from mobile 140</b>
              <br />
              <b>5,099,000 Tomans</b>
              <br />
              </div>
              <div><span>advertising</span></div>
            </div>

        </div>
      </div>
        </div>
        <div className='sellers'>
          <div className="title">
            <h3>sellers</h3>
           <a href=""> safe shopping guides</a>
          </div>
          <div className="cards">
            <div className="active-card">
              <b>all of iran</b>
              <p>From 4,899,000 tomans</p>
            </div>
            <div className="card">
              <b>tehran and sorrounding cities</b>
              <p>From 4,899,000 tomans</p>
            </div>
          </div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          <div>
            
          </div>
        </div>
        <div>

        </div>
        <h2>Similar Products
</h2>
        <div></div>
        <div></div>
      </div>
    </StAll>
  )
}

export default Product
