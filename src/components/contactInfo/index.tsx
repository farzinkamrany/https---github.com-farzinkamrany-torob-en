import { Button } from 'antd'
import React,{FC,useState} from 'react'
import { StAll } from './style'
import { GoLocation } from 'react-icons/go'
import { AiOutlineDown, AiOutlineUp, AiOutlineWhatsApp } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'

interface PropTypes{
    data?:any
    }
const ContactInfo :FC<PropTypes> = ({data}) => {
    const [showContactInfo, setshowContactInfo] = useState(false)
  return (
    <StAll>
      <Button onClick={()=>setshowContactInfo(!showContactInfo)}>
      {data?.button_text}{!showContactInfo?<AiOutlineDown/>:<AiOutlineUp/>}
      </Button>
      <br />
      {showContactInfo&&<div className="contact">
           <div><IoCallOutline/> 09123145212</div>
           <div><AiOutlineWhatsApp/> 09123456789</div>
           <div><GoLocation/> location</div>
      </div>}
    </StAll>
  )
}

export default ContactInfo
