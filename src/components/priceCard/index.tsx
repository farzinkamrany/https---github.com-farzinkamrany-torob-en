import React,{FC,useState} from 'react'
import { StAll } from './style'
import {BsFlag} from 'react-icons/bs'
import { Button, Dropdown, MenuProps } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

interface PropTypes{
  data?:any
  }
const PriceCard :FC<PropTypes> = ({data}) => {
  const [showAll, setshowAll] = useState<number>(3)
    const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
    //   icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];
  return (
    <StAll>
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
                             padding:' 8px'}}>★{res?.score_info?.score} {res?.score_info?.score_text}</span>
                         <div className='report'>
                             <b>report</b>
                           <BsFlag/>
                         </div>
                         </div>
                     <a href="">{res?.address}</a>
                     <a href="">{res?.name2}</a>
                     <div>
                         dropdown
                     </div>
 
             </div></div>
             <div className='shopping'>
                 <a href="">
                 <p>{res?.price_string}</p>
                 </a>
                 <a href="">
                     <div>
                             <Button>
                                 {res?.button_text}
                             </Button>
                     </div>
                     <div className='update-details'>
                         <p>The last price change in the store: {res?.last_price_change_date}</p>
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
