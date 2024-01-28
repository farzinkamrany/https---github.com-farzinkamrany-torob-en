import React,{FC,useState} from 'react'
import { StAll } from './style'
import { Button ,Drawer} from 'antd'
import { BsFlag } from 'react-icons/bs'
import SendingDetails from '../sendingDetails'
import ContactInfo from '../contactInfo'
import RatingDetail from '../ratingDetail'

interface PropTypes{
    data?:any
    }
const InPersonSellers:FC<PropTypes> = ({data}) => {
    const [showAll, setshowAll] = useState<number>(3)
    const [mobileShow, setmobileShow] = useState(false)
  return (
    <StAll>
   {data?.sellers?.inPerson?.map((res:any,index:any)=>
   <div key={index} className="list-of-cards">
        <div className="card">
           <div className="detailss">
           <div className="div"><div className='card-location'>
                <b>{res?.shop_name}</b>
                <small>
                    {res?.shop_name2}
                </small>
            </div>
            <div className='delivery'>
                        <div className='garranty'>
                        
                        <RatingDetail res={res}/>
                        </div>
                    <a href="">{res?.address}</a>
                    <a href="">{res?.name2}</a>
                    {/* <div className='sending'>
                        
                    <SendingDetails/>
                    </div> */}

            </div>
            </div>
            <div className='shopping'>
                <b>{res?.price_string}</b>
                 {/* <div className='update-details-mobile'>
                         <p><span>The last price change in the store:</span> {res?.last_price_change_date}</p>
                     </div> */}
                                <ContactInfo data={res}/>
            </div>
           </div>
                    <div className='update-details'>
                        <p><span>The last price change in the store: </span>{res?.last_price_change_date}</p>
                    </div>
        </div>
    </div>)?.slice(0,showAll)}
        <div className="all-sellers">
            <Button className="pcBtn" onClick={()=>setshowAll(data?.sellers?.inPerson?.length)}> 
                show all {data?.sellers?.inPerson?.length} stores
            </Button>
                <Button className="mobileBtn" onClick={()=>{
                setmobileShow(true)
                }}>
                    show all {data?.sellers?.inPerson?.length} stores
                </Button>

        </div>
        
        <Drawer 
            style={{padding:0}}
            open={mobileShow} onClose={()=>setmobileShow(false)}>
           <StAll>
           {data?.sellers?.inPerson?.map((res:any,index:any)=>
         <div key={index} className="list-of-cards">
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
                         <SendingDetails  data={data}/>
                     </div>
 
             </div>
             </div>
             <div className='shopping'>
                 <a href="">
                 <b>{res?.price_string}</b>
                 
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
     </div>)}
           </StAll>
            </Drawer>
</StAll>
  )
}

export default InPersonSellers
