import { Button, Modal } from 'antd'
import React ,{FC,useState}from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { StAll } from './style'
//var CanvasJSReact = require('@canvasjs/react-charts');
 
interface PropTypes{
chart?:any
}
const ChartContainer:FC<PropTypes> = ({chart}) => {
  const [showModal, setshowModal] = useState(false)
  // const data = chart?.dataSets?.map((res:any)=>
  //   res?.entries?.map((resp:any)=>
  //   // ({
  //   //   // name: 'Page A',
  //   //   uv: 4000,
  //   //   pv: 2400,
  //   //   amt: 2400,
  //   // })
  //   console.log(resp)
  //   ))
  const minimum=chart?.dataSets.entries?.map((res:any)=> ({
    average_price:res?.pv,
    low_price:res?.uv,
  }))
  
  return (
    <StAll>
      <h2>List of price changes</h2>
      <div className="chart-container">
        <div className="chart">
        <LineChart
          width={365}
          height={165}
          data={minimum}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="low_price" stroke="#82ca9d" />
        </LineChart>
       
        </div>
      </div>
       <div className="more">
       <Button onClick={()=>setshowModal(true)}>
            <AiOutlineSearch/>
        </Button>
       </div>
      <Modal open={showModal} 
      footer={false}
      onCancel={()=>setshowModal(false)} 
        width={1000}>
      <LineChart
          width={965}
          height={465}
          data={minimum}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="low_price" stroke="#82ca9d" />
        </LineChart>
      </Modal>
    </StAll>
  )
}

export default ChartContainer
