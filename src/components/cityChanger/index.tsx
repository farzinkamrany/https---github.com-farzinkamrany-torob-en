import React, { FC,useState } from 'react'
import { Anchor, Button, Image, Modal, Tag } from 'antd'
import { StAll } from './style'
import { TiLocation } from 'react-icons/ti'
import DistrictChanger from './districtChanger'
interface PropTypes{
    data?:any
}
const CityChanger:FC<PropTypes> = ({data}) => {
    const [district, setdistrict] = useState(false)
    const [selectedCity, setselectedCity] = useState<any>()
    const [selectCity, setselectCity] = useState(false)
    
  return (
    <StAll>
        <div style={{display:'flex',flexDirection: 'row',border:'1px solid #f2f3f5',padding:0 }} className="card">
                <TiLocation style={{padding: '5px',
    borderRadius: '12px 0 0 12px',height: '100%',borderRight:'none',fontSize: 32}}/>
                <div style={{display:'flex',flexDirection: 'column',borderRight:'1px solid #ddd',padding: '5px',
    height: '100%',
    borderRadius: '0 0 0 0',borderLeft:'none'}}>
                <b>
                <p style={{}}>tehran and sorrounding cities</p>
                </b>
              <p style={{textAlign: 'left',width: '95%'}}>From 4,899,000 tomans</p>
                </div>
            <div onClick={(e)=>{
              e.preventDefault()
              setselectCity(true)}} className="arrow"  style={{display:'flex',flexDirection: 'column',padding: '5px',
    height: '100%',
    borderRadius: '0 12px 12px 0',borderLeft:'none'}}>
              {" >"}
            </div>
            </div>
              
        <Modal 
        destroyOnClose
   footer={
    <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
    <Button
    onClick={()=>district&&setselectCity(false)}
    style={{color:'#fff',background:'#333',width:'70%'}}>
      confirm
    </Button>
    <Button style={{color:'#333',background:'#fff',width:'30%'}}
    onClick={()=>setselectCity(false)}
    >
      
        cancel
    </Button>
    </div>
   }
   open={selectCity} onCancel={()=>setselectCity(false)} title="select city">
       <DistrictChanger data={data} district={district} setdistrict={setdistrict} />
   </Modal>
    </StAll>
  )
}

export default CityChanger