import React,{FC,useState} from 'react'
import { StAll } from './style'
import {BsFlag} from 'react-icons/bs'
import { Anchor, Button, Dropdown, MenuProps } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import SendingDetails from '../sendingDetails';

interface PropTypes{
  data?:any
  }
const PriceCard :FC<PropTypes> = ({data}) => {
  const [showAll, setshowAll] = useState<number>(3)
console.log(data)
  return (
    <StAll>
      
  <div style={{     width:' 100%' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'online sellers ('+data?.sellers?.online?.length+")",
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'in-person sellers('+data?.sellers?.inPerson?.length+")",
          }
        ]}
      />
    </div>
       {data?.sellers?.online?.map((res:any)=>
         <div className="list-of-cards">
         <div className="card">
             <div className="div"><div className='card-location'>
                 <b>{res?.shop_name}</b>
                 <small>
                     {res?.shop_name2}
                 </small>
             </div>
             <div className='delivery'>
                         <div className='garranty'>
                         <span style={{background:res?.score_info?.score_background_color,
                             whiteSpace: "nowrap",
                             fontSize: '14px',
                             padding:' 8px'}}>{res?.score_info?.score_text}</span>
                         <div className='report'>
                             <b>report</b>
                           <BsFlag/>
                         </div>
                         </div>
                     <a href="">{res?.address}</a>
                     <a href="">{res?.name2}</a>
                     <div>
                         <SendingDetails/>
                     </div>
 
             </div>
             </div>
             <div className='shopping'>
                 <a href="">
                 <b>{res?.price_string}</b>
                 
                 <div className='update-details-mobile'>
                         <p><span>The last price change in the store:</span> {res?.last_price_change_date}</p>
                     </div>
                 </a>
                 <a href="">
                           <Button>
                                 {res?.button_text}
                             </Button>
                     <div className='update-details'>
                         <p><span>The last price change in the store:</span> {res?.last_price_change_date}</p>
                     </div>
                 </a>
             </div>
         </div>
     </div>)?.slice(0,showAll)}
            <div className="all-sellers">
                <Button onClick={()=>setshowAll(data?.sellers?.online?.length)}>
                    show all {data?.sellers?.online?.length} stores
                </Button>
            </div>
    </StAll>
  )
}

export default PriceCard
