import React from 'react'
import {Row} from 'antd'
import { AiOutlineInstagram } from 'react-icons/ai'
import { PiBirdThin } from 'react-icons/pi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { StAll } from './style'

const FullFooter = () => {
  return (
    <StAll>
        <div className="large">
            <div className="spans">
                <div className='uls'>
                    <span>stores panel</span>
                    <span>register store</span>
                    <span>stores</span>
                    <span>stores follow</span>
                    </div>
                <div className='uls'>
                    <span>rules</span>
                    <span>about torob</span>
                    <span>contact us</span>
                    <span>offers</span>
                </div>
            </div>
            <div className="signs">

            </div>
        </div>
        
        <div className="small">
            <div className="ul-down">
            Torob, shopping smart search engine
            <Row><span><PiBirdThin/></span>
            <span><BiLogoLinkedin/></span>
            <span><AiOutlineInstagram/></span></Row>
            </div>
            
            <div className="ul-down">
            <button><img src="https://torob.com/static/images/google-play-btn.png" alt="" /></button>
            <button><img src="https://torob.com/static/images/bazaar-badge.png" alt="" /></button>
            <button><img src="https://torob.com/static/svg/myket.svg" alt="" /></button>
            </div>
        </div>
    </StAll>
  )
}

export default FullFooter