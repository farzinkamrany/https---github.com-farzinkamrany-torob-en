import { Button } from 'antd'
import React ,{FC}from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { StAll } from './style'
//var CanvasJSReact = require('@canvasjs/react-charts');
 
interface PropTypes{
chart?:any
}
const ChartContainer:FC<PropTypes> = ({chart}) => {
  
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
    pv:res?.pv,
   uv:res?.uv,
  }))
  console.log(minimum)
  
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
       
        </div>
       <div className="more">
       <Button>
            <AiOutlineSearch/>
        </Button>
       </div>
      </div>
    </StAll>
  )
}

export default ChartContainer
