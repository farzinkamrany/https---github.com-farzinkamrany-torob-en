
"use client"
import React, { useState } from 'react'
import { StAll } from './style'
import { Anchor, Button, Image, Modal, Tabs, Tooltip } from 'antd'
import { AiOutlineBell,AiOutlineHeart } from 'react-icons/ai';
import {BsShare,BsFlag} from 'react-icons/bs'
import {TiLocation} from 'react-icons/ti'
import ProductTitle from '../../components/productHeader'
import BreadCrumb from '../../components/breadCrumb'
import PriceCard from '../../components/priceCard'
import InPersonSellers from '../../components/inPersonSellers'
import ChartContainer from '../../components/chartContainer'
import Specs from '../../components/specs'
import ProductSection from '../../components/productSection'
import Reports from '../../components/reports'
import Navbar from '../../components/navbar';
import { Datas } from '../../helpers/datas';
const Product = ({res}:any) => {
  const [onlineCounter, setonlineCounter] = useState(1234)
  const [reportModal, setreportModal] = useState(false)
  const openReportModal = () => {
    setreportModal(true);
  };
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
        <AiOutlineBell style={{color:'#ff3333'}}/>
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
        <div className='btns'><Button className='yes' style={{background:'linear-gradient(180deg,#f04151,#d73948)',color:'#fff'}}>yes, install it</Button>
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
            <div style={{display:'flex',flexDirection: 'row'}} className="card">
                <TiLocation style={{padding: '5px',border:' 1px solid #f2f3f5',
    borderRadius: '12px 0 0 12px',height: '100%',borderRight:'none'}}/>
                <div style={{display:'flex',flexDirection: 'column',borderRight:'1px solid ',padding: '5px',border:' 1px solid #f2f3f5',
    height: '100%',
    borderRadius: '0 0 0 0',borderLeft:'none'}}>
                <b>
                <p style={{}}>tehran and sorrounding cities</p>
                </b>
              <p style={{textAlign: 'left',width: '95%'}}>From 4,899,000 tomans</p>
                </div>
            <div className="arrow"  style={{display:'flex',flexDirection: 'column',borderRight:'1px solid ',padding: '5px',border:' 1px solid #f2f3f5',
    height: '100%',
    borderRadius: '0 12px 12px 0',borderLeft:'none'}}>
              {" >"}
            </div>
            </div>
          </div>
          {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
          {/* <div className="navigateSellers">
            <Button><a href="#onlineSellers">online sellers</a></Button>
            <Button><a href="#inPerson">in person</a></Button>
          </div> */}
          
        <div className='in-person' id="part-1" style={{marginTop:10}}> 
        
  <div  id="onlineSellers part-1"><PriceCard data={Datas}/></div>
  <br />
       <div id="part-2"> <InPersonSellers data={Datas}/></div>
        </div>
        </div>
{/* <div className="onlineShopping"id="onlineSellers">
</div> */}
          <div className='chart-items '>
          <ChartContainer chart={Datas?.chart}/>
          </div>
        <div className='specs'>
          <Specs/>
        </div>
        <div className="product-section">
          <ProductSection ProCons={Datas.ProCons}/>
        </div>
      </div>
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
