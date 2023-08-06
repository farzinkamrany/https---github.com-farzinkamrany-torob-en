import React,{FC} from 'react'
import {Input, Select} from 'antd'
import {InputStyle} from './style'
import Card from '../card'
import MobileTags from '../mobileTags'
import TwoRow from '../twoRow'
import Slider from '../slider'
import Feeds from '../feeds'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
const HomeNavbar=dynamic(()=>import('../home/homeNavbar'),{ssr:false})
// import HomeNavbar from '../home/homeNavbar'
interface PropTypes{
  data?:any
}
const HomeSearchBox:FC<PropTypes> = ({data}) => {
  const options=[
    {label:'x',value:''},
    {label:'x',value:''},
    {label:'x',value:''},
    {label:'x',value:''},
    {label:'x',value:''},
    {label:'x',value:''},
  ]
  const router=useRouter()
  return (
    <InputStyle>
    <HomeNavbar/>
   <div className="pcImg">
   <img src="https://torob.com/static/images/logo_original.png" alt="" />
   <span>Torob</span>
   </div>
    <div className="imgMobile">
    <img src="https://torob.com/static/images/torob_logo.svg" alt="" />
    </div>
      <Select style={{padding:4}} showSearch placeholder='Enter the product name' options={options} onSelect={()=>{router.push('/browse')}}/>
      <p className='pcP'>Price comparison of millions of products between thousands of stores</p>
      <p className='mobileP'>Most Searched by users</p>
      <div className="mobileView"><br />
      <MobileTags data={data?.homeTags}/>
      <br/>
      {<Feeds data={data?.feeds}/>}
      <br />
      </div>
      <br /><br />

    </InputStyle>
  )
}

export default HomeSearchBox
