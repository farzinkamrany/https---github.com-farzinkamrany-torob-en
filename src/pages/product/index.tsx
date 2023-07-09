
import React from 'react'
import Navbar from '@/components/navbar'
import SearchNavbar from '@/components/searchNavbar'
import { StAll } from './style'
import { Breadcrumb } from 'antd'

const Product = () => {
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
        <div></div>
        <div></div>
        <div></div>
      </div>
        </div>
        <div></div>
        <div></div>
        <h2>محصولات مشابه
</h2>
        <div></div>
        <div></div>
      </div>
    </StAll>
  )
}

export default Product
