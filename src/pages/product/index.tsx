
import React, { useState } from 'react'
import Navbar from '@/components/navbar'
import { StAll } from './style'
import { Button, Tabs, TabsProps, Tooltip } from 'antd'
import { AiOutlineBell,AiOutlineHeart } from 'react-icons/ai';
import {BsShare,BsFlag} from 'react-icons/bs'
import {TiLocation} from 'react-icons/ti'
import PriceCard from '@/components/priceCard'
import ChartContainer from '@/components/chartContainer'
import Specs from '@/components/specs'
import ProductSection from '@/components/productSection'
import InPersonSellers from '@/components/inPersonSellers'
import SubMenu from '@/components/subMenu';
import SearchNavbar from '@/components/searchNavbar';
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
        <div className='bread-crumb'>
          <br />
  </div>
      <div className="details">
        <div className='product-overview'>
      <img src="https://storage5.torob.com/backend-api/base/images/o7/Il/o7IlY8wjdaSSQjr8_/216x216.jpg" alt="" />
      <div className="price-details">
        <div><h1>Samsung A14 phone Samsung Galaxy A14 64/4 GB memory 64 RAM 4 GB</h1></div>
        <div className='price-tags'>
          <span><b>
          64 GB - 4 GB
            </b>
            <p >From 4,899,000 tomans</p>
            </span>
          <span><b>
          64 GB - 4 GB
            </b>
            <p>From 4,899,000 tomans</p>
            </span>
        </div>
        <div className="price-and-action">
        <div className='price-help'> 
          <Tooltip title="from 10000000 tomans">
            <b style={{display:'inline-block',whiteSpace:'nowrap'}}>from 10000000 tomans</b></Tooltip>
            </div>
        <div className='actions'>
        <div>
        <AiOutlineBell/>
        <AiOutlineHeart/>
        <BsShare/>
        </div>
        <span>
          <BsFlag/>
          <span style={{color:'#333'}}>report</span>
        </span>
        </div>
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
        <div className="mobile-app">
          <div className='installer'>
        <div>you want app on your phone?</div>
        <div><Button>yes, install it</Button></div>
        <div><Button>No</Button></div>
          </div>
          <div>
            logo
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
            <div style={{display:'flex'}} className="card">
                <b>
                <div>
                <TiLocation/>
                <p>tehran and sorrounding cities</p>
                </div>
                </b>
              <p>From 4,899,000 tomans</p>
            </div>
          </div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>

        <div className='in-person'> 
        <InPersonSellers/>
        </div>
          <div className='chart-items'>
          <ChartContainer/>
          </div>
        <div className='specs'>
          <Specs/>
        </div>
        <div className="product-section">
          <ProductSection/>
        </div>
      </div>
    <SubMenu/>
    </StAll>
  )
}

export default Product
