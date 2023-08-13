import { Col, Row } from 'antd'
import React, { FC, useEffect, useState }  from 'react'

interface PropTypes{
    data?:any
  }
const SelectedItem:FC<PropTypes> = ({data})  => {
    const [selected, setselected] = useState('x1')
  return (
    data?.map((res:any,index:any)=>
    <Row key={index} style={{padding:'4px 8px',background:selected===res?.title?'#ecedef':undefined,borderRadius: 4
    ,minHeight: 32,marginTop:4
    }} onClick={()=>setselected(res.title)} justify="space-between">
    <Col>{res?.title}</Col>
    <Col>{res?.desc}</Col>
    </Row>
    )
  )
}

export default SelectedItem