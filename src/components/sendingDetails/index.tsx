import React, {FC, useState } from 'react'
import { StAll } from './style'
import { Button, Modal } from 'antd'
import { AiOutlineDown } from 'react-icons/ai'
import DistrictChanger from '../cityChanger/districtChanger'

interface PropTypes{
  data?:any
  }
const SendingDetails:FC<PropTypes> = ({data}) => {
  const [showSendDetails, setshowSendDetails] = useState(false)
  return (
    <StAll>
        
        <Button className='showBtn' onClick={()=>setshowSendDetails(!showSendDetails)}>

Instant delivery
<AiOutlineDown/>
                      </Button>
       {/* {showSendDetails&&
       <div className="send-details">
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
                            </div>
                            } */}
                            <Modal 
        destroyOnClose
   footer={
    <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
    <Button
    style={{color:'#fff',background:'#333',width:'70%'}}>
      confirm
    </Button>
    <Button style={{color:'#333',background:'#fff',width:'30%'}}
    onClick={()=>setshowSendDetails(false)}
    >
      
        cancel
    </Button>
    </div>
   }
   open={showSendDetails} onCancel={()=>setshowSendDetails(false)} title="select city">
       <DistrictChanger data={data} />
   </Modal>
    </StAll>
  )
}

export default SendingDetails
