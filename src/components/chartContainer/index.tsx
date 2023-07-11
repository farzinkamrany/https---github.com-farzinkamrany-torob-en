import { Button } from 'antd'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { StAll } from './style'
const ChartContainer = () => {
  return (
    <StAll>
      <h2>List of price changes</h2>
      <div className="chart-container">
        <div className="chart">
            chart
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
