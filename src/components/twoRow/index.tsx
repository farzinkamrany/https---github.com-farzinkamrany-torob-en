import React from 'react'
import { StAll } from './style'

const TwoRow = () => {
  return (
    <StAll>
      <div className='topRow'>
        <img src="https://storage3.torob.com/backend-api/upload/qcs/qcsa81l0g0plltgi/4.jpg" alt="" />
        <img src="https://storage3.torob.com/backend-api/upload/ota/otame8p6fzy8biye/3.jpg" alt="" />
      </div>
      <div className='bottomRow'>
        <img src="https://storage3.torob.com/backend-api/upload/mjh/mjhnmf1hwxnjowdk/6.jpg" alt="" />
        <img src="https://storage3.torob.com/backend-api/upload/m7v/m7ve4rmzj5gqetgi/7.jpg" alt="" />
        <img src="https://storage3.torob.com/backend-api/upload/m58/m58hsstar1q17ovs/5.jpg" alt="" />
      </div>
    </StAll>
  )
}

export default TwoRow
