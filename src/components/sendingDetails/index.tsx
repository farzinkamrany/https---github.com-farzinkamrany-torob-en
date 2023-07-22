import React, { useState } from 'react'
import { StAll } from './style'
import { Button } from 'antd'
import { AiOutlineDown } from 'react-icons/ai'

const SendingDetails = () => {
  const [showSendDetails, setshowSendDetails] = useState(false)
  return (
    <StAll>
        
        <Button className='showBtn' onClick={()=>setshowSendDetails(!showSendDetails)}>

Instant delivery
<AiOutlineDown/>
                      </Button>
       {showSendDetails&&<div className="send-details">
                              <p>Possibility of delivery on the same day for Tehran with coordination</p>
                              <p>Shipping methods
                                <br />
                                <div className="features">
                                <span className="tags">
                                Private postal companies such as Tipax
                                </span>
                                <span className="tags">
                                Online access
                                </span>
                                <span className="tags">Intra-city or extra-city freight
                                </span>
                                <span className="tags">
                                Pack
                                </span>
                                <span className="tags">
                                Express mail
                                </span>
                                <span className="tags">
                                Certified mail
                                </span>
                                </div>
                              </p>
                              <p>
        <Button >
                      store profile
                      </Button></p>
                            </div>}
    </StAll>
  )
}

export default SendingDetails
