import { Button } from 'antd'
import React, { FC, useState } from 'react'
import { BsFlag } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { StAll } from './style'

interface PropTypes{
    res?:any
    }
const RatingDetail:FC<PropTypes> = ({res}) => {
    const [showInfo, setshowInfo] = useState(false)
  return (
    <StAll className='info'>
                         <div className="info-container">
                          <span  style={{
                             whiteSpace: "nowrap",
                             fontSize: '14px',
                             padding:' 5px'}}>
                              <p onClick={()=>setshowInfo(!showInfo)} style={{background:res?.score_info?.score_background_color}}>
                                {!showInfo?<span>{res?.score_info?.score_text}<IoIosArrowDown/></span>:<IoIosArrowUp/>}
                                </p>
                         <div className='report'>
                             <span>report</span>
                           <BsFlag/>
                         </div></span>
                              </div>{showInfo&& 
                             <div className="moreInfo">
                              <div></div>
                              <div>About 3000 to 4000 orders in the last 90 days of activity in Tarb</div>
                              <div>24 users have tracked their order through Torb.</div>
                              <div>
                              <Button>How to evaluate the store</Button>
                              <Button>Store profile</Button>
                              </div>
                             </div>  }
                             
                            
                         </StAll>
  )
}

export default RatingDetail