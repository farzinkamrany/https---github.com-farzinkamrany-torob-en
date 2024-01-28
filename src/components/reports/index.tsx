import { Button, Input, Modal, Radio } from 'antd'
import React,{FC,useState} from 'react'
import { StAll, StNextPhase } from './style'
import {BiChevronLeft} from 'react-icons/bi'

interface PropTypes{
    oprnModalReport?:any
    setreportModal?:any
}
const Reports:FC<PropTypes> = ({oprnModalReport,setreportModal}) => {
    const [nextPhase, setnextPhase] = useState(false)
    
const { TextArea } = Input;
  return (
    
    <Modal open={oprnModalReport}
    footer={false}
    destroyOnClose
    title="Report a Problem"
    onCancel={()=>setreportModal(false)}>
    <StAll>
        {!nextPhase?<>
        <div className="wrapper">
            <img src="	https://storage5.torob.com/backend-api/base/images/o7/Il/o7IlY8wjdaSSQjr8" alt="" />
            <div className="info">
                <div className="title">
                Digital Plaza
                <small>Tehran</small>
                </div>
                <div className="infos">
                Samsung Galaxy A14 phone with 64GB capacity and 4GB RAM
                </div>
                <div className="price">
                5,198,000 Tomans
                </div>
            </div>
        </div>
        <div className="question">
        What problem did you encounter?
        </div>
        <Radio.Group className="answers">
        <Radio value="0">Radio</Radio>
        <Radio value="1">Radio</Radio>
        <Radio value="2">Radio</Radio>
        <Radio value="3">Radio</Radio>
        </Radio.Group>
        </>:<StNextPhase>
        <p><Button style={{background:'transparent',border:0,boxShadow:'none'}}
        onClick={()=>setnextPhase(false)}><BiChevronLeft />back</Button></p>
        <br />
        <span>your description</span>
        <TextArea showCount/>
        </StNextPhase>}
        <br />
        <Button  
        onClick={()=>setnextPhase(true)}
        style={{width:'30%',background:'#4a90e2' ,color:'#fff'}}>next level</Button>
        

    </StAll>
    </Modal>
  )
}

export default Reports