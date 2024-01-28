
"use client"
import React, { useState,useEffect } from 'react'
import { StAll } from './style'
import { Anchor, Button, Image, Modal, Input, Tooltip } from 'antd'
import { AiFillBell, AiFillHeart, AiOutlineBell,AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import {BsShare,BsFlag, BsHeart} from 'react-icons/bs'
import {TiLocation} from 'react-icons/ti'
import BreadCrumb from '../../../components/breadCrumb'
import PriceCard from '../../../components/priceCard'
import InPersonSellers from '../../../components/inPersonSellers'
import ChartContainer from '../../../components/chartContainer'
import Specs from '../../../components/specs'
import ProductSection from '../../../components/productSection'
import Reports from '../../../components/reports'
import Navbar from '../../../components/navbar'
import dynamic from 'next/dynamic';
import CityChanger from '@/components/cityChanger';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import MobileApp from '@/components/mobileApp';
import { Datas } from '@/helpers/datas';
const ProductTitle=dynamic(()=>import('../../../components/productHeader'),{ssr:false})
export default function Product({res}:any){
  const [reportModal, setreportModal] = useState(false)
  const [heart, setheart] = useState(false)
  const [showSlider, setshowSlider] = useState(false)
  const [imageList, setimageList] = useState([])
  const openSlider=(data:any)=>{
    setshowSlider(true)
    setimageList(data)
  }
  useEffect(() => {
    document.title="Torob-Product Details "
  }, [])
  // const [selectCity, setselectCity] = useState(false)
  const [bell, setbell] = useState(false)
  const openReportModal = () => {
    setreportModal(true);
  };
  return (
  <StAll>
    <Navbar/>
<ProductTitle data={Datas?.results}/>
      <div className="details">
        <div className='bread-crumb'>
          <BreadCrumb/>
          
  </div>
        <div className='product-overview'>
      <Image src={Datas?.results?.image_url}alt="" preview={false} onClick={()=>openSlider([])} />
      <div className="price-details">
        <div><h1>{Datas?.results?.name1}</h1></div> 
        <div className='price-tags'>
          <span><b>
          {Datas?.results?.name2}
            </b>
            <p >{Datas?.results?.price_text}</p>
            </span>
          <span><b>
          {Datas?.results?.name2}
            </b>
            <p><a href="#part-1">{Datas?.results?.price_text}</a></p>
            </span>
        </div>
        <div className="price-and-action">
        <div className='price-help'> 
          <Tooltip title="from 10000000 tomans">
            <b style={{display:'inline-block',whiteSpace:'nowrap'}}><Button><a href="#inPerson">From 4,899,000 tomans</a></Button></b></Tooltip>
            </div>
        <div className='actions'>
        <div>
        {bell?<AiFillBell onClick={()=>setbell(!bell)} style={{fill:'rgb(215, 57, 72)'}}/>:<AiOutlineBell  
        onClick={()=>setbell(!bell)}/>}
        {heart?<AiFillHeart style={{fill:'rgb(215, 57, 72)'}}onClick={()=>setheart(!heart)}

        />:<AiOutlineHeart  onClick={()=>setheart(!heart)} />}
        <BsShare/>
        </div>
        <span>
          <BsFlag/>
          <span style={{color:'#333',cursor:'pointer'}}onClick={()=>openReportModal()}>
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
      <MobileApp/>
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
            <CityChanger data={Datas}/>
          </div>
          
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
          <Specs data={Datas.specs}/>
        </div>
        <div className="product-section">
          <ProductSection ProCons={Datas.ProCons}/>
        </div>
      </div>
   <Reports oprnModalReport={reportModal} setreportModal={setreportModal}/>
   <Modal 
   footer={
    <div>
    </div>
   }
   open={showSlider} onCancel={()=>setshowSlider(false)} title=""
   width={1000}
   >
       {<AwesomeSlider style={{    width: '50%',
    margin: '0 auto',
    height: 550}}
    bullets={false}
    >
    <div data-src={Datas?.results?.image_url} />
    <div data-src={Datas?.results?.image_url} />
    <div data-src={Datas?.results?.image_url} />
    <div data-src={Datas?.results?.image_url} />
  </AwesomeSlider>}
   </Modal>
   </StAll>
  )

}

// export async function getServerSideProps() {
//   const res = Datas
//   return { props: { res } }
// }
