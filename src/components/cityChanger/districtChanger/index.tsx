import React,{FC, useState} from 'react'
import { Checkbox, Button, Radio, Tag, Input, Row } from 'antd'
import { MdSelectAll } from 'react-icons/md'
import { StAll } from './style'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
interface PropTypes{
    data?:any
    district?:any
    setdistrict?:any
}
const DistrictChanger:FC<PropTypes> = ({data,district,setdistrict}) => {
    const [tags, settags] = useState<any>({})
  return (
    <StAll>
    <div className="tags">
    <Tag closeIcon>
   {tags?.name??''}
</Tag>
    <Row justify="center" style={{width:'95%',margin:'auto'}}>
    <Input placeholder="search for city to select" prefix={<AiOutlineSearch/>}/>
    </Row>
     <br />
    </div>
        {/* <div className="cities"> */}
     <div className="cities-container">
     <hr />
     <h2>Popular cities</h2>
     {!district?data?.cities?.map((res:any)=><div onClick={()=>setdistrict(true)} className="cities" key={res?.id}>
         <span>{res?.name}</span>
         <Button><AiOutlineArrowRight/></Button>
     </div>):null}
     <br />
     {district&&
     <Radio.Group >
         <div onClick={()=>setdistrict(false)}><AiOutlineArrowLeft /></div>
     {data.districts?.map((res:any)=><div className="districts" key={res?.id}>
         <Radio onClick={()=>settags(res)} value={res?.id}>{res?.name}</Radio>
     </div>)}
     </Radio.Group>}
   
     </div>
    {/* </div> */}
    </StAll>
  )
}

export default DistrictChanger