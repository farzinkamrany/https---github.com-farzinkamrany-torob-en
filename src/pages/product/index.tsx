
import React, { useState } from 'react'
import Navbar from '@/components/navbar'
import { StAll } from './style'
import { Button, Image, Modal, Tabs, TabsProps, Tooltip } from 'antd'
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
import BreadCrumb from '@/components/breadCrumb';
import ProductTitle from '@/components/productHeader';
import Reports from '@/components/reports';
import { Datas } from '@/helpers/datas';
const Product = ({res}:any) => {
  const [onlineCounter, setonlineCounter] = useState(1234)
  const [reportModal, setreportModal] = useState(false)
  const openReportModal = () => {
    setreportModal(true);
  };
  const results:any=Datas
  console.log(results)
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
    {/* <SearchNavbar/> */}
    <Navbar/>
          <br />
          <br />
        <div className='bread-crumb'>
          <BreadCrumb/>
          
  </div>
<ProductTitle/>
      <div className="details">
        <div className='product-overview'>
      <Image src={Datas?.results?.image_url}alt="" />
      <div className="price-details">
        <div><h1>{Datas?.results?.name1}</h1></div>
        <div className='price-tags'>
          <span><b>
          {Datas?.results?.name2}
            </b>
            <p >{Datas?.results?.price_text}</p>
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
            <b style={{display:'inline-block',whiteSpace:'nowrap'}}><Button><a href="#inPerson">From 4,899,000 tomans</a></Button></b></Tooltip>
            </div>
        <div className='actions'>
        <div>
        <AiOutlineBell/>
        <AiOutlineHeart/>
        <BsShare/>
        </div>
        <span>
          <BsFlag/>
          <span style={{color:'#333'}}onClick={()=>openReportModal()}>
            report
          </span>
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
        <div className='question'>you want app on your phone?</div>
        <br />
        <div><Button className='yes' style={{background:'linear-gradient(180deg,#f04151,#d73948)',color:'#fff'}}>yes, install it</Button>
        <Button className='no'>No</Button></div>
          </div>
          <div className='logo'>
            <Image src="	https://torob.com/static/images/bordered_logo.svg" alt="" />
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
          {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
          <div className="navigateSellers">
            <Button><a href="#onlineSellers">online sellers</a></Button>
            <Button><a href="#inPerson">in person</a></Button>
          </div>
        </div>
{/* <div className="onlineShopping"id="onlineSellers">
</div> */}
        <div className='in-person' id="inPerson"> 
        
  <div id="onlineSellers"><PriceCard data={Datas}/></div>
  <br />
        <InPersonSellers data={Datas}/>
        </div>
          <div className='chart-items'>
          <ChartContainer chart={Datas?.chart}/>
          </div>
        <div className='specs'>
          <Specs/>
        </div>
        <div className="product-section">
          <ProductSection ProCons={Datas.ProCons}/>
        </div>
      </div>
    <SubMenu/>
   <Reports oprnModalReport={reportModal} setreportModal={setreportModal}/>
   </StAll>
  )
}

export default Product
export async function getServerSideProps() {
  // Fetch data from external API
  const res = Datas
  // Pass data to the page via props
  return { props: { res } }
}