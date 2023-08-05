import React, { FC, useEffect, useState } from 'react'
import { StAll, StCardContainer, StHeader, StMobileHeader } from './style'
import Card from '../card'
import Sidebar from '../sidebar'
import { Button, Col, Dropdown, MenuProps, Tag } from 'antd'
import BreadCrumb from '../breadCrumb'
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
interface PropTypes{
  data?:any
}
const SearchResult:FC<PropTypes> = ({data}) => {
  const [nextPage, setnextPage] = useState<number>(7)
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
  
  <div className='mobileShoppers'>  
    <Button><MdLocationOn/>online shopping</Button>
    <Button><MdLocationOn/>in-person</Button>
  </div>
  </StMobileHeader>
  <h2>List Of Products</h2>
    <div className="shopper">
    <span><MdLocationOn style={{fill: 'rgb(215, 57, 72)'}}/>online shopping</span>
    <span><MdLocationOn style={{fill: 'rgb(52, 104, 204)'}}/>in-person</span>
    </div>
      <StCardContainer>
      {/* {data?.listOfProducts?.map((res:any)=><Card data={res}/>)} */}
      {/* <InfiniteScroll
  dataLength={(data?.listOfProducts)?.length} //This is important field to render the next data
  next={handleNext}
  hasMore={nextPage<data?.listOfProducts?.length?true:false}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  // refreshFunction={this.refresh}
  // pullDownToRefresh
  // pullDownToRefreshContent={
  //   <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
  // }
  // releaseToRefreshContent={
  //   <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
  // }
  > */}
  {/* <ReactScrolla
  percentage={85}
  onPercentage={handleNext}
> */}
  {/* <div style={{ width: 1000, height: '60vh'}}> */}
  {data?.listOfProducts?.slice(0,nextPage).map((res:any)=><Card data={res}/>)}
        {/* </div> */}
      {/* </ReactScrolla> */}
{/* </InfiniteScroll> */}
      </StCardContainer>
      
      </Col>
    </StAll>
  )
}

export default SearchResult
